import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Repeat2 } from "lucide-react";

// Type definitions for GitHub API responses
interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar: ContributionCalendar;
      };
    };
  };
  errors?: { message: string }[];
}

interface Language {
  name: string;
  percentage: number;
  color: string;
}

interface Stats {
  totalCommits: number;
  publicRepos: number;
  followers: number;
  following: number;
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
}

const GitHubStats = () => {
  const username = "riyal-rj";
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    totalCommits: 0,
    publicRepos: 0,
    followers: 0,
    following: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalContributions: 0,
  });
  const [languages, setLanguages] = useState<Language[]>([]);
  const [error, setError] = useState<string | null>(null);

  const ShimmerCard = () => (
    <Card className="animate-pulse">
      <CardContent className="p-3 space-y-2">
        <div className="h-5 bg-muted rounded w-1/2 mx-auto"></div>
        <div className="h-3 bg-muted rounded w-1/3 mx-auto"></div>
      </CardContent>
    </Card>
  );

  const ShimmerProgress = () => (
    <div className="space-y-3">
      <div className="h-4 bg-muted rounded w-2/3"></div>
      <div className="h-2 bg-muted rounded w-full"></div>
    </div>
  );

  // Function to get commits for a specific repository
  const getRepoCommits = async (repoName: string): Promise<number> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/commits?author=${username}&per_page=100`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 403) {
          console.warn(`Rate limited or forbidden for repo: ${repoName}`);
          return 0;
        }
        throw new Error(`Failed to fetch commits for ${repoName}`);
      }

      const commits = await response.json();
      return Array.isArray(commits) ? commits.length : 0;
    } catch (error) {
      console.error(`Error fetching commits for ${repoName}:`, error);
      return 0;
    }
  };

  // Function to get repository languages
  const getRepoLanguages = async (repoName: string): Promise<Record<string, number>> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/languages`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "",
          },
        }
      );

      if (!response.ok) {
        return {};
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching languages for ${repoName}:`, error);
      return {};
    }
  };

  // Calculate streak data using GraphQL
  const calculateStreakData = async (username: string, token: string) => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    try {
      if (!token) {
        throw new Error("GITHUB_TOKEN is missing. Set VITE_GITHUB_TOKEN in .env.");
      }

      //console.log("Fetching streak data for:", username, "Token:", token.slice(0, 4) + "...");
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { username },
        }),
      });

      console.log("GraphQL Response Status:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("GraphQL Error Response:", errorText);
        if (response.status === 401) {
          throw new Error("Unauthorized: Invalid or expired GitHub token. Regenerate token with 'user' scope.");
        }
        if (response.status === 403) {
          console.warn("Rate limit hit, retrying after 1 second...");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return await calculateStreakData(username, token);
        }
        throw new Error(`GraphQL request failed: ${response.status} - ${errorText}`);
      }

      const result: GraphQLResponse = await response.json();
      //console.log("GraphQL Result:", JSON.stringify(result, null, 2));
      if (result.errors) {
        console.error("GraphQL Errors:", result.errors);
        throw new Error(`GraphQL errors: ${result.errors.map((e) => e.message).join(", ")}`);
      }

      const contributionDays =
        result.data?.user?.contributionsCollection?.contributionCalendar?.weeks?.flatMap(
          (week) => week.contributionDays
        ) || [];
      //console.log("Contribution Days:", contributionDays);

      let currentStreak = 0;
      let longestStreak = 0;
      let tempStreak = 0;
      const today = new Date().toISOString().split("T")[0];
      //console.log("Today (UTC):", today);

      for (const day of contributionDays) {
        //console.log(`Day: ${day.date}, Contributions: ${day.contributionCount}`);
        if (day.contributionCount > 0) {
          tempStreak++;
          if (day.date === today) {
            currentStreak = tempStreak;
          }
        } else {
          longestStreak = Math.max(longestStreak, tempStreak);
          tempStreak = 0;
        }
      }
      longestStreak = Math.max(longestStreak, tempStreak);

      return {
        current: currentStreak,
        longest: longestStreak,
        totalContributions:
          result.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0,
      };
    } catch (error: any) {
      console.error("Error fetching streak data:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setError(null);

        //console.log("GITHUB_TOKEN:", GITHUB_TOKEN ? "Loaded" : "Missing");

        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "",
          },
        });

        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user data: ${userResponse.status}`);
        }

        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "",
            },
          }
        );

        if (!reposResponse.ok) {
          throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
        }

        const reposData = await reposResponse.json();

        let totalCommits = 0;
        const activeRepos = reposData.filter((repo: any) => !repo.fork).slice(0, 5);
        for (const repo of activeRepos) {
          const commits = await getRepoCommits(repo.name);
          totalCommits += commits;
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        const streakData = await calculateStreakData(username, GITHUB_TOKEN);

        const languageStats: Record<string, number> = {};
        const languagePromises = activeRepos.slice(0, 10).map(async (repo: any) => {
          const languages = await getRepoLanguages(repo.name);
          return languages;
        });

        const languageResults = await Promise.all(languagePromises);
        languageResults.forEach((languages) => {
          Object.entries(languages).forEach(([lang, bytes]) => {
            languageStats[lang] = (languageStats[lang] || 0) + (bytes as number);
          });
        });

        const totalBytes = Object.values(languageStats).reduce((sum, bytes) => sum + bytes, 0);
        const topLanguages = Object.entries(languageStats)
          .map(([name, bytes]) => ({
            name,
            percentage: totalBytes ? Number(((bytes / totalBytes) * 100).toFixed(0)) : 0,
            color: getLanguageColor(name),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 6);

        setStats({
          totalCommits,
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          currentStreak: streakData.current,
          longestStreak: streakData.longest,
          totalContributions: streakData.totalContributions,
        });

        setLanguages(topLanguages);
      } catch (error: any) {
        console.error("Error fetching GitHub data:", error);
        setError(
          error.message.includes("GITHUB_TOKEN")
            ? "Missing GitHub token. Set VITE_GITHUB_TOKEN in .env."
            : error.message.includes("Unauthorized")
            ? "Invalid or expired GitHub token. Regenerate token with 'user' scope."
            : error.message
        );
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username, GITHUB_TOKEN]);

  if (loading) {
    return (
      <div className="border-b border-border p-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse flex-shrink-0"></div>
            <div className="space-y-2 w-full">
              <div className="h-4 bg-muted rounded w-1/4"></div>
              <div className="h-3 bg-muted rounded w-1/3"></div>
              <div className="h-3 bg-muted rounded w-1/6"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="animate-pulse p-4 space-y-4">
              <ShimmerProgress />
              <ShimmerProgress />
            </Card>
            <Card className="animate-pulse p-4 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <div className="h-3 bg-muted rounded w-3/4 mb-1"></div>
                  <div className="h-1 bg-muted rounded w-full"></div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-red-500 mb-2">⚠️ Error loading GitHub data</div>
            <div className="text-sm text-muted-foreground">
              {error}
              {error.includes("token") && (
                <p>
                  Visit{" "}
                  <a
                    href="https://github.com/settings/tokens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub Settings
                  </a>{" "}
                  to generate a token with 'user' and 'repo' scopes.
                </p>
              )}
            </div>
            <Button
              onClick={() => window.location.reload()}
              className="mt-4"
              size="sm"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
          <img
            src={`https://github.com/${username}.png?size=40`}
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
                      value={stats.longestStreak > 0 ? (stats.currentStreak / stats.longestStreak) * 100 : 0}
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
                  {languages.length > 0 ? (
                    languages.map((lang, index) => (
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
                    ))
                  ) : (
                    <div className="text-xs text-muted-foreground text-center py-2">
                      Loading language data...
                    </div>
                  )}
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

// Utility: map language names to colors
function getLanguageColor(name: string): string {
  const colors: Record<string, string> = {
    javascript: "bg-yellow-500",
    typescript: "bg-blue-500",
    python: "bg-green-500",
    rust: "bg-orange-500",
    java: "bg-red-600",
    html: "bg-orange-600",
    css: "bg-blue-600",
    "c++": "bg-blue-700",
    c: "bg-gray-600",
    go: "bg-cyan-500",
    php: "bg-indigo-500",
    ruby: "bg-red-500",
    swift: "bg-orange-400",
    kotlin: "bg-purple-500",
    dart: "bg-blue-400",
    shell: "bg-green-600",
    dockerfile: "bg-blue-800",
    yaml: "bg-red-400",
    json: "bg-gray-400",
    markdown: "bg-gray-700",
  };

  return colors[name.toLowerCase()] || "bg-gray-500";
}

export default GitHubStats;