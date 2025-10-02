import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Play, Pause, Volume2, Download, Loader2, ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Audio = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("alloy");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const voices = [
    { value: "alloy", label: "Alloy - Balanced" },
    { value: "echo", label: "Echo - Deep & Resonant" },
    { value: "fable", label: "Fable - Storytelling" },
    { value: "onyx", label: "Onyx - Powerful" },
    { value: "nova", label: "Nova - Energetic" },
    { value: "shimmer", label: "Shimmer - Gentle" }
  ];

  const languages = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    { value: "sa", label: "Sanskrit" },
    { value: "ta", label: "Tamil" },
    { value: "te", label: "Telugu" },
    { value: "bn", label: "Bengali" }
  ];

  const popularMantras = [
    { text: "Om Namah Shivaya", lang: "sa" },
    { text: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare", lang: "sa" },
    { text: "Om Mani Padme Hum", lang: "sa" },
    { text: "Gayatri Mantra: Om Bhur Bhuvaḥ Swaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt", lang: "sa" }
  ];

  const generateAudio = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to convert",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('audio-generator', {
        body: {
          operation: 'generate_audio',
          text: text,
          voice: voice,
          language: language
        }
      });

      if (error) throw error;

      if (data?.audioData) {
        // Convert base64 to blob
        const byteCharacters = atob(data.audioData);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'audio/mp3' });
        const url = URL.createObjectURL(blob);
        
        setAudioUrl(url);
        toast({
          title: "Success",
          description: "Audio generated successfully!"
        });
      }
    } catch (error) {
      console.error('Audio generation error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate audio",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = `spiritual-audio-${Date.now()}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volume2 className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Divine Audio Generator
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Transform sacred texts into high-quality audio with AI-powered voices
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Create Your Audio
            </CardTitle>
            <CardDescription>
              Enter any mantra, prayer, or spiritual text to generate audio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="text">Sacred Text</Label>
              <Textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter mantra, prayer, or spiritual text..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="voice">Voice Style</Label>
                <Select value={voice} onValueChange={setVoice}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {voices.map((v) => (
                      <SelectItem key={v.value} value={v.value}>
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((l) => (
                      <SelectItem key={l.value} value={l.value}>
                        {l.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={generateAudio} 
              disabled={loading || !text.trim()}
              className="w-full gap-2"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Audio...
                </>
              ) : (
                <>
                  <Volume2 className="h-5 w-5" />
                  Generate Audio
                </>
              )}
            </Button>

            {audioUrl && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <audio ref={audioRef} src={audioUrl} className="hidden" />
                  <div className="flex items-center justify-between gap-4">
                    <Button
                      onClick={togglePlayPause}
                      size="lg"
                      className="gap-2"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="h-5 w-5" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-5 w-5" />
                          Play
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={downloadAudio}
                      variant="outline"
                      size="lg"
                      className="gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Mantras</CardTitle>
            <CardDescription>Click to try these sacred mantras</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {popularMantras.map((mantra, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-3 px-4 text-left"
                  onClick={() => {
                    setText(mantra.text);
                    setLanguage(mantra.lang);
                  }}
                >
                  <div className="flex-1">
                    <div className="font-medium">{mantra.text}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Language: {languages.find(l => l.value === mantra.lang)?.label}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Audio;
