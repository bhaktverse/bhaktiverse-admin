import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Database, 
  Globe, 
  Volume2, 
  MessageSquare, 
  Download, 
  RefreshCw, 
  CheckCircle,
  Loader2,
  Languages,
  Brain,
  Sparkles
} from "lucide-react";

const AdminEnhancedDataManager = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Data Fetcher State
  const [selectedTable, setSelectedTable] = useState('');
  const [fetchCount, setFetchCount] = useState(10);
  const [fetchLanguage, setFetchLanguage] = useState('en');
  
  // Q&A System State
  const [qaCategory, setQaCategory] = useState('');
  const [predefinedQuestions, setPredefinedQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [generatedAnswer, setGeneratedAnswer] = useState('');
  const [qaLanguage, setQaLanguage] = useState('en');
  
  // Audio State
  const [audioText, setAudioText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('alloy');
  const [availableVoices, setAvailableVoices] = useState({});
  
  // Language State
  const [translateText, setTranslateText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [supportedLanguages, setSupportedLanguages] = useState({});
  
  const tables = [
    { value: 'saints', label: 'Saints', icon: '🕉️' },
    { value: 'temples', label: 'Temples', icon: '🏛️' },
    { value: 'scriptures', label: 'Scriptures', icon: '📜' },
    { value: 'spiritual_content', label: 'Spiritual Content', icon: '✨' },
    { value: 'spiritual_faqs', label: 'FAQs', icon: '❓' },
    { value: 'calendar_events', label: 'Events', icon: '📅' }
  ];

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      // Load Q&A categories and questions
      const qaResponse = await supabase.functions.invoke('smart-qa-system', {
        body: { operation: 'get_questions' }
      });
      
      if (qaResponse.data?.success) {
        setPredefinedQuestions(qaResponse.data.questions);
      }

      // Load available voices
      const voiceResponse = await supabase.functions.invoke('audio-generator', {
        body: { operation: 'get_voices' }
      });
      
      if (voiceResponse.data?.success) {
        setAvailableVoices(voiceResponse.data.voices);
      }

      // Load supported languages
      const langResponse = await supabase.functions.invoke('language-manager', {
        body: { operation: 'get_languages' }
      });
      
      if (langResponse.data?.success) {
        setSupportedLanguages(langResponse.data.languages);
      }
    } catch (error) {
      console.error('Error loading initial data:', error);
    }
  };

  const handleEnhancedDataFetch = async () => {
    if (!selectedTable) {
      toast({
        title: "Error",
        description: "Please select a table first",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const response = await supabase.functions.invoke('enhanced-data-fetcher', {
        body: {
          operation: 'fetch_data',
          table: selectedTable,
          count: parseInt(fetchCount),
          language: fetchLanguage
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.data?.success) {
        toast({
          title: "Success",
          description: `Generated and inserted ${response.data.insertedCount} ${selectedTable} records`,
        });
      } else {
        throw new Error(response.data?.error || 'Unknown error');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleQuestionSelect = async (question) => {
    setSelectedQuestion(question);
    setLoading(true);

    try {
      const response = await supabase.functions.invoke('smart-qa-system', {
        body: {
          operation: 'generate_answer',
          question: question,
          category: qaCategory,
          language: qaLanguage
        }
      });

      if (response.data?.success) {
        setGeneratedAnswer(response.data.qaEntry.answer);
      } else {
        throw new Error(response.data?.error || 'Failed to generate answer');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCustomQuestion = async () => {
    if (!customQuestion.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await supabase.functions.invoke('smart-qa-system', {
        body: {
          operation: 'generate_answer',
          question: customQuestion,
          category: qaCategory,
          language: qaLanguage
        }
      });

      if (response.data?.success) {
        setGeneratedAnswer(response.data.qaEntry.answer);
        setSelectedQuestion(customQuestion);
      } else {
        throw new Error(response.data?.error || 'Failed to generate answer');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveQA = async () => {
    if (!selectedQuestion || !generatedAnswer) {
      toast({
        title: "Error",
        description: "No Q&A to save",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const qaData = {
        question: selectedQuestion,
        answer: generatedAnswer,
        category: qaCategory || 'philosophical',
        difficulty_level: 'intermediate',
        language: qaLanguage,
        source_references: [],
        ai_generated: true,
        verified_by_scholar: false
      };

      const response = await supabase.functions.invoke('smart-qa-system', {
        body: {
          operation: 'save_qa',
          qaData: qaData
        }
      });

      if (response.data?.success) {
        toast({
          title: "Success",
          description: "Q&A saved to database successfully",
        });
        setSelectedQuestion('');
        setGeneratedAnswer('');
        setCustomQuestion('');
      } else {
        throw new Error(response.data?.error || 'Failed to save Q&A');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAudio = async () => {
    if (!audioText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to convert to audio",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 15, 90));
      }, 1000);

      const response = await supabase.functions.invoke('audio-generator', {
        body: {
          operation: 'generate_audio',
          text: audioText,
          voice: selectedVoice,
          language: fetchLanguage
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.data?.success) {
        // Create audio element and play
        const audioData = response.data.audioData;
        const audio = new Audio(`data:audio/mp3;base64,${audioData}`);
        audio.play();

        toast({
          title: "Success",
          description: `Audio generated successfully with ${response.data.chunks} chunk(s)`,
        });
      } else {
        throw new Error(response.data?.error || 'Audio generation failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleTranslate = async () => {
    if (!translateText.trim() || !targetLanguage) {
      toast({
        title: "Error",
        description: "Please enter text and select target language",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await supabase.functions.invoke('language-manager', {
        body: {
          operation: 'translate',
          text: translateText,
          sourceLanguage: sourceLanguage,
          targetLanguage: targetLanguage
        }
      });

      if (response.data?.success) {
        toast({
          title: "Translation Complete",
          description: `Translated from ${supportedLanguages[sourceLanguage]?.name} to ${supportedLanguages[targetLanguage]?.name}`,
        });
        console.log('Translation:', response.data.translatedText);
      } else {
        throw new Error(response.data?.error || 'Translation failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Brain className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Enhanced Data Management</h2>
        <Badge variant="secondary">AI-Powered</Badge>
      </div>
      
      <Tabs defaultValue="data-fetcher" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="data-fetcher" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Data Fetcher
          </TabsTrigger>
          <TabsTrigger value="qa-system" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Smart Q&A
          </TabsTrigger>
          <TabsTrigger value="audio" className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            Audio Generator
          </TabsTrigger>
          <TabsTrigger value="language" className="flex items-center gap-2">
            <Languages className="h-4 w-4" />
            Language Manager
          </TabsTrigger>
        </TabsList>

        <TabsContent value="data-fetcher">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Enhanced Data Fetcher
              </CardTitle>
              <CardDescription>
                Generate authentic, comprehensive data from real sources using AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="table">Select Table</Label>
                  <Select value={selectedTable} onValueChange={setSelectedTable}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose table..." />
                    </SelectTrigger>
                    <SelectContent>
                      {tables.map((table) => (
                        <SelectItem key={table.value} value={table.value}>
                          {table.icon} {table.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="count">Records Count</Label>
                  <Input
                    id="count"
                    type="number"
                    value={fetchCount}
                    onChange={(e) => setFetchCount(e.target.value)}
                    min="1"
                    max="50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Primary Language</Label>
                  <Select value={fetchLanguage} onValueChange={setFetchLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(supportedLanguages).map(([code, config]) => (
                        <SelectItem key={code} value={code}>
                          {config.nativeName} ({config.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {progress > 0 && (
                <div className="space-y-2">
                  <Progress value={progress} />
                  <p className="text-sm text-muted-foreground">Generating and inserting data...</p>
                </div>
              )}
              
              <Button 
                onClick={handleEnhancedDataFetch} 
                disabled={loading || !selectedTable}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Data...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Generate & Insert Data
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qa-system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Smart Q&A System
              </CardTitle>
              <CardDescription>
                Generate accurate answers for spiritual questions and save to database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={qaCategory} onValueChange={setQaCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="devotional">Devotional</SelectItem>
                      <SelectItem value="philosophical">Philosophical</SelectItem>
                      <SelectItem value="practical">Practical</SelectItem>
                      <SelectItem value="ritual">Ritual</SelectItem>
                      <SelectItem value="historical">Historical</SelectItem>
                      <SelectItem value="scriptural">Scriptural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select value={qaLanguage} onValueChange={setQaLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(supportedLanguages).map(([code, config]) => (
                        <SelectItem key={code} value={code}>
                          {config.nativeName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Pre-defined Questions</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2 max-h-32 overflow-y-auto">
                    {predefinedQuestions.slice(0, 10).map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuestionSelect(question)}
                        disabled={loading}
                        className="text-left justify-start h-auto p-2"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Or Enter Custom Question</Label>
                  <div className="flex gap-2">
                    <Input
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      placeholder="Enter your spiritual question..."
                      disabled={loading}
                    />
                    <Button onClick={handleCustomQuestion} disabled={loading || !customQuestion.trim()}>
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Ask'}
                    </Button>
                  </div>
                </div>
                
                {generatedAnswer && (
                  <div className="space-y-2">
                    <Label>Generated Answer</Label>
                    <Textarea
                      value={generatedAnswer}
                      onChange={(e) => setGeneratedAnswer(e.target.value)}
                      rows={6}
                      className="font-mono text-sm"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleSaveQA} disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Save to Database
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audio">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Audio Generator
              </CardTitle>
              <CardDescription>
                Convert text to high-quality speech using AI voices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Voice Selection</Label>
                <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(availableVoices).map(([voice, config]) => (
                      <SelectItem key={voice} value={voice}>
                        {voice} ({config.gender}, {config.style})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Text to Convert</Label>
                <Textarea
                  value={audioText}
                  onChange={(e) => setAudioText(e.target.value)}
                  placeholder="Enter text to convert to audio..."
                  rows={4}
                />
                <p className="text-sm text-muted-foreground">
                  Characters: {audioText.length} (Recommended: 100-1000 characters)
                </p>
              </div>
              
              {progress > 0 && (
                <div className="space-y-2">
                  <Progress value={progress} />
                  <p className="text-sm text-muted-foreground">Generating audio...</p>
                </div>
              )}
              
              <Button 
                onClick={handleGenerateAudio} 
                disabled={loading || !audioText.trim()}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Audio...
                  </>
                ) : (
                  <>
                    <Volume2 className="mr-2 h-4 w-4" />
                    Generate & Play Audio
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language Manager
              </CardTitle>
              <CardDescription>
                Translate content to multiple languages and manage multilingual data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Source Language</Label>
                  <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(supportedLanguages).map(([code, config]) => (
                        <SelectItem key={code} value={code}>
                          {config.nativeName} ({config.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Target Language</Label>
                  <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(supportedLanguages).map(([code, config]) => (
                        <SelectItem key={code} value={code}>
                          {config.nativeName} ({config.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Text to Translate</Label>
                <Textarea
                  value={translateText}
                  onChange={(e) => setTranslateText(e.target.value)}
                  placeholder="Enter text to translate..."
                  rows={4}
                />
              </div>
              
              <Button 
                onClick={handleTranslate} 
                disabled={loading || !translateText.trim() || !targetLanguage}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Translating...
                  </>
                ) : (
                  <>
                    <Languages className="mr-2 h-4 w-4" />
                    Translate Text
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminEnhancedDataManager;