import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

interface TwitterHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["Home", "Projects", "Skills", "Sneak Peek", "About Me"];

const TwitterHeader = ({ activeTab, setActiveTab }: TwitterHeaderProps) => {
  const { theme, setTheme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Main Layout */}
        <div className="flex flex-wrap items-center justify-between gap-y-1 py-1.5 sm:py-3">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-2 min-w-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            role="banner"
            aria-label="Profile header with name and logo"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center shadow-lg ring-2 ring-white/30 transition-transform duration-300 hover:ring-indigo-400">
              <img
                src="/Blue-Modern-Personal-Logo.svg"
                alt="Ritankar Jana's logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-sm sm:text-base md:text-lg truncate bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 transition-colors duration-300 hover:text-indigo-400">
              Ritankar Jana
            </span>
          </motion.div>

          {/* Desktop Tabs */}
          <motion.nav
            className="hidden md:flex items-center space-x-1 relative"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`relative px-2 py-1 text-xs md:text-sm font-semibold rounded-md transition-all ${activeTab === tab
                  ? "text-white dark:text-blue-300 scale-[1.03]"
                  : "text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-sm rounded-full"
                    transition={spring}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>

          {/* Theme Toggle */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileTap={{ rotate: 90 }}>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 sm:w-10 sm:h-10"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Tabs */}
        <motion.div
          className="md:hidden pt-1 pb-1.5 overflow-x-auto scroll-smooth -mx-2 px-2 touch-pan-x"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex space-x-1 w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 text-[10px] xs:text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-colors touch-manipulation ${activeTab === tab
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-white/10"
                  }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>


      </div>
    </motion.header>
  );
};

export default TwitterHeader;