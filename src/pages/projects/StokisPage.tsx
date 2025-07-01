import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Star, GitFork, FileText, Target, Zap, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const StokisPage = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const projectImages = [
        "/projects/stokis/img1.jpg",
        "/projects/stokis/img2.jpg",
        "/projects/stokis/img3.jpg",
    ];

    const problemsSolved = [
        {
            icon: Target,
            title: "Hybrid Stock Price Forecasting",
            description:
                "Combines CNN for local pattern detection and BiLSTM for temporal trend analysis on stock time series data enriched with technical indicators (MACD, RSI, ADX, etc).",
        },
        {
            icon: Zap,
            title: "Sentiment-Driven Insights",
            description:
                "FinBERT-based real-time sentiment analysis on financial news and social media headlines enhances predictive accuracy through market sentiment integration.",
        },
        {
            icon: TrendingUp,
            title: "End-to-End Investor Assistant",
            description:
                "Provides interactive charts, stock comparison, and a GPT-powered finance chatbot that guides users through predictions, indicators, and investment decisions.",
        },
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
                            <h1 className="text-2xl sm:text-4xl font-bold">Stokis - Stock Trends Outlook using Key
                                Indicators and Sentiment</h1>
                            <div className="flex gap-2">
                                <Badge
                                    variant="secondary"
                                    className="hidden sm:inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium tracking-wide shadow-sm transition-shadow duration-300"
                                >
                                    Featured
                                </Badge>
                                <Badge variant="outline">Finance </Badge>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            STOKIS is a full-stack AI system that forecasts stock market trends by integrating technical indicators, historical prices, and real-time sentiment. It features a CNN-BiLSTM hybrid model and FinBERT to empower investors with precise, sentiment-aware predictions.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="font-semibold">25 stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GitFork className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">4 forks</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button size="sm" asChild className="h-8 px-3 bg-green-500">
                            <a href="https://stokis-client-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="h-8 px-3 bg-purple-500 text-white">
                            <a href="https://github.com/riyal-rj/Stock-Price-Prediction-and-Forecasting" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </Button>

                        <Button size="sm" variant="outline" asChild className="h-8 px-3 bg-blue-600 text-white">
                            <a href="https://btech-final-year-project-2k25.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <FileText className="w-4 h-4 mr-2" />
                                Project Report
                            </a>
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">Project Screenshots</CardTitle>
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
                                        alt={`Stokis Screenshot ${index + 1}`}
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
                                {["Next.js", "FastAPI", "FinBERT", "CNN-BiLSTM", "MongoDB", "Tailwind CSS", "Huggingface", "Transformers"].map((tech) => (
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
                                    Hybrid CNN-BiLSTM architecture trained on technical and historical indicators
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    FinBERT-based sentiment classification with 97.28% accuracy
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    GPT chatbot for financial queries and personalized insights
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    Real-time data ingestion using SerpAPI, Playwright, CrewAI
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    Scalable architecture powered by Docker and FastAPI services
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
                                <span className="text-foreground">STOKIS</span> was developed as a final-year <span className="text-blue-600 font-medium">B.Tech capstone project</span> focused on the convergence of AI and financial analytics. The aim was to overcome limitations of traditional market predictors by leveraging both <span className="text-amber-700 font-medium">technical and emotional (sentiment)</span> data.
                            </li>
                            <li>
                                The model pipeline integrates <strong className="text-green-700">FinBERT</strong> sentiment scores with <strong className="text-green-700">CNN-BiLSTM</strong> time series forecasting across <strong>60+ stocks</strong>. FinBERT achieved a classification accuracy of <strong className="text-green-700">97.28%</strong>, while CNN-BiLSTM averaged <strong className="text-green-700">93.54%</strong> accuracy.
                            </li>
                            <li>
                                It performed best on stocks like <span className="text-lime-600 font-medium">Sun Pharma (97.87%)</span>, <span className="text-lime-600">NTPC (97.45%)</span>, <span className="text-lime-600">TVS Motor (96.89%)</span>, and <span className="text-lime-600">Bank of Baroda (96.32%)</span>. International stocks such as <span className="text-lime-600">Goldman Sachs (95.32%)</span>, <span className="text-lime-600">NVIDIA (92.32%)</span>, and <span className="text-lime-600">Meta (91.61%)</span> also showed strong performance.
                            </li>
                            <li>
                                Relatively lower accuracy was observed in stocks like <span className="text-red-600">Britannia (73.04%)</span>, <span className="text-red-600">TCS (70.79%)</span>, and <span className="text-red-600">Wipro (70.69%)</span>, mostly due to volatility, external factors, or insufficient feature depth.
                            </li>
                            <li>
                                Real-time data ingestion and summarization are orchestrated using <strong className="text-purple-700">CrewAI agents</strong> and <strong className="text-purple-700">FastAPI microservices</strong>, storing structured and unstructured data in <strong className="text-purple-700">PostgreSQL</strong> and <strong className="text-purple-700">MongoDB</strong> respectively.
                            </li>
                            <li>
                                The <span className="text-blue-700">Next.js</span>-based frontend, styled with <span className="text-blue-700">Tailwind CSS</span>, presents an intuitive and responsive dashboard for comparing stock performance, analyzing patterns, and engaging with the <span className="text-blue-700">GPT-powered chatbot</span>.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default StokisPage;
