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
    "Java", "JavaScript", "Python", "Node.js", "React",
    "MongoDB", "Pytorch", "Transformer", "Git"
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
    <div className="border-b border-border p-4 sm:p-6 bg-background">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        {/* Profile Picture */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] sm:p-[3px] flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden bg-background">
            <img
              src="/profilePic.jpeg"
              alt="Ritankar Jana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between sm:items-start">
            <div className="flex items-center space-x-2">
              <h1 className="text-lg sm:text-xl font-bold">Ritankar Jana</h1>
              <Badge variant="secondary" className="text-[10px] sm:text-xs">PRO</Badge>
            </div>
            <Button 
              className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Follow
            </Button>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">@riyal-RJ</p>

          <div className="mt-2 sm:mt-3 space-y-2">
            <div className="h-5 sm:h-6 flex items-center">
              <span className="text-sm sm:text-base font-medium">
                {currentRole}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              I wrangle backend logic and tame rogue LLMs for fun — still waiting for an AI to do my laundry.
              Currently open to work, mildly caffeinated, and occasionally productive 🤖☕
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Joined June, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Link className="w-3 h-3 sm:w-4 sm:h-4" />
                <a href="https://github.com/riyal-rj" className="text-blue-500 hover:underline">
                  riyalRJ.dev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm">
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
      </div>

      {/* Tech Stack */}
      <div className="mt-3 sm:mt-4">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">Tech Stack:</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-[10px] sm:text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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