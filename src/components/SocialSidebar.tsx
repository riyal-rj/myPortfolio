
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Globe, FileText, Calendar, Coffee, Instagram, Facebook } from "lucide-react";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", handle: "@riyal-rj", url: "https://github.com/riyal-rj" },
    { icon: Linkedin, label: "LinkedIn", handle: "Ritankar Jana", url: "https://linkedin.com/in/johndoe" },
    { icon: Twitter, label: "Twitter", handle: "@jana_ritankar", url: "https://x.com/jana_ritankar" },
    { icon: Mail, label: "Email", handle: "ritankar.jana.official@gmail.com", url: "mailto:ritankar.jana.official@gmail.com" },
    {icon:Instagram, label: "Instagram", handle: "@jana_ritankar", url: "https://www.instagram.com/jana_ritankar/" },
    {icon:Facebook, label: "Facebook", handle: "Ritankar Jana", url: "https://www.facebook.com/janaritankar/" },
  ];

  const quickActions = [
    { icon: Globe, label: "Portfolio", url: "https://johndoe.dev" },
    { icon: FileText, label: "Resume", url: "/resume.pdf" },
    { icon: Calendar, label: "Schedule Call", url: "https://calendly.com/johndoe" },
    { icon: Coffee, label: "Buy me coffee", url: "https://buymeacoffee.com/johndoe" }
  ];

  return (
    <aside className="w-80 p-4 space-y-4 hidden lg:block">
      {/* Social Links */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto p-3"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center space-x-3 w-full">
                    <IconComponent className="w-5 h-5" />
                    <div className="text-left flex-1">
                      <div className="font-medium text-sm">{link.label}</div>
                      <div className="text-xs text-muted-foreground">{link.handle}</div>
                    </div>
                  </div>
                </a>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <a href={action.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="w-4 h-4 mr-2" />
                  {action.label}
                </a>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Current Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Available for work</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Open to new opportunities and collaborations
            </div>
            <Button size="sm" className="w-full">
              Let's Chat
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default SocialSidebar;
