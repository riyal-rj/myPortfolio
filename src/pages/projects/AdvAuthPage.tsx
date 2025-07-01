import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Target, Zap, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";

const AdvAuthPage = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const projectImages = [
        "/projects/auth/img1.png",
        "/projects/auth/img2.jpg",
        "/projects/auth/img3.gif",
    ];

    const problemsSolved = [
        {
            icon: Target,
            title: "Secure User Identity",
            description: "Supports user signup, login, logout, email verification, and password reset using secure, token-based workflows."
        },
        {
            icon: Zap,
            title: "Email Workflow Integration",
            description: "Uses Nodemailer to send verification and password reset tokens with expiration timeouts to ensure robust email-based flows."
        },
        {
            icon: TrendingUp,
            title: "Modular & Scalable Backend",
            description: "Organized into controllers, routes, and utilities following best practices to enable smooth integration into large-scale applications."
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
                            <h1 className="text-2xl sm:text-4xl font-bold">Advanced Authentication System</h1>
                            <div className="flex gap-2">
                                <Badge variant="secondary">Backend Service</Badge>
                                <Badge variant="outline">Modular Auth</Badge>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            This Node.js, Express, and MongoDB powered authentication backend supports email verification, password reset, JWT-based login, and logout flows—integrated via Nodemailer and custom token logic.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="font-semibold">42 stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GitFork className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">12 forks</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild className="w-full sm:w-auto">
                            <a href="https://auth-system-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </a>
                        </Button>
                        <Button variant="outline" asChild className="w-full sm:w-auto">
                            <a href="https://github.com/riyal-rj/advAuthSystem" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">System Architecture</CardTitle>
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
                                        alt={`Auth System Screenshot ${index + 1}`}
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
                        <CardTitle className="text-lg sm:text-xl">About This Project</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none text-sm sm:text-base">
                        <ul className="space-y-3 list-disc list-inside marker:text-blue-600">
                            <li>
                                <span className="text-blue-700 font-semibold">Secure Authentication:</span> Handles user <span className="text-green-600">signup</span>, <span className="text-green-600">login</span>, <span className="text-green-600">logout</span>, <span className="text-green-600">email verification</span>, and <span className="text-green-600">password reset</span> workflows.
                            </li>
                            <li>
                                <span className="text-blue-700 font-semibold">Token Management:</span> Uses <span className="text-purple-700">Nodemailer</span> for verification and reset token delivery with <span className="text-amber-600">expiry control</span>.
                            </li>
                            <li>
                                <span className="text-blue-700 font-semibold">Clean Code Structure:</span> Organized into <span className="text-pink-600">controllers</span>, <span className="text-pink-600">routes</span>, and <span className="text-pink-600">utilities</span> for modularity and ease of maintenance.
                            </li>
                            <li>
                                <span className="text-blue-700 font-semibold">Session Security:</span> Implements <span className="text-amber-700">HTTP-only JWT cookies</span> for protecting user sessions.
                            </li>
                            <li>
                                <span className="text-blue-700 font-semibold">Flexible Integration:</span> Designed to plug into larger apps like <span className="text-lime-600">e-commerce</span>, <span className="text-lime-600">SaaS platforms</span>, or <span className="text-lime-600">enterprise dashboards</span>.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdvAuthPage;
