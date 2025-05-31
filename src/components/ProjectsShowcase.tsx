
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const ProjectsShowcase = () => {
  const pinnedProjects = [
    {
      id: 1,
      title: "DevTools Pro",
      description: "A comprehensive developer toolkit with 20+ utilities for web development. Built with React and TypeScript.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      stars: 342,
      forks: 56,
      isPinned: true,
      githubUrl: "https://github.com/johndoe/devtools-pro",
      liveUrl: "https://devtools-pro.vercel.app"
    },
    {
      id: 2,
      title: "API Monitor",
      description: "Real-time API monitoring and analytics dashboard. Track performance, errors, and usage patterns.",
      techStack: ["Node.js", "Express", "PostgreSQL", "React"],
      stars: 218,
      forks: 34,
      isPinned: true,
      githubUrl: "https://github.com/johndoe/api-monitor",
      liveUrl: "https://api-monitor.herokuapp.com"
    },
    {
      id: 3,
      title: "Code Snippets CLI",
      description: "Command-line tool for managing and sharing code snippets across teams. Written in Rust for performance.",
      techStack: ["Rust", "CLI", "SQLite", "Git"],
      stars: 156,
      forks: 23,
      isPinned: true,
      githubUrl: "https://github.com/johndoe/snippets-cli",
      liveUrl: null
    }
  ];

  const otherProjects = [
    {
      title: "Weather App",
      description: "Beautiful weather app with location-based forecasts",
      techStack: ["React Native", "API Integration"],
      githubUrl: "https://github.com/johndoe/weather-app"
    },
    {
      title: "Task Manager",
      description: "Collaborative task management with real-time updates",
      techStack: ["Vue.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/johndoe/task-manager"
    },
    {
      title: "Portfolio Website",
      description: "This very website you're viewing right now!",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/johndoe/portfolio"
    }
  ];

  return (
    <section id="projects" className="py-16 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center">
          <span className="mr-3">📌</span>
          Pinned Repositories
        </h2>
        <p className="text-muted-foreground">My featured projects and open-source contributions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pinnedProjects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="secondary" className="ml-2">
                  📌 Pinned
                </Badge>
              </div>
              <CardDescription className="text-sm line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6 pt-8">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-3">🚀</span>
          Other Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-200">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{project.title}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
