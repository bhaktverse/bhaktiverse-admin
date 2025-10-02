import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Volume2, Video, BookOpen, Calendar, Users, Trophy, MessagesSquare } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Volume2,
      title: "Divine Audio",
      description: "AI-powered mantras & spiritual teachings",
      path: "/audio",
      premium: false
    },
    {
      icon: Video,
      title: "Bhakti Shorts",
      description: "Short devotional videos for daily inspiration",
      path: "/videos",
      premium: false
    },
    {
      icon: BookOpen,
      title: "Sacred Scriptures",
      description: "Ancient wisdom in multiple languages",
      path: "/scriptures",
      premium: false
    },
    {
      icon: Calendar,
      title: "Spiritual Calendar",
      description: "Never miss important festivals & events",
      path: "/calendar",
      premium: true
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with devotees worldwide",
      path: "/community",
      premium: true
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Track your spiritual journey",
      path: "/achievements",
      premium: true
    },
    {
      icon: MessagesSquare,
      title: "AI Spiritual Guide",
      description: "Chat with AI about your spiritual questions",
      path: "/chat",
      premium: false
    },
    {
      icon: Sparkles,
      title: "Daily Practices",
      description: "Mantra counting & meditation tracking",
      path: "/practices",
      premium: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block animate-in fade-in slide-in-from-top duration-1000">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                BhaktiVerse
              </h1>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Your Complete Spiritual Companion - Connect, Learn, and Grow in Your Devotional Journey
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Button size="lg" onClick={() => navigate("/audio")} className="gap-2">
              <Volume2 className="h-5 w-5" />
              Start Listening
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/videos")} className="gap-2">
              <Video className="h-5 w-5" />
              Watch Shorts
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {feature.premium && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Active Users", value: "10K+" },
            { label: "Daily Mantras", value: "1M+" },
            { label: "Spiritual Content", value: "5K+" },
            { label: "Languages", value: "15+" }
          ].map((stat, index) => (
            <Card key={index} className="text-center animate-in fade-in zoom-in" style={{ animationDelay: `${index * 100 + 800}ms` }}>
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium CTA */}
        <Card className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20 animate-in fade-in zoom-in duration-1000 delay-1000">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">
              🌟 Premium Features Coming Soon 🌟
            </CardTitle>
            <CardDescription className="text-lg">
              Unlock advanced features to deepen your spiritual practice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center space-y-2">
                <Calendar className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Smart Reminders</h3>
                <p className="text-sm text-muted-foreground">Never miss prayers & festivals</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Live Satsang</h3>
                <p className="text-sm text-muted-foreground">Join live spiritual gatherings</p>
              </div>
              <div className="text-center space-y-2">
                <Trophy className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">Monitor your spiritual growth</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Notify Me When Available
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
