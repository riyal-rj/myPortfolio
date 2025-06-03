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
        "When I first walked into college, I was the classic introvert — quiet, observant, and always calculating the right moment to speak. But somewhere between classes, compiler errors, and canteen breaks, I slowly erupted like a volcano. 🌋 The once-quiet guy found his groove in the last three benches — where ideas, jokes, and dreams flowed freely. 💬✨ Whether it was dissecting algorithms or just pulling each other’s legs, those backbench moments with my close friends made the journey unforgettable. Sure, I came here to study code, but I also ended up decoding friendship, growth, and a whole lot of laughter."
    },
    {
      degree: "ISC - Class XII",
      institution: "W.W.A Cossipore English School",
      period: "2019 - 2021",
      description:
        "Graduated with 89.5%, immersed in the trio of Physics, Chemistry, and Mathematics. 🧪⚛️ I wouldn’t call myself a Biology hater — just shared a respectful distance with it. 😅 Math, on the other hand, was a world I truly enjoyed — clean logic, structured thinking, and puzzles that felt like games. 📐✨ I had a slight inclination towards Physics too — especially the parts that made you pause and think about how the universe works. 🌌 And then there was Organic Chemistry, where I’d often catch myself doodling molecular structures in the margins — almost like drawing little logic maps with atoms. 🧬🖊️ CS was the cherry on top — the place where logic met creativity."
    },
    {
      degree: "LKG to Class X (ICSE)",
      institution: "W.W.A Cossipore English School",
      period: "2006 - 2019",
      description:
        "W.W.A CES wasn’t just the place I went to school — it was where I *grew up*. From scribbling alphabets in LKG ✏️ to solving math problems in Class 10, every hallway, every classroom felt like a second home. It was in Class 9 where I first wrote a line of Java code — a moment that lit a spark 💻 in me that still burns bright. I had no idea those curly braces would shape my future, but they did. That was my gateway into programming, logic, and problem-solving — and the beginning of a beautiful bond with tech.\n\nI wasn’t just a classroom kid either. I dove headfirst into quizzes, IT fests, and competitions that stretched my brain and confidence alike. 🧠✨ Whether it was tech quizzes or school events, I loved soaking in knowledge and the thrill of being on stage. Those years weren't just about grades; they were about discovery, curiosity, and an emotional connection that’s hard to put into words."
    }

  ];

  const achievements = [
  "🎯 Tried my hands at a little bit of everything — from quizzes to hackathons to open source.",
  "🏆 Made it to the TCS ITWiz 2017 regional rounds — my first taste of tech on stage.",
  "🧠 Led Kodenza, our interschool coding hackathon, in 2019 — learned more organizing it than any textbook ever taught me.",
  "💡 Participated in the RBI Hackathon mamed HaRBInger-2k24 with 'TriNayan' — built an AI-powered solution to solve real-world currency detection problems.",
  "🛠️ Part of Smart India Hackathon (SIH) 2024 — loved the chaos, the ideas, the code sprints.",
  "🌱 Started open source contributions — did some experimental doodling in Hugging Face (still learning, still loving it).",
  "📜 Earned my Full Stack Java Developer certificate from Wipro TalentNext — more than a badge, a small milestone in my dev journey."
];

  return (
    <div className="space-y-0">
      {/* About Me Section */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          {/* First Profile Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">Pinned</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-3">About Me 👨‍💻</h3>
              <div className="rounded-lg overflow-hidden border border-border">
                <img src="RITANKAR JANA CASUAL PHOTO.jpg" alt="Captured moment by Ritankar" className="w-200 h-200" />
              </div>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  Hey there! 👋 I’m Ritankar Jana, currently in my final year of B.Tech in Computer Science and Engineering at the Academy of Technology, holding a GPA of 8.99. My world revolves around the fascinating intersection of Generative AI, Artificial Intelligence, and Software Development Technologies — fields that constantly challenge me to grow, experiment, and push boundaries.
                </p>
                <p>
                  I don’t claim to be a “pro developer” (yet), but I bring a mindset tuned for steady learning and sustainable growth. I like to think of myself as a lifelong learner with an optimal “learning rate,” carefully balancing the desire to grow fast while avoiding the pitfalls of overfitting — the trap of getting too narrow or rigid in skill development. This philosophy keeps me curious and adaptable, always open to exploring new ideas and perspectives.
                </p>
                <p>
                  What truly lights me up is going beyond just writing code — I love diving into the heart of the technologies I work with, unraveling the elegant logic, architecture, and design patterns that make software both powerful and resilient. I often find myself lost in complex concepts, breaking them down into simple, clear ideas, and imagining how those pieces come together to solve real-world problems. This deeper way of thinking helps me build software that’s not just functional, but thoughtfully crafted, scalable, and built to stand the test of time.
                </p>
                <p>
                  Beyond the academic grind, I’m a creative soul who loves to balance logic with play. ⚽️ I’m still a newbie on the field, but there’s something magical about the pure joy of chasing the ball 🏃‍♂️, the rush of energy, and the camaraderie that comes with every sprint and pass. For me, it’s never about skill alone — it’s all about the fun and connection that football brings.
                </p>
                <p>
                  Photography is a passion that truly defines a part of who I am. 📸 With my trusty Canon 200D Mark II always in hand, I’m on a constant hunt for light and stories — whether it’s the golden glow of a sunset 🌅 or the quiet emotions dancing across someone’s face. For me, photography isn’t just a hobby; it’s a wordless way to tell stories, a creative outlet that perfectly balances my analytical mind and brings a sense of harmony to my world. 🎨✨
                </p>
                <p>
                  If you’re curious about AI 🤖, passionate about photography 📸, or just want to chat about software development 💻, coding 🧑‍💻, tech ⚙️, or even football ⚽️ (where I’m happy just to run around and kick the ball at random 🏃‍♂️🔥), or the perfect playlist for a rainy day 🎶☔, I’m always up for a conversation. Let’s connect, share ideas, and create something amazing together.
                </p>
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

        {/* Second Profile Image & Post Section */}

      </div>


      {/* Experience - Loading State */}
      <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
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
              {/* Skeleton Placeholder */}
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="animate-pulse space-y-2 p-4 border border-border rounded-lg bg-muted">
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
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">Education</span>
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
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana</span>
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
