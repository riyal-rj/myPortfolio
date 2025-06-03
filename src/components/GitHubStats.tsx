import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Repeat2 } from "lucide-react";

const GitHubStats = () => {
  const username = "riyal-rj";

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalCommits: 0,
    publicRepos: 0,
    followers: 0,
    following: 0,
    currentStreak: 0,
    longestStreak: 1,
    totalContributions: 0,
  });
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch user info
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        // Fetch repos info
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposRes.json();

        // Aggregate languages from repos
        const langCount = {};
        for (const repo of reposData) {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        }

        // Sort and compute percentages for top 5 languages
        if (!langCount || typeof langCount !== 'object') return [];

        const totalLangs = Object.values(langCount).reduce((a, b) => a + Number(b), 0);
        if (totalLangs === 0) return [];

        const sortedLangs = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100),
            color: getLanguageColor(name),
          }));

        setStats({
          totalCommits: 0, // GitHub REST API doesn't provide total commits easily
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          currentStreak: 0, // Placeholder — would need GraphQL API to get real streak
          longestStreak: 1,
          totalContributions: 0, // Placeholder — would need GraphQL API
        });

        setLanguages(sortedLangs);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Fallback initials from your name or username for avatar circle
  const initials = "RJ";

  return (
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
            <span className="text-muted-foreground text-sm">@{username}</span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">Live</span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-1">GitHub Wrapped 2025 📊</h3>
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
                    <Progress
                      value={(stats.currentStreak / stats.longestStreak) * 100}
                      className="h-2"
                    />
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
                  {languages.map((lang, index) => (
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
                  <span className="text-xs">{stats.followers}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Utility: map language names to colors (simple example)
function getLanguageColor(name) {
  switch (name.toLowerCase()) {
    case "javascript":
      return "bg-yellow-500";
    case "typescript":
      return "bg-blue-500";
    case "python":
      return "bg-green-500";
    case "rust":
      return "bg-orange-500";
    case "java":
      return "bg-red-600";
    default:
      return "bg-gray-500";
  }
}

export default GitHubStats;
