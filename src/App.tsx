import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Audio from "./pages/Audio";
import Videos from "./pages/Videos";
import Scriptures from "./pages/Scriptures";
import Chat from "./pages/Chat";
import Practices from "./pages/Practices";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/calendar" element={<ComingSoon />} />
          <Route path="/community" element={<ComingSoon />} />
          <Route path="/achievements" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
