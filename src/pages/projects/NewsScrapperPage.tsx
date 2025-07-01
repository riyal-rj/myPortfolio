import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Star, GitFork, Target, Zap, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewsScrapperPage = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const projectImages = [
    "/projects/news/img1.png",
    "/projects/news/img2.jpg",
  ];

  const problemsSolved = [
    {
      icon: Target,
      title: "Real-time Data Aggregation",
      description: "Scrapes and summarizes financial news for a given company using SerpAPI and Playwright in real-time."
    },
    {
      icon: Zap,
      title: "Agent-based Summarization",
      description: "CrewAI agents summarize article content using GPT-4o-mini to produce concise, relevant updates."
    },
    {
      icon: TrendingUp,
      title: "Robust MVS Architecture",
      description: "Built on a clean Model-View-Service architecture for modular development and maintenance."
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
              <h1 className="text-2xl sm:text-4xl font-bold">Stock News Scraper Microservice</h1>
              <div className="flex gap-2">
                <Badge variant="secondary">Microservice</Badge>
                <Badge variant="outline">MVS Architecture</Badge>
                <Badge variant="outline">Agent Summarizer</Badge>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A FastAPI-based microservice that scrapes, filters, and summarizes stock-related news articles using <span className="text-green-600 font-medium">SerpAPI</span>, <span className="text-purple-700 font-medium">Playwright</span>, <span className="text-blue-700 font-medium">CrewAI</span>, and <span className="text-pink-600 font-medium">MongoDB</span>. Built with a clean <span className="text-lime-600 font-medium">Model-View-Service</span> (MVS) architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">15 stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">3 forks</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href="https://github.com/your-username/news-scrapper" target="_blank" rel="noopener noreferrer">
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
                    alt={`News Scrapper Screenshot ${index + 1}`}
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
                {["Python", "FastAPI", "Playwright", "SerpAPI", "CrewAI", "MongoDB", "Pydantic", "FAISS"].map((tech) => (
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
                  SerpAPI + Playwright integration for intelligent scraping
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  CrewAI agents generating summaries using GPT-4o-mini
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  MongoDB storage for persistent article history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Pydantic models ensure clean, validated schemas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  RESTful endpoints for real-time financial news
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
                Built with <span className="text-lime-600 font-medium">FastAPI</span> and structured with <span className="text-amber-700 font-medium">Model-View-Service architecture</span> to separate concerns between data models, API routes, and business logic.
              </li>
              <li>
                Leverages <span className="text-purple-700 font-medium">Playwright</span> for headless browser scraping and <span className="text-blue-700 font-medium">SerpAPI</span> for fast article discovery.
              </li>
              <li>
                Utilizes <span className="text-green-600 font-medium">CrewAI agents</span> powered by <span className="text-green-600 font-medium">GPT-4o-mini</span> to summarize relevant articles into 150–200 word reports.
              </li>
              <li>
                Summarized content and full articles are stored in <span className="text-pink-600 font-medium">MongoDB</span> for persistence.
              </li>
              <li>
                Designed with reusable <span className="text-amber-600">Pydantic models</span>, async service logic, and RESTful <span className="text-blue-700">/news</span> endpoints to make integration seamless.
              </li>
              <li>
                Supports queries for any stock/company name and filters only finance-related headlines based on keyword scoring.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsScrapperPage;
