import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MessagesSquare, ArrowLeft, Send, Loader2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const suggestedQuestions = [
    "What is the meaning of Om?",
    "How can I start meditation?",
    "Tell me about the Bhagavad Gita",
    "What is karma yoga?",
    "How to practice mindfulness?",
    "Explain the concept of dharma"
  ];

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    // Simulated AI response for now
    setTimeout(() => {
      const responses = [
        "This is a profound spiritual question. In Hindu philosophy, this concept teaches us about the interconnectedness of all beings and the path to enlightenment.",
        "According to ancient scriptures, the practice you're asking about has been followed for thousands of years to achieve inner peace and spiritual growth.",
        "Let me share what the sacred texts say about this... The wisdom passed down through generations emphasizes the importance of devotion, knowledge, and selfless action.",
        "Your question touches on a fundamental teaching. The answer lies in understanding the unity of the individual soul (Atman) with the universal consciousness (Brahman)."
      ];
      
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 1500);
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

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
            <MessagesSquare className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              AI Spiritual Guide
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Ask any questions about spirituality, scriptures, and practices
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Your Spiritual Companion
            </CardTitle>
            <CardDescription>
              Get instant answers to your spiritual questions powered by AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            {messages.length === 0 ? (
              <div className="text-center py-8 space-y-6">
                <div className="text-muted-foreground mb-6">
                  Start by asking a question or choose from popular topics below
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left h-auto py-3 px-4 justify-start"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 mb-4 max-h-[500px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask your spiritual question..."
                disabled={loading}
              />
              <Button onClick={sendMessage} disabled={loading || !input.trim()} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
          <CardContent className="pt-6 text-center">
            <Sparkles className="h-8 w-8 mx-auto text-primary mb-3" />
            <h3 className="font-semibold mb-2">Premium AI Features Coming Soon</h3>
            <p className="text-sm text-muted-foreground">
              Voice conversations, personalized guidance, and deep spiritual analysis
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
