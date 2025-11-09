import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { Book, Plus, Edit, Trash2, BookOpen } from "lucide-react";
import { FileUpload } from "./FileUpload";

export const AdminScriptures = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scriptures, setScriptures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingScripture, setEditingScripture] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    tradition: "",
    language: "hi",
    description: "",
    summary: "",
    type: "scripture" as "scripture" | "commentary" | "mantra" | "devotional" | "philosophical",
    total_chapters: 1,
    difficulty_level: "beginner" as "beginner" | "intermediate" | "advanced",
    pdf_url: "",
    audio_url: ""
  });

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
        description: "Failed to fetch scriptures",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingScripture) {
        const { error } = await supabase
          .from('scriptures')
          .update(formData)
          .eq('id', editingScripture.id);

        if (error) throw error;
        toast({ title: "Success", description: "Scripture updated successfully" });
      } else {
        const { error } = await supabase
          .from('scriptures')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Scripture added successfully" });
      }

      setIsDialogOpen(false);
      setEditingScripture(null);
      setFormData({
        title: "",
        author: "",
        tradition: "",
        language: "hi",
        description: "",
        summary: "",
        type: "scripture" as "scripture" | "commentary" | "mantra" | "devotional" | "philosophical",
        total_chapters: 1,
        difficulty_level: "beginner" as "beginner" | "intermediate" | "advanced",
        pdf_url: "",
        audio_url: ""
      });
      fetchScriptures();
    } catch (error) {
      console.error('Error saving scripture:', error);
      toast({
        title: "Error",
        description: "Failed to save scripture",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (scripture) => {
    setEditingScripture(scripture);
    setFormData(scripture);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this scripture?')) return;

    try {
      const { error } = await supabase
        .from('scriptures')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Scripture deleted successfully" });
      fetchScriptures();
    } catch (error) {
      console.error('Error deleting scripture:', error);
      toast({
        title: "Error",
        description: "Failed to delete scripture",
        variant: "destructive"
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="h-5 w-5" />
          Scriptures Management
        </CardTitle>
        <CardDescription>Manage spiritual scriptures and texts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              setEditingScripture(null);
              setFormData({
                title: "",
                author: "",
                tradition: "",
                language: "hi",
                description: "",
                summary: "",
                type: "scripture",
                total_chapters: 1,
                difficulty_level: "beginner",
                pdf_url: "",
                audio_url: ""
              });
            }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Scripture
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingScripture ? 'Edit Scripture' : 'Add New Scripture'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Author</label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Tradition</label>
                  <Input
                    value={formData.tradition}
                    onChange={(e) => setFormData({ ...formData, tradition: e.target.value })}
                  />
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
                  <label className="text-sm font-medium">Type</label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(value: "scripture" | "commentary" | "mantra" | "devotional" | "philosophical") => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scripture">Scripture</SelectItem>
                      <SelectItem value="commentary">Commentary</SelectItem>
                      <SelectItem value="mantra">Mantra</SelectItem>
                      <SelectItem value="devotional">Devotional</SelectItem>
                      <SelectItem value="philosophical">Philosophical</SelectItem>
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
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Summary</label>
                <Textarea
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Total Chapters</label>
                  <Input
                    type="number"
                    value={formData.total_chapters}
                    onChange={(e) => setFormData({ ...formData, total_chapters: parseInt(e.target.value) || 1 })}
                    min="1"
                  />
                </div>
              </div>
              
              <div>
                <FileUpload
                  bucket="scriptures-pdfs"
                  path="pdfs/"
                  accept=".pdf,application/pdf"
                  maxSize={50}
                  label="Scripture PDF"
                  currentFile={formData.pdf_url}
                  onUploadComplete={(url) => setFormData({ ...formData, pdf_url: url })}
                />
                <Input
                  className="mt-2"
                  value={formData.pdf_url}
                  onChange={(e) => setFormData({ ...formData, pdf_url: e.target.value })}
                  placeholder="Or enter PDF URL manually"
                />
              </div>
              
              <div>
                <FileUpload
                  bucket="scriptures-audio"
                  path="audio/"
                  accept="audio/*"
                  maxSize={100}
                  label="Scripture Audio"
                  currentFile={formData.audio_url}
                  onUploadComplete={(url) => setFormData({ ...formData, audio_url: url })}
                />
                <Input
                  className="mt-2"
                  value={formData.audio_url}
                  onChange={(e) => setFormData({ ...formData, audio_url: e.target.value })}
                  placeholder="Or enter audio URL manually"
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : (editingScripture ? 'Update Scripture' : 'Add Scripture')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Tradition</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scriptures.map((scripture) => (
                <TableRow key={scripture.id}>
                  <TableCell className="font-medium">{scripture.title}</TableCell>
                  <TableCell>{scripture.author}</TableCell>
                  <TableCell>{scripture.tradition}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{scripture.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{scripture.difficulty_level}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => navigate(`/scriptures/${scripture.id}`)}
                        title="Read Scripture"
                      >
                        <BookOpen className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(scripture)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(scripture.id)}
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