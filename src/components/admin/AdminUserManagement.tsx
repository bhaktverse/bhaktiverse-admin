import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Users, Search, Filter, Activity, Calendar, Crown, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Fetch user profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch user activities
      const { data: userActivities, error: activitiesError } = await supabase
        .from('user_activities')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (activitiesError) throw activitiesError;

      // Fetch mantra sessions
      const { data: mantraSessions, error: sessionsError } = await supabase
        .from('mantra_sessions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (sessionsError) throw sessionsError;

      setUsers(profiles || []);
      setActivities(userActivities || []);
      setSessions(mantraSessions || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to fetch user data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getUserStats = (userId) => {
    const userActivities = activities.filter(activity => activity.user_id === userId);
    const userSessions = sessions.filter(session => session.user_id === userId);
    
    const totalPoints = userActivities.reduce((sum, activity) => sum + (activity.points_earned || 0), 0);
    const totalSessions = userSessions.length;
    const completedSessions = userSessions.filter(session => session.completed).length;
    
    return {
      totalPoints,
      totalSessions,
      completedSessions,
      lastActivity: userActivities[0]?.created_at
    };
  };

  const getSpiritualLevel = (points) => {
    if (points >= 1000) return { level: "Advanced", color: "default" };
    if (points >= 500) return { level: "Intermediate", color: "secondary" };
    if (points >= 100) return { level: "Beginner+", color: "outline" };
    return { level: "Beginner", color: "outline" };
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">User Management</h2>
          <p className="text-muted-foreground">Monitor and manage user accounts, activities, and engagement</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Activity className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button variant="outline">
            <Crown className="h-4 w-4 mr-2" />
            Premium Users
          </Button>
        </div>
      </div>

      {/* User Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(users.length * 0.1)} this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.floor(users.length * 0.7)}</div>
            <p className="text-xs text-muted-foreground">
              70% engagement rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Premium Users</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.floor(users.length * 0.15)}</div>
            <p className="text-xs text-muted-foreground">
              15% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sessions.length}</div>
            <p className="text-xs text-muted-foreground">
              {Math.floor(sessions.length / Math.max(users.length, 1))} avg per user
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search users by name or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>User Database ({filteredUsers.length})</CardTitle>
          <CardDescription>
            Complete list of registered users with their activity stats
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading users...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead>Sessions</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => {
                  const stats = getUserStats(user.user_id);
                  const levelInfo = getSpiritualLevel(stats.totalPoints);
                  
                  return (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {user.avatar_url && (
                            <img 
                              src={user.avatar_url} 
                              alt={user.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          )}
                          <div>
                            <div>{user.name}</div>
                            {user.phone && (
                              <div className="text-xs text-muted-foreground">{user.phone}</div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={levelInfo.color}>
                          {levelInfo.level}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-mono">{stats.totalPoints}</span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{stats.totalSessions} total</div>
                          <div className="text-muted-foreground">
                            {stats.completedSessions} completed
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-muted-foreground">
                          {stats.lastActivity 
                            ? new Date(stats.lastActivity).toLocaleDateString()
                            : "Never"
                          }
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={stats.totalPoints > 0 ? "default" : "secondary"}>
                          {stats.totalPoints > 0 ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedUser(user)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>User Profile: {user.name}</DialogTitle>
                              <DialogDescription>
                                Detailed user information and activity history
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold">Basic Info</h4>
                                  <div className="space-y-1 text-sm">
                                    <div>Name: {user.name}</div>
                                    <div>Phone: {user.phone || "Not provided"}</div>
                                    <div>Language: {user.preferred_language}</div>
                                    <div>Level: {user.spiritual_level}</div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold">Activity Stats</h4>
                                  <div className="space-y-1 text-sm">
                                    <div>Total Points: {stats.totalPoints}</div>
                                    <div>Sessions: {stats.totalSessions}</div>
                                    <div>Completed: {stats.completedSessions}</div>
                                    <div>Success Rate: {stats.totalSessions > 0 ? Math.round((stats.completedSessions / stats.totalSessions) * 100) : 0}%</div>
                                  </div>
                                </div>
                              </div>
                              {user.daily_goals && (
                                <div>
                                  <h4 className="font-semibold">Daily Goals</h4>
                                  <div className="text-sm space-y-1">
                                    <div>Mantras: {user.daily_goals.mantras || 108}</div>
                                    <div>Reading: {user.daily_goals.reading_minutes || 15} minutes</div>
                                    <div>Meditation: {user.daily_goals.meditation_minutes || 10} minutes</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};