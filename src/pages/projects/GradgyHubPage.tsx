import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Target, Zap, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GradgyHubPage = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const projectImages = [
    "/projects/gradgyHub/img1.png",
    "/projects/gradgyHub/img2.jpg",
  ];

  const problemsSolved = [
    {
      icon: Target,
      title: "Modern E-Commerce for Electronics",
      description: "Provides an intuitive and scalable platform tailored for electronic product sales with seamless checkout, user management, and secure payments."
    },
    {
      icon: Zap,
      title: "Performance & Reliability",
      description: "Integrates Redis caching, Cloudinary for images, and Stripe for payments to ensure fast response times and robust functionality."
    },
    {
      icon: TrendingUp,
      title: "Dynamic UX",
      description: "Uses Zustand, Framer Motion, Toast, and Confetti to offer real-time feedback, celebration events, and smooth interaction for a delightful experience."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {zoomedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500"
            onClick={() => setZoomedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed Screenshot"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl sm:text-4xl font-bold">GradgyHub - Modern Electronics E-Commerce</h1>
              <div className="flex gap-2">
                <Badge variant="secondary">Full-Stack</Badge>
                <Badge variant="outline">E-Commerce</Badge>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              GradgyHub is a performance-optimized online marketplace for electronic goods, combining a robust Express.js backend with a sleek React frontend. It features Redis caching, Stripe payments, Cloudinary for media, and celebratory UI interactions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">18 stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">6 forks</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href="https://github.com/riyal-rj/gradgyhub" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">System Architecture and Project Snapshots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden cursor-zoom-in"
                  onClick={() => setZoomedImage(image)}
                >
                  <img
                    src={image}
                    alt={`GradgyHub Screenshot ${index + 1}`}
                    className="w-fit h-fit object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Problems Solved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {problemsSolved.map((problem, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <problem.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">{problem.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "Redis", "Cloudinary", "Stripe", "Zustand", "TailwindCSS", "Framer Motion", "Recharts", "React Confetti"].map((tech) => (
                  <Badge key={tech} variant="outline" className="px-2 py-1 text-xs sm:text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  JWT-based authentication and protected admin routes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Redis-based product caching for performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Cloudinary integration for media upload and transformation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Zustand-managed state across the app
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Stripe checkout with secure payment flow
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">About This Project</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none text-sm sm:text-base">
            <ul className="space-y-3 list-inside list-disc marker:text-blue-600">
              <li>
                <span className="text-foreground">GradgyHub</span> is an <span className="text-blue-600 font-medium">electronics-focused online marketplace</span> optimized for performance and user experience.
              </li>
              <li>
                The backend includes <span className="text-green-700 font-medium">Redis caching</span>, <span className="text-amber-700 font-medium">Cloudinary uploads</span>, <span className="text-purple-700 font-medium">JWT authentication</span>, and <span className="text-red-600 font-medium">Stripe payment gateway</span> with full checkout flow.
              </li>
              <li>
                The frontend is built with <span className="text-green-700 font-medium">React</span> + <span className="text-blue-700 font-medium">TailwindCSS</span>, includes animations from <span className="text-purple-700 font-medium">Framer Motion</span>, and state handled using <span className="text-lime-600 font-medium">Zustand</span>.
              </li>
              <li>
                Provides <span className="text-green-600 font-medium">real-time toast notifications</span> and fun UI interactions like <span className="text-fuchsia-600 font-medium">React Confetti</span> on purchase.
              </li>
              <li>
                Designed for both <span className="text-lime-600 font-medium">scalability</span> and <span className="text-lime-600 font-medium">accessibility</span>, and deployable on <span className="text-blue-600 font-medium">Vercel</span> (frontend) and <span className="text-blue-600 font-medium">Render/Heroku</span> (backend).
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GradgyHubPage;
