import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Music, Plus, Edit, Trash2, Play, Download } from "lucide-react";
import { FileUpload } from "./FileUpload";

export const AdminAudioLibrary = () => {
  const { toast } = useToast();
  const [audioItems, setAudioItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    category: "mantra",
    duration: 0,
    language: "hi",
    audio_url: "",
    lyrics: "",
    meaning: "",
    pronunciation_guide: "",
    associated_deity: "",
    difficulty_level: "beginner"
  });

  useEffect(() => {
    fetchAudioLibrary();
  }, []);

  const fetchAudioLibrary = async () => {
    try {
      const { data, error } = await supabase
        .from('audio_library')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAudioItems(data || []);
    } catch (error) {
      console.error('Error fetching audio library:', error);
      toast({
        title: "Error",
        description: "Failed to fetch audio library",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingItem) {
        const { error } = await supabase
          .from('audio_library')
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Success", description: "Audio updated successfully" });
      } else {
        const { error } = await supabase
          .from('audio_library')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Audio added successfully" });
      }

      setIsDialogOpen(false);
      setEditingItem(null);
      resetForm();
      fetchAudioLibrary();
    } catch (error) {
      console.error('Error saving audio:', error);
      toast({
        title: "Error",
        description: "Failed to save audio",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      artist: "",
      category: "mantra",
      duration: 0,
      language: "hi",
      audio_url: "",
      lyrics: "",
      meaning: "",
      pronunciation_guide: "",
      associated_deity: "",
      difficulty_level: "beginner"
    });
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this audio?')) return;

    try {
      const { error } = await supabase
        .from('audio_library')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Audio deleted successfully" });
      fetchAudioLibrary();
    } catch (error) {
      console.error('Error deleting audio:', error);
      toast({
        title: "Error",
        description: "Failed to delete audio",
        variant: "destructive"
      });
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          Audio Library Management
        </CardTitle>
        <CardDescription>Manage mantras, bhajans, aartis, and spiritual audio</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              setEditingItem(null);
              resetForm();
            }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Audio
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Edit Audio' : 'Add New Audio'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Title *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Artist</label>
                  <Input
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category *</label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mantra">Mantra</SelectItem>
                      <SelectItem value="bhajan">Bhajan</SelectItem>
                      <SelectItem value="aarti">Aarti</SelectItem>
                      <SelectItem value="meditation">Meditation</SelectItem>
                      <SelectItem value="story">Story</SelectItem>
                      <SelectItem value="discourse">Discourse</SelectItem>
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
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="te">Telugu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Duration (seconds) *</label>
                  <Input
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Associated Deity</label>
                  <Input
                    value={formData.associated_deity}
                    onChange={(e) => setFormData({ ...formData, associated_deity: e.target.value })}
                    placeholder="e.g., Shiva, Krishna"
                  />
                </div>
              </div>

              <div>
                <FileUpload
                  bucket="audio-library"
                  path="audio/"
                  accept="audio/*"
                  maxSize={100}
                  label="Audio File *"
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
              
              <div>
                <label className="text-sm font-medium">Lyrics</label>
                <Textarea
                  value={formData.lyrics}
                  onChange={(e) => setFormData({ ...formData, lyrics: e.target.value })}
                  rows={4}
                  placeholder="Enter lyrics in original language"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Meaning</label>
                <Textarea
                  value={formData.meaning}
                  onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
                  rows={3}
                  placeholder="Enter English translation/meaning"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Pronunciation Guide</label>
                <Textarea
                  value={formData.pronunciation_guide}
                  onChange={(e) => setFormData({ ...formData, pronunciation_guide: e.target.value })}
                  rows={2}
                  placeholder="Enter pronunciation guidance"
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : (editingItem ? 'Update Audio' : 'Add Audio')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Artist</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {audioItems.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.artist}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>{formatDuration(item.duration)}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.language}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {item.download_count || 0}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {item.audio_url && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(item.audio_url, '_blank')}
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
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