import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { operation, table, data, criteria } = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log(`Performing ${operation} on table: ${table}`);

    switch (operation) {
      case 'bulk_insert': {
        if (!data || !Array.isArray(data)) {
          throw new Error('Data array is required for bulk insert');
        }

        // Insert in batches to handle large datasets
        const batchSize = 100;
        const results = [];
        
        for (let i = 0; i < data.length; i += batchSize) {
          const batch = data.slice(i, i + batchSize);
          
          const { data: insertedData, error } = await supabase
            .from(table)
            .insert(batch)
            .select();

          if (error) {
            console.error(`Batch insert error:`, error);
            throw error;
          }
          
          results.push(...(insertedData || []));
          console.log(`Inserted batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(data.length/batchSize)}`);
        }

        return new Response(JSON.stringify({
          success: true,
          operation: 'bulk_insert',
          table,
          insertedCount: results.length,
          data: results
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'bulk_update': {
        if (!data || !criteria) {
          throw new Error('Data and criteria are required for bulk update');
        }

        const { data: updatedData, error } = await supabase
          .from(table)
          .update(data)
          .match(criteria)
          .select();

        if (error) throw error;

        return new Response(JSON.stringify({
          success: true,
          operation: 'bulk_update',
          table,
          updatedCount: updatedData?.length || 0,
          data: updatedData
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'bulk_delete': {
        if (!criteria) {
          throw new Error('Criteria is required for bulk delete');
        }

        const { data: deletedData, error } = await supabase
          .from(table)
          .delete()
          .match(criteria)
          .select();

        if (error) throw error;

        return new Response(JSON.stringify({
          success: true,
          operation: 'bulk_delete',
          table,
          deletedCount: deletedData?.length || 0,
          data: deletedData
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'export_all': {
        const { data: exportData, error } = await supabase
          .from(table)
          .select('*');

        if (error) throw error;

        return new Response(JSON.stringify({
          success: true,
          operation: 'export_all',
          table,
          count: exportData?.length || 0,
          data: exportData,
          exportedAt: new Date().toISOString()
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'validate_data': {
        // Get table schema and validate data
        const { data: tableData, error } = await supabase
          .from(table)
          .select('*')
          .limit(1000);

        if (error) throw error;

        const validationResults = {
          totalRows: tableData?.length || 0,
          missingRequiredFields: [],
          duplicateEntries: [],
          invalidData: []
        };

        // Basic validation logic
        if (tableData && tableData.length > 0) {
          const sampleRow = tableData[0];
          const requiredFields = Object.keys(sampleRow).filter(key => 
            sampleRow[key] !== null && sampleRow[key] !== undefined
          );

          tableData.forEach((row, index) => {
            requiredFields.forEach(field => {
              if (!row[field] || row[field] === '') {
                validationResults.missingRequiredFields.push({
                  row: index,
                  field,
                  id: row.id
                });
              }
            });
          });
        }

        return new Response(JSON.stringify({
          success: true,
          operation: 'validate_data',
          table,
          validationResults
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'clean_duplicates': {
        // Find and remove duplicates based on name/title field
        const nameField = table === 'saints' ? 'name' : 
                         table === 'temples' ? 'name' :
                         table === 'scriptures' ? 'title' : 'title';

        const { data: allData, error: fetchError } = await supabase
          .from(table)
          .select('*');

        if (fetchError) throw fetchError;

        if (!allData) {
          throw new Error('No data found');
        }

        // Group by name/title to find duplicates
        const duplicateGroups = {};
        allData.forEach(row => {
          const key = row[nameField]?.toLowerCase().trim();
          if (key) {
            if (!duplicateGroups[key]) {
              duplicateGroups[key] = [];
            }
            duplicateGroups[key].push(row);
          }
        });

        // Remove duplicates (keep the first one)
        const toDelete = [];
        Object.values(duplicateGroups).forEach((group: any[]) => {
          if (group.length > 1) {
            // Keep first, delete the rest
            toDelete.push(...group.slice(1).map(item => item.id));
          }
        });

        if (toDelete.length > 0) {
          const { data: deletedData, error: deleteError } = await supabase
            .from(table)
            .delete()
            .in('id', toDelete)
            .select();

          if (deleteError) throw deleteError;

          return new Response(JSON.stringify({
            success: true,
            operation: 'clean_duplicates',
            table,
            duplicatesRemoved: deletedData?.length || 0,
            duplicateIds: toDelete
          }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        return new Response(JSON.stringify({
          success: true,
          operation: 'clean_duplicates',
          table,
          duplicatesRemoved: 0,
          message: 'No duplicates found'
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      default:
        throw new Error(`Unknown operation: ${operation}`);
    }

  } catch (error) {
    console.error('Error in bulk-data-operations:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
