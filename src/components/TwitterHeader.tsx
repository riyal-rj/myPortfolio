
import { Moon, Sun, Search, Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

interface TwitterHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TwitterHeader = ({ activeTab, setActiveTab }: TwitterHeaderProps) => {
  const { theme, setTheme } = useTheme();

  const tabs = ["Home", "Projects", "Sneak Peek", "About Me", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full  overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <img
                  src="/Blue-Modern-Personal-Logo.svg"
                  alt="Ritankar Jana"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl hidden sm:block">Ritankar Jana</span>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 ${activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                >
                  {tab}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Mail className="h-4 w-4" />
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
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-xs whitespace-nowrap ${activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                  }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TwitterHeader;
