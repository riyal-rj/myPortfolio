import { useState, useEffect } from "react";
import { MapPin, Calendar, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
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
    <div className="border-b border-border bg-background">
      {/* Cover Photo */}
      <div className="relative">
        <img
          src="/cover.gif"
          alt="Cover Photo"
          className="w-full h-28 sm:h-48 object-cover"
        />
        {/* Profile Picture */}
        <div className="absolute bottom-0 left-3 sm:left-6 transform translate-y-1/2">
          <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] sm:p-[3px] flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src="/profilePic.jpeg"
                alt="Ritankar Jana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-10 sm:pt-16 px-3 sm:px-6 pb-3 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between sm:items-start">
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-xl font-bold">Ritankar Jana</h1>
                <Badge variant="secondary" className="text-[10px] sm:text-xs">PRO</Badge>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <Button
                  asChild
                  className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-[#1DA1F2] bg-white border border-[#1DA1F2] hover:bg-[#E8F5FE] hover:text-[#0C7ABF] dark:bg-gray-900 dark:text-[#1DA1F2] dark:border-[#1DA1F2] dark:hover:bg-gray-800 dark:hover:text-[#4AB3F4] rounded-full shadow-sm transition-all duration-200"
                  aria-label="Follow Ritankar Jana on X"
                >
                  <a
                    href="https://www.linkedin.com/in/riyal-rj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <p className="text-muted-foreground text-[11px] sm:text-sm mt-1">@riyal-RJ</p>

            <div className="mt-1.5 sm:mt-3 space-y-1.5 sm:space-y-2">
              <div className="h-4 sm:h-6 flex items-center">
                <span className="text-xs sm:text-base font-medium">
                  {currentRole}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-[11px] sm:text-sm leading-relaxed">
                I wrangle backend logic and tame rogue LLMs for fun — still waiting for an AI to do my laundry.
                Currently open to work, mildly caffeinated, and occasionally productive 🤖☕
              </p>

              <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-[11px] sm:text-sm text-muted-foreground">
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
                  <a href="https://x.com/jana_ritankar" className="text-blue-500 hover:underline">
                    riyalRJ.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-sm">
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
        <div className="mt-2 sm:mt-4">
          <p className="text-[11px] sm:text-sm text-muted-foreground mb-1 sm:mb-3">Tech Stack:</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
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
    </div>
  );
};

export default ProfileSection