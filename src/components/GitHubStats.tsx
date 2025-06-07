import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { GitBranch, Star, Users, Activity, Calendar, TrendingUp, UserPlus, UserCheck } from "lucide-react";

interface GitHubUser {
  login: string;
  name: string;
  avatarUrl: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  repositories: { 
    totalCount: number;
    nodes: Array<{
      languages: {
        edges: Array<{
          size: number;
          node: {
            name: string;
            color: string;
          };
        }>;
      };
    }>;
  };
  contributionsCollection: {
    totalCommitContributions: number;
    totalPullRequestContributions: number;
    totalIssueContributions: number;
    contributionCalendar: {
      totalContributions: number;
      weeks: Array<{
        contributionDays: Array<{
          date: string;
          contributionCount: number;
        }>;
      }>;
    };
  };
}

interface GraphQLResponse {
  data?: {
    user?: GitHubUser;
  };
  errors?: Array<{ message: string }>;
}

interface Stats {
  totalCommits: number;
  totalIssues: number;
  publicRepos: number;
  followers: number;
  following: number;
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
}

interface Language {
  name: string;
  color: string;
  percentage: number;
  size: number;
}

const GitHubStats = () => {
  const username = "riyal-rj";
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    totalCommits: 0,
    totalIssues: 0,
    publicRepos: 0,
    followers: 0,
    following: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalContributions: 0,
  });
  const [topLanguages, setTopLanguages] = useState<Language[]>([]);
  const [error, setError] = useState<string | null>(null);

  const StatCard = ({ icon: Icon, value, label, color, txtColor }: {
    icon: any;
    value: string | number;
    label: string;
    color?: string;
    txtColor?: string;
  }) => (
    <Card className="border border-border bg-background hover:shadow-md transition-shadow">
      <CardContent className="p-2.5 sm:p-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <div className={`text-base sm:text-lg md:text-xl font-bold ${txtColor ?? "text-foreground"} truncate`}>
              {typeof value === "number" ? value.toLocaleString() : value}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground truncate">{label}</div>
          </div>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${color ?? "text-muted-foreground"}`} />
        </div>
      </CardContent>
    </Card>
  );

  const fetchGitHubDataWithGraphQL = async () => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          login
          name
          avatarUrl
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(privacy: PUBLIC, first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
            totalCount
            nodes {
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
          contributionsCollection {
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
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
      if (!GITHUB_TOKEN) {
        throw new Error("GitHub token is required for GraphQL API access");
      }

      console.log("Fetching GitHub data with token:", GITHUB_TOKEN ? "Token present" : "No token");

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { username },
        }),
      });

      if (!response.ok) {
        throw new Error(`GraphQL request failed: ${response.status}`);
      }

      const result: GraphQLResponse = await response.json();

      if (result.errors) {
        throw new Error(`GraphQL errors: ${result.errors.map((e) => e.message).join(", ")}`);
      }

      if (!result.data?.user) {
        throw new Error("User not found");
      }

      console.log("GitHub data fetched successfully:", result.data.user);
      return result.data.user;
    } catch (error: any) {
      console.error("Error fetching GitHub data:", error);
      throw error;
    }
  };

  const calculateLanguageStats = (repositories: GitHubUser['repositories']) => {
    const languageMap = new Map<string, { size: number; color: string }>();
    let totalSize = 0;

    repositories.nodes.forEach(repo => {
      repo.languages.edges.forEach(edge => {
        const { name, color } = edge.node;
        const { size } = edge;
        
        if (languageMap.has(name)) {
          languageMap.get(name)!.size += size;
        } else {
          languageMap.set(name, { size, color });
        }
        totalSize += size;
      });
    });

    const languages: Language[] = Array.from(languageMap.entries())
      .map(([name, data]) => ({
        name,
        color: data.color,
        size: data.size,
        percentage: (data.size / totalSize) * 100,
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 5); // Top 5 languages

    return languages;
  };

  const calculateStreakData = (contributionDays: Array<{ date: string; contributionCount: number }>) => {
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    // Sort by date to ensure proper order (oldest to newest)
    const sortedDays = contributionDays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    console.log("Calculating streaks for", sortedDays.length, "days");
    console.log("Last 5 days:", sortedDays.slice(-5));

    // Calculate longest streak first
    for (let i = 0; i < sortedDays.length; i++) {
      const day = sortedDays[i];
      if (day.contributionCount > 0) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    }

    // Calculate current streak (from most recent day backwards)
    const today = new Date();
    today.setHours(today.getHours() + 5); // Adjust for IST (+5:30 from UTC)
    today.setMinutes(today.getMinutes() + 30);
    today.setUTCHours(0, 0, 0, 0);
    const todayString = today.toISOString().split("T")[0];
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split("T")[0];

    // Start from the most recent day and work backwards
    for (let i = sortedDays.length - 1; i >= 0; i--) {
      const day = sortedDays[i];

      // If we're at today or yesterday and there are contributions, start/continue streak
      if ((day.date === todayString || day.date === yesterdayString) && day.contributionCount > 0) {
        currentStreak++;
      }
      // If we find a day before today/yesterday with contributions, continue streak
      else if (day.contributionCount > 0 && currentStreak > 0) {
        currentStreak++;
      }
      // If we find a day with no contributions and we already started counting, break
      else if (day.contributionCount === 0 && currentStreak > 0) {
        break;
      }
      // If today has no contributions, check if yesterday does
      else if (day.date === todayString && day.contributionCount === 0) {
        continue;
      }
    }

    console.log("Calculated streaks - Current:", currentStreak, "Longest:", longestStreak);

    return { currentStreak, longestStreak };
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setLoading(true);

        console.log("Starting GitHub data fetch...");

        const userData = await fetchGitHubDataWithGraphQL();

        const contributionDays = userData.contributionsCollection.contributionCalendar.weeks
          .flatMap(week => week.contributionDays);

        const { currentStreak, longestStreak } = calculateStreakData(contributionDays);
        const languages = calculateLanguageStats(userData.repositories);

        const totalContributions = userData.contributionsCollection.contributionCalendar.totalContributions;

        console.log("Final stats:", {
          totalCommits: userData.contributionsCollection.totalCommitContributions,
          totalIssues: userData.contributionsCollection.totalIssueContributions,
          publicRepos: userData.repositories.totalCount,
          followers: userData.followers.totalCount,
          following: userData.following.totalCount,
          currentStreak,
          longestStreak,
          totalContributions,
          languages,
        });

        setStats({
          totalCommits: userData.contributionsCollection.totalCommitContributions,
          totalIssues: userData.contributionsCollection.totalIssueContributions,
          publicRepos: userData.repositories.totalCount,
          followers: userData.followers.totalCount,
          following: userData.following.totalCount,
          currentStreak,
          longestStreak,
          totalContributions,
        });

        setTopLanguages(languages);
      } catch (error: any) {
        console.error("Error fetching GitHub data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username, GITHUB_TOKEN]);

  if (loading) {
    return (
      <div className="border-b border-border p-3 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-muted animate-pulse flex-shrink-0 mx-auto sm:mx-0"></div>
          <div className="flex-1 space-y-3 sm:space-y-4">
            <div className="space-y-2 text-center sm:text-left">
              <div className="h-4 bg-muted rounded w-2/3 sm:w-1/3 animate-pulse mx-auto sm:mx-0"></div>
              <div className="h-3 bg-muted rounded w-1/2 sm:w-1/4 animate-pulse mx-auto sm:mx-0"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-14 sm:h-16 bg-muted rounded-lg animate-pulse"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-32 bg-muted rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-b border-border p-3 sm:p-6">
        <div className="flex items-center justify-center py-6 sm:py-8">
          <div className="text-center space-y-2">
            <div className="text-destructive text-xs sm:text-sm max-w-xs mx-auto">⚠️ {error}</div>
            <Button onClick={() => window.location.reload()} size="sm" variant="outline">
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border p-3 sm:p-6 ">
      <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-border">
            <img
              src={`https://github.com/${username}.png?size=64`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-background"></div>
        </div>

        <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-0.5 sm:space-y-0">
              <span className="font-bold text-base sm:text-lg lg:text-xl">Ritankar Jana</span>
              <span className="text-muted-foreground text-xs sm:text-sm">@{username}</span>
            </div>
            <h3 className="font-bold text-base sm:text-lg lg:text-xl mt-1 sm:mt-2">GitHub Analytics Dashboard 📊</h3>
            <p className="text-muted-foreground text-xs sm:text-sm italic mt-1">
             Live stats from my GitHub profile, updated in real-time.            
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            <StatCard 
              icon={GitBranch} 
              value={stats.totalCommits} 
              label="Total Commits" 
              color="text-red-500" 
              txtColor="text-blue-500" 
            />
            <StatCard 
              icon={Star} 
              value={stats.publicRepos} 
              label="Repositories" 
              color="text-yellow-500" 
              txtColor="text-green-500" 
            />
            <StatCard 
              icon={UserPlus} 
              value={stats.following} 
              label="Following" 
              color="text-green-500" 
              txtColor="text-purple-500" 
            />
            <StatCard 
              icon={UserCheck} 
              value={stats.followers} 
              label="Followers" 
              color="text-pink-500" 
              txtColor="text-orange-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {/* Contribution Overview */}
            <Card className="border border-border bg-background">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-500" />
                  Contribution Overview 🔥
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                      <span>Current Streak</span>
                      <span className="font-semibold">{stats.currentStreak} days</span>
                    </div>
                    <Progress
                      value={stats.longestStreak > 0 ? (stats.currentStreak / stats.longestStreak) * 100 : 0}
                      className="h-2"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                      <span>Longest Streak</span>
                      <span className="font-semibold">{stats.longestStreak} days</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="pt-2 border-t border-border text-center">
                  <div className="text-lg sm:text-xl font-bold text-fuchsia-500">
                    {stats.totalContributions.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Total Contributions This Year</div>
                </div>
              </CardContent>
            </Card>

            {/* Top Languages */}
            <Card className="border border-border bg-background">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  Top Languages 💻
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pb-4">
                {topLanguages.length > 0 ? (
                  topLanguages.map((language, index) => (
                    <div key={language.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0" 
                            style={{ backgroundColor: language.color || '#888' }}
                          ></div>
                          <span className="font-medium truncate">{language.name}</span>
                        </div>
                        <span className="text-muted-foreground flex-shrink-0 ml-2">
                          {language.percentage.toFixed(1)}%
                        </span>
                      </div>
                      <Progress value={language.percentage} className="h-1.5" />
                    </div>
                  ))
                ) : (
                  <div className="text-center text-xs sm:text-sm text-muted-foreground py-4">
                    No language data available
                  </div>
                )}
              </CardContent>
            </Card>
            <div className="h-8 sm:h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
