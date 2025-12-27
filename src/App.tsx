import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import StudentProfile from "./pages/StudentProfile";
import ParentProfile from "./pages/ParentProfile";
import ResidencePMS from "./pages/ResidencePMS";
import ResidenceDetails from "./pages/ResidenceDetails";
import StudentProfileView2 from "./pages/StudentProfileView2";
import AllResidences from "./pages/AllResidences";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/estudiantes" element={<StudentProfile />} />
            <Route path="/padres" element={<ParentProfile />} />
            <Route path="/residencias-pms" element={<ResidencePMS />} />
            <Route path="/residencias" element={<AllResidences />} />
            <Route path="/residencia/:id" element={<ResidenceDetails />} />
            <Route path="/estudiante/:id" element={<StudentProfileView2 />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryClientProvider>
);

export default App;
