
import { useState, useEffect } from "react";
import { MapPin, Calendar, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfileSection = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full-Stack Developer 🚀",
    "Open Source Contributor 🌟", 
    "Backend Engineer ⚡",
    "AI Enthusiast 🤖",
    "Problem Solver 🧠"
  ];

  const techStack = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "Docker", "AWS", "GraphQL", "PostgreSQL", "Git"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentIndex];
      
      if (!isDeleting) {
        setCurrentRole(current.substring(0, currentRole.length + 1));
        
        if (currentRole === current) {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentRole(current.substring(0, currentRole.length - 1));
        
        if (currentRole === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentRole, currentIndex, isDeleting, roles]);

  return (
    <div className="border-b border-border p-6 bg-background">
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 flex-shrink-0">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="text-3xl">👨‍💻</span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">John Doe</h1>
            <Badge variant="secondary" className="text-xs">PRO</Badge>
          </div>
          <p className="text-muted-foreground text-sm">@johndoe_dev</p>
          
          <div className="mt-3 space-y-2">
            <div className="h-6 flex items-center">
              <span className="text-base font-medium">
                {currentRole}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed">
              Building amazing web experiences & contributing to OSS 🌍 • 
              Currently @TechCorp • Love: AI, Web3, DevTools ⚡
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined March 2020</span>
              </div>
              <div className="flex items-center space-x-1">
                <Link className="w-4 h-4" />
                <a href="https://johndoe.dev" className="text-blue-500 hover:underline">
                  johndoe.dev
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <span className="font-semibold">156</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
              <div>
                <span className="font-semibold">1.2K</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
            </div>
          </div>
        </div>
        
        <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Follow
        </Button>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-muted-foreground mb-3">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
