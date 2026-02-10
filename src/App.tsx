import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BuscaPlantix from "./pages/BuscaPlantix";
import Portfolio from "./pages/Portfolio";
import NiverApp from "./pages/NiverApp";
import NiverPrivacyIos from "./pages/NiverPrivacyIos";
import NiverPrivacyAndroid from "./pages/NiverPrivacyAndroid";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/busca-plantix" element={<BuscaPlantix />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/niver" element={<NiverApp />} />
          <Route path="/portfolio/niver/privacy/ios" element={<NiverPrivacyIos />} />
          <Route path="/portfolio/niver/privacy/android" element={<NiverPrivacyAndroid />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
