import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { Upload, FileText, Database, Download, RefreshCw, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AdminDataImport = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [csvData, setCsvData] = useState("");
  const [jsonData, setJsonData] = useState("");
  const [bulkData, setBulkData] = useState("");
  const { toast } = useToast();

  const tables = [
    { value: "saints", label: "Saints" },
    { value: "scriptures", label: "Scriptures" },
    { value: "temples", label: "Temples" },
    { value: "spiritual_content", label: "Spiritual Content" },
    { value: "spiritual_faqs", label: "FAQs" },
    { value: "calendar_events", label: "Calendar Events" },
    { value: "achievements", label: "Achievements" }
  ];

  const handleCSVImport = async () => {
    if (!csvData || !selectedTable) {
      toast({
        title: "Error",
        description: "Please select a table and provide CSV data",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      setProgress(0);

      // Parse CSV data
      const lines = csvData.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = values[index] || null;
        });
        return obj;
      });

      setProgress(25);

      // Insert data in batches
      const batchSize = 10;
      for (let i = 0; i < rows.length; i += batchSize) {
        const batch = rows.slice(i, i + batchSize);
        
        const { error } = await supabase
          .from(selectedTable as any)
          .insert(batch);

        if (error) throw error;
        
        setProgress(25 + ((i + batchSize) / rows.length) * 75);
      }

      toast({
        title: "Success",
        description: `Imported ${rows.length} records to ${selectedTable}`,
      });

      setCsvData("");
      setProgress(100);
    } catch (error) {
      console.error('CSV Import Error:', error);
      toast({
        title: "Import Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const handleJSONImport = async () => {
    if (!jsonData || !selectedTable) {
      toast({
        title: "Error",
        description: "Please select a table and provide JSON data",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      setProgress(0);

      const data = JSON.parse(jsonData);
      const records = Array.isArray(data) ? data : [data];

      setProgress(25);

      // Insert data in batches
      const batchSize = 10;
      for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        
        const { error } = await supabase
          .from(selectedTable as any)
          .insert(batch);

        if (error) throw error;
        
        setProgress(25 + ((i + batchSize) / records.length) * 75);
      }

      toast({
        title: "Success",
        description: `Imported ${records.length} records to ${selectedTable}`,
      });

      setJsonData("");
      setProgress(100);
    } catch (error) {
      console.error('JSON Import Error:', error);
      toast({
        title: "Import Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const generateSampleData = (table: string) => {
    const samples = {
      saints: `name,tradition,biography,key_teachings,primary_language
Guru Nanak,Sikhism,Founder of Sikhism,Unity of God and equality of all people,hi
Swami Vivekananda,Hinduism,Key figure in Hindu reform,Vedanta philosophy and social reform,hi`,
      
      scriptures: `title,author,tradition,language,description
Bhagavad Gita,Vyasa,Hinduism,hi,Sacred Hindu scripture
Guru Granth Sahib,Guru Nanak,Sikhism,hi,Central religious scripture of Sikhism`,
      
      temples: `name,primary_deity,tradition,description
Golden Temple,Guru Nanak,Sikhism,Most sacred Sikh temple
Tirumala Temple,Lord Venkateswara,Hinduism,Famous Hindu temple`,
      
      spiritual_content: `title,content,content_type,category,language
Daily Prayer,Om Namah Shivaya meditation,meditation,devotional,hi
Morning Mantra,Gayatri Mantra chanting,mantra,prayer,hi`
    };

    return samples[table] || "No sample data available for this table";
  };

  const exportTableData = async (tableName: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from(tableName as any)
        .select('*');

      if (error) throw error;

      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tableName}_export.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: `Exported ${data.length} records from ${tableName}`,
      });
    } catch (error) {
      console.error('Export Error:', error);
      toast({
        title: "Export Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Data Import & Export</h2>
        <p className="text-muted-foreground">Bulk import spiritual content and export existing data</p>
      </div>

      {progress > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="import" className="space-y-6">
        <TabsList>
          <TabsTrigger value="import">Import Data</TabsTrigger>
          <TabsTrigger value="export">Export Data</TabsTrigger>
          <TabsTrigger value="bulk-tools">Bulk Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="import" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Import Data
              </CardTitle>
              <CardDescription>
                Import spiritual content from CSV or JSON files
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="table-select">Select Target Table</Label>
                <Select value={selectedTable} onValueChange={setSelectedTable}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a table to import to" />
                  </SelectTrigger>
                  <SelectContent>
                    {tables.map(table => (
                      <SelectItem key={table.value} value={table.value}>
                        {table.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Tabs defaultValue="csv">
                <TabsList>
                  <TabsTrigger value="csv">CSV Import</TabsTrigger>
                  <TabsTrigger value="json">JSON Import</TabsTrigger>
                </TabsList>

                <TabsContent value="csv" className="space-y-4">
                  <div>
                    <Label htmlFor="csv-data">CSV Data</Label>
                    <Textarea
                      id="csv-data"
                      placeholder="Paste your CSV data here..."
                      value={csvData}
                      onChange={(e) => setCsvData(e.target.value)}
                      rows={8}
                    />
                  </div>
                  {selectedTable && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Sample CSV Format</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                          {generateSampleData(selectedTable)}
                        </pre>
                      </CardContent>
                    </Card>
                  )}
                  <Button 
                    onClick={handleCSVImport} 
                    disabled={loading || !csvData || !selectedTable}
                    className="w-full"
                  >
                    {loading ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
                    Import CSV Data
                  </Button>
                </TabsContent>

                <TabsContent value="json" className="space-y-4">
                  <div>
                    <Label htmlFor="json-data">JSON Data</Label>
                    <Textarea
                      id="json-data"
                      placeholder="Paste your JSON data here..."
                      value={jsonData}
                      onChange={(e) => setJsonData(e.target.value)}
                      rows={8}
                    />
                  </div>
                  <Button 
                    onClick={handleJSONImport} 
                    disabled={loading || !jsonData || !selectedTable}
                    className="w-full"
                  >
                    {loading ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
                    Import JSON Data
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Database Tables
              </CardTitle>
              <CardDescription>
                Download your spiritual content data for backup or analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tables.map(table => (
                  <Card key={table.value}>
                    <CardHeader>
                      <CardTitle className="text-lg">{table.label}</CardTitle>
                      <CardDescription>Export {table.label.toLowerCase()} data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => exportTableData(table.value)}
                        disabled={loading}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Export JSON
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk-tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Bulk Operations
              </CardTitle>
              <CardDescription>
                Advanced tools for bulk data operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bulk-operations">Bulk SQL Operations</Label>
                <Textarea
                  id="bulk-operations"
                  placeholder="Enter SQL commands for bulk operations..."
                  value={bulkData}
                  onChange={(e) => setBulkData(e.target.value)}
                  rows={6}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Validate Data
                </Button>
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Clean Duplicates
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Optimize Tables
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};