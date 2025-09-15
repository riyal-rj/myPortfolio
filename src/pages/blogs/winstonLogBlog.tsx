import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  X,
  Code,
  Zap,
  Shield,
  Settings,
  Target,
  ChevronRight,
  Play,
  Copy,
  Check,
} from "lucide-react";

const WinstonBlogPage: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
    let timestamp,level,label,message;
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const codeSnippet1 = `import winston from 'winston';

const logger = winston.createLogger({
  level: "warn",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" })
  ]
});

logger.warn("Test warning log");
logger.error("Test error log");
logger.info("Test info log");   // discarded
logger.debug("Test debug log"); // discarded`;

  const codeSnippetFormats = `import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf, simple, json, cli, prettyPrint } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return "${timestamp} [${label}] ${level}: ${message}";
});

const customLogger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()],
});

customLogger.info('This is a custom formatted log message.');`;

  const codeSnippetChild = `const demoLog = { name: "Ritankar", role: "Software Developer" };

const childLogger = logger.child(demoLog);
childLogger.info('This is a log from the child logger');`;

  const codeSnippetError = `import { createLogger, format, transports } from "winston";
const { combine, errors, timestamp, json, prettyPrint } = format;

const logger = createLogger({
  format: combine(errors({ stack: true }), timestamp(), json(), prettyPrint()),
  transports: [new transports.Console(), new transports.File({ filename: "logs/combined.log" })],
});

const demoLog = { name: "Ritankar", role: "Software Developer" };
const childLogger = logger.child(demoLog);
childLogger.info('This is a test info log in json format with timestamp from child Logger', new Error("Test Error"));`;

  const CodeBlock = ({ code, id, title }: { code: string; id: string; title?: string }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-slate-700/50 overflow-hidden">
        {title && (
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm font-medium text-slate-300 ml-2">{title}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(code, id)}
              className="h-8 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              {copiedCode === id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        )}
        <pre className="p-6 overflow-auto text-sm text-slate-100 leading-relaxed">
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, gradient }: any) => (
    <div className="group relative">
      <div className={`absolute inset-0 ${gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
      <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${gradient.replace('bg-gradient-to-r', 'bg-gradient-to-br')}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {zoomedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            className="absolute top-5 right-5 text-white hover:text-red-400 transition-colors duration-200"
            onClick={() => setZoomedImage(null)}
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={zoomedImage}
            alt="zoomed"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* Navigation */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-500/10">
              Advanced Tutorial
            </Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-300 bg-purple-500/10">
              12 min read
            </Badge>
          </div>
        </div>
      </div>

      <article className="max-w-6xl mx-auto p-4 sm:p-6 space-y-12 relative">
        {/* Hero Section */}
        <header className="text-center space-y-8 py-12">
          <div className="flex items-center justify-center gap-3 text-sm text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>September 15, 2025</span>
            <span>•</span>
            <Clock className="w-4 h-4" />
            <span>12 min read</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Winston Logging
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-300 leading-tight">
              Powering Production-Ready Node.js Applications
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
            Transform your Node.js applications with Winston's universal, flexible logging architecture — 
            designed to make logs structured, searchable, and enterprise-ready.
          </p>

          {/* Author section */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                <img
                  src="/profilePic.jpeg"
                  alt="author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Ritankar Jana</div>
                <div className="text-slate-400 text-sm">Full Stack Developer & Tech Writer</div>
              </div>
            </div>

            <div className="h-12 w-px bg-slate-700" />

            <div className="flex flex-wrap gap-2">
              {["Node.js", "Winston", "Observability", "Logging", "Backend"].map((t) => (
                <Badge key={t} variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-700/50 transition-all duration-200">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        {/* Why Winston Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Winston?
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Winston elevates logging from basic console outputs to a sophisticated, production-grade system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Settings}
              title="Flexibility & Extensibility"
              description="Transport-based architecture supports console, files, databases, and third-party services. Configure multiple transports simultaneously for comprehensive logging coverage."
              gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={Target}
              title="Intelligent Log Levels"
              description="Fine-grained control with built-in severity levels (error, warn, info, debug). Set thresholds to filter noise and focus on what matters in different environments."
              gradient="bg-gradient-to-r from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={Code}
              title="Advanced Formatting"
              description="Transform log output with JSON, custom printf, or structured formats. Essential for parsing, searching, and analyzing logs in production systems."
              gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Error Handling"
              description="Built-in support for uncaught exceptions and promise rejections. Ensure critical application errors are always captured and properly logged."
              gradient="bg-gradient-to-r from-orange-500 to-red-500"
            />
          </div>
        </section>

        {/* Getting Started */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Play className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Getting Started</h2>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500" />
            <span className="text-slate-400">Basic Configuration</span>
          </div>

          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                Quick Setup Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Create a production-ready logger with multiple transports, JSON formatting, and intelligent level filtering in just a few lines of code.
              </p>
              <CodeBlock code={codeSnippet1} id="basic-setup" title="winston-setup.js" />
            </CardContent>
          </Card>
        </section>

        {/* Logging Levels */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Understanding Log Levels
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Default Winston Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CodeBlock 
                    code={`{
  error: 0,    // System errors, exceptions
  warn: 1,     // Warning conditions  
  info: 2,     // General information
  http: 3,     // HTTP request logs
  verbose: 4,  // Detailed information
  debug: 5,    // Debug information
  silly: 6     // Everything and anything
}`} 
                    id="levels" 
                    title="winston-levels.js" 
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Level Filtering Logic</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-600/30">
                  <p className="text-slate-300 text-sm mb-3">
                    With logger level set to <code className="text-amber-300">"warn"</code>:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <code className="text-red-300">logger.error()</code>
                      <span className="text-slate-400">✓ Logged</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <code className="text-yellow-300">logger.warn()</code>
                      <span className="text-slate-400">✓ Logged</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                      <code className="text-slate-400">logger.info()</code>
                      <span className="text-slate-500">✗ Filtered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                      <code className="text-slate-400">logger.debug()</code>
                      <span className="text-slate-500">✗ Filtered</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Custom Formats */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Advanced Formatting
          </h2>
          
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Code className="w-5 h-5 text-purple-400" />
                Custom Format Creation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Create sophisticated log formats with timestamps, labels, and custom printf patterns for enhanced readability and parsing.
              </p>
              <CodeBlock code={codeSnippetFormats} id="formats" title="custom-formats.js" />
            </CardContent>
          </Card>
        </section>

        {/* Transport Configuration */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Transport Architecture
          </h2>

          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
            <CardContent className="p-8">
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Transports define where your logs are delivered. Winston's flexible architecture allows you to route different log levels to different destinations simultaneously.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Target className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="font-semibold text-white">Console Transport</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Real-time log output to terminal. Perfect for development and debugging with colored output and immediate feedback.
                  </p>
                  <code className="text-xs text-green-300 mt-3 block">winston.transports.Console()</code>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-white">Error File Transport</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Dedicated error logging to persistent storage. Captures only critical issues for focused troubleshooting.
                  </p>
                  <code className="text-xs text-blue-300 mt-3 block">level: "error"</code>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Settings className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white">Combined Logs</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Comprehensive logging destination capturing all events. Essential for audit trails and system monitoring.
                  </p>
                  <code className="text-xs text-purple-300 mt-3 block">combined.log</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Child Loggers */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Contextual Logging with Child Loggers
          </h2>
          
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Structured Context & Metadata</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Child loggers automatically merge metadata into every log entry, perfect for request tracing, user context, and service identification.
              </p>
              <CodeBlock code={codeSnippetChild} id="child-logger" title="child-logger.js" />
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <p className="text-blue-200 text-sm">
                  <strong>Pro Tip:</strong> Use child loggers for request-scoped logging by attaching requestId, userId, 
                  or session data. This creates automatic correlation across your entire request lifecycle.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Error Handling */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Production Error Handling
          </h2>
          
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Shield className="w-5 h-5 text-red-400" />
                Stack Trace Preservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Combine error formatting with timestamps and structured output to preserve complete stack traces for debugging.
              </p>
              <CodeBlock code={codeSnippetError} id="error-handling" title="error-handling.js" />
            </CardContent>
          </Card>
        </section>

        {/* Performance Profiling */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Performance Profiling
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Built-in Profiler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  Winston includes a sophisticated profiler for measuring execution time, essential for identifying performance bottlenecks.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <h4 className="font-semibold text-emerald-300 mb-2">Development Benefits</h4>
                    <p className="text-slate-400 text-sm">Identify slow operations and optimization opportunities during development cycles.</p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-300 mb-2">Production Monitoring</h4>
                    <p className="text-slate-400 text-sm">Track critical operation performance and ensure SLA compliance in production.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Profiler Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock 
                  code={`const winston = require('winston');
const orderLogger = winston.loggers.get('orderLogger');

// Start timing
const profiler = orderLogger.startTimer();

// Your operation here
setTimeout(() => {
    // Log duration automatically
    profiler.done({ 
        message: 'Database query completed',
        operation: 'user-lookup',
        userId: '12345'
    });
}, 2000);

// Output: 
// {
//   "message": "Database query completed", 
//   "level": "info",
//   "durationMs": 2007,
//   "operation": "user-lookup",
//   "userId": "12345",
//   "timestamp": "2025-09-15T10:30:42.597Z"
// }`} 
                  id="profiler" 
                  title="profiler-example.js" 
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Production Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-green-400" />
                  <h3 className="font-semibold text-green-300">Smart Level Management</h3>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Development: <code className="text-green-300">info</code> level</li>
                  <li>• Staging: <code className="text-yellow-300">warn</code> level</li>
                  <li>• Production: <code className="text-red-300">error</code> level</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold text-blue-300">Centralized Logging</h3>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Ship JSON logs to ELK Stack</li>
                  <li>• Use Grafana Loki for queries</li>
                  <li>• Implement Datadog integration</li>
                  <li>• Enable real-time alerting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold text-purple-300">Context Enhancement</h3>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Attach requestId to every log</li>
                  <li>• Include userId for user actions</li>
                  <li>• Add service/component metadata</li>
                  <li>• Use correlation IDs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Multiple Loggers */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Enterprise Logger Management
          </h2>
          
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Settings className="w-5 h-5 text-indigo-400" />
                Service-Specific Loggers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Organize logging across microservices with Winston's global container system. Each service gets dedicated configuration and output destinations.
              </p>
              <CodeBlock 
                code={`import winston from 'winston';
const { combine, errors, timestamp, json, prettyPrint } = winston.format;

// Register service-specific loggers
winston.loggers.add('orderService', {
  format: combine(errors({ stack: true }), timestamp(), json(), prettyPrint()),
  transports: [
    new winston.transports.File({ filename: 'logs/orders.log' }),
    new winston.transports.Console({ level: 'warn' })
  ],
  defaultMeta: { service: 'Order Service', version: '2.1.0' }
});

winston.loggers.add('paymentService', {
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: 'logs/payments.log' }),
    new winston.transports.File({ filename: 'logs/audit.log', level: 'info' })
  ],
  defaultMeta: { service: 'Payment Service', compliance: 'PCI-DSS' }
});

// Use anywhere in your application
const orderLogger = winston.loggers.get('orderService');
const paymentLogger = winston.loggers.get('paymentService');

orderLogger.info('Order placed successfully', { 
  orderId: 'ORD-12345', 
  customerId: 'CUST-67890',
  amount: 299.99 
});

paymentLogger.warn('Payment retry attempted', { 
  transactionId: 'TXN-98765', 
  attempt: 2, 
  gateway: 'stripe' 
});`} 
                id="multiple-loggers" 
                title="service-loggers.js" 
              />
            </CardContent>
          </Card>
        </section>

        {/* Advanced Configuration */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
            Advanced Configuration Patterns
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Environment-Based Config</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock 
                  code={`import winston from 'winston';

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const logger = winston.createLogger({
  level: isDevelopment ? 'debug' : 'warn',
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    isDevelopment 
      ? winston.format.colorize() 
      : winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: isDevelopment 
        ? winston.format.simple() 
        : winston.format.json()
    }),
    ...(isProduction ? [
      new winston.transports.File({ 
        filename: 'logs/error.log', 
        level: 'error' 
      }),
      new winston.transports.File({ 
        filename: 'logs/combined.log' 
      })
    ] : [])
  ],
  exceptionHandlers: isProduction ? [
    new winston.transports.File({ 
      filename: 'logs/exceptions.log' 
    })
  ] : []
});

export default logger;`} 
                  id="env-config" 
                  title="logger-config.js" 
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Custom Transport Example</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock 
                  code={`import winston from 'winston';
import Transport from 'winston-transport';

class SlackTransport extends Transport {
  constructor(opts) {
    super(opts);
    this.webhookUrl = opts.webhookUrl;
    this.channel = opts.channel || '#alerts';
  }

  log(info, callback) {
    // Only send critical errors to Slack
    if (info.level === 'error') {
      const payload = {
        channel: this.channel,
        text: \`🚨 *Error Alert*\`,
        attachments: [{
          color: 'danger',
          fields: [{
            title: 'Message',
            value: info.message,
            short: false
          }, {
            title: 'Timestamp',
            value: info.timestamp,
            short: true
          }]
        }]
      };

      // Send to Slack webhook
      fetch(this.webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).catch(console.error);
    }
    
    callback();
  }
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new SlackTransport({
      webhookUrl: process.env.SLACK_WEBHOOK_URL,
      channel: '#production-alerts'
    })
  ]
});`} 
                  id="custom-transport" 
                  title="custom-transport.js" 
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Tips */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Performance Optimization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 backdrop-blur border-teal-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-teal-300">Async Logging</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Use async transports to prevent blocking your application's main thread during log operations.
                </p>
                <code className="text-xs text-teal-300 bg-slate-800/50 p-2 rounded block">
                  handleExceptions: false,<br/>
                  handleRejections: false
                </code>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold text-blue-300">Log Rotation</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Implement log rotation to manage disk space and maintain performance in production.
                </p>
                <code className="text-xs text-blue-300 bg-slate-800/50 p-2 rounded block">
                  maxsize: 5242880, // 5MB<br/>
                  maxFiles: 5
                </code>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold text-purple-300">Memory Management</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Configure proper buffer sizes and flush intervals to optimize memory usage.
                </p>
                <code className="text-xs text-purple-300 bg-slate-800/50 p-2 rounded block">
                  {`stream: { highWaterMark: 16 },<br/>
                  flush: true`}
                </code>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-8 py-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready for Production
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Winston transforms your Node.js applications from basic logging to enterprise-grade observability. 
              Start with structured JSON logs, implement intelligent level filtering, and scale to centralized monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur border-emerald-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">Start Smart</h3>
                <p className="text-slate-300 text-sm">Begin with info level in development, warn in production</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur border-blue-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Scale Thoughtfully</h3>
                <p className="text-slate-300 text-sm">Ship JSON to ELK Stack, Loki, or Datadog for analysis</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border-purple-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Add Context</h3>
                <p className="text-slate-300 text-sm">Use child loggers for requestId, userId correlation</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-3" />
              Complete Example Repository
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Winston Documentation
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700/50 pt-12 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                <img
                  src="/profilePic.jpeg"
                  alt="author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">Ritankar Jana</div>
                <div className="text-slate-400 text-sm">Full Stack Developer & Tech Writer</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <span>© 2025 All rights reserved</span>
              <span>•</span>
              <span>Built with React & Tailwind</span>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default WinstonBlogPage;