import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Star, GitFork, Target, Zap, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const EmailAIAssistantPage = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const projectImages = [
        "/projects/email-ai/img3.png",
        "/projects/email-ai/img.jpeg",
        "/projects/email-ai/img2.jpeg"
    ];

    const problemsSolved = [
        {
            icon: Target,
            title: "Context-Aware Replies",
            description: "Automatically extracts Gmail threads or user prompts to provide accurate, tone-aware AI email replies."
        },
        {
            icon: Zap,
            title: "Multi-Platform Support",
            description: "Works across Gmail as a Chrome extension and as a responsive standalone web app."
        },
        {
            icon: TrendingUp,
            title: "Efficient Communication",
            description: "Generates professional, casual, or friendly replies in real-time using Gemini API, improving productivity."
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
                            <h1 className="text-2xl sm:text-4xl font-bold">Email Generator - AI Email Assistant</h1>
                            <div className="flex gap-2">
                                <Badge
                                    variant="secondary"
                                    className="hidden sm:inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium tracking-wide shadow-sm transition-shadow duration-300"
                                >
                                    Featured
                                </Badge>
                                <Badge variant="outline">Chrome Extension</Badge>
                                <Badge variant="outline">Spring Boot</Badge>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            Email Generator helps users quickly draft <span className="text-purple-600 font-medium">professional</span>, <span className="text-amber-600 font-medium">friendly</span>, or <span className="text-green-600 font-medium">casual</span> email replies using the <span className="text-blue-600 font-medium">Gemini API</span>. Works as both a Gmail-integrated Chrome Extension and a responsive web app.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="font-semibold">22 stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GitFork className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">5 forks</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button size="sm" variant="outline" asChild className="h-8 px-3 bg-purple-500 text-white">
                            <a href="https://github.com/riyal-rj/email-generator" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">Screenshots</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {projectImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-video rounded-lg overflow-hidden cursor-zoom-in"
                                    onClick={() => setZoomedImage(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`Email Generator Screenshot ${index + 1}`}
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

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">Technology Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Chrome Extension APIs", "Spring Boot", "Gemini API", "TailwindCSS", "Java 17", "Maven", "HTTPS", "CORS", "Toast"]
                                .map((tech) => (
                                    <Badge key={tech} variant="outline" className="px-2 py-1 text-xs sm:text-sm">
                                        {tech}
                                    </Badge>
                                ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">About This Project</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none text-sm sm:text-base">
                        <ul className="space-y-3 list-inside list-disc marker:text-blue-600">
                            <li>
                                <span className="text-blue-700 font-medium">GradgyHub</span> was built as a cross-platform AI assistant that helps users <span className="text-green-600 font-medium">compose context-aware emails</span> faster.
                            </li>
                            <li>
                                <span className="text-purple-700 font-medium">Chrome Extension</span> directly integrates with Gmail, providing a seamless <span className="text-yellow-600 font-medium">"AI Reply"</span> button to generate contextual responses.
                            </li>
                            <li>
                                <span className="text-orange-600 font-medium">Spring Boot backend</span> powered by <span className="text-blue-600 font-medium">Gemini API</span> processes different email tones and returns smart completions.
                            </li>
                            <li>
                                Includes <span className="text-green-700 font-medium">real-time previews</span>, <span className="text-green-700">toast notifications</span>, <span className="text-pink-600">clipboard copy</span>, and mobile responsiveness.
                            </li>
                            <li>
                                Follows <span className="text-lime-700 font-medium">Model-View-Service</span> architecture for clean separation of concerns and future extensibility.
                            </li>
                            <li>
                                Designed for <span className="text-red-600 font-medium">maximum compatibility</span> across all browsers and mobile devices.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EmailAIAssistantPage;
