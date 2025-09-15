import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, GitCommit } from "lucide-react";

interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  weeks: ContributionWeek[];
  totalContributions: number;
}

const GitHubContributionGraph = () => {
  const username = "riyal-rj";
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  
  const [contributionData, setContributionData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContributionData = async () => {
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
                  weekday
                }
              }
            }
          }
        }
      }
    `;

    try {
      if (!GITHUB_TOKEN) {
        throw new Error("GitHub token is required");
      }

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
        throw new Error(`Request failed: ${response.status}`);
      }

      const result = await response.json();

      if (result.errors) {
        throw new Error(`GraphQL errors: ${result.errors.map((e: any) => e.message).join(", ")}`);
      }

      if (!result.data?.user) {
        throw new Error("User not found");
      }

      return result.data.user.contributionsCollection.contributionCalendar;
    } catch (error: any) {
      console.error("Error fetching contribution data:", error);
      throw error;
    }
  };

  const getContributionLevel = (count: number): string => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800";
    if (count < 5) return "bg-green-200 dark:bg-green-900";
    if (count < 10) return "bg-green-300 dark:bg-green-700";
    if (count < 15) return "bg-green-400 dark:bg-green-600";
    return "bg-green-500 dark:bg-green-500";
  };

  const getLevelLabel = (level: number): string => {
    const labels = ["No contributions", "1-4 contributions", "5-9 contributions", "10-14 contributions", "15+ contributions"];
    return labels[level] || "";
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchContributionData();
        setContributionData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username, GITHUB_TOKEN]);

  if (loading) {
    return (
      <Card className="border border-border bg-background">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-green-500" />
            GitHub Contribution Graph
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="h-24 bg-muted rounded animate-pulse"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-24 animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border border-border bg-background">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-red-500" />
            GitHub Contribution Graph
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-red-500 text-sm mb-2">⚠️ {error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="text-xs text-blue-500 hover:underline"
            >
              Retry
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!contributionData) return null;

  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the current year for display
  const currentYear = new Date().getFullYear();

  return (
    <Card className="border border-border bg-background">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
            <Activity className="w-4 h-4 text-teal-500" />
              GitHub Contribution Graph 📈
          <GitCommit className="w-5 h-5 text-green-500" />
          <span className="text-green-600 font-medium">{contributionData.totalContributions.toLocaleString()}</span> contributions in {currentYear}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Contribution Grid */}
        <div className="relative overflow-x-auto">
          <div className="min-w-max">
            {/* Month Labels */}
            <div className="flex mb-2">
              <div className="w-8"></div> {/* Space for day labels */}
              {contributionData.weeks.map((week, weekIndex) => {
                const firstDay = new Date(week.contributionDays[0]?.date);
                const isFirstWeekOfMonth = firstDay.getDate() <= 7;
                const monthLabel = isFirstWeekOfMonth ? monthLabels[firstDay.getMonth()] : "";
                
                return (
                  <div key={weekIndex} className="w-3 mr-1">
                    <div className="text-xs text-muted-foreground text-center h-4">
                      {monthLabel}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Days Grid */}
            <div className="flex">
              {/* Day Labels */}
              <div className="flex flex-col mr-2">
                {dayLabels.map((day, index) => (
                  <div key={day} className="h-3 mb-1 text-xs text-muted-foreground flex items-center">
                    {index % 2 === 1 ? day : ""}
                  </div>
                ))}
              </div>

              {/* Contribution Squares */}
              <div className="flex">
                {contributionData.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col mr-1">
                    {week.contributionDays.map((day, dayIndex) => (
                      <div
                        key={day.date}
                        className={`w-3 h-3 mb-1 rounded-sm border border-gray-200 dark:border-gray-700 ${getContributionLevel(day.contributionCount)} cursor-pointer transition-all hover:scale-110`}
                        title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm border border-gray-200 dark:border-gray-700 ${
                    level === 0 ? "bg-gray-100 dark:bg-gray-800" :
                    level === 1 ? "bg-green-200 dark:bg-green-900" :
                    level === 2 ? "bg-green-300 dark:bg-green-700" :
                    level === 3 ? "bg-green-400 dark:bg-green-600" :
                    "bg-green-500 dark:bg-green-500"
                  }`}
                  title={getLevelLabel(level)}
                />
              ))}
            </div>
            <span>More</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Learn how we count contributions</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubContributionGraph;