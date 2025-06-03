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

} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon

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
      icon: FaFacebook,
      label: "Facebook",
      handle: "Ritankar Jana",
      url: "https://www.facebook.com/janaritankar/",
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
        { number: "+91 81006 98161", url: "tel:+81006 98161" }
      ],
    }
  ];

  const quickActions = [
    { icon: Globe, label: "Portfolio", url: "https://ritankar.tech" },
    { icon: FileText, label: "Resume", url: "/Ritankar_Jana_Resume.pdf" },
    { icon: Calendar, label: "Schedule Call", url: "https://calendly.com/ritankarjana" },

  ];

  return (
    <aside className="w-full lg:w-80 p-4 space-y-6">
      {/* Connect Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto px-3 py-2 hover:bg-accent"
                asChild
              >
                <a href={link.url || "#"} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center space-x-3 w-full">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <div className="text-left">
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

      {/* Quick Actions Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start hover:bg-accent"
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

      {/* Status Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for work</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Open to new opportunities and collaborations
          </p>
          <Button
            size="sm"
            className="w-full"
            asChild
          >
            <a href="mailto:ritankar.jana.official@gmail.com">
              Let’s Chat
            </a>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default SocialSidebar;
