
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Globe, FileText } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@johndoe",
      url: "https://github.com/johndoe",
      icon: Github,
      description: "Check out my open-source projects",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      username: "John Doe",
      url: "https://linkedin.com/in/johndoe",
      icon: Linkedin,
      description: "Let's connect professionally",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      username: "@johndoe_dev",
      url: "https://twitter.com/johndoe_dev",
      icon: Twitter,
      description: "Follow for tech insights",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      username: "john@example.com",
      url: "mailto:john@example.com",
      icon: Mail,
      description: "Reach out for collaborations",
      color: "hover:text-red-500"
    },
    {
      name: "Blog",
      username: "johndoe.dev",
      url: "https://johndoe.dev/blog",
      icon: Globe,
      description: "Read my technical articles",
      color: "hover:text-green-500"
    },
    {
      name: "Resume",
      username: "Download CV",
      url: "/resume.pdf",
      icon: FileText,
      description: "View my professional background",
      color: "hover:text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-16 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center">
          <span className="mr-3">🌐</span>
          Let's Connect
        </h2>
        <p className="text-muted-foreground">Find me across the internet</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-0 group-hover:bg-transparent"
                  asChild
                >
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? "_blank" : "_self"}
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                    className="block space-y-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors`}>
                        <IconComponent className={`w-6 h-6 transition-colors ${link.color}`} />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {link.username}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                      {link.description}
                    </p>
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <CardContent className="p-8 text-center space-y-4">
          <div className="text-4xl">🚀</div>
          <h3 className="text-xl font-semibold">Open to Opportunities</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Currently looking for exciting new challenges in software engineering. 
            Let's build something amazing together!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Mail className="w-4 h-4 mr-2" />
            Start a Conversation
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default SocialLinks;
