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
import EstoqueDomesticoApp from "./pages/EstoqueDomesticoApp";
import EstoqueDomesticoPrivacyIos from "./pages/EstoqueDomesticoPrivacyIos";
import EstoqueDomesticoPrivacyAndroid from "./pages/EstoqueDomesticoPrivacyAndroid";
import FarmaciaDomesticaApp from "./pages/FarmaciaDomesticaApp";
import FarmaciaDomesticaPrivacyIos from "./pages/FarmaciaDomesticaPrivacyIos";
import HinosFcApp from "./pages/HinosFcApp";
import HinosFcPrivacyIos from "./pages/HinosFcPrivacyIos";
import ZapStickerApp from "./pages/ZapStickerApp";
import ZapStickerPrivacyIos from "./pages/ZapStickerPrivacyIos";

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
          <Route path="/portfolio/niver/ios/privacy" element={<NiverPrivacyIos />} />
          <Route path="/portfolio/niver/android/privacy" element={<NiverPrivacyAndroid />} />
          <Route path="/portfolio/estoque-domestico" element={<EstoqueDomesticoApp />} />
          <Route path="/portfolio/estoque-domestico/privacy/ios" element={<EstoqueDomesticoPrivacyIos />} />
          <Route path="/portfolio/estoque-domestico/ios/privacy" element={<EstoqueDomesticoPrivacyIos />} />
          <Route path="/portfolio/estoque-domestico/privacy/android" element={<EstoqueDomesticoPrivacyAndroid />} />
          <Route path="/portfolio/estoque-domestico/android/privacy" element={<EstoqueDomesticoPrivacyAndroid />} />
          <Route path="/portfolio/farmacia-domestica" element={<FarmaciaDomesticaApp />} />
          <Route path="/portfolio/farmacia-domestica/privacy/ios" element={<FarmaciaDomesticaPrivacyIos />} />
          <Route path="/portfolio/farmacia-domestica/ios/privacy" element={<FarmaciaDomesticaPrivacyIos />} />
          <Route path="/portfolio/hinos-fc" element={<HinosFcApp />} />
          <Route path="/portfolio/hinos-fc/privacy/ios" element={<HinosFcPrivacyIos />} />
          <Route path="/portfolio/hinos-fc/ios/privacy" element={<HinosFcPrivacyIos />} />
          <Route path="/portfolio/zapsticker" element={<ZapStickerApp />} />
          <Route path="/portfolio/zapsticker/privacy/ios" element={<ZapStickerPrivacyIos />} />
          <Route path="/portfolio/zapsticker/ios/privacy" element={<ZapStickerPrivacyIos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
