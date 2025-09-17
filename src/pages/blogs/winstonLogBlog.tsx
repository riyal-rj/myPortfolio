import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  Code,
  Zap,
  Shield,
  Settings,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const WinstonLoggingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 text-blue-500" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 border border-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                Backend
              </span>
              <span className="border border-green-300 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                NodeJs
              </span>
              <span className="border border-orange-300 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Winston
              </span>
              <span className="border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Logging
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Winston Logging: Helping Node.js
            </h1>
            <p className="text-xl white leading-relaxed">
              A comprehensive guide to Winston, the popular universal logging
              library for Node.js. Learn how to implement flexible, extensible,
              and powerful logging solutions for your applications.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-indigo-600">
              <span className="font-medium">By Ritankar Jana</span>
              <div className="h-4 w-px bg-indigo-300"></div>
              <span className="font-medium">15 min read</span>
              <div className="h-4 w-px bg-indigo-300"></div>
              <span className="font-medium">September, 2025</span>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Introduction to Winston
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <span className="text-blue-600 font-semibold">Winston</span> is a
              popular, universal logging library for Node.js. It is designed to
              be <span className="text-green-600 font-medium">simple</span>,{" "}
              <span className="text-green-600 font-medium">flexible</span>, and{" "}
              <span className="text-green-600 font-medium">extensible</span>,
              making it a powerful tool for managing application logs in both
              development and production environments.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Why Winston is Helpful
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-blue-600">
                      Flexibility & Extensibility
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Transport-based architecture allows sending logs to
                      various destinations like console, files, databases, or
                      third-party services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-green-600">
                      Customizable Log Levels
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Uses logging levels (error, warn, info) to categorize
                      message severity and filter output.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-purple-600">
                      Log Formatting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Control output format - plain text, JSON, or custom
                      formats for parsing and analysis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-red-600">
                      Error Handling
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Configure to handle uncaught exceptions, ensuring critical
                      errors are always logged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-green-500" />
              Basic Winston Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Here's a basic example of Winston with multiple transports and
              levels:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`import winston from 'winston';

const logger = winston.createLogger({
    level: "warn",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/error.log", 
            level: "error"
        }),
        new winston.transports.File({
            filename: "logs/combined.log"
        })
    ]
});

logger.warn("Test warning log");
logger.error("Test error log");
logger.info("Test info log");      // Won't be logged (below warn level)
logger.debug("Test debug log");    // Won't be logged (below warn level)`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-500" />
              Multiple Transports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <span className="text-blue-600 font-semibold">Transports</span>{" "}
              are the destinations for your logs. Winston allows multiple
              transports with fine-grained control:
            </p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-600">
                  Console Transport
                </h4>
                <p className="text-sm text-muted-foreground">
                  Sends all logs to the console output
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  new winston.transports.Console()
                </code>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-600">
                  Error File Transport
                </h4>
                <p className="text-sm text-muted-foreground">
                  Creates error.log with only error-level messages
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  filename: "logs/error.log", level: "error"
                </code>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-600">
                  Combined File Transport
                </h4>
                <p className="text-sm text-muted-foreground">
                  Creates combined.log with all logs that pass the main level
                  filter
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  filename: "logs/combined.log"
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              Logging Levels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Winston uses the following default logging levels, ordered by
              severity:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-red-100 dark:bg-red-900/20 rounded">
                  <span className="font-semibold text-red-700 dark:text-red-400">
                    error
                  </span>
                  <span className="text-red-600 dark:text-red-500">
                    0 (highest)
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-orange-100 dark:bg-orange-900/20 rounded">
                  <span className="font-semibold text-orange-700 dark:text-orange-400">
                    warn
                  </span>
                  <span className="text-orange-600 dark:text-orange-500">
                    1
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-100 dark:bg-blue-900/20 rounded">
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    info
                  </span>
                  <span className="text-blue-600 dark:text-blue-500">2</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-100 dark:bg-green-900/20 rounded">
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    http
                  </span>
                  <span className="text-green-600 dark:text-green-500">3</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-100 dark:bg-purple-900/20 rounded">
                  <span className="font-semibold text-purple-700 dark:text-purple-400">
                    verbose
                  </span>
                  <span className="text-purple-600 dark:text-purple-500">
                    4
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                    debug
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-500">
                    5
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <span className="font-semibold">Pro Tip:</span> Set level to{" "}
                <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
                  info
                </code>{" "}
                in development and{" "}
                <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
                  warn
                </code>{" "}
                in production to reduce log noise.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Winston Formats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Winston comes with several built-in formats for different use
              cases:
            </p>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-blue-600 mb-2">
                  Simple Format
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Prints the log level, a tab, and the message.
                </p>
                <div className="bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                  info:&nbsp;&nbsp;&nbsp;&nbsp;This is a simple log message.
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-green-600 mb-2">
                  JSON Format
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Outputs the log as a JSON object.
                </p>
                <div className="bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                  {"{"}"level":"info","message":"This is a JSON log message."
                  {"}"}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-purple-600 mb-2">
                  Custom printf Format
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Create any format using printf with timestamps and labels.
                </p>
                <div className="bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                  2025-09-12T12:00:00.000Z [right meow!] info: Custom message
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Child Loggers and Custom JSON</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <span className="text-purple-600 font-semibold">
                Child loggers
              </span>{" "}
              inherit parent configuration but add their own specific metadata.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`const demoLog = {name: "Ritankar", role: "Software Developer"};

// Create child logger with metadata
const childLogger = logger.child(demoLog);

// Every log from child includes the metadata automatically
childLogger.info('This is a log from the child logger');

// You can also pass custom JSON to any log
logger.info('Custom log', demoLog);`}
              </pre>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <span className="font-semibold">Use Case:</span> Perfect for
                adding context like user session data, request IDs, or
                service-specific information.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              Error Logging with Stack Traces
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Winston can capture detailed error information including stack
              traces:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`import { errors } from 'winston';

const logger = createLogger({
  format: combine(
    errors({ stack: true }),  // Enable stack traces
    timestamp(),
    json(),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({filename: "logs/combined.log"})
  ],
});

// Log an error with full stack trace
childLogger.info('Operation failed', new Error("Test Error"));`}
              </pre>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
              <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                Sample Error Output:
              </h5>
              <div className="bg-gray-900 text-green-400 p-2 rounded text-xs font-mono">
                {`{
  "name": "Ritankar",
  "role": "Software Developer", 
  "level": "info",
  "message": "Operation failed Test Error",
  "stack": "Error: Test Error\\n    at file:///app/index.js:23:92...",
  "timestamp": "2025-09-12T18:10:19.910Z"
}`}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Managing Multiple Service Loggers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              For larger applications, separate logs by service using Winston's{" "}
              <span className="text-blue-600 font-semibold">
                global container
              </span>
              :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">
                  logger.js (Setup)
                </h4>
                <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                  <pre>
                    {`winston.loggers.add('orderLogger', {
  format: combine(timestamp(), json()),
  transports: [
    new transports.Console(),
    new transports.File({ 
      filename: "logs/orders.log" 
    })
  ],
  defaultMeta: {service: 'order'}
});`}
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">
                  index.js (Usage)
                </h4>
                <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                  <pre>
                    {`require('./logger.js');

const orderLogger = winston
  .loggers.get('orderLogger');

orderLogger.info('Order processed');
orderLogger.error('Order failed');`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200">
                <span className="font-semibold">Benefits:</span> Organized logs
                by service (orders.log, customers.log, payments.log) with
                automatic service metadata.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Code Profiling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Winston includes a simple profiler to measure code execution time:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`// Start the timer
const profiler = logger.startTimer();

// Your operation here
setTimeout(() => {
    // End timer and log duration
    profiler.done({ message: 'Database query completed' });
}, 2000);

// Output: { 
//   "message": "Database query completed",
//   "level": "info", 
//   "durationMs": 2007,
//   "timestamp": "2025-09-12T18:41:42.597Z" 
// }`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3 rounded">
                <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-1">
                  Development Use
                </h5>
                <p className="text-xs text-blue-600 dark:text-blue-300">
                  Identify slow operations and performance bottlenecks
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-3 rounded">
                <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-1">
                  Production Use
                </h5>
                <p className="text-xs text-purple-600 dark:text-purple-300">
                  Monitor critical operations and ensure SLA compliance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-green-600">
                      Environment-based Levels
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Use <code>info</code> in development, <code>warn</code> in
                      production
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-blue-600">
                      Structured Logging
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Use JSON format for better parsing and analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-purple-600">
                      Service Separation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Use separate loggers for different services/modules
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-orange-600">
                      Error Stack Traces
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Always enable stack traces for error logs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-red-600">Log Rotation</h5>
                    <p className="text-sm text-muted-foreground">
                      Implement log rotation to manage file sizes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-teal-600">
                      Performance Monitoring
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Use profiling for critical operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Winston provides a{" "}
              <span className="text-blue-600 font-semibold">
                comprehensive logging solution
              </span>{" "}
              for Node.js applications. Its transport-based architecture,
              customizable formats, and powerful features like child loggers and
              profiling make it an excellent choice for both development and
              production environments. By following the patterns shown in this
              guide, you can implement robust logging that will help you
              monitor, debug, and maintain your applications effectively.
            </p>
          </CardContent>
        </Card>
        <section className="mt-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Explore Further</h3>
              <p className="text-muted-foreground mb-6">
                Want to dive deeper into Winston Logging? Check out my
                implementation or explore the official documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <a
                    href="https://github.com/riyal-rj/winston-logging"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    View My Code Repository
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a
                    href="https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Official Documentation
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <a
                    href="https://github.com/winstonjs/winston"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    Official Code Repository
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default WinstonLoggingPage;
