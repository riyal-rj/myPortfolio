import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { MdOutlineUpcoming } from "react-icons/md";
import { useState, useEffect } from "react";

const SneakPeak = () => {
  const upcomingWorks = [
    {
      title: "Real-Time Collaboration Platform with AI-Powered Features",
      description: "A Google Docs-inspired platform with a unique twist—featuring AI-powered suggestions and task management. Designed for seamless real-time collaboration and efficient team workflows.",
      techStack: ["React", "WebSocket", "MongoDB", "AI","Node.js","Express","Socket.IO"],
    },
    {
      title: "Online Code Judge System with Concurrency and File I/O",
      description: "A mini LeetCode-inspired platform to test coding skills. Focuses on handling multiple submissions with concurrency and efficient file I/O for code input/output processing.",
      techStack: ["React", "Node.js", "MongoDB", "Concurrency","Code Engine","Express"],
    },
    {
      title: "Event Management System with Spring Boot",
      description: "An enterprise-grade event management system built for scalability. Supports event listing, booking, and notifications, optimized with caching and asynchronous tasks.",
      techStack: ["Spring Boot", "Redis", "RabbitMQ", "React","Java"],
    },
  ];

  const doneWorks = [
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills, built with React and Tailwind CSS.",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      date: "June 2, 2025",
      images: [
        "/portfolio/img1.jpeg",
        "/portfolio/img3.jpeg"
      ],
    },
    {
      title: "AI-Auto-Email-Reply-Generator",
      description: "A full-stack project that integrates Google Gemini's LLM with a sleek React frontend and a Chrome extension. It lets users generate intelligent replies to emails or chats, directly from the browser—boosting productivity and saving time.",
      techStack: ["Spring Boot", "Gemini API", "React", "TailwindCSS", "ShadCN", "Chrome Extension"],
      date: "June 16, 2025",
      images: [
        "/email-ai/imgg1.jpeg",
        "/email-ai/imgg2.jpeg"
      ],
    }
  ];

  const ImageSlideshow = ({ images, title }: { images: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (images.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }
    }, [images.length]);

    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
      <div className="relative w-full max-w-md mx-auto">
        {/* Container with slanted effect */}
        <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300 ease-in-out">
          <div className="relative w-full h-60 sm:h-56 rounded-xl overflow-hidden bg-muted shadow-lg border-4 border-white">
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Decorative shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl transform translate-x-1 translate-y-1 -z-10"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Done Projects Section */}
      <Card className="mb-4 sm:mb-6">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            Recent Works
          </CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Here are some of my recent works.
          </p>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {doneWorks.map((project, index) => (
            <div key={index} className="border-b border-border p-4 sm:p-6 hover:bg-muted/50 transition-colors last:border-b-0">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/profilePic.jpeg"
                    alt="Ritankar Jana"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-2">
                    <span className="font-semibold text-sm">Ritankar Jana</span>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>@jana_ritankar</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{project.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Completed</span>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base mb-2 leading-tight">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Image Slideshow with slanted effect */}
                    <div className="py-4">
                      <ImageSlideshow images={project.images} title={project.title} />
                    </div>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs bg-green-50 border-green-200 text-green-800 px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Projects Section */}
      <Card className="mb-4 sm:mb-6">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            Upcoming Works
          </CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Here's what I'm working on next—stay tuned for updates on these exciting projects!
          </p>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {upcomingWorks.map((project, index) => (
            <div key={index} className="border-b border-border p-4 sm:p-6 hover:bg-muted/50 transition-colors last:border-b-0">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/profilePic.jpeg"
                    alt="Ritankar Jana"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-2">
                    <span className="font-semibold text-sm">Ritankar Jana</span>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>@jana_ritankar</span>
                      <span className="hidden sm:inline">•</span>
                      <span>June, 2025</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base mb-2 leading-tight">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs bg-green-50 border-yellow-200 text-orange-700 px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      Stay tuned for more updates on this project!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SneakPeak;