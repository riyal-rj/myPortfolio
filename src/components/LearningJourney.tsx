
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Target, Lightbulb, CheckCircle2 } from "lucide-react";

interface LearningItem {
  id: string;
  title: string;
  category: string;
  progress: number;
  description?: string;
  links?: { label: string; url: string }[];
  emoji?: string;
}

const LearningJourney = () => {
  const columns = [
    {
      id: 'exploring',
      title: '🚀 Exploring Now',
      icon: Target,
      items: [
        {
          id: '1',
          title: 'Next.js 14',
          category: 'Frontend',
          progress: 65,
          description: 'Learning App Router and Server Components',
          emoji: '⚡',
          links: [
            { label: 'Official Docs', url: '#' },
            { label: 'My Notes', url: '#' }
          ]
        },
        {
          id: '2',
          title: 'Rust Programming',
          category: 'Languages',
          progress: 30,
          description: 'Systems programming and memory safety',
          emoji: '🦀',
          links: [
            { label: 'Rust Book', url: '#' }
          ]
        }
      ]
    },
    {
      id: 'mastered',
      title: '✅ Mastered',
      icon: CheckCircle2,
      items: [
        {
          id: '3',
          title: 'React Hooks',
          category: 'Frontend',
          progress: 100,
          description: 'Advanced patterns and custom hooks',
          emoji: '⚛️'
        },
        {
          id: '4',
          title: 'PostgreSQL',
          category: 'Database',
          progress: 100,
          description: 'Complex queries, indexing, and optimization',
          emoji: '🐘'
        },
        {
          id: '5',
          title: 'Docker',
          category: 'DevOps',
          progress: 100,
          description: 'Containerization and orchestration',
          emoji: '🐳'
        }
      ]
    },
    {
      id: 'exploring-next',
      title: '📚 To Explore',
      icon: BookOpen,
      items: [
        {
          id: '6',
          title: 'WebAssembly',
          category: 'Web Tech',
          progress: 0,
          description: 'High-performance web applications',
          emoji: '🌐'
        },
        {
          id: '7',
          title: 'Kubernetes',
          category: 'DevOps',
          progress: 15,
          description: 'Container orchestration at scale',
          emoji: '☸️'
        }
      ]
    },
    {
      id: 'wishlist',
      title: '💭 Wishlist',
      icon: Lightbulb,
      items: [
        {
          id: '8',
          title: 'Go Language',
          category: 'Languages',
          progress: 0,
          description: 'Concurrent programming and microservices',
          emoji: '🔷'
        },
        {
          id: '9',
          title: 'Three.js',
          category: 'Frontend',
          progress: 0,
          description: '3D graphics and WebGL',
          emoji: '🎮'
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
      'Backend': 'bg-green-500/10 text-green-700 dark:text-green-300',
      'Database': 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
      'DevOps': 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
      'Languages': 'bg-red-500/10 text-red-700 dark:text-red-300',
      'Web Tech': 'bg-teal-500/10 text-teal-700 dark:text-teal-300',
      'AI': 'bg-pink-500/10 text-pink-700 dark:text-pink-300'
    };
    return colors[category] || 'bg-gray-500/10 text-gray-700 dark:text-gray-300';
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          My Learning Journey
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Here's what I'm learning, what I've mastered, and what's next on my roadmap.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((column) => {
            const IconComponent = column.icon;
            return (
              <div key={column.id} className="space-y-3">
                <div className="flex items-center gap-2 font-medium text-sm">
                  <IconComponent className="w-4 h-4" />
                  {column.title}
                </div>
                <div className="space-y-3">
                  {column.items.map((item) => (
                    <Card key={item.id} className="p-3 hover:shadow-md transition-shadow">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{item.emoji}</span>
                            <h4 className="font-medium text-sm">{item.title}</h4>
                          </div>
                        </div>
                        
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getCategoryColor(item.category)}`}
                        >
                          {item.category}
                        </Badge>
                        
                        {item.description && (
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-1" />
                        </div>
                        
                        {item.links && item.links.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {item.links.map((link, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs"
                                asChild
                              >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  {link.label}
                                </a>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningJourney;
