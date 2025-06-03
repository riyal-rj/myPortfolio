
import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import TwitterHeader from "@/components/TwitterHeader";
import ProfileSection from "@/components/ProfileSection";
import FeedContent from "@/components/FeedContent";
import SocialSidebar from "@/components/SocialSidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors font-inter">
        <TwitterHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="max-w-6xl mx-auto flex">
          {/* Main Content */}
          <main className="flex-1 min-h-screen border-r border-border">
            <ProfileSection />
            <FeedContent activeTab={activeTab} />
          </main>
          
          {/* Right Sidebar */}
          <SocialSidebar />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
