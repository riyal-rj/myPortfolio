
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
          title: 'Spring & Spring Boot',
          category: 'Backend',
          progress: 40,
          description: 'Mastering annotations, REST APIs, and security',
          emoji: '🌱',
          links: [
            { label: 'Spring Docs', url: '#' },
          ]
        },
        {
          id: '2',
          title: 'Generative AI',
          category: 'AI/ML',
          progress: 35,
          description: 'LLMs, RAG pipelines, prompt engineering',
          emoji: '🧠',
          links: [
            { label: 'Paperspace', url: '#' },
            { label: 'Colab Projects', url: '#' }
          ]
        },
        {
          id: '3',
          title: 'System Design (LLD + HLD)',
          category: 'Architecture',
          progress: 20,
          description: 'Designing scalable systems & object-oriented models',
          emoji: '🧩',
          links: [
            { label: 'System Design Primer', url: '#' }
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
          id: '4',
          title: 'Core Java',
          category: 'Languages',
          progress: 100,
          description: 'OOP, collections, threading, streams',
          emoji: '☕'
        },
        {
          id: '5',
          title: 'JavaScript',
          category: 'Languages',
          progress: 70,
          description: 'ES6+, async/await, DOM, fetch',
          emoji: '🟨'
        },
        {
          id: '6',
          title: 'Python',
          category: 'Languages',
          progress: 60,
          description: 'Data handling, scripting, ML basics',
          emoji: '🐍'
        },
        {
          id: '7',
          title: 'MySQL',
          category: 'Database',
          progress: 80,
          description: 'Joins, subqueries, indexing',
          emoji: '🗃️'
        },
        {
          id: '8',
          title: 'MongoDB',
          category: 'Database',
          progress: 70,
          description: 'CRUD, schema design, aggregation',
          emoji: '🍃'
        }
      ]
    },
    {
      id: 'exploring-next',
      title: '📚 To Explore',
      icon: BookOpen,
      items: [
        {
          id: '9',
          title: 'Redis',
          category: 'Database',
          progress: 30,
          description: 'In-memory data store and caching',
          emoji: '🟥'
        },
        {
          id: '10',
          title: 'PostgreSQL',
          category: 'Database',
          progress: 30,
          description: 'Relational modeling, CTEs, window functions',
          emoji: '🐘'
        },
        {
          id: '11',
          title: 'React',
          category: 'Frontend',
          progress: 50,
          description: 'Components, JSX, hooks',
          emoji: '⚛️'
        },

      ]
    },
    {
      id: 'wishlist',
      title: '💭 Wishlist',
      icon: Lightbulb,
      items: [
        {
          id: '12',
          title: 'NestJS',
          category: 'Backend',
          progress: 0,
          description: 'Structured backend with decorators and DI',
          emoji: '🛡️'
        },
        {
          id: '13',
          title: 'Rust',
          category: 'Languages',
          progress: 0,
          description: 'Memory safety and performance',
          emoji: '🦀'
        },
        {
          id: '14',
          title: 'Go Language',
          category: 'Languages',
          progress: 0,
          description: 'Goroutines and microservices',
          emoji: '🔷'
        },
        {
          id: '15',
          title: 'Docker and Kubernetes',
          category: 'DevOps',
          progress: 0,
          description: 'Containerization,Orchestration, Dockerfiles, cluster management and image management',
          emoji: '🐳'
        },
        {
          id: '16',
          title: 'AWS Cloud',
          category: 'Cloud Tech',
          progress: 0,
          description: 'EC2, S3, Lambda, IAM, and cloud architecture basics',
          emoji: '☁️'
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
