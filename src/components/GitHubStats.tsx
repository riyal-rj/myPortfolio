
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Repeat2 } from "lucide-react";

const GitHubStats = () => {
  const stats = {
    totalCommits: 1247,
    publicRepos: 42,
    followers: 156,
    following: 89,
    currentStreak: 23,
    longestStreak: 87,
    totalContributions: 2156
  };

  const languages = [
    { name: "JavaScript", percentage: 35, color: "bg-yellow-500" },
    { name: "TypeScript", percentage: 28, color: "bg-blue-500" },
    { name: "Python", percentage: 18, color: "bg-green-500" },
    { name: "Rust", percentage: 12, color: "bg-orange-500" },
    { name: "Other", percentage: 7, color: "bg-gray-500" }
  ];

  return (
    <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white font-bold text-sm">JD</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold">John Doe</span>
            <span className="text-muted-foreground text-sm">@johndoe_dev</span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">6h</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-1">GitHub Wrapped 2024 📊</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This year has been incredible! Here's my coding journey in numbers 🚀
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Card className="text-center">
                <CardContent className="p-3">
                  <div className="text-xl font-bold text-blue-500">{stats.totalCommits.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Commits</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-3">
                  <div className="text-xl font-bold text-green-500">{stats.publicRepos}</div>
                  <div className="text-xs text-muted-foreground">Repos</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-3">
                  <div className="text-xl font-bold text-purple-500">{stats.currentStreak}</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-3">
                  <div className="text-xl font-bold text-orange-500">{stats.totalContributions.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Contributions</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">🔥 Contribution Streak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Current</span>
                      <span className="font-semibold">{stats.currentStreak} days</span>
                    </div>
                    <Progress value={(stats.currentStreak / stats.longestStreak) * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Best</span>
                      <span className="font-semibold">{stats.longestStreak} days</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">💻 Top Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {languages.slice(0, 3).map((lang, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${lang.color}`}></div>
                          <span>{lang.name}</span>
                        </div>
                        <span className="font-semibold">{lang.percentage}%</span>
                      </div>
                      <Progress value={lang.percentage} className="h-1" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center space-x-6">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span className="text-xs">32</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                  <Repeat2 className="w-4 h-4 mr-1" />
                  <span className="text-xs">28</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                  <Heart className="w-4 h-4 mr-1" />
                  <span className="text-xs">156</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
