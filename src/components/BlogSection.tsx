
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageCircle, Heart, Repeat2 } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js and PostgreSQL",
      excerpt: "Learn how to design and implement robust backend services that can handle millions of requests. We'll cover database optimization, caching strategies, and more...",
      readTime: "8 min read",
      publishedAt: "2 days ago",
      tags: ["Node.js", "PostgreSQL", "API Design"],
      url: "https://johndoe.dev/blog/scalable-apis",
      platform: "johndoe.dev",
      likes: 45,
      comments: 12,
      shares: 8
    },
    {
      title: "React Performance: A Deep Dive into Optimization",
      excerpt: "Discover advanced techniques to make your React applications lightning fast. From memo to useMemo, we'll explore when and how to optimize...",
      readTime: "12 min read",
      publishedAt: "1 week ago", 
      tags: ["React", "Performance", "Optimization"],
      url: "https://medium.com/@johndoe/react-performance",
      platform: "Medium",
      likes: 128,
      comments: 23,
      shares: 15
    },
    {
      title: "The Future of Web Development: AI-Powered Tools",
      excerpt: "How artificial intelligence is revolutionizing the way we build web applications. From code generation to automated testing...",
      readTime: "6 min read",
      publishedAt: "2 weeks ago",
      tags: ["AI", "Web Dev", "Future"],
      url: "https://hashnode.com/@johndoe/ai-web-dev",
      platform: "Hashnode",
      likes: 89,
      comments: 18,
      shares: 22
    }
  ];

  return (
    <div className="space-y-0">
      {blogPosts.map((post, index) => (
        <div key={index} className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold">John Doe</span>
                <span className="text-muted-foreground text-sm">@johndoe_dev</span>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">{post.publishedAt}</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>Published on {post.platform}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Full Article
                  </a>
                </Button>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center space-x-6">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                      <Repeat2 className="w-4 h-4 mr-1" />
                      <span className="text-xs">{post.shares}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-xs">{post.likes}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
