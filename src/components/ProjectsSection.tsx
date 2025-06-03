
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import SkillMap from "./SkillMap";
import LearningJourney from "./LearningJourney";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "AI Code Assistant",
      description: "A VS Code extension that helps developers write better code using AI. Built with TypeScript and OpenAI API.",
      tech: ["TypeScript", "Node.js", "OpenAI", "VS Code API"],
      stars: 234,
      forks: 45,
      githubUrl: "https://github.com/johndoe/ai-code-assistant",
      liveUrl: "https://marketplace.visualstudio.com/items?itemName=johndoe.ai-assistant",
      featured: true
    },
    {
      id: 2,
      name: "DevOps Dashboard",
      description: "Real-time monitoring dashboard for microservices with custom metrics and alerts.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL"],
      stars: 156,
      forks: 23,
      githubUrl: "https://github.com/johndoe/devops-dashboard",
      liveUrl: "https://dashboard.johndoe.dev"
    },
    {
      id: 3,
      name: "Open Source CLI Tool",
      description: "A command-line tool for automating development workflows and project setup.",
      tech: ["Python", "Click", "PyPI"],
      stars: 89,
      forks: 12,
      githubUrl: "https://github.com/johndoe/dev-cli"
    },
    {
      id: 4,
      name: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for natural language processing with model versioning.",
      tech: ["Python", "PyTorch", "MLflow", "Docker"],
      stars: 67,
      forks: 8,
      githubUrl: "https://github.com/johndoe/ml-pipeline"
    }
  ];

  return (
    <div className="border-b border-border pb-6">
      {/* Skill Map Section */}
      <SkillMap />
      
      {/* Learning Journey Section */}
      <LearningJourney />
      
      {/* Projects Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
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
