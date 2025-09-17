import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const GrpcPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {/* Title Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 border border-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                Backend
              </span>
              <span className="border border-green-300 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                gRPC
              </span>
              <span className="border border-orange-300 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Microservices
              </span>
              <span className="border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                APIs
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Demystifying gRPC
            </h1>
            <p className="text-xl white leading-relaxed">
              A comprehensive guide to understanding gRPC, its core concepts,
              and how it revolutionizes modern distributed systems and
              microservices architecture.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-indigo-600">
              <span className="font-medium">By Ritankar Jana</span>
              <div className="h-4 w-px bg-indigo-300"></div>
              <span className="font-medium">15 min read</span>
              <div className="h-4 w-px bg-indigo-300"></div>
              <span className="font-medium">September 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-emerald-500">
                What is gRPC?
              </h2>
              <p className="text-lg leading-relaxed text-white">
                gRPC (gRPC Remote Procedure Call) is a modern, open-source,
                high-performance RPC framework initially developed by Google. It
                is designed to enable communication between services efficiently
                and is a popular choice for building microservices
                architectures.
              </p>
              <p className="mt-4 text-white">
                It allows a client application to directly call a method on a
                server application on a different machine as if it were a local
                object, abstracting away the complexities of network
                communication.
              </p>
            </CardContent>
          </Card>

          {/* Core Concepts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Core Concepts
            </h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">
                    1. Service Definition (Protocol Buffers)
                  </h3>
                  <p className="mb-4 text-white">
                    By default, gRPC uses Protocol Buffers (Protobuf) as its
                    Interface Definition Language (IDL) and its underlying
                    message interchange format. You define your service contract
                    in a{" "}
                    <code className="text-red-600 bg-red-50 px-1 py-0.5 rounded">
                      .proto
                    </code>{" "}
                    file.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-white">
                      {`syntax = "proto3";

package helloworld;

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}`}
                    </pre>
                  </div>
                  <p className="mt-4 text-white">
                    The Protobuf compiler (protoc) then uses this file to
                    generate client and server-side code in any of gRPC's
                    supported languages, providing a strongly-typed foundation
                    for your services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">
                    2. Communication Patterns
                  </h3>
                  <p className="mb-4 text-white">
                    gRPC supports four types of service methods, allowing for
                    different kinds of communication:
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-700">Unary RPC</h4>
                      <p className="text-sm white">
                        The classic request-response pattern. The client sends a
                        single request to the server and gets a single response
                        back.
                      </p>
                      <code className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded">
                        rpc SayHello(HelloRequest) returns (HelloReply);
                      </code>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-700">
                        Server streaming RPC
                      </h4>
                      <p className="text-sm white">
                        The client sends a single request and gets a stream of
                        messages back. Useful for sending large datasets.
                      </p>
                      <code className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded">
                        rpc LotsOfReplies(HelloRequest) returns (stream
                        HelloReply);
                      </code>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-orange-700">
                        Client streaming RPC
                      </h4>
                      <p className="text-sm white">
                        The client sends a stream of messages to the server and
                        receives a single response. Great for uploading large
                        files.
                      </p>
                      <code className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded">
                        rpc LotsOfGreetings(stream HelloRequest) returns
                        (HelloReply);
                      </code>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-red-700">
                        Bidirectional streaming RPC
                      </h4>
                      <p className="text-sm white">
                        Both client and server send streams of messages. Enables
                        complex, real-time, full-duplex communication.
                      </p>
                      <code className="text-xs bg-red-50 text-red-800 px-2 py-1 rounded">
                        rpc BidiHello(stream HelloRequest) returns (stream
                        HelloReply);
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why gRPC is Important */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Why is gRPC Important?
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-purple-700">
                      <Badge
                        variant="outline"
                        className="border-purple-300 text-purple-700"
                      >
                        Performance
                      </Badge>
                    </h3>
                    <p className="text-sm white mb-4">
                      Built on HTTP/2 with binary serialization using Protobuf,
                      offering significant performance gains over traditional
                      REST APIs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
                      <Badge
                        variant="outline"
                        className="border-green-300 text-green-700"
                      >
                        Efficiency
                      </Badge>
                    </h3>
                    <p className="text-sm white mb-4">
                      HTTP/2 multiplexing, header compression, and server push
                      reduce latency and network overhead.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-blue-700">
                      <Badge
                        variant="outline"
                        className="border-blue-300 text-blue-700"
                      >
                        Type Safety
                      </Badge>
                    </h3>
                    <p className="text-sm white mb-4">
                      Strongly-typed contracts eliminate integration issues and
                      reduce runtime errors.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-orange-700">
                      <Badge
                        variant="outline"
                        className="border-orange-300 text-orange-700"
                      >
                        Polyglot
                      </Badge>
                    </h3>
                    <p className="text-sm white mb-4">
                      Cross-language support ideal for microservices written in
                      different languages.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How gRPC Works Internally */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              How gRPC Works Internally
            </h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">
                    1. HTTP/2 as the Transport Layer
                  </h3>
                  <p className="mb-4 text-white">
                    gRPC's choice of HTTP/2 is fundamental to its performance:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white">
                        <strong className="text-blue-700">
                          Binary Framing:
                        </strong>{" "}
                        More efficient for machines to parse and less
                        error-prone than text-based protocols.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white">
                        <strong className="text-green-700">
                          Multiplexing:
                        </strong>{" "}
                        Multiple concurrent requests without blocking, solving
                        HTTP/1.1's head-of-line blocking.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white">
                        <strong className="text-orange-700">
                          Header Compression (HPACK):
                        </strong>{" "}
                        Reduces bandwidth usage for repeated headers.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">
                    2. Protocol Buffers for Serialization
                  </h3>
                  <p className="mb-4 text-white">
                    When a client makes a gRPC call, the process is highly
                    efficient:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <ol className="text-sm space-y-2">
                      <li className="text-blue-700 font-medium">
                        1. Request object serialized into compact binary format
                        using Protocol Buffers
                      </li>
                      <li className="text-green-700 font-medium">
                        2. Binary data sent as payload within HTTP/2 data frame
                      </li>
                      <li className="text-orange-700 font-medium">
                        3. Server deserializes binary data back into
                        language-specific object
                      </li>
                      <li className="text-purple-700 font-medium">
                        4. Same process happens in reverse for the response
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Microservice Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Microservice Architecture: Gateway, User, and Product Services
            </h2>

            <Card className="mb-6">
              <CardContent className="p-6">
                <p className="mb-4 text-white">
                  In a typical microservice architecture, you don't expose every
                  gRPC service directly to the outside world. Instead, you use
                  an API Gateway as a translator and gatekeeper.
                </p>

                <div className="bg-muted p-4 rounded-lg mb-4">
                  <div className="text-center text-sm font-mono text-indigo-700 font-semibold">
                    [Browser] ↔ [API Gateway] ↔ [User Service]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↔
                    [Product Service]
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-700">
                      API Gateway
                    </h4>
                    <p className="text-sm text-blue-600">
                      Single entry point that translates REST/JSON requests to
                      gRPC calls and handles authentication, rate limiting, and
                      routing.
                    </p>
                  </div>

                  <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-700">
                      User Service
                    </h4>
                    <p className="text-sm text-green-600">
                      Specialized microservice for user data and logic, exposing
                      gRPC methods like CreateUser, GetUser, UpdateUserProfile.
                    </p>
                  </div>

                  <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-orange-700">
                      Product Service
                    </h4>
                    <p className="text-sm text-orange-600">
                      Handles all product-related operations through gRPC
                      methods like GetProduct, ListProducts, UpdateInventory.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  Communication Flow Example
                </h3>
                <p className="mb-4 text-white">
                  Let's trace a request to get a user's profile:
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="mt-1 border-blue-300 text-blue-700"
                    >
                      1
                    </Badge>
                    <div>
                      <strong className="text-blue-700">
                        External Request:
                      </strong>{" "}
                      <span className="text-white">
                        Browser makes HTTP GET request to{" "}
                        <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">
                          /api/v1/users/123
                        </code>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="mt-1 border-green-300 text-green-700"
                    >
                      2
                    </Badge>
                    <div>
                      <strong className="text-green-700">
                        Gateway Processing:
                      </strong>{" "}
                      <span className="text-white">
                        API Gateway authenticates request and determines routing
                        to User Service
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="mt-1 border-orange-300 text-orange-700"
                    >
                      3
                    </Badge>
                    <div>
                      <strong className="text-orange-700">gRPC Call:</strong>{" "}
                      <span className="text-white">
                        Gateway creates{" "}
                        <code className="text-orange-600 bg-orange-50 px-1 py-0.5 rounded">
                          GetUserRequest{`{user_id: "123"}`}
                        </code>{" "}
                        and calls{" "}
                        <code className="text-orange-600 bg-orange-50 px-1 py-0.5 rounded">
                          user_client.GetUser(request)
                        </code>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="mt-1 border-purple-300 text-purple-700"
                    >
                      4
                    </Badge>
                    <div>
                      <strong className="text-purple-700">
                        Service Processing:
                      </strong>{" "}
                      <span className="text-white">
                        User Service queries database and returns{" "}
                        <code className="text-purple-600 bg-purple-50 px-1 py-0.5 rounded">
                          User
                          {`{user_id: "123", name: "Alex", email: "alex@example.com"}`}
                        </code>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="mt-1 border-red-300 text-red-700"
                    >
                      5
                    </Badge>
                    <div>
                      <strong className="text-red-700">
                        Response Translation:
                      </strong>{" "}
                      <span className="text-white">
                        Gateway converts gRPC response to JSON and sends HTTP
                        response back to browser
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-emerald-700">
                  Key Takeaways
                </h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-white">
                      gRPC combines the best of both worlds: simple REST/JSON
                      APIs for external clients and high-performance gRPC for
                      internal communication
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-white">
                      HTTP/2's binary framing, multiplexing, and compression
                      make gRPC significantly more efficient than traditional
                      REST APIs
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-white">
                      Protocol Buffers provide strongly-typed contracts that
                      eliminate integration issues and improve developer
                      productivity
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-white">
                      The microservice architecture pattern with API Gateway
                      provides flexibility, security, and clean separation of
                      concerns
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Action Buttons */}
          <section className="mt-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Explore Further</h3>
              <p className="text-muted-foreground mb-6">
                Want to dive deeper into gRPC? Check out my
                implementation or explore the official documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <a
                    href="https://github.com/riyal-rj/Microservices-GRPC-"
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
                    href="https://grpc.io/docs/"
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
                    href="https://github.com/grpc"
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
        </article>
      </main>
    </div>
  );
};

export default GrpcPage;
