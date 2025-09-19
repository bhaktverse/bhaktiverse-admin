import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Eye, Search, Filter, Calendar, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AdminSaints = () => {
  const [saints, setSaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSaint, setSelectedSaint] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tradition: "",
    biography: "",
    key_teachings: "",
    birth_year: "",
    death_year: "",
    image_url: "",
    primary_language: "hi",
    famous_quotes: [],
    personality_traits: {},
    verified: false
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchSaints();
  }, []);

  const fetchSaints = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('saints')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSaints(data || []);
    } catch (error) {
      console.error('Error fetching saints:', error);
      toast({
        title: "Error",
        description: "Failed to fetch saints data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToInsert = {
        ...formData,
        birth_year: formData.birth_year ? parseInt(formData.birth_year) : null,
        death_year: formData.death_year ? parseInt(formData.death_year) : null,
        famous_quotes: Array.isArray(formData.famous_quotes) ? formData.famous_quotes : [],
        personality_traits: typeof formData.personality_traits === 'object' ? formData.personality_traits : {} as any
      };

      const { error } = await supabase
        .from('saints')
        .insert([dataToInsert]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Saint added successfully"
      });
      
      setIsAddDialogOpen(false);
      setFormData({
        name: "",
        tradition: "",
        biography: "",
        key_teachings: "",
        birth_year: "",
        death_year: "",
        image_url: "",
        primary_language: "hi",
        famous_quotes: [],
        personality_traits: {},
        verified: false
      });
      fetchSaints();
    } catch (error) {
      console.error('Error adding saint:', error);
      toast({
        title: "Error",
        description: "Failed to add saint",
        variant: "destructive"
      });
    }
  };

  const filteredSaints = saints.filter(saint =>
    saint.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    saint.tradition?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Saints Management</h2>
          <p className="text-muted-foreground">Manage spiritual saints, gurus, and religious figures</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Saint
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Saint</DialogTitle>
              <DialogDescription>
                Add detailed information about a spiritual saint or guru
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="tradition">Tradition</Label>
                  <Input
                    id="tradition"
                    value={formData.tradition}
                    onChange={(e) => setFormData({ ...formData, tradition: e.target.value })}
                    placeholder="e.g., Hinduism, Buddhism, Sikhism"
                  />
                </div>
                <div>
                  <Label htmlFor="birth_year">Birth Year</Label>
                  <Input
                    id="birth_year"
                    type="number"
                    value={formData.birth_year}
                    onChange={(e) => setFormData({ ...formData, birth_year: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="death_year">Death Year</Label>
                  <Input
                    id="death_year"
                    type="number"
                    value={formData.death_year}
                    onChange={(e) => setFormData({ ...formData, death_year: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <Label htmlFor="biography">Biography</Label>
                <Textarea
                  id="biography"
                  value={formData.biography}
                  onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="key_teachings">Key Teachings</Label>
                <Textarea
                  id="key_teachings"
                  value={formData.key_teachings}
                  onChange={(e) => setFormData({ ...formData, key_teachings: e.target.value })}
                  rows={3}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Add Saint</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search saints by name or tradition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Saints Table */}
      <Card>
        <CardHeader>
          <CardTitle>Saints Database ({filteredSaints.length})</CardTitle>
          <CardDescription>
            Complete list of saints, gurus, and spiritual figures
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading saints...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Tradition</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Language</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSaints.map((saint) => (
                  <TableRow key={saint.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {saint.image_url && (
                          <img 
                            src={saint.image_url} 
                            alt={saint.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        )}
                        {saint.name}
                      </div>
                    </TableCell>
                    <TableCell>{saint.tradition || "—"}</TableCell>
                    <TableCell>
                      {saint.birth_year || "?"} - {saint.death_year || "?"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        <Globe className="h-3 w-3 mr-1" />
                        {saint.primary_language}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {saint.verified ? (
                        <Badge variant="default">Verified</Badge>
                      ) : (
                        <Badge variant="secondary">Pending</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedSaint(saint)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setFormData(saint);
                            setIsEditDialogOpen(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Saint Details Dialog */}
      {selectedSaint && (
        <Dialog open={!!selectedSaint} onOpenChange={() => setSelectedSaint(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                {selectedSaint.image_url && (
                  <img 
                    src={selectedSaint.image_url} 
                    alt={selectedSaint.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                {selectedSaint.name}
              </DialogTitle>
              <DialogDescription>
                Detailed information about {selectedSaint.name}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Tradition</Label>
                  <p className="text-sm text-muted-foreground">{selectedSaint.tradition || "Not specified"}</p>
                </div>
                <div>
                  <Label>Period</Label>
                  <p className="text-sm text-muted-foreground">
                    {selectedSaint.birth_year || "?"} - {selectedSaint.death_year || "?"}
                  </p>
                </div>
              </div>
              {selectedSaint.biography && (
                <div>
                  <Label>Biography</Label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedSaint.biography}</p>
                </div>
              )}
              {selectedSaint.key_teachings && (
                <div>
                  <Label>Key Teachings</Label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedSaint.key_teachings}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};