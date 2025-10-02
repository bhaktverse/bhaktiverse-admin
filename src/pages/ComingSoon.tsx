import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getFeatureName = () => {
    const path = location.pathname.replace("/", "");
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-6">
              <Sparkles className="h-20 w-20 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-4xl mb-4">Coming Soon</CardTitle>
            <CardDescription className="text-lg">
              {getFeatureName()} feature is under development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              We're working hard to bring you this amazing feature. Stay tuned for updates!
            </p>
            <div className="space-y-3">
              <div className="text-sm font-semibold">What to expect:</div>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div>✨ Beautiful and intuitive interface</div>
                <div>🚀 Real-time updates and notifications</div>
                <div>🎯 Personalized experience</div>
                <div>🌐 Multi-language support</div>
              </div>
            </div>
            <Button size="lg" onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoon;
