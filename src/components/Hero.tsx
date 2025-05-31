
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Software Engineer 💻",
    "Full Stack Developer 🚀",
    "Open Source Contributor 🌟",
    "Problem Solver 🧠",
    "Code Enthusiast ⚡"
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
    <section className="py-20 text-center">
      <div className="space-y-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            John Doe
          </h1>
          <div className="h-8 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-muted-foreground">
              {currentRole}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about building amazing web experiences and contributing to the open-source community. 
          Currently crafting digital solutions at <span className="text-blue-500 font-semibold">@TechCorp</span>
        </p>
        
        <div className="flex items-center justify-center space-x-4 pt-4">
          <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
