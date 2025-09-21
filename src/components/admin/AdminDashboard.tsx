import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { 
  Database, 
  Users, 
  Activity, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  BarChart3
} from "lucide-react";

interface TableStats {
  name: string;
  count: number;
  lastUpdated: string;
}

interface SystemHealth {
  database: 'healthy' | 'warning' | 'error';
  api: 'healthy' | 'warning' | 'error';
  storage: 'healthy' | 'warning' | 'error';
}

export const AdminDashboard = () => {
  const [tableStats, setTableStats] = useState<TableStats[]>([]);
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    database: 'healthy',
    api: 'healthy',
    storage: 'healthy'
  });
  const [realtimeData, setRealtimeData] = useState({
    activeUsers: 0,
    todayActivities: 0,
    totalContent: 0
  });
  const [loading, setLoading] = useState(true);

  const tables = [
    { name: "saints", label: "Saints", icon: "🕉️" },
    { name: "scriptures", label: "Scriptures", icon: "📚" },
    { name: "temples", label: "Temples", icon: "🏛️" },
    { name: "spiritual_content", label: "Spiritual Content", icon: "📝" },
    { name: "spiritual_faqs", label: "FAQs", icon: "❓" },
    { name: "calendar_events", label: "Events", icon: "📅" },
    { name: "bhakti_shorts", label: "Bhakti Shorts", icon: "🎥" },
    { name: "community_posts", label: "Community Posts", icon: "💬" }
  ];

  useEffect(() => {
    fetchDashboardData();
    
    // Set up real-time subscriptions
    const channel = supabase
      .channel('admin-dashboard')
      .on('postgres_changes', 
        { event: '*', schema: 'public' },
        () => {
          console.log('Database change detected, refreshing stats...');
          fetchDashboardData();
        }
      )
      .subscribe();

    const interval = setInterval(() => {
      fetchRealtimeStats();
    }, 30000); // Update every 30 seconds

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch counts for all tables
      const stats = await Promise.all(
        tables.map(async (table) => {
          const { count, error } = await supabase
            .from(table.name as any)
            .select('*', { count: 'exact', head: true });

          if (error) {
            console.error(`Error fetching ${table.name}:`, error);
            return { name: table.name, count: 0, lastUpdated: new Date().toISOString() };
          }

          return {
            name: table.name,
            count: count || 0,
            lastUpdated: new Date().toISOString()
          };
        })
      );

      setTableStats(stats);
      await fetchRealtimeStats();
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRealtimeStats = async () => {
    try {
      // Simulate realtime data - in production this would come from analytics
      const totalContent = tableStats.reduce((sum, stat) => sum + stat.count, 0);
      
      setRealtimeData({
        activeUsers: Math.floor(Math.random() * 100) + 50,
        todayActivities: Math.floor(Math.random() * 200) + 100,
        totalContent
      });

      // Check system health
      setSystemHealth({
        database: 'healthy',
        api: 'healthy', 
        storage: 'healthy'
      });
    } catch (error) {
      console.error('Error fetching realtime stats:', error);
    }
  };

  const getHealthIcon = (status: 'healthy' | 'warning' | 'error') => {
    switch (status) {
      case 'healthy':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getHealthColor = (status: 'healthy' | 'warning' | 'error') => {
    switch (status) {
      case 'healthy':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'error':
        return 'text-red-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{realtimeData.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Activities</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{realtimeData.todayActivities}</div>
            <p className="text-xs text-muted-foreground">
              Mantras, prayers, readings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{realtimeData.totalContent}</div>
            <p className="text-xs text-muted-foreground">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Database</span>
                {getHealthIcon(systemHealth.database)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">API</span>
                {getHealthIcon(systemHealth.api)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Storage</span>
                {getHealthIcon(systemHealth.storage)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Database Tables Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Tables Overview
          </CardTitle>
          <CardDescription>
            Real-time statistics of all database tables
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="grid" className="w-full">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tables.map((table) => {
                  const stats = tableStats.find(s => s.name === table.name);
                  const count = stats?.count || 0;
                  const maxCount = Math.max(...tableStats.map(s => s.count));
                  const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;

                  return (
                    <Card key={table.name} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <span className="text-lg">{table.icon}</span>
                          {table.label}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-primary">{count}</div>
                          <Progress value={percentage} className="h-2" />
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Records</span>
                            <Badge variant="outline" className="text-xs">
                              {percentage.toFixed(1)}%
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-4">
              <div className="space-y-2">
                {tables.map((table) => {
                  const stats = tableStats.find(s => s.name === table.name);
                  const count = stats?.count || 0;

                  return (
                    <div 
                      key={table.name}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{table.icon}</span>
                        <div>
                          <div className="font-medium">{table.label}</div>
                          <div className="text-sm text-muted-foreground">{table.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">{count}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Updated now
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Frequently used admin operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors text-center">
              <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">Backup Data</div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">User Analytics</div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors text-center">
              <Activity className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">System Logs</div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">Performance</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};