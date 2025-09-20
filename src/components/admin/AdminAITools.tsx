import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Sparkles, BookOpen, MessageSquare, Wand2, Brain, Languages, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AdminAITools = () => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [contentType, setContentType] = useState("");
  const [language, setLanguage] = useState("hi");
  const [topic, setTopic] = useState("");
  const [tradition, setTradition] = useState("");
  const { toast } = useToast();

  const contentTypes = [
    { value: "saint_bio", label: "Saint Biography" },
    { value: "scripture_summary", label: "Scripture Summary" },
    { value: "spiritual_faq", label: "Spiritual FAQ" },
    { value: "teaching", label: "Teaching Content" },
    { value: "mantra_explanation", label: "Mantra Explanation" },
    { value: "festival_description", label: "Festival Description" }
  ];

  const traditions = [
    { value: "hinduism", label: "Hinduism" },
    { value: "buddhism", label: "Buddhism" },
    { value: "sikhism", label: "Sikhism" },
    { value: "jainism", label: "Jainism" },
    { value: "general", label: "General Spirituality" }
  ];

  const generateContent = async () => {
    if (!prompt || !contentType) {
      toast({
        title: "Error",
        description: "Please provide a prompt and select content type",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      
      // This would call an AI service - for now, we'll simulate
      const systemPrompt = getSystemPrompt(contentType, tradition, language);
      const fullPrompt = `${systemPrompt}\n\nUser Request: ${prompt}\nTopic: ${topic}\nTradition: ${tradition}`;
      
      // Simulate AI response (in real implementation, this would call OpenAI/other AI service)
      const mockResponse = generateMockContent(contentType, prompt, tradition, language);
      
      setGeneratedContent(mockResponse);
      
      toast({
        title: "Success",
        description: "Content generated successfully!"
      });
    } catch (error) {
      console.error('AI Generation Error:', error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate content",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getSystemPrompt = (type, tradition, lang) => {
    const prompts = {
      saint_bio: `Generate a respectful and accurate biography for a spiritual saint from ${tradition}. Include key teachings, historical context, and spiritual significance. Write in ${lang} language if applicable.`,
      
      scripture_summary: `Create a comprehensive summary of a spiritual scripture from ${tradition}. Include main themes, key teachings, and practical applications. Write in ${lang} language if applicable.`,
      
      spiritual_faq: `Generate a helpful FAQ answer about ${tradition} spiritual practices. Provide practical, authentic guidance based on traditional wisdom. Write in ${lang} language if applicable.`,
      
      teaching: `Create inspiring spiritual teaching content about ${tradition}. Focus on practical wisdom and authentic spiritual principles. Write in ${lang} language if applicable.`,
      
      mantra_explanation: `Explain the meaning and significance of a mantra from ${tradition}. Include pronunciation guide, benefits, and proper practice methods. Write in ${lang} language if applicable.`,
      
      festival_description: `Describe a spiritual festival from ${tradition}. Include historical significance, rituals, and modern celebrations. Write in ${lang} language if applicable.`
    };
    
    return prompts[type] || "Generate spiritual content with authenticity and respect.";
  };

  const generateMockContent = (type, prompt, tradition, language) => {
    // Mock responses for demonstration
    const mockResponses = {
      saint_bio: `श्री गुरु नानक देव जी (1469-1539) सिख धर्म के संस्थापक और प्रथम गुरु थे। उनका जन्म तलवंडी (अब ननकाना साहिब) में हुआ था। गुरु नानक जी ने "एक ओंकार सतनाम" का संदेश दिया और सभी धर्मों की एकता पर जोर दिया। उन्होंने जाति-पांति के भेदभाव का विरोध किया और सत्य, दया, और सेवा के मार्ग पर चलने का उपदेश दिया।`,
      
      scripture_summary: `भगवद गीता हिंदू धर्म का पवित्र ग्रंथ है जो महाभारत का हिस्सा है। इसमें भगवान कृष्ण द्वारा अर्जुन को दिए गए उपदेश हैं। गीता में कर्म योग, भक्ति योग, और ज्ञान योग के तीन मुख्य मार्ग बताए गए हैं। यह जीवन के संघर्षों में धर्म और कर्तव्य का महत्व समझाती है।`,
      
      spiritual_faq: `प्रश्न: ध्यान कैसे करें?\n\nउत्तर: ध्यान के लिए एक शांत स्थान चुनें। आंखें बंद करके गहरी सांस लें। अपने मन को एक बिंदु पर केंद्रित करें। मन में आने वाले विचारों को बिना जजमेंट के देखें और जाने दें। नियमित अभ्यास से मानसिक शांति और आत्मिक विकास होता है।`
    };
    
    return mockResponses[type] || `Generated content for: ${prompt}\n\nTradition: ${tradition}\nLanguage: ${language}\n\nThis is sample generated content. In a real implementation, this would be generated by an AI service.`;
  };

  const saveToDatabase = async (table: string) => {
    if (!generatedContent) {
      toast({
        title: "Error",
        description: "No content to save",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);

      let dataToInsert = {};

      switch (table) {
        case 'saints':
          dataToInsert = {
            name: topic || "AI Generated Saint",
            tradition: tradition,
            biography: generatedContent,
            primary_language: language,
            verified: false,
            ai_model_fine_tuned: true
          };
          break;
          
        case 'spiritual_content':
          dataToInsert = {
            title: topic || "AI Generated Content",
            content: generatedContent,
            content_type: contentType === 'teaching' ? 'teaching' : 'article',
            category: 'devotional',
            language: language,
            source_type: 'ai_generated'
          };
          break;
          
        case 'spiritual_faqs':
          dataToInsert = {
            question: prompt,
            answer: generatedContent,
            language: language,
            category: 'general',
            ai_generated: true
          };
          break;
      }

      const { error } = await supabase
        .from(table as any)
        .insert([dataToInsert]);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Content saved to ${table} successfully!`
      });

      setGeneratedContent("");
      setPrompt("");
      setTopic("");
    } catch (error) {
      console.error('Save Error:', error);
      toast({
        title: "Save Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const bulkGenerate = async () => {
    if (!topic || !tradition) {
      toast({
        title: "Error",
        description: "Please specify topic and tradition",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      
      // Generate multiple related content pieces
      const contentItems = [
        { type: 'spiritual_faq', prompt: `What is ${topic}?` },
        { type: 'spiritual_faq', prompt: `How to practice ${topic}?` },
        { type: 'spiritual_faq', prompt: `Benefits of ${topic}?` },
        { type: 'teaching', prompt: `Teaching about ${topic}` }
      ];

      for (const item of contentItems) {
        const content = generateMockContent(item.type, item.prompt, tradition, language);
        
        if (item.type === 'spiritual_faq') {
          await supabase.from('spiritual_faqs').insert([{
            question: item.prompt,
            answer: content,
            language: language,
            category: 'practices',
            ai_generated: true
          }]);
        } else {
          await supabase.from('spiritual_content').insert([{
            title: `${topic} - ${item.prompt}`,
            content: content,
            content_type: 'text',
            category: 'teaching',
            language: language,
            source_type: 'user_generated'
          }]);
        }
      }

      toast({
        title: "Success",
        description: `Generated ${contentItems.length} pieces of content about ${topic}`
      });
    } catch (error) {
      console.error('Bulk Generation Error:', error);
      toast({
        title: "Bulk Generation Failed",
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
        <h2 className="text-2xl font-bold text-foreground">AI Content Generation Tools</h2>
        <p className="text-muted-foreground">Generate high-quality spiritual content using AI assistance</p>
      </div>

      <Tabs defaultValue="single" className="space-y-6">
        <TabsList>
          <TabsTrigger value="single">Single Content</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Generation</TabsTrigger>
          <TabsTrigger value="refinement">Content Refinement</TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                AI Content Generator
              </CardTitle>
              <CardDescription>
                Generate specific spiritual content with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Content Type</Label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Tradition</Label>
                  <Select value={tradition} onValueChange={setTradition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tradition" />
                    </SelectTrigger>
                    <SelectContent>
                      {traditions.map(trad => (
                        <SelectItem key={trad.value} value={trad.value}>
                          {trad.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="sa">Sanskrit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="topic">Topic/Subject</Label>
                <Input
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Lord Krishna, Meditation, Diwali"
                />
              </div>

              <div>
                <Label htmlFor="prompt">Detailed Prompt</Label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to generate..."
                  rows={4}
                />
              </div>

              <Button 
                onClick={generateContent}
                disabled={loading || !prompt || !contentType}
                className="w-full"
              >
                {loading ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Wand2 className="h-4 w-4 mr-2" />}
                Generate Content
              </Button>

              {generatedContent && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Generated Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                      rows={8}
                      className="mb-4"
                    />
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => saveToDatabase('saints')}
                        disabled={loading}
                      >
                        Save to Saints
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => saveToDatabase('spiritual_content')}
                        disabled={loading}
                      >
                        Save to Content
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => saveToDatabase('spiritual_faqs')}
                        disabled={loading}
                      >
                        Save to FAQs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Bulk Content Generation
              </CardTitle>
              <CardDescription>
                Generate multiple related content pieces automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Topic for Bulk Generation</Label>
                  <Input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Yoga, Bhakti, Karma"
                  />
                </div>
                
                <div>
                  <Label>Tradition</Label>
                  <Select value={tradition} onValueChange={setTradition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tradition" />
                    </SelectTrigger>
                    <SelectContent>
                      {traditions.map(trad => (
                        <SelectItem key={trad.value} value={trad.value}>
                          {trad.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={bulkGenerate}
                disabled={loading || !topic || !tradition}
                className="w-full"
              >
                {loading ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Brain className="h-4 w-4 mr-2" />}
                Generate Bulk Content
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="refinement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Content Refinement Tools
              </CardTitle>
              <CardDescription>
                Improve and optimize existing content using AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" disabled>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Enhance Readability
                </Button>
                <Button variant="outline" disabled>
                  <Languages className="h-4 w-4 mr-2" />
                  Translate Content
                </Button>
                <Button variant="outline" disabled>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Generate Summaries
                </Button>
                <Button variant="outline" disabled>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Add Spiritual Insights
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced content refinement tools will be available soon. These will include
                    automatic translation, readability enhancement, and spiritual insight generation.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};