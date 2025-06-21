import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Coffee, MessageCircle, Heart, Repeat2, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
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

  return (
    <div className="space-y-0">
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
  );
};

export default ContactSection;
