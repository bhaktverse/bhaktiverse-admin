import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { HelpCircle, Plus, Edit, Trash2, Bot, User } from "lucide-react";

export const AdminFAQs = () => {
  const { toast } = useToast();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "rituals" as "rituals" | "philosophy" | "practices" | "festivals" | "mantras" | "meditation",
    language: "hi",
    difficulty_level: "beginner" as "beginner" | "intermediate" | "advanced",
    source_references: [],
    ai_generated: true,
    verified_by_scholar: false
  });

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const { data, error } = await supabase
        .from('spiritual_faqs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFaqs(data || []);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch FAQs",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingFaq) {
        const { error } = await supabase
          .from('spiritual_faqs')
          .update(formData)
          .eq('id', editingFaq.id);

        if (error) throw error;
        toast({ title: "Success", description: "FAQ updated successfully" });
      } else {
        const { error } = await supabase
          .from('spiritual_faqs')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "FAQ added successfully" });
      }

      setIsDialogOpen(false);
      setEditingFaq(null);
      resetForm();
      fetchFAQs();
    } catch (error) {
      console.error('Error saving FAQ:', error);
      toast({
        title: "Error",
        description: "Failed to save FAQ",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      question: "",
      answer: "",
      category: "rituals" as "rituals" | "philosophy" | "practices" | "festivals" | "mantras" | "meditation",
      language: "hi",
      difficulty_level: "beginner" as "beginner" | "intermediate" | "advanced",
      source_references: [],
      ai_generated: true,
      verified_by_scholar: false
    });
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setFormData(faq);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;

    try {
      const { error } = await supabase
        .from('spiritual_faqs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "FAQ deleted successfully" });
      fetchFAQs();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      toast({
        title: "Error",
        description: "Failed to delete FAQ",
        variant: "destructive"
      });
    }
  };

  const generateAIFAQ = async () => {
    // Mock AI FAQ generation
    const topics = [
      "meditation techniques",
      "devotional practices",
      "spiritual awakening",
      "karma and dharma",
      "temple worship",
      "mantra chanting"
    ];
    
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    setFormData({
      ...formData,
      question: `What is the importance of ${randomTopic} in spiritual life?`,
      answer: `${randomTopic.charAt(0).toUpperCase() + randomTopic.slice(1)} plays a crucial role in spiritual development. It helps purify the mind, develop concentration, and create a deeper connection with the divine. Regular practice leads to inner peace, wisdom, and spiritual growth.`,
      ai_generated: true
    });
    
    toast({
      title: "AI FAQ Generated",
      description: "Please review and edit the generated content"
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          FAQs Management
        </CardTitle>
        <CardDescription>Manage frequently asked spiritual questions and answers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                setEditingFaq(null);
                resetForm();
              }}>
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Question</label>
                  <Textarea
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    rows={2}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Answer</label>
                  <Textarea
                    value={formData.answer}
                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value: "rituals" | "philosophy" | "practices" | "festivals" | "mantras" | "meditation") => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rituals">Rituals</SelectItem>
                        <SelectItem value="philosophy">Philosophy</SelectItem>
                        <SelectItem value="practices">Practices</SelectItem>
                        <SelectItem value="festivals">Festivals</SelectItem>
                        <SelectItem value="mantras">Mantras</SelectItem>
                        <SelectItem value="meditation">Meditation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Language</label>
                    <Select 
                      value={formData.language} 
                      onValueChange={(value) => setFormData({ ...formData, language: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="sa">Sanskrit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Difficulty Level</label>
                    <Select 
                      value={formData.difficulty_level} 
                      onValueChange={(value: "beginner" | "intermediate" | "advanced") => setFormData({ ...formData, difficulty_level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.ai_generated}
                      onChange={(e) => setFormData({ ...formData, ai_generated: e.target.checked })}
                    />
                    <span className="text-sm">AI Generated</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.verified_by_scholar}
                      onChange={(e) => setFormData({ ...formData, verified_by_scholar: e.target.checked })}
                    />
                    <span className="text-sm">Scholar Verified</span>
                  </label>
                </div>

                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={generateAIFAQ}>
                    <Bot className="h-4 w-4 mr-2" />
                    Generate AI FAQ
                  </Button>
                  <Button type="submit" disabled={loading} className="flex-1">
                    {loading ? 'Saving...' : (editingFaq ? 'Update FAQ' : 'Add FAQ')}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faqs.map((faq) => (
                <TableRow key={faq.id}>
                  <TableCell className="font-medium max-w-xs truncate">
                    {faq.question}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{faq.category}</Badge>
                  </TableCell>
                  <TableCell>{faq.language}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{faq.difficulty_level}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {faq.ai_generated ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      {faq.verified_by_scholar && <Badge variant="default" className="text-xs">Verified</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(faq)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(faq.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};