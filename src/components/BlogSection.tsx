import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, BookOpen } from "lucide-react";
import { MdOutlineUpcoming } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Repeat2 } from "lucide-react";

const BlogSection = () => {
  const upcomingWorks = [
    {
      title: "Real-Time Collaboration Platform with AI-Powered Features",
      description: "A Google Docs-inspired platform with a unique twist—featuring AI-powered suggestions and task management. Designed for seamless real-time collaboration and efficient team workflows.",
      techStack: ["React", "WebSocket", "MongoDB", "AI"],
    },
    {
      title: "Online Code Judge System with Concurrency and File I/O",
      description: "A mini LeetCode-inspired platform to test coding skills. Focuses on handling multiple submissions with concurrency and efficient file I/O for code input/output processing.",
      techStack: ["React", "Node.js", "MongoDB", "Concurrency"],
    },
    {
      title: "Event Management System with Spring Boot",
      description: "An enterprise-grade event management system built for scalability. Supports event listing, booking, and notifications, optimized with caching and asynchronous tasks.",
      techStack: ["Spring Boot", "Redis", "RabbitMQ", "React"],
    },
  ];

  return (
    <Card className="mb-4 sm:mb-6">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <MdOutlineUpcoming className="w-4 h-4 sm:w-5 sm:h-5" />
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
                      <Badge key={techIndex} variant="outline" className="text-xs bg-secondary/10 px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground italic">
                    Stay tuned for more updates on this project!
                  </p>

                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-border/50">
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default BlogSection;