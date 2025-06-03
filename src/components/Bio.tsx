
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Bio = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "Docker", "AWS", "GraphQL", "PostgreSQL", "Git"
  ];

  return (
    <section id="about" className="py-16">
      <Card className="border-2 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">📝</span>
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Hey there! 👋 I'm a passionate software engineer with 5+ years of experience building 
                scalable web applications and contributing to open-source projects. I love turning 
                complex problems into simple, beautiful solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me writing technical blogs 📚, contributing to OSS 🌟, 
                or exploring the latest tech trends. I believe in continuous learning and sharing knowledge 
                with the developer community.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently focused on: Full-stack development, DevOps practices, and building tools that 
                make developers' lives easier ⚡
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-2">🛠️</span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-blue-500">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-green-500">1K+</div>
                <div className="text-sm text-muted-foreground">GitHub Commits</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-purple-500">25+</div>
                <div className="text-sm text-muted-foreground">Blog Posts</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Bio;
