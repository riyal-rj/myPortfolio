import { Button } from "@/components/ui/button";
import { Download, Camera, Code2, Gamepad2, MapPin, Clock, Mail } from "lucide-react";
import ExperienceCard from "../components/cards/ExperienceCard";
import EducationCard from "../components/cards/EducationCard";
import SectionCard from "./cards/SectionCard";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const AboutSection = () => {
   const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "ritankar.jana.official@gmail.com",
      action: "Send Email",
      url: "mailto:ritankar.jana.official@gmail.com",
      color: "text-red-500"
    },
  ];
  const education = [
    {
      logo: "/logo/png-clipart-academy-of-technology-asansol-engineering-college-maulana-abul-kalam-azad-university-of-technology-hooghly-institute-of-technology-technology-blue-angle.png",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Academy of Technology",
      period: "2021 - 2025",
      score: "8.92 CGPA",
      scoreType: "cgpa",
      description:
        "Started as the quiet kid in the back, but college flipped the script. 🌋 From compiler crashes to canteen banter, I found my tribe in the last three benches. 💬 Coding algorithms and cracking jokes — those moments shaped me as much as the degree. Friendship, growth, and a whole lot of laughs? Nailed it. 🚀",
    },
    {
      logo: "/logo/wwa_cossipore_english_school_logo.jpg",
      degree: "ISC - Class XI to XII",
      institution: "W.W.A Cossipore English School",
      period: "2018 - 2020",
      score: "89.5%",
      scoreType: "percentage",
      description:
        "Scored 89.5% while geeking out on Physics, Chemistry, and Math. 📐 Biology? We kept a polite distance. 😎 Math was my playground — logic puzzles that felt like games. Physics sparked cosmic curiosity, and Organic Chemistry? Doodling molecules was my jam. 🧬 CS sealed the deal, blending logic with creativity. ✨",
    },
    {
      logo: "/logo/wwa_cossipore_english_school_logo.jpg",
      degree: "LKG to Class X (ICSE)",
      institution: "W.W.A Cossipore English School",
      period: "2006 - 2018",
      score: "90.8%",
      scoreType: "percentage",
      description:
        "W.W.A CES was my second home. From LKG scribbles to Class 10 Java sparks, I grew up here. 💻 That first line of code in Class 9? Pure magic. Quizzes, IT fests, and stage moments fueled my curiosity. 🧠 It wasn't just school — it was where I discovered tech and myself. 🌟",
    },
  ];

  const experience = [
    {
      logo: "/logo/image.webp",
      title: "Software Support Engineer",
      company: "Soefia Education Incorporated",
      location: "Boston, Massachusetts, United States",
      workingMode: "Remote",
      period: "July 2025 - Aug 2025",
      description: `• Assisted in deploying a multi-tenant architecture on AWS, contributing to the configuration of ECS tasks, creation of S3 buckets, setup of AWS Amplify namespaces, and secure management of credentials using AWS Secrets Manager.

• Enhanced backend system's resilience by identifying and resolving edge cases in APIs through rigorous unit testing using pytest.

• Performed functional testing and systematically reported bugs and system failures, enabling the development team to resolve issues efficiently and enhance product quality.`,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Enhanced container with better mobile padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
          


           {/* Experience Section with enhanced mobile responsiveness */}
          <div className="animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            <SectionCard title="Work Experience" icon="💼" month="July">
              <div className="space-y-4 sm:space-y-6">
                {experience.map((exp, index) => (
                  <div 
                    key={index}
                    className="animate-[slideInUp_0.6s_ease-out_both] hover:animate-[pulse_2s_infinite]"
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    <ExperienceCard {...exp} />
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Education Section with staggered animations */}
          <div className="animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            <SectionCard title="Education" icon="🎓">
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="animate-[slideInUp_0.6s_ease-out_both] hover:animate-[wobble_1s_ease-in-out]"
                    style={{ animationDelay: `${0.8 + index * 0.3}s` }}
                  >
                    <EducationCard {...edu} />
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          
          {/* About Me Section with enhanced mobile layout */}
          <div className="group animate-[fadeInUp_0.8s_ease-out]">
            <SectionCard title="About Me" icon="👨‍💻">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                
                {/* Enhanced photo section with mobile optimization */}
                <div className="relative group/photo overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl opacity-40 group-hover/photo:opacity-70 transition-all duration-700 animate-pulse"></div>
                  
                  {/* Photo container with mobile-first sizing */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover/photo:scale-[1.02] group-hover/photo:shadow-3xl">
                    <div className="aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto relative overflow-hidden">
                      <img
                        src="RITANKAR JANA CASUAL PHOTO.jpg"
                        alt="Ritankar Jana"
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover/photo:scale-110 group-hover/photo:brightness-110"
                      />
                      {/* Enhanced overlay with mobile-optimized positioning */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover/photo:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Photo caption with mobile responsiveness */}
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-2 sm:p-3 border border-white/20">
                          <p className="text-xs sm:text-sm font-medium opacity-90">
                            Captured in a moment ✨
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced about text with mobile-optimized animations */}
                <div className="grid gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base leading-relaxed">
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    
                    {/* Individual text blocks with staggered animations and mobile optimization */}
                    <div className="group/text animate-[slideInLeft_0.6s_ease-out_0.2s_both]">
                      <p className="text-foreground font-medium transition-all duration-300 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-default border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                        Yo, I'm Ritankar Jana! 👋 Final-year B.Tech CSE student at Academy of Technology, rocking a 8.92 CGPA. My playground? The wild world of Generative AI and software dev. 🌟
                      </p>
                    </div>

                    <div className="group/text animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                      <p className="text-muted-foreground italic p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-default border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
                        Not a pro coder (yet), but I'm wired for learning. Think of me as a neural net with a killer learning rate — fast enough to grow, slow enough to avoid overfitting. 🚀
                      </p>
                    </div>

                    <div className="group/text animate-[slideInLeft_0.6s_ease-out_0.6s_both]">
                      <p className="text-foreground font-medium p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20 transition-all duration-300 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-default border border-transparent hover:border-green-200 dark:hover:border-green-800">
                        I don't just code — I dissect tech. Unraveling logic, design patterns, and architecture to build software that's scalable and timeless is my jam. 💻✨
                      </p>
                    </div>

                    <div className="group/text animate-[slideInRight_0.6s_ease-out_0.8s_both]">
                      <p className="text-muted-foreground p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-400 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-default border border-transparent hover:border-orange-200 dark:hover:border-orange-800">
                        Off the keyboard, I'm a rookie footballer chasing the ball with pure joy. ⚽️ It's less about skill, more about the vibe and camaraderie. 🏃‍♂️
                      </p>
                    </div>

                    <div className="group/text animate-[slideInLeft_0.6s_ease-out_1s_both]">
                      <p className="text-foreground font-medium p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 dark:hover:from-teal-900/20 dark:hover:to-cyan-900/20 transition-all duration-300 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-default border border-transparent hover:border-teal-200 dark:hover:border-teal-800">
                        Photography's my soul food. 📸 Armed with my Canon 200D Mark II, I hunt sunsets 🌅 and fleeting emotions, weaving stories without words. 🎨
                      </p>
                    </div>

                    <div className="group/text animate-[slideInRight_0.6s_ease-out_1.2s_both]">
                      <p className="text-muted-foreground italic p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 dark:hover:from-violet-900/20 dark:hover:to-purple-900/20 transition-all duration-300 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-default border border-transparent hover:border-violet-200 dark:hover:border-violet-800">
                        Love AI 🤖, photography 📸, coding 💻, or just random football kicks ⚽️? Hit me up — let's spark ideas and build something epic! 🎶
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating action buttons with mobile optimization */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                  {/* <div className="flex gap-2 sm:gap-3"> */}
                    {/* Download CV Button */}
                    <Button 
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium animate-[bounceIn_0.8s_ease-out_1.4s_both]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-bounce" />
                      Download CV
                      <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer" className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"/>
                    </Button>
                  {/* </div> */}
                </div>
              </div>
            </SectionCard>
          </div>
      {/* Main Contact Post */}
      <div className="border-b border-border p-4 sm:p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img
              src="/profilePic.jpeg"
              alt="Ritankar Jana"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
              <span className="font-semibold text-sm sm:text-base">Ritankar Jana</span>
              <span className="text-muted-foreground text-xs sm:text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-xs sm:text-sm">·</span>
              <span className="text-muted-foreground text-xs sm:text-sm">Pinned</span>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Let's Build Together! 🚀</h3>
                <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Always excited to collaborate on interesting projects! Whether you have an idea you'd
                    like to discuss, or just want to chat about tech,
                    I'm here for it.
                  </p>

                  <p>
                    Currently open to:
                    <Badge variant="secondary" className="mx-1 text-[10px] sm:text-xs">Freelance</Badge>
                    <Badge variant="secondary" className="mx-1 text-[10px] sm:text-xs">Consulting</Badge>
                    <Badge variant="secondary" className="mx-1 text-[10px] sm:text-xs">Full-time</Badge>
                  </p>
                </div>
              </div>

              <div className="grid gap-2 sm:gap-3">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-all">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${method.color}`} />
                            <div>
                              <p className="font-medium text-sm sm:text-base">{method.title}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground truncate">{method.description}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                            <a href={method.url} target="_blank" rel="noopener noreferrer">
                              {method.action}
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Availability Status */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img
              src="/profilePic.jpeg"
              alt="Ritankar Jana"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">2h</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Current Availability 📅</h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">Available for new projects</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Response time: Usually within 24 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Kolkata, India</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Best time: 11 AM - 6 PM IST</span>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">What I'm looking for:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Challenging full-stack projects</li>
                      <li>• Open-source collaborations</li>
                      <li>• Technical consulting opportunities</li>
                      <li>• Speaking engagements</li>
                      <li>• AI and ML projects</li>
                      <li>• Research Paper Discussions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                {/* <div className="flex items-center space-x-6">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">15</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                    <Repeat2 className="w-4 h-4 mr-1" />
                    <span className="text-xs">7</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-xs">23</span>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;