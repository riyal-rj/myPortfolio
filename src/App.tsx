import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StokisPage from "./pages/projects/StokisPage";
import GradgyHubPage from "./pages/projects/GradgyHubPage";
import TriNayanPage from "./pages/projects/TriNayanPage";
import NewsScrapperPage from "./pages/projects/NewsScrapperPage";
import EmailAIAssistantPage from "./pages/projects/EmailAIAssistantPage";
import AdvAuthPage from "./pages/projects/AdvAuthPage";
import WinstonBlogPage from "./pages/blogs/winstonLogBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/stokis" element={<StokisPage/>}/>
          <Route path="/projects/gradgyhub" element={<GradgyHubPage />} />
          <Route path="/projects/trinayan" element={<TriNayanPage/>}/>
          <Route path="/projects/news-scrapper" element={<NewsScrapperPage />} />
          <Route path="/projects/email-ai" element={<EmailAIAssistantPage/>}/>
          <Route path="/projects/adv-auth" element={<AdvAuthPage/>}/>
          <Route path="/blog/winston-logging-nodejs" element={<WinstonBlogPage />} />"
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
