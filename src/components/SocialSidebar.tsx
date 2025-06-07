import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Globe,
  FileText,
  Calendar,
  File,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      handle: "@riyal-rj",
      url: "https://github.com/riyal-rj",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      handle: "Ritankar Jana",
      url: "https://www.linkedin.com/in/riyal-rj/",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      handle: "@jana_ritankar",
      url: "https://x.com/jana_ritankar",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      handle: "@ritankar_jana",
      url: "https://www.instagram.com/jana_ritankar/",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      handle: "logiknest-RJ",
      url: "https://leetcode.com/u/logiknest-RJ/",
    },
    {
      icon: Mail,
      label: "Email",
      handle: "ritankar.jana.official@gmail.com",
      url: "mailto:ritankar.jana.official@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      handles: [
        { number: "+91 83348 26325", url: "tel:+918334826325" },
        { number: "+91 81006 98161", url: "tel:+918100698161" },
      ],
    },
  ];

  const quickActions = [
    { icon: FileText, label: "Resume", url: "/resume.pdf" },
    { icon: Calendar, label: "Schedule", url: "https://calendly.com/ritankar-jana-official" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="group w-full justify-start px-3 py-2 transition duration-300 ease-in-out transform hover:scale-[1.01] hover:bg-muted/10 dark:hover:bg-muted/20"
                  asChild
                >

                  <a href={link.url || "#"} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 mt-1 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                      <div>
                        <div className="font-medium text-sm">{link.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {link.handles
                            ? link.handles.map((phone, idx) => (
                              <div key={idx}>
                                <a href={phone.url} className="hover:underline">{phone.number}</a>
                              </div>
                            ))
                            : link.handle}
                        </div>
                      </div>
                    </div>
                  </a>
                </Button>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start hover:bg-muted/10"
                  asChild
                >
                  <a href={action.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-4 h-4 mr-2" />
                    {action.label}
                  </a>
                </Button>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for work</span>
            </div>
            <p className="text-xs text-muted-foreground">Open to projects & collabs.</p>
            <Button size="sm" className="w-full" asChild>
              <a href="mailto:ritankar.jana.official@gmail.com">Let’s Chat</a>
            </Button>
          </CardContent>
        </Card>
      </aside>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-md shadow-md">
        <div className="flex justify-around items-center py-2 px-4">
          {[
            { icon: FaGithub, url: "https://github.com/riyal-rj" },
            { icon: FaLinkedin, url: "https://linkedin.com/in/riyal-rj" },
            { icon: FaTwitter, url: "https://x.com/jana_ritankar" },
            { icon: FaInstagram, url: "https://www.instagram.com/jana_ritankar/" },
            { icon: SiLeetcode, url: "https://leetcode.com/u/logiknest-RJ/" },
            { icon: Mail, url: "mailto:ritankar.jana.official@gmail.com" },
            {icon:File, url: "/resume.pdf" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-xs text-muted-foreground hover:text-foreground"
              >
                <Icon className="w-5 h-5 mb-0.5 transition-transform duration-300 hover:scale-110 hover:text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
