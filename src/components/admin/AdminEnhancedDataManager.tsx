import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Slider } from "@/components/ui/slider";
import {
  Database,
  MessageSquare,
  Volume2,
  Download,
  CheckCircle,
  Loader2,
  Languages,
  Brain,
  Sparkles
} from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface Voice {
  voice_id: string;
  name: string;
  gender?: string;
  style?: string;
}

interface Question {
  id: string;
  category: string;
  question: string;
}

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
  const [predefinedQuestions, setPredefinedQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [generatedAnswer, setGeneratedAnswer] = useState('');
  const [qaLanguage, setQaLanguage] = useState('en');
  
  // Audio State
  const [audioText, setAudioText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('alloy');
  const [availableVoices, setAvailableVoices] = useState<Voice[]>([]);
  
  // Language State
  const [translateText, setTranslateText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [supportedLanguages, setSupportedLanguages] = useState<Language[]>([]);
  
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
        setPredefinedQuestions(qaResponse.data.questions || []);
      }

      // Load available voices
      const voicesResponse = await supabase.functions.invoke('audio-generator', {
        body: { operation: 'get_voices' }
      });
      
      if (voicesResponse.data?.success) {
        setAvailableVoices(voicesResponse.data.voices || []);
      }

      // Load supported languages
      const languagesResponse = await supabase.functions.invoke('language-manager', {
        body: { operation: 'get_languages' }
      });
      
      if (languagesResponse.data?.success) {
        setSupportedLanguages(languagesResponse.data.languages || []);
      }

    } catch (error) {
      console.error('Error loading initial data:', error);
      toast({
        title: "Error",
        description: "Failed to load initial data",
        variant: "destructive",
      });
    }
  };

  const handleDataFetch = async () => {
    if (!selectedTable) {
      toast({
        title: "Error",
        description: "Please select a table to enhance",
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
          count: fetchCount,
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
        throw new Error(response.data?.error || 'Failed to fetch data');
      }
    } catch (error) {
      console.error('Data fetch error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to fetch data',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const handleQuestionGeneration = async () => {
    const question = selectedQuestion || customQuestion;
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please select or enter a question",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setProgress(0);
    
    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 15, 90));
      }, 300);

      const response = await supabase.functions.invoke('smart-qa-system', {
        body: {
          operation: 'generate_answer',
          question: question,
          language: qaLanguage,
          save_to_db: true
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.data?.success) {
        setGeneratedAnswer(response.data.answer);
        toast({
          title: "Success",
          description: "Answer generated and saved to database",
        });
      } else {
        throw new Error(response.data?.error || 'Failed to generate answer');
      }
    } catch (error) {
      console.error('Q&A generation error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to generate answer',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const handleAudioGeneration = async () => {
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
        setProgress(prev => Math.min(prev + 20, 90));
      }, 400);

      const response = await supabase.functions.invoke('audio-generator', {
        body: {
          operation: 'generate_audio',
          text: audioText,
          voice: selectedVoice,
          format: 'mp3'
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.data?.success) {
        // Create download link
        const blob = new Blob([response.data.audioData], { type: 'audio/mp3' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `generated-audio-${Date.now()}.mp3`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        toast({
          title: "Success",
          description: "Audio generated and download started",
        });
      } else {
        throw new Error(response.data?.error || 'Failed to generate audio');
      }
    } catch (error) {
      console.error('Audio generation error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to generate audio',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const handleTranslation = async () => {
    if (!translateText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to translate",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setProgress(0);
    
    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 25, 90));
      }, 200);

      const response = await supabase.functions.invoke('language-manager', {
        body: {
          operation: 'translate',
          text: translateText,
          source_language: sourceLanguage,
          target_language: targetLanguage
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.data?.success) {
        toast({
          title: "Success",
          description: "Translation completed successfully",
        });
      } else {
        throw new Error(response.data?.error || 'Failed to translate text');
      }
    } catch (error) {
      console.error('Translation error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to translate text',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const categories = Array.from(new Set(predefinedQuestions.map(q => q.category)));
  const filteredQuestions = qaCategory 
    ? predefinedQuestions.filter(q => q.category === qaCategory)
    : predefinedQuestions;

  const voices = [
    { voice_id: 'alloy', name: 'Alloy' },
    { voice_id: 'echo', name: 'Echo' },
    { voice_id: 'fable', name: 'Fable' },
    { voice_id: 'onyx', name: 'Onyx' },
    { voice_id: 'nova', name: 'Nova' },
    { voice_id: 'shimmer', name: 'Shimmer' },
    ...availableVoices
  ];

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
    { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
    { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्' },
    ...supportedLanguages
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Enhanced Data Manager</h2>
          <p className="text-muted-foreground">
            AI-powered tools for data enhancement, Q&A generation, audio creation, and translation
          </p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          AI Powered
        </Badge>
      </div>

      {progress > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Processing...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="data-fetcher" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="data-fetcher" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Data Fetcher
          </TabsTrigger>
          <TabsTrigger value="qa-system" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Smart Q&A
          </TabsTrigger>
          <TabsTrigger value="audio-generator" className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            Audio Generator
          </TabsTrigger>
          <TabsTrigger value="translator" className="flex items-center gap-2">
            <Languages className="h-4 w-4" />
            Translator
          </TabsTrigger>
        </TabsList>

        {/* Data Fetcher Tab */}
        <TabsContent value="data-fetcher">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                AI Data Fetcher & Enhancer
              </CardTitle>
              <CardDescription>
                Fetch real data from internet sources and enhance your database tables with AI-generated content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="table-select">Target Table</Label>
                  <Select value={selectedTable} onValueChange={setSelectedTable}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select table to enhance" />
                    </SelectTrigger>
                    <SelectContent>
                      {tables.map((table) => (
                        <SelectItem key={table.value} value={table.value}>
                          <div className="flex items-center gap-2">
                            <span>{table.icon}</span>
                            {table.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="count">Number of Records</Label>
                  <Input
                    id="count"
                    type="number"
                    value={fetchCount}
                    onChange={(e) => setFetchCount(parseInt(e.target.value) || 10)}
                    min="1"
                    max="50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Primary Language</Label>
                  <Select value={fetchLanguage} onValueChange={setFetchLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.nativeName} ({lang.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleDataFetch} 
                  disabled={loading || !selectedTable}
                  className="w-full md:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Fetching Data...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Fetch & Enhance Data
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Smart Q&A Tab */}
        <TabsContent value="qa-system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Smart Q&A System
              </CardTitle>
              <CardDescription>
                Generate answers for predefined spiritual questions or create custom Q&A pairs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Question Category</Label>
                  <Select value={qaCategory} onValueChange={setQaCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Response Language</Label>
                  <Select value={qaLanguage} onValueChange={setQaLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.nativeName} ({lang.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Predefined Questions</Label>
                  <Select value={selectedQuestion} onValueChange={setSelectedQuestion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose from predefined questions" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredQuestions.map((q) => (
                        <SelectItem key={q.id} value={q.question}>
                          <div className="text-left">
                            <div className="font-medium">{q.question.substring(0, 60)}...</div>
                            <div className="text-xs text-muted-foreground">{q.category}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-center text-sm text-muted-foreground">OR</div>

                <div className="space-y-2">
                  <Label htmlFor="custom-question">Custom Question</Label>
                  <Textarea
                    id="custom-question"
                    placeholder="Enter your custom spiritual question here..."
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {generatedAnswer && (
                <div className="space-y-2">
                  <Label>Generated Answer</Label>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm">{generatedAnswer}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <Button 
                  onClick={handleQuestionGeneration} 
                  disabled={loading || (!selectedQuestion && !customQuestion.trim())}
                  className="w-full md:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Answer...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Generate & Save Answer
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audio Generator Tab */}
        <TabsContent value="audio-generator">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Audio Generator
              </CardTitle>
              <CardDescription>
                Convert text to high-quality audio with multiple voice options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="audio-text">Text to Convert</Label>
                  <Textarea
                    id="audio-text"
                    placeholder="Enter the text you want to convert to audio..."
                    value={audioText}
                    onChange={(e) => setAudioText(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Voice Selection</Label>
                  <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select voice" />
                    </SelectTrigger>
                    <SelectContent>
                      {voices.map((voice) => (
                        <SelectItem key={voice.voice_id} value={voice.voice_id}>
                          {voice.name} {voice.gender && voice.style && `(${voice.gender}, ${voice.style})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleAudioGeneration} 
                  disabled={loading || !audioText.trim()}
                  className="w-full md:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Audio...
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4 mr-2" />
                      Generate Audio
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Translator Tab */}
        <TabsContent value="translator">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Multi-Language Translator
              </CardTitle>
              <CardDescription>
                Translate content between multiple Indian and international languages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Source Language</Label>
                  <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.nativeName} ({lang.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Target Language</Label>
                  <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.nativeName} ({lang.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="translate-text">Text to Translate</Label>
                <Textarea
                  id="translate-text"
                  placeholder="Enter the text you want to translate..."
                  value={translateText}
                  onChange={(e) => setTranslateText(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleTranslation} 
                  disabled={loading || !translateText.trim() || sourceLanguage === targetLanguage}
                  className="w-full md:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Translating...
                    </>
                  ) : (
                    <>
                      <Languages className="h-4 w-4 mr-2" />
                      Translate Text
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { AdminEnhancedDataManager };