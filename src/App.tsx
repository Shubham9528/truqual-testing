import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HomePage = lazy(() => import("@/components/pages/HomePage"));
const AboutPage = lazy(() => import("@/components/pages/AboutPage"));
const ServicesPage = lazy(() => import("@/components/pages/ServicesPage"));
const IndustriesPage = lazy(() => import("@/components/pages/IndustriesPage"));
const CaseStudiesPage = lazy(() => import("@/components/pages/CaseStudiesPage"));
const ResourcesPage = lazy(() => import("@/components/pages/ResourcesPage"));
const CareersPage = lazy(() => import("@/components/pages/CareersPage"));
const ContactPage = lazy(() => import("@/components/pages/ContactPage"));
const NotFound = lazy(() => import("@/components/pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <main className="min-h-[50vh] flex items-center justify-center">
              <div className="text-sm text-muted-foreground">Loading page...</div>
            </main>
          }
        >
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
