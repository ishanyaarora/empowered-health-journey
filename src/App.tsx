
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Education from "./pages/Education";
import SelfCheck from "./pages/SelfCheck";
import Progress from "./pages/Progress";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/chatbot" element={<MainLayout><Chatbot /></MainLayout>} />
          <Route path="/education" element={<MainLayout><Education /></MainLayout>} />
          <Route path="/self-check" element={<MainLayout><SelfCheck /></MainLayout>} />
          <Route path="/progress" element={<MainLayout><Progress /></MainLayout>} />
          <Route path="/support" element={<MainLayout><Support /></MainLayout>} />
          <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
