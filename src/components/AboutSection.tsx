import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, Repeat2, Download } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Academy of Technology",
      period: "2021 - Present",
      description:
        "Started as the quiet kid in the back, but college flipped the script. 🌋 From compiler crashes to canteen banter, I found my tribe in the last three benches. 💬 Coding algorithms and cracking jokes — those moments shaped me as much as the degree. Friendship, growth, and a whole lot of laughs? Nailed it. 🚀",
    },
    {
      degree: "ISC - Class XI to XII",
      institution: "W.W.A Cossipore English School",
      period: "2018 - 2020",
      description:
        "Scored 89.5% while geeking out on Physics, Chemistry, and Math. 📐 Biology? We kept a polite distance. 😎 Math was my playground — logic puzzles that felt like games. Physics sparked cosmic curiosity, and Organic Chemistry? Doodling molecules was my jam. 🧬 CS sealed the deal, blending logic with creativity. ✨",
    },
    {
      degree: "LKG to Class X (ICSE)",
      institution: "W.W.A Cossipore English School",
      period: "2006 - 2018",
      description:
        "W.W.A CES was my second home. From LKG scribbles to Class 10 Java sparks, I grew up here. 💻 That first line of code in Class 9? Pure magic. Quizzes, IT fests, and stage moments fueled my curiosity. 🧠 It wasn’t just school — it was where I discovered tech and myself. 🌟",
    },
  ];

  const achievements = [
    "1. Jack-of-all-trades? Nailed quizzes, hackathons, and open-source sprints. 🎯",
    "2. Rocked the TCS ITWiz 2017 regional stage — my first tech spotlight moment. 🏆",
    "3. Led Kodenza 2019, our interschool coding hackathon — organizing taught me more than any textbook. 🧠",
    "4. Built 'TriNayan' for RBI’s HaRBInger-2k24 — AI-powered currency detection to solve real-world problems. 💡",
    "5. Thrived in the chaos of Smart India Hackathon 2024 — code, ideas, and adrenaline. 🛠️",
    "6. Dipped my toes in open source — doodling with Hugging Face and loving the learning curve. 🌱",
    "7. Snagged Wipro TalentNext’s Full Stack Java Developer cert — a badge, a milestone, a vibe. 📜",
  ];

  return (
    <div className="space-y-4">
      {/* About Me Section */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">June , 2025</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-3">About Me 👨‍💻</h3>
              <div className="rounded-lg overflow-hidden border border-border">
                <img src="RITANKAR JANA CASUAL PHOTO.jpg" alt="Captured moment by Ritankar" className="w-100 h-90 object-cover" />
              </div>
              <div className="space-y-3 text-sm leading-relaxed max-w-2xl mx-auto">
                <p className="text-gray-800 dark:text-gray-200 font-medium transition-transform duration-300 hover:scale-105">
                  Yo, I’m Ritankar Jana! 👋 Final-year B.Tech CSE student at Academy of Technology, rocking a 8.99 GPA. My playground? The wild world of Generative AI and software dev. 🌟
                </p>
                <p className="text-gray-700 dark:text-gray-300 italic hover:text-indigo-500 transition-colors duration-200">
                  Not a pro coder (yet), but I’m wired for learning. Think of me as a neural net with a killer learning rate — fast enough to grow, slow enough to avoid overfitting. 🚀
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium transition-transform duration-300 hover:scale-105">
                  I don’t just code — I dissect tech. Unraveling logic, design patterns, and architecture to build software that’s scalable and timeless is my jam. 💻✨
                </p>
                <p className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors duration-200">
                  Off the keyboard, I’m a rookie footballer chasing the ball with pure joy. ⚽️ It’s less about skill, more about the vibe and camaraderie. 🏃‍♂️
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium transition-transform duration-300 hover:scale-105">
                  Photography’s my soul food. 📸 Armed with my Canon 200D Mark II, I hunt sunsets 🌅 and fleeting emotions, weaving stories without words. 🎨
                </p>
                <p className="text-gray-700 dark:text-gray-300 italic hover:text-blue-500 transition-colors duration-200">
                  Love AI 🤖, photography 📸, coding 💻, or just random football kicks ⚽️? Hit me up — let’s spark ideas and build something epic! 🎶
                </p>
              </div>

              <div className="flex justify-center items-center gap-2 py-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                  asChild
                >
                  <a href="/resume.pdf" download="Ritankar_Jana_Resume.pdf">
                    <Download className="w-4 h-4" />
                    Grab My Resume
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-start pt-3 border-t border-border/50">
                <div className="flex items-center space-x-6 sm:space-x-8">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">28</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                    <Repeat2 className="w-4 h-4 mr-1" />
                    <span className="text-xs">15</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-xs">67</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">June, 2025</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Work Experience 💼</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="animate-pulse space-y-2 p-3 border border-border rounded-lg bg-muted">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">June , 2025</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Education 🎓</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-500">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <Badge variant="outline" className="text-xs">{edu.period}</Badge>
                        </div>
                        <p className="text-sm font-medium text-purple-500">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">1y ago</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Key Achievements 🎯</h3>
              <div className="grid gap-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded hover:bg-accent/50">
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-start pt-3 border-t border-border/50">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;