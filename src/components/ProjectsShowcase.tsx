import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, ExternalLink, Star, GitFork, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useState } from "react";

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
 const pinnedProjects = [
  {
    id: 1,
    title: "Stokis",
    description: "AI-powered stock market prediction and sentiment analysis tool built as a final year project. Combines FinBERT-based news sentiment with stock price forecasting via Linear Regression.",
    tech: ["React", "FastAPI", "FinBERT", "Linear Regression"],
    githubUrl: "https://github.com/your-username/stokis",
    isFeatured: true,
    isPopular: true,
    category: "AI",
    stars: 120, // example data
    forks: 30,
    gradient: "from-pink-500 to-yellow-400",
  },
  {
    id: 2,
    title: "Advanced Authentication System",
    description: "Modular, scalable authentication system supporting JWT, 2FA, RBAC, and email verification. Built for easy integration with web/mobile apps.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer", "bcrypt"],
    githubUrl: "https://github.com/your-username/auth-system",
    isFeatured: false,
    isPopular: false,
    category: "Backend",
    stars: 75,
    forks: 15,
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "A video streaming platform inspired by Netflix with JWT auth, responsive design, and dynamic recommendations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/your-username/netflix-clone",
    isFeatured: false,
    isPopular: false,
    category: "Fullstack",
    stars: 95,
    forks: 22,
    gradient: "from-red-500 to-purple-600",
  },
  {
    id: 4,
    title: "JetQuest",
    description: "Tour management app with Mapbox-based route visualization, image uploads, email auth, and MVC backend architecture.",
    tech: ["Node.js", "Express", "Mapbox", "Multer", "Nodemailer", "Parcel"],
    githubUrl: "https://github.com/your-username/jetquest",
    isFeatured: false,
    isPopular: false,
    category: "Backend",
    stars: 40,
    forks: 8,
    gradient: "from-green-400 to-blue-500",
  },
  {
    id: 5,
    title: "TriNayan",
    description: "AI-based currency detection using YOLOv8 and Vision Transformers. Built for RBI's HaRBInger-2024 Hackathon.",
    tech: ["YOLOv8", "Vision Transformers", "OpenCV", "Python"],
    githubUrl: "https://github.com/your-username/trinayan",
    isPopular: true,
    isFeatured: true,
    category: "AI",
    stars: 140,
    forks: 35,
    gradient: "from-yellow-400 to-red-500",
  },
  {
    id: 6,
    title: "Lingua-AI",
    description: "Personalized English tutor app using Llama 3.1 and Deepgram for interactive speech and conversation training.",
    tech: ["Llama 3.1", "Deepgram", "Python", "FastAPI"],
    githubUrl: "https://github.com/your-username/lingua-ai",
    liveUrl: "https://lingua-ai.com",
    isFeatured: false,
    isPopular: false,
    category: "AI",
    stars: 50,
    forks: 12,
    gradient: "from-indigo-400 to-purple-600",
  },
  {
    id: 7,
    title: "WebMeAnything",
    description: "RAG-based tool for real-time web page analysis using semantic and similarity search. Provides SEO and content insights.",
    tech: ["Streamlit", "FAISS", "Cohere", "RAG"],
    githubUrl: "https://github.com/your-username/webmeanything",
    liveUrl: "https://webmeanything.com",
    isPopular: true,
    isFeatured: true,
    category: "AI",
    stars: 130,
    forks: 28,
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    id: 8,
    title: "QuirkyViz-ML-Chaos-Visualizer",
    description: "Interactive visualization platform for exploring chaotic behavior in ML models using Plotly and Matplotlib.",
    tech: ["Python", "Matplotlib", "Plotly"],
    githubUrl: "https://github.com/your-username/quirkyviz",
    liveUrl: "https://quirkyviz.com",
    isFeatured: false,
    isPopular: false,
    category: "AI",
    stars: 25,
    forks: 5,
    gradient: "from-gray-400 to-gray-600",
  },
 

];



  const categories = ["All", "AI", "Web", "Backend", "Fullstack"];

  const filteredProjects = activeFilter === "All" 
    ? pinnedProjects 
    : pinnedProjects.filter(project => project.category === activeFilter);

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      "React": "⚛️",
      "TypeScript": "🔵",
      "Node.js": "🟢",
      "Python": "🐍",
      "Rust": "🦀",
      "Next.js": "▲",
      "PostgreSQL": "🐘",
      "Docker": "🐳",
      "Git": "📝"
    };
    return icons[tech] || "🔧";
  };

  return (
    <section id="projects" className="py-16 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-lg">Showcasing my best work and open-source contributions</p>
        
        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-200 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Carousel */}
      <div className="relative max-w-7xl mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative">
                  <Card className={`
                    relative overflow-hidden bg-gradient-to-br ${project.gradient} backdrop-blur-sm
                    border-2 border-border/50 hover:border-primary/50
                    transform transition-all duration-500 ease-out
                    hover:scale-[1.02] hover:-rotate-1 hover:shadow-2xl hover:shadow-primary/10
                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
                    hover:before:opacity-100
                  `}>
                    {/* Status Badges */}
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                      {project.isPopular && (
                        <Badge variant="destructive" className="bg-red-500 text-white animate-pulse">
                          🔥 Popular
                        </Badge>
                      )}
                      {project.isFeatured && (
                        <Badge variant="secondary" className="bg-blue-500 text-white">
                          🚀 Featured
                        </Badge>
                      )}
                    </div>

                    <CardHeader className="space-y-4 relative z-10">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          ✨
                        </div>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative z-10">
                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-200 cursor-default"
                            >
                              <span className="mr-1">{getTechIcon(tech)}</span>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 hover:text-yellow-500 transition-colors">
                            <Star className="w-4 h-4" />
                            <span className="font-medium">{project.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                            <GitFork className="w-4 h-4" />
                            <span className="font-medium">{project.forks}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 opacity-60 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200" 
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button 
                            size="sm" 
                            className="flex-1 hover:scale-105 transition-all duration-200 bg-primary/90 hover:bg-primary" 
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>

                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation */}
          <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200" />
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200" />
        </Carousel>
      </div>

      {/* Other Projects Section remains the same */}
      <div className="space-y-6 pt-12">
        <h3 className="text-2xl font-bold flex items-center justify-center">
          <span className="mr-3">🚀</span>
          Other Notable Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
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
          ].map((project, index) => (
            <Card key={index} className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold hover:text-primary transition-colors">{project.title}</h4>
                    <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:scale-105 transition-transform">
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
