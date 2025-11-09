import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, BookOpen, Music } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

interface Scripture {
  id: string;
  title: string;
  author: string;
  description: string;
  tradition: string;
  language: string;
  total_chapters: number;
  difficulty_level: string;
  pdf_url: string | null;
  audio_url: string | null;
}

const Scriptures = () => {
  const navigate = useNavigate();
  const [scriptures, setScriptures] = useState<Scripture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScriptures();
  }, []);

  const fetchScriptures = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("scriptures")
        .select("*")
        .order("title", { ascending: true });

      if (error) throw error;
      setScriptures(data || []);
    } catch (error: any) {
      toast.error("Failed to load scriptures", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const openScripture = (scriptureId: string) => {
    navigate(`/scriptures/${scriptureId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Sacred Scriptures</h1>
              <p className="text-muted-foreground">Explore ancient wisdom and spiritual texts</p>
            </div>
            <Button variant="outline" onClick={() => navigate("/admin")}>
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scriptures.map((scripture) => (
            <Card
              key={scripture.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openScripture(scripture.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <BookOpen className="h-8 w-8 text-primary" />
                  {scripture.audio_url && (
                    <Music className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <CardTitle className="mt-4">{scripture.title}</CardTitle>
                <CardDescription>{scripture.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {scripture.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {scripture.tradition}
                  </span>
                  <span className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded">
                    {scripture.total_chapters} chapters
                  </span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {scripture.difficulty_level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {scriptures.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Scriptures Found</h3>
            <p className="text-muted-foreground">
              No scriptures are available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scriptures;
