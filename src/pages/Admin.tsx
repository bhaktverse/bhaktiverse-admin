import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, BookOpen, Music, Calendar, MessageSquare, BarChart3, Settings, Upload, Sparkles } from "lucide-react";
import { AdminSaints } from "@/components/admin/AdminSaints";
import { AdminScriptures } from "@/components/admin/AdminScriptures";
import { AdminTemples } from "@/components/admin/AdminTemples";
import { AdminContent } from "@/components/admin/AdminContent";
import { AdminFAQs } from "@/components/admin/AdminFAQs";
import { AdminEvents } from "@/components/admin/AdminEvents";
import { AdminBhaktiShorts } from "@/components/admin/AdminBhaktiShorts";
import { AdminAchievements } from "@/components/admin/AdminAchievements";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";
import { AdminUserManagement } from "@/components/admin/AdminUserManagement";
import { AdminDataImport } from "@/components/admin/AdminDataImport";
import { AdminAITools } from "@/components/admin/AdminAITools";
import { AdminDatabaseAI } from "@/components/admin/AdminDatabaseAI";
import { AdminEnhancedDataManager } from "@/components/admin/AdminEnhancedDataManager";
import { AdminAudioLibrary } from "@/components/admin/AdminAudioLibrary";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">BhaktiVerse Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your spiritual platform with powerful tools and analytics</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:grid-cols-15">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="saints" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Saints</span>
            </TabsTrigger>
            <TabsTrigger value="scriptures" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Scriptures</span>
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Audio</span>
            </TabsTrigger>
            <TabsTrigger value="temples" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Temples</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="faqs" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">FAQs</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="shorts" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Shorts</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Achievements</span>
            </TabsTrigger>
            <TabsTrigger value="import" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Import</span>
            </TabsTrigger>
            <TabsTrigger value="ai-tools" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">AI Tools</span>
            </TabsTrigger>
            <TabsTrigger value="database-ai" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">AI DB</span>
            </TabsTrigger>
            <TabsTrigger value="enhanced-data" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Enhanced</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AdminAnalytics />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <AdminUserManagement />
          </TabsContent>

          <TabsContent value="saints" className="space-y-6">
            <AdminSaints />
          </TabsContent>

          <TabsContent value="database-ai" className="space-y-6">
            <AdminDatabaseAI />
          </TabsContent>

          <TabsContent value="scriptures" className="space-y-6">
            <AdminScriptures />
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <AdminAudioLibrary />
          </TabsContent>

          <TabsContent value="temples" className="space-y-6">
            <AdminTemples />
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <AdminContent />
          </TabsContent>

          <TabsContent value="faqs" className="space-y-6">
            <AdminFAQs />
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <AdminEvents />
          </TabsContent>

          <TabsContent value="shorts" className="space-y-6">
            <AdminBhaktiShorts />
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <AdminAchievements />
          </TabsContent>

          <TabsContent value="import" className="space-y-6">
            <AdminDataImport />
          </TabsContent>

          <TabsContent value="ai-tools" className="space-y-6">
            <AdminAITools />
          </TabsContent>

          <TabsContent value="enhanced-data" className="space-y-6">
            <AdminEnhancedDataManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;