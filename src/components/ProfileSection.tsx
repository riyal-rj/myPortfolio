
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
    <div className="border-b border-border p-6 bg-background">
      <div className="flex items-start space-x-4">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden bg-background">
            <img
              src="/profilePic.jpeg"
              alt="Ritankar Jana"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </div>



        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">Ritankar Jana</h1>
            <Badge variant="secondary" className="text-xs">PRO</Badge>
          </div>
          <p className="text-muted-foreground text-sm">@riyal-RJ</p>

          <div className="mt-3 space-y-2">
            <div className="h-6 flex items-center">
              <span className="text-base font-medium">
                {currentRole}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              I wrangle backend logic and tame rogue LLMs for fun — still waiting for an AI to do my laundry.
              Currently open to work, mildly caffeinated, and occasionally productive 🤖☕
            </p>


            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined June, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Link className="w-4 h-4" />
                <a href="https://github.com/riyal-rj" className="text-blue-500 hover:underline">
                  riyalRJ.dev
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
