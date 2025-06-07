
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GitHubStats from "@/components/GitHubStats";

interface FeedContentProps {
  activeTab: string;
}

const FeedContent = ({ activeTab }: FeedContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div className="space-y-0">
            <ProjectsSection showFeaturedOnly={true} showSkillMap={false} showLearningJourney={true}/>
            <div className="mb-4">
              <GitHubStats />
            </div>
          </div>
        );
      case "Projects":
        return (
        <div className="space-y-0">
        <ProjectsSection showFeaturedOnly={false} showSkillMap={true}  showLearningJourney={false}/>
        </div>);
      case "Sneak Peek":
        return <BlogSection />;
      case "About Me":
        return <AboutSection />;
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
      {renderContent()}
    </div>
  );
};

export default FeedContent;
