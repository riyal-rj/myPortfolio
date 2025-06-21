import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, FileText } from "lucide-react";
import SkillMap from "./SkillMap";
import LearningJourney from "./LearningJourney";

const ProjectsSection = ({ showFeaturedOnly = false, showSkillMap = false, showLearningJourney = false }) => {
  const projects = [
    // Featured projects first
    {
      id: 1,
      name: "Stokis",
      description: "AI-powered stock market prediction and sentiment analysis tool built as a final year project. Combines FinBERT-based news sentiment with stock price forecasting via CNN-BiLSTM.",
      tech: ["Next.js", "FastAPI", "FinBERT", "CNN-BiLSTM", "MongoDB", "Tailwind CSS", "Huggingface", "Trandformers"],
      githubUrl: "https://github.com/Ankit-AP-Paul/Stock-Price-Prediction-and-Forecasting",
      featured: true,
      liveUrl: "https://stokis-client-dashboard.vercel.app/",
      reportUrl: "https://btech-final-year-project-2k25.vercel.app/",
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
      id: 5,
      name: "TriNayan",
      description: "AI-based currency detection using YOLOv8 and Vision Transformers. Built for RBI's HaRBInger-2024 Hackathon.",
      tech: ["YOLOv8", "Vision Transformers", "OpenCV", "Python", "Streamlit"],
      githubUrl: "https://github.com/riyal-rj/identifier",
      liveUrl: "",
      featured: true,
      stars: 30,
      forks: 8,
    },
    {
      id: 9,
      name: "GradgyHub",
      description: "It is a modern e-commerce platform dedicated to selling electronic products. Built with a React frontend and an Express backend, it offers a seamless user experience and robust backend functionality. This project incorporates advanced technologies like Redis for caching and Cloudinary for image uploads to ensure scalability and performance",
      tech: ["React", "Tailwind CSS", "Cloudinary", "Express", "Redis", "MongoDB", "Node.js", "Stripe", "Mongoose", "Axios", "JWT"],
      githubUrl: "https://github.com/riyal-rj/gadgyHub",
      liveUrl: "",
      stars: 20,
      forks: 10,
      featured: true,
    },
    {
      id: 10,
      name: "Stock News Scraper Microservice",
      description: "A FastAPI-based microservice that scrapes, filters, and summarizes stock market news for a specified company using SerpAPI, Playwright, and CrewAI. Built with a modular MVS architecture, it leverages MongoDB for persistent storage and integrates OpenAI GPT-4o for intelligent summarization.",
      tech: ["FastAPI", "Python", "MongoDB", "Playwright", "CrewAI", "OpenAI", "SerpAPI", "Uvicorn"],
      githubUrl: "https://github.com/riyal-rj/newsScrapper",
      liveUrl: "",
      stars: 1,
      forks: 0,
      featured: true
    },
    {
      id: 9,
      name: "AI-Auto-Email-Reply-Generator",
      description: "A full-stack project that integrates Google Gemini's LLM with a sleek React frontend and a Chrome extension. It lets users generate intelligent replies to emails or chats, directly from the browser—boosting productivity and saving time.",
      tech: ["Spring Boot", "Gemini API", "React", "TailwindCSS", "ShadCN", "Chrome Extension"],
      githubUrl: "https://github.com/riyal-rj/email-generator",
      liveUrl: "",
      featured: true,
      stars: 70,
      forks: 18,
    },

    // Non-featured projects follow
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
      tech: ["Node.js", "Express", "Mapbox", "Multer", "Nodemailer", "Parcel", " MongoDB", "EJS"],
      githubUrl: "https://github.com/riyal-rj/jetQuest",
      liveUrl: "",
      stars: 50,
      forks: 12,
    },
    {
      id: 6,
      name: "Lingua-AI",
      description: "Personalized English tutor app using Llama 3.1 and Deepgram for interactive speech and conversation training.",
      tech: ["Llama 3.1", "Deepgram", "Python", "Streamlit", "LangChain"],
      githubUrl: "https://github.com/riyal-rj/Lingua-AI",
      liveUrl: "",
      stars: 24,
      forks: 5,
    },
    {
      id: 7,
      name: "WebMeAnything",
      description: "RAG-based tool for real-time web page analysis using semantic and similarity search. Provides SEO and content insights.",
      tech: ["Streamlit", "FAISS", "Cohere", "RAG", "Llama 3", "Python", "LangChain"],
      githubUrl: "https://github.com/riyal-rj/WebMeAnything-RAG",
      liveUrl: "",
      stars: 15,
      forks: 3,
    },
    {
      id: 8,
      name: "QuirkyViz-ML-Chaos-Visualizer",
      description: "Interactive visualization platform for exploring chaotic behavior in ML models using Plotly and Matplotlib.",
      tech: ["Python", "Matplotlib", "Plotly", "Scikit-learn", "NumPy", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/riyal-rj/QuirkyViz-ML-Chaos-Visualizer",
      liveUrl: "",
      stars: 10,
      forks: 2,
    },
    {
      id: 11,
      name: "GitRepView",
      description: "A GitHub-like application designed to fetch and display public repositories of any GitHub user. Built with a modern UI, it allows users to explore repo details such as stars, forks, and descriptions. Note: This app is read-only — users cannot upload or create files.",
      tech: ["React", "Tailwind CSS", "Axios", "GitHub API", "TypeScript", "Passport", "Express", "Node.js"],
      githubUrl: "https://github.com/riyal-rj/github-clone",
      liveUrl: "",
      stars: 2,
      forks: 1,
      featured: false
    }
  ];


  // Filter projects based on showFeaturedOnly prop
  const displayedProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="border-b border-border pb-6">
      {/* Skill Map Section */}
      {showSkillMap && <SkillMap />}

      {/* Learning Journey Section */}
      {showLearningJourney && <LearningJourney />}

      {/* Projects Section */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            {showFeaturedOnly ? "Featured Projects" : "All Projects"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {displayedProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="font-semibold text-base sm:text-lg flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="break-words">{project.name}</span>
                          {project.featured && (
                            <Badge
                              variant="secondary"
                              className="text-xs w-fit bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium tracking-wide shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
                            >
                              Featured
                            </Badge>


                          )}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{project.forks}</span>
                        </div>
                        <div className="flex gap-2 flex-wrap -mr-2">
                          <Button size="sm" variant="outline" asChild className="h-8 px-3 bg-purple-500 text-white">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                              {/* <span className="hidden sm:inline ml-1">Code</span> */}
                            </a>
                          </Button>
                          {project.liveUrl && (
                            <Button size="sm" asChild className="h-8 px-3 bg-green-500">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                {/* <span className="hidden sm:inline ml-1">Live</span> */}
                              </a>
                            </Button>
                          )}
                          {project.reportUrl && (
                            <Button size="sm" variant="outline" asChild className="h-8 px-3 bg-blue-600 text-white">
                              <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                                {/* <span className="hidden sm:inline ml-1">Report</span> */}
                              </a>
                            </Button>
                          )}
                        </div>
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
