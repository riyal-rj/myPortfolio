import { Button } from "@/components/ui/button";
import { Download, Camera, Code2, Gamepad2 } from "lucide-react";
import ExperienceCard from "../components/cards/ExperienceCard";
import EducationCard from "../components/cards/EducationCard";
import SectionCard from "./cards/SectionCard";

const AboutSection = () => {
  const education = [
    {
      logo: "/logo/png-clipart-academy-of-technology-asansol-engineering-college-maulana-abul-kalam-azad-university-of-technology-hooghly-institute-of-technology-technology-blue-angle.png",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Academy of Technology",
      period: "2021, October - 2025, July",
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
      title: "Software Engineer Technical Support",
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div >
      {/* Header with floating elements */}


      {/* About Me Section */}
      <SectionCard title="About Me" icon="👨‍💻">
        <div className="space-y-6">
          {/* Main photo with enhanced styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="RITANKAR JANA CASUAL PHOTO.jpg"
                alt="Ritankar Jana"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Captured in a moment ✨</p>
              </div>
            </div>
          </div>

          {/* About text with better typography */}
          <div className="grid gap-4 text-base leading-relaxed">
            <div className="space-y-4">
              <p className="text-foreground font-medium transition-smooth hover:text-primary p-4 rounded-lg hover:bg-accent/30">
                Yo, I'm Ritankar Jana! 👋 Final-year B.Tech CSE student at Academy of Technology, rocking a 8.92 CGPA. My playground? The wild world of Generative AI and software dev. 🌟
              </p>

              <p className="text-muted-foreground italic p-4 rounded-lg hover:bg-accent/20 transition-smooth hover:text-accent-blue">
                Not a pro coder (yet), but I'm wired for learning. Think of me as a neural net with a killer learning rate — fast enough to grow, slow enough to avoid overfitting. 🚀
              </p>

              <p className="text-foreground font-medium p-4 rounded-lg hover:bg-accent/30 transition-smooth hover:text-primary">
                I don't just code — I dissect tech. Unraveling logic, design patterns, and architecture to build software that's scalable and timeless is my jam. 💻✨
              </p>

              <p className="text-muted-foreground p-4 rounded-lg hover:bg-accent/20 transition-smooth hover:text-accent-purple">
                Off the keyboard, I'm a rookie footballer chasing the ball with pure joy. ⚽️ It's less about skill, more about the vibe and camaraderie. 🏃‍♂️
              </p>

              <p className="text-foreground font-medium p-4 rounded-lg hover:bg-accent/30 transition-smooth hover:text-primary">
                Photography's my soul food. 📸 Armed with my Canon 200D Mark II, I hunt sunsets 🌅 and fleeting emotions, weaving stories without words. 🎨
              </p>

              <p className="text-muted-foreground italic p-4 rounded-lg hover:bg-accent/20 transition-smooth hover:text-accent-orange">
                Love AI 🤖, photography 📸, coding 💻, or just random football kicks ⚽️? Hit me up — let's spark ideas and build something epic! 🎶
              </p>
            </div>
          </div>

          {/* Enhanced download button */}
          <div className="flex justify-center"/>
        </div>
      </SectionCard>

      {/* Experience Section */}
      <SectionCard title="Work Experience" icon="💼">
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </SectionCard>

      {/* Education Section */}
      <SectionCard title="Education" icon="🎓">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </SectionCard>

      {/* Achievements Section
      <SectionCard title="Key Achievements" icon="🎯">
        <div className="grid gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-accent/20 transition-smooth card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </SectionCard> */}

      {/* Footer with connect section */}
      {/* <div className="text-center py-8 space-y-4">
        <div className="section-divider"></div>
        <p className="text-muted-foreground">
          Ready to build something amazing together? Let's connect! 🚀
        </p>
        <div className="flex justify-center gap-2 text-sm text-accent-blue">
          <span>✨ Portfolio</span>
          <span>•</span>
          <span>🎯 Projects</span>
          <span>•</span>
          <span>📱 Contact</span>
        </div>
      <*/}
      </div> 
    </div>
  );
};

export default AboutSection;