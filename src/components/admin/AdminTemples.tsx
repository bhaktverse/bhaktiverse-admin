import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Plus, Edit, Trash2, Star } from "lucide-react";

export const AdminTemples = () => {
  const { toast } = useToast();
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTemple, setEditingTemple] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    primary_deity: "",
    tradition: "",
    description: "",
    history: "",
    location: { city: "", state: "", country: "India" },
    visiting_hours: { morning: "", evening: "" },
    contact_info: { phone: "", email: "" },
    facilities: [],
    live_darshan_url: "",
    youtube_channel_id: ""
  });

  useEffect(() => {
    fetchTemples();
  }, []);

  const fetchTemples = async () => {
    try {
      const { data, error } = await supabase
        .from('temples')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTemples(data || []);
    } catch (error) {
      console.error('Error fetching temples:', error);
      toast({
        title: "Error",
        description: "Failed to fetch temples",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingTemple) {
        const { error } = await supabase
          .from('temples')
          .update(formData)
          .eq('id', editingTemple.id);

        if (error) throw error;
        toast({ title: "Success", description: "Temple updated successfully" });
      } else {
        const { error } = await supabase
          .from('temples')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Temple added successfully" });
      }

      setIsDialogOpen(false);
      setEditingTemple(null);
      resetForm();
      fetchTemples();
    } catch (error) {
      console.error('Error saving temple:', error);
      toast({
        title: "Error",
        description: "Failed to save temple",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      primary_deity: "",
      tradition: "",
      description: "",
      history: "",
      location: { city: "", state: "", country: "India" },
      visiting_hours: { morning: "", evening: "" },
      contact_info: { phone: "", email: "" },
      facilities: [],
      live_darshan_url: "",
      youtube_channel_id: ""
    });
  };

  const handleEdit = (temple) => {
    setEditingTemple(temple);
    setFormData(temple);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this temple?')) return;

    try {
      const { error } = await supabase
        .from('temples')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Temple deleted successfully" });
      fetchTemples();
    } catch (error) {
      console.error('Error deleting temple:', error);
      toast({
        title: "Error",
        description: "Failed to delete temple",
        variant: "destructive"
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Temples Management
        </CardTitle>
        <CardDescription>Manage temple information and services</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              setEditingTemple(null);
              resetForm();
            }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Temple
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingTemple ? 'Edit Temple' : 'Add New Temple'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Temple Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Primary Deity</label>
                  <Input
                    value={formData.primary_deity}
                    onChange={(e) => setFormData({ ...formData, primary_deity: e.target.value })}
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
                  <label className="text-sm font-medium">City</label>
                  <Input
                    value={formData.location?.city || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      location: { ...formData.location, city: e.target.value } 
                    })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">State</label>
                  <Input
                    value={formData.location?.state || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      location: { ...formData.location, state: e.target.value } 
                    })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Country</label>
                  <Input
                    value={formData.location?.country || "India"}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      location: { ...formData.location, country: e.target.value } 
                    })}
                  />
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
                <label className="text-sm font-medium">History</label>
                <Textarea
                  value={formData.history}
                  onChange={(e) => setFormData({ ...formData, history: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Morning Hours</label>
                  <Input
                    value={formData.visiting_hours?.morning || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      visiting_hours: { ...formData.visiting_hours, morning: e.target.value } 
                    })}
                    placeholder="6:00 AM - 12:00 PM"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Evening Hours</label>
                  <Input
                    value={formData.visiting_hours?.evening || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      visiting_hours: { ...formData.visiting_hours, evening: e.target.value } 
                    })}
                    placeholder="4:00 PM - 9:00 PM"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    value={formData.contact_info?.phone || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      contact_info: { ...formData.contact_info, phone: e.target.value } 
                    })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    value={formData.contact_info?.email || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      contact_info: { ...formData.contact_info, email: e.target.value } 
                    })}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Live Darshan URL</label>
                  <Input
                    value={formData.live_darshan_url}
                    onChange={(e) => setFormData({ ...formData, live_darshan_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">YouTube Channel ID</label>
                  <Input
                    value={formData.youtube_channel_id}
                    onChange={(e) => setFormData({ ...formData, youtube_channel_id: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : (editingTemple ? 'Update Temple' : 'Add Temple')}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Primary Deity</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Tradition</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {temples.map((temple) => (
                <TableRow key={temple.id}>
                  <TableCell className="font-medium">{temple.name}</TableCell>
                  <TableCell>{temple.primary_deity}</TableCell>
                  <TableCell>
                    {temple.location?.city}, {temple.location?.state}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{temple.tradition}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {temple.rating || 0}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(temple)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(temple.id)}
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