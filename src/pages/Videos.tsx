import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Play, ArrowLeft, Heart, Share2, Eye, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BhaktiShort {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  category: string;
  duration_seconds: number | null;
  views_count: number;
  likes_count: number;
  tags: any;
  featured: boolean;
}

const Videos = () => {
  const [videos, setVideos] = useState<BhaktiShort[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<BhaktiShort | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('bhakti_shorts')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
      toast({
        title: "Error",
        description: "Failed to load videos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVideoClick = async (video: BhaktiShort) => {
    setSelectedVideo(video);
    
    // Update view count
    try {
      await supabase
        .from('bhakti_shorts')
        .update({ views_count: (video.views_count || 0) + 1 })
        .eq('id', video.id);
      
      // Update local state
      setVideos(videos.map(v => 
        v.id === video.id ? { ...v, views_count: v.views_count + 1 } : v
      ));
    } catch (error) {
      console.error('Error updating view count:', error);
    }
  };

  const handleLike = async (video: BhaktiShort) => {
    try {
      await supabase
        .from('bhakti_shorts')
        .update({ likes_count: (video.likes_count || 0) + 1 })
        .eq('id', video.id);
      
      setVideos(videos.map(v => 
        v.id === video.id ? { ...v, likes_count: v.likes_count + 1 } : v
      ));
      
      toast({
        title: "❤️ Liked!",
        description: "Video added to your favorites"
      });
    } catch (error) {
      console.error('Error liking video:', error);
    }
  };

  const categories = Array.from(new Set(videos.map(v => v.category)));

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
            <Play className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Bhakti Shorts
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Short devotional videos for daily spiritual inspiration
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              All
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : videos.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Sparkles className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <CardTitle className="mb-2">No Videos Yet</CardTitle>
              <CardDescription>
                Check back soon for inspiring devotional content!
              </CardDescription>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card 
                key={video.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
                  {video.thumbnail_url ? (
                    <img 
                      src={video.thumbnail_url} 
                      alt={video.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-purple-500/20">
                      <Play className="h-16 w-16 text-primary" />
                    </div>
                  )}
                  {video.featured && (
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-orange-500">
                      Featured
                    </Badge>
                  )}
                  {video.duration_seconds && (
                    <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                      {Math.floor(video.duration_seconds / 60)}:{(video.duration_seconds % 60).toString().padStart(2, '0')}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                  {video.description && (
                    <CardDescription className="line-clamp-2">
                      {video.description}
                    </CardDescription>
                  )}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {video.views_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {video.likes_count}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoClick(video);
                      }}
                    >
                      <Play className="h-4 w-4" />
                      Watch
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(video);
                      }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast({
                          title: "Share",
                          description: "Share feature coming soon!"
                        });
                      }}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <Card>
                <CardContent className="p-0">
                  <video 
                    src={selectedVideo.video_url} 
                    controls 
                    autoPlay
                    className="w-full aspect-video rounded-t-lg"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>{selectedVideo.title}</CardTitle>
                  {selectedVideo.description && (
                    <CardDescription>{selectedVideo.description}</CardDescription>
                  )}
                </CardHeader>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
