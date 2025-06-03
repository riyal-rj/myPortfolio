
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, Repeat2, Download } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Engineer",
      company: "TechCorp",
      period: "2022 - Present",
      description: "Leading development of microservices architecture serving 1M+ users"
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022", 
      description: "Built scalable web applications from 0 to 100K users"
    },
    {
      title: "Junior Developer",
      company: "DevAgency",
      period: "2019 - 2020",
      description: "Developed client websites and learned the fundamentals"
    }
  ];

  const achievements = [
    "🏆 Won Best Developer Tool at HackTech 2023",
    "📝 Published 25+ technical articles with 100K+ views",
    "🌟 Maintained OSS projects with 1K+ GitHub stars",
    "🎤 Spoke at 5+ tech conferences and meetups",
    "💼 Mentored 10+ junior developers",
    "🚀 Launched 3 successful side projects"
  ];

  return (
    <div className="space-y-0">
      {/* Main About Post */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full  overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img
              src="/profilePic.jpeg"
              alt="Ritankar Jana"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">Pinned</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-3">About Me 👨‍💻</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Hey there! 👋 I'm a passionate software engineer with 5+ years of experience building 
                    scalable web applications and contributing to open-source projects. I love turning 
                    complex problems into simple, beautiful solutions.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me writing technical blogs 📚, contributing to OSS 🌟, 
                    or exploring the latest tech trends. I believe in continuous learning and sharing knowledge 
                    with the developer community.
                  </p>
                  
                  <p>
                    Currently focused on: Full-stack development, DevOps practices, and building tools that 
                    make developers' lives easier ⚡
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <div className="flex items-center space-x-6">
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

      {/* Experience Thread */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full  overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
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
              <span className="text-muted-foreground text-sm">Thread</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Work Experience 💼</h3>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{exp.title}</h4>
                          <Badge variant="outline" className="text-xs">{exp.period}</Badge>
                        </div>
                        <p className="text-sm font-medium text-blue-500">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <div className="flex items-center space-x-6">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">12</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                    <Repeat2 className="w-4 h-4 mr-1" />
                    <span className="text-xs">8</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-xs">34</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Post */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full  overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
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
              <span className="text-muted-foreground text-sm">1w</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Key Achievements 🎯</h3>
              
              <div className="grid gap-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-accent/50">
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <div className="flex items-center space-x-6">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">18</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                    <Repeat2 className="w-4 h-4 mr-1" />
                    <span className="text-xs">12</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-xs">45</span>
                  </Button>
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
