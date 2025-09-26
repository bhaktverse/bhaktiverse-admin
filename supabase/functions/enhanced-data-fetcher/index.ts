import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { operation, table, count = 10, language = 'en' } = await req.json();
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    let systemPrompt = '';
    let dataStructure = {};

    // Define data structures and prompts for each table
    switch (table) {
      case 'saints':
        systemPrompt = `Generate comprehensive data about Hindu/Buddhist saints and spiritual leaders. Include diverse traditions, accurate historical information, and authentic teachings. Provide data in ${language} language where applicable.`;
        dataStructure = {
          name: "string",
          tradition: "string (e.g., Hinduism, Buddhism, Sikhism)",
          primary_language: "string",
          biography: "detailed text",
          key_teachings: "comprehensive text",
          birth_year: "integer or null",
          death_year: "integer or null",
          famous_quotes: "array of objects with quote and context",
          regional_names: "object with language codes as keys",
          personality_traits: "object with traits and descriptions",
          verified: true
        };
        break;

      case 'temples':
        systemPrompt = `Generate comprehensive data about famous temples worldwide. Include accurate location details, historical significance, and practical information for visitors. Focus on authenticity and cultural respect. Provide multilingual names where applicable.`;
        dataStructure = {
          name: "string",
          primary_deity: "string",
          tradition: "string",
          description: "detailed text",
          history: "comprehensive text",
          location: "object with city, state, country, coordinates",
          visiting_hours: "object with schedule",
          contact_info: "object with phone, email, website",
          facilities: "array of available facilities",
          rating: "decimal between 0-5",
          verified: true
        };
        break;

      case 'scriptures':
        systemPrompt = `Generate comprehensive data about spiritual scriptures and texts from various traditions. Include accurate historical information, cultural context, and authentic descriptions. Provide multilingual information where applicable.`;
        dataStructure = {
          title: "string",
          author: "string or null",
          tradition: "string",
          language: "string",
          type: "scripture, commentary, or treatise",
          description: "detailed text",
          summary: "comprehensive text",
          total_chapters: "integer",
          difficulty_level: "beginner, intermediate, or advanced",
          estimated_reading_time: "integer (minutes)"
        };
        break;

      case 'spiritual_content':
        systemPrompt = `Generate diverse spiritual content including teachings, stories, practices, and wisdom from various traditions. Focus on authenticity, practical value, and cultural respect. Include content suitable for different spiritual levels.`;
        dataStructure = {
          title: "string",
          content: "comprehensive text",
          summary: "brief summary",
          content_type: "teaching, story, practice, meditation, or wisdom",
          category: "devotional, philosophical, practical, or historical",
          source_type: "saint, scripture, tradition, or teacher",
          difficulty_level: "beginner, intermediate, or advanced",
          language: "string",
          tags: "array of relevant tags",
          duration: "integer (minutes for practices)"
        };
        break;

      case 'spiritual_faqs':
        systemPrompt = `Generate frequently asked questions about spirituality, religion, and philosophy with comprehensive, respectful answers. Cover diverse topics from basic concepts to advanced practices. Ensure cultural sensitivity and accuracy.`;
        dataStructure = {
          question: "clear, specific question",
          answer: "comprehensive, informative answer",
          category: "devotional, philosophical, practical, or ritual",
          difficulty_level: "beginner, intermediate, or advanced",
          language: "string",
          source_references: "array of relevant sources",
          ai_generated: true,
          verified_by_scholar: false
        };
        break;

      case 'calendar_events':
        systemPrompt = `Generate spiritual and religious events, festivals, and observances from various traditions. Include accurate dates, cultural significance, and practical information. Focus on authenticity and educational value.`;
        dataStructure = {
          title: "string",
          description: "detailed description",
          event_type: "festival, observance, or celebration",
          date: "date in YYYY-MM-DD format",
          significance: "cultural and spiritual significance",
          rituals: "array of associated rituals and practices",
          regional_significance: "array of regional variations",
          is_recurring: true,
          recurrence_pattern: "annual, monthly, or custom"
        };
        break;

      default:
        throw new Error(`Unsupported table: ${table}`);
    }

    // Generate data using OpenAI
    const prompt = `${systemPrompt}

Generate ${count} authentic, accurate, and diverse entries. Each entry must follow this exact JSON structure:
${JSON.stringify(dataStructure, null, 2)}

Requirements:
1. All data must be factually accurate and culturally respectful
2. Include diverse traditions and perspectives
3. Ensure authenticity - no fictional or made-up information
4. Use appropriate ${language} language content where specified
5. For numerical fields, use realistic values
6. For arrays and objects, provide meaningful, structured data
7. Maintain high quality and educational value

Return only a valid JSON array of ${count} objects, no additional text or formatting.`;

    console.log('Generating data for table:', table);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a spiritual and cultural expert with deep knowledge of world religions, traditions, and practices. Generate only authentic, accurate, and respectful content.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    let generatedContent = data.choices[0].message.content.trim();
    
    // Clean the response
    generatedContent = generatedContent.replace(/```json\n?|\n?```/g, '');
    generatedContent = generatedContent.trim();
    
    let parsedData;
    try {
      parsedData = JSON.parse(generatedContent);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Generated content:', generatedContent);
      throw new Error('Failed to parse generated JSON data');
    }

    if (!Array.isArray(parsedData)) {
      throw new Error('Generated data is not an array');
    }

    // Insert data into database
    const { data: insertedData, error: insertError } = await supabase
      .from(table)
      .insert(parsedData);

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error(`Database insertion failed: ${insertError.message}`);
    }

    console.log(`Successfully inserted ${parsedData.length} records into ${table}`);

    return new Response(JSON.stringify({
      success: true,
      message: `Successfully generated and inserted ${parsedData.length} ${table} records`,
      insertedCount: parsedData.length,
      data: parsedData
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Enhanced data fetcher error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});