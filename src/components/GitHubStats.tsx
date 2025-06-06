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
  repositories: { totalCount: number };
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
  const [error, setError] = useState<string | null>(null);

  const StatCard = ({ icon: Icon, value, label, color,txtColor }: {
    icon: any;
    value: string | number;
    label: string;
    color?: string;
    txtColor?: string;
  }) => (
    <Card className="border border-border bg-background hover:shadow-md transition-shadow">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className={`text-xl sm:text-2xl font-bold ${txtColor ?? "text-foreground"}`}>
              {typeof value === "number" ? value.toLocaleString() : value}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
          </div>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color ?? "text-muted-foreground"}`} />
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
          repositories(privacy: PUBLIC) {
            totalCount
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
      <div className="border-b border-border p-4 sm:p-6">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted animate-pulse flex-shrink-0"></div>
          <div className="flex-1 space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-1/3 sm:w-1/4 animate-pulse"></div>
              <div className="h-3 bg-muted rounded w-1/4 sm:w-1/5 animate-pulse"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 sm:h-20 bg-muted rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-b border-border p-4 sm:p-6">
        <div className="flex items-center justify-center py-6 sm:py-8">
          <div className="text-center space-y-2">
            <div className="text-destructive text-xs sm:text-sm">⚠️ {error}</div>
            <Button onClick={() => window.location.reload()} size="sm" variant="outline">
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border p-4 sm:p-6 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="relative self-center sm:self-start flex-shrink-0">
          <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full overflow-y:auto border border-border">
            <img
              src={`https://github.com/${username}.png?size=48`}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-1 -right-0 w-4 h-4 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-background"></div>
        </div>

        <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="font-bold text-lg sm:text-xl">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@{username}</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl mt-1 sm:mt-2">GitHub Analytics Dashboard 📊</h3>
            <p className="text-muted-foreground text-sm italic">This dashboard provides a summary of my GitHub activity.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <StatCard icon={GitBranch} value={stats.totalCommits} label="Total Commits" color="text-red-500" txtColor="text-blue-500" />
            <StatCard icon={Star} value={stats.publicRepos} label="Repositories" color="text-yellow-500" txtColor="text-green-500" />
            {/* <StatCard icon={Activity} value={stats.totalIssues} label="Issues Created" color="text-red-500" /> */}
            {/* <StatCard icon={Calendar} value={stats.currentStreak} label="Current Streak" color="text-purple-500" /> */}
            <StatCard icon={UserPlus} value={stats.following} label="Following" color="text-green-500" txtColor="text-purple-500" />
            <StatCard icon={UserCheck} value={stats.followers} label="Followers" color="text-pink-500" txtColor="text-orange-500"/>
          </div>

          <Card className="border border-border bg-background rounded-lg mb-6">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-500" />
                Contribution Overview 🔥
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Current streak */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Current Streak</span>
                    <span className="font-semibold">{stats.currentStreak} days</span>
                  </div>
                  <Progress
                    value={stats.longestStreak > 0 ? (stats.currentStreak / stats.longestStreak) * 100 : 0}
                    className="h-2"
                  />
                </div>

                {/* Longest streak */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Longest Streak</span>
                    <span className="font-semibold">{stats.longestStreak} days</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              {/* Total contributions */}
              <div className="pt-3 border-t border-border text-center pb-4">
                <div className="text-xl font-bold text-fuchsia-500">{stats.totalContributions.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Contributions</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;