import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Minus, Play, Pause, RotateCcw, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Practices = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(108);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const increment = () => {
    if (count < target) {
      setCount(count + 1);
      if (count + 1 === target) {
        toast({
          title: "🎉 Congratulations!",
          description: "You've completed your mantra count!",
        });
        setIsActive(false);
      }
    }
  };

  const reset = () => {
    setCount(0);
    setTime(0);
    setIsActive(false);
  };

  const progress = (count / target) * 100;

  const popularMantras = [
    { name: "Om Namah Shivaya", target: 108 },
    { name: "Hare Krishna", target: 108 },
    { name: "Om Mani Padme Hum", target: 108 },
    { name: "Gayatri Mantra", target: 54 }
  ];

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
            <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Daily Practices
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Track your mantras and build your spiritual routine
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Mantra Counter</CardTitle>
            <CardDescription>Traditional 108 bead mala counter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center space-y-4">
              <div className="text-8xl font-bold text-primary">
                {count}
              </div>
              <div className="text-2xl text-muted-foreground">
                / {target}
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={increment}
                disabled={count >= target}
                className="h-20 w-20 rounded-full text-2xl"
              >
                <Plus className="h-8 w-8" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={reset}
                className="h-20 w-20 rounded-full"
              >
                <RotateCcw className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setTarget(54)}
                className={target === 54 ? "border-primary" : ""}
              >
                54
              </Button>
              <Button
                variant="outline"
                onClick={() => setTarget(108)}
                className={target === 108 ? "border-primary" : ""}
              >
                108
              </Button>
              <Button
                variant="outline"
                onClick={() => setTarget(216)}
                className={target === 216 ? "border-primary" : ""}
              >
                216
              </Button>
              <Button
                variant="outline"
                onClick={() => setTarget(1008)}
                className={target === 1008 ? "border-primary" : ""}
              >
                1008
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Popular Mantras</CardTitle>
            <CardDescription>Start practicing these sacred mantras</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {popularMantras.map((mantra, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-between h-auto py-4 px-4"
                  onClick={() => {
                    setTarget(mantra.target);
                    setCount(0);
                    toast({
                      title: "Mantra Selected",
                      description: `${mantra.name} - ${mantra.target} times`
                    });
                  }}
                >
                  <span className="font-medium">{mantra.name}</span>
                  <Badge variant="secondary">{mantra.target}x</Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
          <CardContent className="pt-6 text-center space-y-4">
            <Sparkles className="h-12 w-12 mx-auto text-primary" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Premium Features Coming Soon</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>📊 Detailed Progress Tracking</div>
                <div>🔥 Streak Monitoring</div>
                <div>🏆 Achievement Badges</div>
                <div>⏰ Smart Reminders</div>
                <div>📈 Analytics Dashboard</div>
                <div>🎯 Custom Goals</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Practices;
