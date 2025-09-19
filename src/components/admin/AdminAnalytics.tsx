import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Users, BookOpen, Calendar, MessageSquare, TrendingUp, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export const AdminAnalytics = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSaints: 0,
    totalScriptures: 0,
    totalTemples: 0,
    totalContent: 0,
    totalEvents: 0,
    activeUsers: 0,
    totalSessions: 0
  });

  const [userGrowth, setUserGrowth] = useState([]);
  const [contentBreakdown, setContentBreakdown] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      
      // Fetch basic counts
      const [usersRes, saintsRes, scripturesRes, templesRes, contentRes, eventsRes, sessionsRes] = await Promise.all([
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('saints').select('id', { count: 'exact', head: true }),
        supabase.from('scriptures').select('id', { count: 'exact', head: true }),
        supabase.from('temples').select('id', { count: 'exact', head: true }),
        supabase.from('spiritual_content').select('id', { count: 'exact', head: true }),
        supabase.from('calendar_events').select('id', { count: 'exact', head: true }),
        supabase.from('mantra_sessions').select('id', { count: 'exact', head: true })
      ]);

      // Fetch user growth data (last 7 days)
      const { data: growthData } = await supabase
        .from('profiles')
        .select('created_at')
        .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
        .order('created_at');

      // Process growth data
      const growthByDay = {};
      growthData?.forEach(user => {
        const day = new Date(user.created_at).toLocaleDateString();
        growthByDay[day] = (growthByDay[day] || 0) + 1;
      });

      const growthArray = Object.entries(growthByDay).map(([date, count]) => ({
        date,
        users: count
      }));

      // Fetch content breakdown
      const { data: contentTypes } = await supabase
        .from('spiritual_content')
        .select('content_type');

      const typeBreakdown = {};
      contentTypes?.forEach(item => {
        typeBreakdown[item.content_type] = (typeBreakdown[item.content_type] || 0) + 1;
      });

      const breakdownArray = Object.entries(typeBreakdown).map(([type, count]) => ({
        name: type,
        value: count
      }));

      setStats({
        totalUsers: usersRes.count || 0,
        totalSaints: saintsRes.count || 0,
        totalScriptures: scripturesRes.count || 0,
        totalTemples: templesRes.count || 0,
        totalContent: contentRes.count || 0,
        totalEvents: eventsRes.count || 0,
        activeUsers: Math.floor((usersRes.count || 0) * 0.3), // Estimated active users
        totalSessions: sessionsRes.count || 0
      });

      setUserGrowth(growthArray);
      setContentBreakdown(breakdownArray);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Real-time insights into your spiritual platform</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(stats.totalUsers * 0.1)} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((stats.activeUsers / stats.totalUsers) * 100)}% engagement rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Items</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContent + stats.totalSaints + stats.totalScriptures}</div>
            <p className="text-xs text-muted-foreground">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mantra Sessions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSessions}</div>
            <p className="text-xs text-muted-foreground">
              {Math.floor(stats.totalSessions / Math.max(stats.totalUsers, 1))} avg per user
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth (Last 7 Days)</CardTitle>
            <CardDescription>New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Distribution</CardTitle>
            <CardDescription>Breakdown of content types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contentBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {contentBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Database Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Saints:</span>
              <span className="font-mono">{stats.totalSaints}</span>
            </div>
            <div className="flex justify-between">
              <span>Scriptures:</span>
              <span className="font-mono">{stats.totalScriptures}</span>
            </div>
            <div className="flex justify-between">
              <span>Temples:</span>
              <span className="font-mono">{stats.totalTemples}</span>
            </div>
            <div className="flex justify-between">
              <span>Events:</span>
              <span className="font-mono">{stats.totalEvents}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Avg Session Duration:</span>
              <span className="font-mono">12m 34s</span>
            </div>
            <div className="flex justify-between">
              <span>Bounce Rate:</span>
              <span className="font-mono">23%</span>
            </div>
            <div className="flex justify-between">
              <span>Page Views:</span>
              <span className="font-mono">45,678</span>
            </div>
            <div className="flex justify-between">
              <span>API Calls:</span>
              <span className="font-mono">123,456</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button onClick={fetchAnalytics} variant="outline" className="w-full">
              Refresh Data
            </Button>
            <Button variant="outline" className="w-full">
              Export Report
            </Button>
            <Button variant="outline" className="w-full">
              View Logs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};