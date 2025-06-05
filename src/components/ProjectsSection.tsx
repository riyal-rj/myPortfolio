import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import SkillMap from "./SkillMap";
import LearningJourney from "./LearningJourney";

const ProjectsSection = ({ showFeaturedOnly = false, showSkillMap = false , showLearningJourney=false}) => {
  const projects = [
    {
      id: 1,
      name: "Stokis",
      description: "AI-powered stock market prediction and sentiment analysis tool built as a final year project. Combines FinBERT-based news sentiment with stock price forecasting via Linear Regression.",
      tech: ["React", "FastAPI", "FinBERT", "Linear Regression"],
      githubUrl: "https://github.com/your-username/stokis",
      featured: true,
      liveUrl: "",
      stars: 25,
      forks: 4,
    },
    {
      id: 2,
      name: "Advanced Authentication System",
      description: "Modular, scalable authentication system supporting JWT, 2FA, RBAC, and email verification. Built for easy integration with web/mobile apps.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer", "bcrypt"],
      githubUrl: "https://github.com/riyal-rj/advAuthSystem",
      liveUrl: "",
      stars: 17,
      forks: 2,
      featured: true,
    },
    {
      id: 3,
      name: "Netflix Clone",
      description: "A video streaming platform inspired by Netflix with JWT auth, responsive design, and dynamic recommendations.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      githubUrl: "https://github.com/riyal-rj/netFlix-Clone",
      liveUrl: "",
      stars: 10,
      forks: 5,
    },
    {
      id: 4,
      name: "JetQuest",
      description: "Tour management app with Mapbox-based route visualization, image uploads, email auth, and MVC backend architecture.",
      tech: ["Node.js", "Express", "Mapbox", "Multer", "Nodemailer", "Parcel"],
      githubUrl: "https://github.com/riyal-rj/jetQuest",
      liveUrl: "",
      stars: 50,
      forks: 12,
    },
    {
      id: 5,
      name: "TriNayan",
      description: "AI-based currency detection using YOLOv8 and Vision Transformers. Built for RBI's HaRBInger-2024 Hackathon.",
      tech: ["YOLOv8", "Vision Transformers", "OpenCV", "Python"],
      githubUrl: "https://github.com/riyal-rj/identifier",
      liveUrl: "",
      featured: true,
      stars: 30,
      forks: 8,
    },
    {
      id: 6,
      name: "Lingua-AI",
      description: "Personalized English tutor app using Llama 3.1 and Deepgram for interactive speech and conversation training.",
      tech: ["Llama 3.1", "Deepgram", "Python", "FastAPI"],
      githubUrl: "https://github.com/riyal-rj/Lingua-AI",
      liveUrl: "",
      stars: 24,
      forks: 5,
    },
    {
      id: 7,
      name: "WebMeAnything",
      description: "RAG-based tool for real-time web page analysis using semantic and similarity search. Provides SEO and content insights.",
      tech: ["Streamlit", "FAISS", "Cohere", "RAG"],
      githubUrl: "https://github.com/riyal-rj/WebMeAnything-RAG",
      liveUrl: "",
      stars: 15,
      forks: 3,
    },
    {
      id: 8,
      name: "QuirkyViz-ML-Chaos-Visualizer",
      description: "Interactive visualization platform for exploring chaotic behavior in ML models using Plotly and Matplotlib.",
      tech: ["Python", "Matplotlib", "Plotly"],
      githubUrl: "https://github.com/riyal-rj/QuirkyViz-ML-Chaos-Visualizer",
      liveUrl: "",
      stars: 10,
      forks: 2,
    },
    {
      id: 9,
      name: "GradgyHub",
      description: "It is a modern e-commerce platform dedicated to selling electronic products. Built with a React frontend and an Express backend, it offers a seamless user experience and robust backend functionality. This project incorporates advanced technologies like Redis for caching and Cloudinary for image uploads to ensure scalability and performance",
      tech: ["React", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/riyal-rj/gadgyHub",
      liveUrl: "",
      stars: 20,
      forks: 10,
      featured: true,
    },
  ];

  // Filter projects based on showFeaturedOnly prop
  const displayedProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="border-b border-border pb-6">
      {/* Skill Map Section */}
      {
        showSkillMap && (
          <SkillMap />
        )
      }


      {/* Learning Journey Section */}
      {
        showLearningJourney && (
          <LearningJourney />
        )
      }
      

      {/* Projects Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            {showFeaturedOnly ? "Featured Projects" : "All Projects"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {project.name}
                          {project.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsSection;