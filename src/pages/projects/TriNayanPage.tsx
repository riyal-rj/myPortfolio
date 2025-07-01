
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Star, GitFork, Target, Zap, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TriNayanPage = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const projectImages = [
        "/projects/trinayan/img1.jpg",
        "/projects/trinayan/img2.jpg",
    ];

    const problemsSolved = [
        {
            icon: Target,
            title: "Accessibility for Visually Impaired",
            description: "Enables visually impaired individuals to identify currency denominations independently using advanced computer vision, promoting financial inclusion and independence."
        },
        {
            icon: Zap,
            title: "Real-time Currency Detection",
            description: "YOLOv8 object detection combined with Vision Transformers provides instant, accurate currency recognition in various lighting conditions and orientations."
        },
        {
            icon: TrendingUp,
            title: "Multi-Modal Assistance",
            description: "Integrates visual detection with audio feedback and text-to-speech capabilities for comprehensive accessibility support across different user needs."
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
                            <h1 className="text-2xl sm:text-4xl font-bold">TriNayan - AI Currency Detection System</h1>
                            <div className="flex gap-2">
                                <Badge
                                    variant="secondary"
                                    className="hidden sm:inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium tracking-wide shadow-sm transition-shadow duration-300"
                                >
                                    Featured
                                </Badge>
                                <Badge variant="outline">Hackathon</Badge>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            TriNayan leverages YOLOv8 and Vision Transformers to create an accessible currency detection system for visually impaired individuals. Built for RBI's HaRBInger-2024 Hackathon with real-time detection and audio feedback capabilities.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="font-semibold">30 stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GitFork className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">8 forks</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button size="sm" variant="outline" asChild className="h-8 px-3 bg-purple-500 text-white">
                            <a href="https://github.com/riyal-rj/identifier" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">Currency Detection in Action</CardTitle>
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
                                        alt={`TriNayan Screenshot ${index + 1}`}
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
                                {["YOLOv8", "Vision Transformers", "OpenCV", "Python", "Streamlit", "PyTorch", "Ultralytics"].map((tech) => (
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
                                    YOLOv8-based real-time currency detection with 95%+ accuracy
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    Vision Transformer classification for denomination identification
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    Multi-denomination support for Indian currency notes
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    Audio feedback system with text-to-speech integration
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    Streamlit web interface for easy accessibility
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
                                <span className="text-foreground">TriNayan</span> was developed for the <span className="text-blue-600 font-medium">RBI's HaRBInger-2024 Hackathon</span>, addressing the critical challenge of financial accessibility for visually impaired individuals in India.
                            </li>
                            <li>
                                The system employs a <strong className="text-green-700">two-stage detection pipeline</strong>: <span className="text-amber-700 font-medium">YOLOv8</span> for precise currency note localization and <span className="text-amber-700 font-medium">Vision Transformers</span> for accurate denomination classification.
                            </li>
                            <li>
                                Achieved <strong className="text-green-700">95.2% detection accuracy</strong> across various Indian currency denominations including ₹10, ₹20, ₹50, ₹100, ₹200, and ₹500 notes under different lighting conditions and orientations.
                            </li>
                            <li>
                                The system handles challenging scenarios including <span className="text-lime-600 font-medium">partial occlusion</span>, <span className="text-lime-600">varying lighting conditions</span>, <span className="text-lime-600">different angles</span>, and <span className="text-lime-600">worn/damaged currency notes</span>.
                            </li>
                            <li>
                                Integrated <strong className="text-purple-700">accessibility features</strong> include real-time audio feedback, text-to-speech conversion, and a user-friendly <strong className="text-purple-700">Streamlit interface</strong> optimized for screen readers.
                            </li>
                            <li>
                                The model was trained on a comprehensive dataset of <span className="text-blue-700">10,000+ currency images</span> with data augmentation techniques to ensure robustness across diverse real-world conditions.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TriNayanPage;
