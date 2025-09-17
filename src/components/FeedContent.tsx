import React from "react";
import ProjectsSection from "@/components/ProjectsSection";
import SneakPeak from "@/components/SneakPeak";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GitHubStats from "@/components/GitHubStats";
import { AnimatePresence, motion } from "framer-motion";
import SkillMap from "./SkillMap";
import LearningJourney from "./LearningJourney";
import BlogSection from "./Blogs";

interface FeedContentProps {
  activeTab: string;
}

const FeedContent = ({ activeTab }: FeedContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div className="space-y-0">
            <LearningJourney/>
            <div className="mb-4">
              <GitHubStats />
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="space-y-0">
            <ProjectsSection showFeaturedOnly={false} showSkillMap={false} showLearningJourney={false} />
          </div>
        );
      case "Sneak Peek":
        return <SneakPeak />;
      case "Skills":
        return <SkillMap/>;
      case "About Me":
        return <AboutSection />;
      case "Blogs":
        return <BlogSection/>
      case "Contact":
        return <ContactSection />;
      default:
        return (
          <div className="space-y-0">
            <GitHubStats />
            <ProjectsSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // forces animation on tab change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FeedContent;
