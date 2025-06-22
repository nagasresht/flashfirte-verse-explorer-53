
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ideathon from "./pages/Ideathon";
import Speakathon from "./pages/Speakathon";
import DesignRealm from "./pages/DesignRealm";
import Gamingverse from "./pages/Gamingverse";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ideathon" element={<Ideathon />} />
          <Route path="/speakathon" element={<Speakathon />} />
          <Route path="/design-realm" element={<DesignRealm />} />
          <Route path="/gamingverse" element={<Gamingverse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
