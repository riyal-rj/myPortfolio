import { Moon, Sun, Search, Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

interface TwitterHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["Home", "Projects", "Sneak Peek", "About Me", "Contact"];

const TwitterHeader = ({ activeTab, setActiveTab }: TwitterHeaderProps) => {
  const { theme, setTheme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg ring-2 ring-white/20">
              <img
                src="/Blue-Modern-Personal-Logo.svg"
                alt="Ritankar Jana"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
              Ritankar Jana
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-2 relative"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  activeTab === tab
                    ? "text-white dark:text-blue-300 scale-[1.05]"
                    : "text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-md rounded-full"
                    transition={spring}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>

          {/* Icons */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[Search, Bell, Mail].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="hidden sm:flex p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                <Icon className="h-4 w-4" />
              </motion.div>
            ))}
            <motion.div whileTap={{ rotate: 90 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Nav */}
        <motion.div
          className="md:hidden pt-2 overflow-x-auto scroll-smooth px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow"
                    : "text-gray-600 dark:text-gray-300 hover:bg-white/10"
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
