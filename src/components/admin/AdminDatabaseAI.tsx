import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Brain, Database, Video, Upload, Sparkles, Play } from "lucide-react";

export const AdminDatabaseAI = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [generatedData, setGeneratedData] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState("");
  const [refinedData, setRefinedData] = useState("");

  const tables = [
    { name: "saints", description: "Spiritual saints and their teachings" },
    { name: "scriptures", description: "Holy scriptures and texts" },
    { name: "temples", description: "Temple information and services" },
    { name: "spiritual_content", description: "General spiritual content" },
    { name: "spiritual_faqs", description: "FAQ questions and answers" },
    { name: "calendar_events", description: "Festivals and spiritual events" },
    { name: "bhakti_shorts", description: "Short devotional videos" },
    { name: "community_posts", description: "Community spiritual posts" }
  ];

  const generateAIData = async () => {
    if (!aiPrompt || !selectedTable) {
      toast({
        title: "Error",
        description: "Please select a table and enter a prompt",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Mock AI generation - in real implementation, this would call OpenAI API
      const mockData = generateMockDataForTable(selectedTable, aiPrompt);
      setGeneratedData(mockData);
      
      toast({
        title: "Success",
        description: "AI data generated successfully",
      });
    } catch (error) {
      console.error('Error generating AI data:', error);
      toast({
        title: "Error",
        description: "Failed to generate AI data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const generateMockDataForTable = (table: string, prompt: string) => {
    const templates = {
      saints: `{
  "name": "Generated Saint Name",
  "tradition": "Hinduism",
  "biography": "Based on prompt: ${prompt}",
  "key_teachings": "Generated teachings related to: ${prompt}",
  "primary_language": "hi",
  "birth_year": 1400,
  "death_year": 1500,
  "famous_quotes": ["Quote 1", "Quote 2"],
  "personality_traits": {"compassionate": true, "wise": true}
}`,
      scriptures: `{
  "title": "Generated Scripture",
  "author": "Ancient Sage",
  "tradition": "Hinduism",
  "language": "hi",
  "description": "Generated based on: ${prompt}",
  "summary": "Summary of the scripture",
  "type": "scripture",
  "total_chapters": 18,
  "difficulty_level": "beginner"
}`,
      temples: `{
  "name": "Generated Temple",
  "primary_deity": "Lord Vishnu",
  "tradition": "Hinduism",
  "description": "Generated temple based on: ${prompt}",
  "history": "Historical background",
  "location": {"city": "Mumbai", "state": "Maharashtra", "country": "India"},
  "visiting_hours": {"morning": "6:00 AM - 12:00 PM", "evening": "4:00 PM - 9:00 PM"},
  "facilities": ["Parking", "Food Hall", "Rest Area"]
}`,
      spiritual_faqs: `{
  "question": "Generated question based on: ${prompt}",
  "answer": "Detailed answer explaining the spiritual concept",
  "category": "general_spirituality",
  "language": "hi",
  "difficulty_level": "beginner",
  "source_references": ["Bhagavad Gita", "Vedas"]
}`
    };

    return templates[table] || `{"generated_content": "Data for ${table} based on: ${prompt}"}`;
  };

  const processVideoData = async () => {
    if (!videoUrl) {
      toast({
        title: "Error",
        description: "Please enter a video URL",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Mock video processing - in real implementation, this would extract audio and process with AI
      const mockVideoData = `Video Analysis Results for: ${videoUrl}

Key Topics Discussed:
- Spiritual awakening and meditation
- Devotional practices (Bhakti)
- Life teachings and wisdom
- Prayer and mantras

Extracted FAQ Data:
Q: How to start meditation?
A: Begin with 5-10 minutes daily, focus on breath, find quiet space.

Q: What is the importance of devotion?
A: Devotion purifies the heart and creates connection with divine.

Q: How to maintain spiritual practice?
A: Consistency, dedication, and gradual progress are key.

Generated Content Chunks:
1. Meditation techniques and benefits
2. Devotional singing and its impact
3. Daily spiritual routines
4. Community worship practices`;

      setVideoData(mockVideoData);
      
      toast({
        title: "Success",
        description: "Video processed successfully",
      });
    } catch (error) {
      console.error('Error processing video:', error);
      toast({
        title: "Error",
        description: "Failed to process video",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadRefinedData = async () => {
    if (!refinedData || !selectedTable) {
      toast({
        title: "Error",
        description: "Please select a table and enter refined data",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const dataToInsert = JSON.parse(refinedData);
      
      const { error } = await supabase
        .from(selectedTable as any)
        .insert([dataToInsert]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Data uploaded to database successfully",
      });
      
      setRefinedData("");
    } catch (error) {
      console.error('Error uploading data:', error);
      toast({
        title: "Error",
        description: "Failed to upload data to database",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Powered Database Management
          </CardTitle>
          <CardDescription>
            Use AI to generate, refine, and manage BhaktiVerse database content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="ai-generation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ai-generation">AI Data Generation</TabsTrigger>
              <TabsTrigger value="video-processing">Video Processing</TabsTrigger>
              <TabsTrigger value="data-management">Data Management</TabsTrigger>
            </TabsList>

            <TabsContent value="ai-generation" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Select Table</label>
                    <Select value={selectedTable} onValueChange={setSelectedTable}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a table" />
                      </SelectTrigger>
                      <SelectContent>
                        {tables.map((table) => (
                          <SelectItem key={table.name} value={table.name}>
                            <div>
                              <div className="font-medium">{table.name}</div>
                              <div className="text-xs text-muted-foreground">{table.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">AI Prompt</label>
                    <Textarea
                      placeholder="Describe what type of spiritual content you want to generate..."
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button 
                    onClick={generateAIData} 
                    disabled={loading}
                    className="w-full"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate AI Content
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Generated Data</label>
                    <Textarea
                      placeholder="AI-generated content will appear here..."
                      value={generatedData}
                      onChange={(e) => setGeneratedData(e.target.value)}
                      rows={10}
                      className="font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="video-processing" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Video URL</label>
                    <Input
                      placeholder="https://youtube.com/watch?v=..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                    />
                  </div>

                  <Button 
                    onClick={processVideoData} 
                    disabled={loading}
                    className="w-full"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Process Video Content
                  </Button>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Features:</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Extract audio from spiritual videos</li>
                      <li>• Generate FAQ from content</li>
                      <li>• Create content chunks</li>
                      <li>• Auto-categorize topics</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Extracted Video Data</label>
                    <Textarea
                      placeholder="Video analysis results will appear here..."
                      value={videoData}
                      onChange={(e) => setVideoData(e.target.value)}
                      rows={12}
                      className="font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data-management" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Refined Data (JSON Format)</label>
                  <Textarea
                    placeholder="Paste your refined JSON data here..."
                    value={refinedData}
                    onChange={(e) => setRefinedData(e.target.value)}
                    rows={8}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => setRefinedData(generatedData)}
                    variant="outline"
                    disabled={!generatedData}
                  >
                    Use Generated Data
                  </Button>
                  <Button 
                    onClick={() => setRefinedData(videoData)}
                    variant="outline"
                    disabled={!videoData}
                  >
                    Use Video Data
                  </Button>
                  <Button 
                    onClick={uploadRefinedData} 
                    disabled={loading}
                    className="ml-auto"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload to Database
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {tables.map((table) => (
                    <Badge 
                      key={table.name}
                      variant={selectedTable === table.name ? "default" : "outline"}
                      className="cursor-pointer p-2 text-center"
                      onClick={() => setSelectedTable(table.name)}
                    >
                      <Database className="h-3 w-3 mr-1" />
                      {table.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};