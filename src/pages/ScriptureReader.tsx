import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Home, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

interface Scripture {
  id: string;
  title: string;
  author: string;
  description: string;
}

interface Chapter {
  id: string;
  chapter_number: number;
  title: string;
  content: string;
  summary: string;
  verse_count: number;
}

const ScriptureReader = () => {
  const { scriptureId, chapterId } = useParams();
  const navigate = useNavigate();
  const [scripture, setScripture] = useState<Scripture | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScriptureData();
  }, [scriptureId]);

  useEffect(() => {
    if (chapterId && chapters.length > 0) {
      const chapter = chapters.find(c => c.id === chapterId);
      if (chapter) {
        setCurrentChapter(chapter);
      }
    } else if (chapters.length > 0) {
      // Default to first chapter if no chapter selected
      setCurrentChapter(chapters[0]);
      navigate(`/scriptures/${scriptureId}/${chapters[0].id}`, { replace: true });
    }
  }, [chapterId, chapters, scriptureId]);

  const fetchScriptureData = async () => {
    try {
      setLoading(true);

      // Fetch scripture details
      const { data: scriptureData, error: scriptureError } = await supabase
        .from("scriptures")
        .select("*")
        .eq("id", scriptureId)
        .single();

      if (scriptureError) throw scriptureError;
      setScripture(scriptureData);

      // Fetch chapters
      const { data: chaptersData, error: chaptersError } = await supabase
        .from("scripture_chapters")
        .select("*")
        .eq("scripture_id", scriptureId)
        .order("chapter_number", { ascending: true });

      if (chaptersError) throw chaptersError;
      setChapters(chaptersData || []);
    } catch (error: any) {
      toast.error("Failed to load scripture", {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const navigateToChapter = (chapterId: string) => {
    navigate(`/scriptures/${scriptureId}/${chapterId}`);
  };

  const goToPreviousChapter = () => {
    if (!currentChapter) return;
    const currentIndex = chapters.findIndex(c => c.id === currentChapter.id);
    if (currentIndex > 0) {
      navigateToChapter(chapters[currentIndex - 1].id);
    }
  };

  const goToNextChapter = () => {
    if (!currentChapter) return;
    const currentIndex = chapters.findIndex(c => c.id === currentChapter.id);
    if (currentIndex < chapters.length - 1) {
      navigateToChapter(chapters[currentIndex + 1].id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="grid md:grid-cols-4 gap-6">
            <Skeleton className="h-96 md:col-span-1" />
            <Skeleton className="h-96 md:col-span-3" />
          </div>
        </div>
      </div>
    );
  }

  if (!scripture || !currentChapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Scripture Not Found</CardTitle>
            <CardDescription>The scripture you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/admin")} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentChapterIndex = chapters.findIndex(c => c.id === currentChapter.id);
  const hasPrevious = currentChapterIndex > 0;
  const hasNext = currentChapterIndex < chapters.length - 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
                <Home className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{scripture.title}</h1>
                <p className="text-sm text-muted-foreground">{scripture.author}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar - Chapter Navigation */}
          <aside className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Chapters
                </CardTitle>
                <CardDescription>{chapters.length} Kaands</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 max-h-[600px] overflow-y-auto">
                {chapters.map((chapter) => (
                  <Button
                    key={chapter.id}
                    variant={currentChapter.id === chapter.id ? "default" : "outline"}
                    className="w-full justify-start text-left"
                    onClick={() => navigateToChapter(chapter.id)}
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-semibold">{chapter.chapter_number}. {chapter.title}</span>
                      <span className="text-xs opacity-70">{chapter.verse_count} verses</span>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">
                      {currentChapter.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      Chapter {currentChapter.chapter_number} • {currentChapter.verse_count} verses
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Summary */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-foreground">Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">{currentChapter.summary}</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                    {currentChapter.content}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={goToPreviousChapter}
                    disabled={!hasPrevious}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  <span className="text-sm text-muted-foreground">
                    {currentChapterIndex + 1} of {chapters.length}
                  </span>

                  <Button
                    variant="outline"
                    onClick={goToNextChapter}
                    disabled={!hasNext}
                  >
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ScriptureReader;
