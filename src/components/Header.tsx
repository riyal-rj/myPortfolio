
import { Moon, Sun, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { SiLeetcode } from "react-icons/si";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-4xl">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full  overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img
              src="/profilePic.jpeg"
              alt="Ritankar Jana"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg">Portfolio</span>
        </div>
        
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://leetcode.com/ritankarjana/" target="_blank">
              <SiLeetcode className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
