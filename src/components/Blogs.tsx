import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      title: "Winston Logging: Helping Node.js",
      description:
        "Understand how Winston makes logging in Node.js applications more structured, customizable, and production-ready.",
      slug: "winston-logging-nodejs",
    },
    {
      title: "Demystifying gRPC",
      description:
        "A beginner-friendly explanation of gRPC—how it works, why it’s fast, and where it fits compared to REST APIs.",
      slug: "demystifying-grpc",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-lg bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            ✍️ My Technical Blogs
          </CardTitle>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Dive into my writings on software engineering, backend systems, and
            cutting-edge technologies.
          </p>
        </CardHeader>

        <CardContent className="grid gap-6 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative border rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-4">
                  <Link to={`/blog/${blog.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors"
                    >
                      Read More <ArrowRightCircle className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSection;
