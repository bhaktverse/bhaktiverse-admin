import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, ArrowLeft, Download, Volume2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Scriptures = () => {
  const [scriptures, setScriptures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchScriptures();
  }, []);

  const fetchScriptures = async () => {
    try {
      const { data, error } = await supabase
        .from('scriptures')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setScriptures(data || []);
    } catch (error) {
      console.error('Error fetching scriptures:', error);
      toast({
        title: "Error",
        description: "Failed to load scriptures",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
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
            <BookOpen className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Sacred Scriptures
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Explore ancient wisdom in multiple languages
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-muted rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : scriptures.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Sparkles className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <CardTitle className="mb-2">No Scriptures Available</CardTitle>
              <CardDescription>
                Sacred texts will be added soon!
              </CardDescription>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scriptures.map((scripture) => (
              <Card 
                key={scripture.id}
                className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{scripture.title}</CardTitle>
                    <Badge variant="outline">{scripture.language}</Badge>
                  </div>
                  {scripture.author && (
                    <CardDescription>by {scripture.author}</CardDescription>
                  )}
                  {scripture.tradition && (
                    <Badge variant="secondary" className="w-fit mt-2">
                      {scripture.tradition}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {scripture.summary && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {scripture.summary}
                    </p>
                  )}
                  
                  {scripture.description && (
                    <p className="text-sm line-clamp-2">
                      {scripture.description}
                    </p>
                  )}

                  {scripture.total_chapters && (
                    <div className="text-sm text-muted-foreground">
                      📖 {scripture.total_chapters} Chapters
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    {scripture.pdf_url && (
                      <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                        <a href={scripture.pdf_url} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                          PDF
                        </a>
                      </Button>
                    )}
                    {scripture.audio_url && (
                      <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                        <a href={scripture.audio_url} target="_blank" rel="noopener noreferrer">
                          <Volume2 className="h-4 w-4" />
                          Audio
                        </a>
                      </Button>
                    )}
                    {!scripture.pdf_url && !scripture.audio_url && (
                      <Button size="sm" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scriptures;
