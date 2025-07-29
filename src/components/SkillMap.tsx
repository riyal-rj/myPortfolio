import React, { useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Code,
  Database,
  Server,
  GitBranch,
  Brain,
  MonitorSmartphone,
  MessageSquare,
} from "lucide-react";
import { FaRobot } from 'react-icons/fa';
import {
  DiJava, DiJavascript, DiPython, DiReact, DiMongodb,
  DiNodejs, DiEclipse, DiGit, DiDocker, DiMysql
} from "react-icons/di";

import {
  SiTensorflow, SiHuggingface, SiPytorch, SiKeras,
  SiOpenai, SiScikitlearn, SiSpringboot,
  SiIntellijidea, SiRedis, SiPostman, SiVercel, SiTypescript, SiGithub,
  SiNextdotjs, SiFastapi,SiExpress
} from 'react-icons/si';
import { VscAdd } from "react-icons/vsc";

const SkillNode = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = data.iconComponent;
  const iconUrl = data.iconUrl;

  return (
    <div className="skill-node bg-card border border-border rounded-lg p-3 shadow-md min-w-[120px]">
      <Handle type="target" position={Position.Left} />
      <div className="flex flex-col items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        {iconUrl ? (
          <img src={iconUrl} alt={data.label} className="w-6 h-6 mb-2 animate-bounce" />
        ) : (
          <IconComponent className="w-6 h-6 mb-2 animate-spin-slow text-primary" />
        )}
        <span className="text-sm font-medium text-center">{data.label}</span>
        {data.level && (
          <Badge variant="secondary" className="text-xs mt-1">
            {data.level}
          </Badge>
        )}
      </div>
      {isExpanded && data.description && (
        <div className="mt-2 p-2 bg-muted rounded text-xs">
          {data.description}
        </div>
      )}
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const nodeTypes = {
  skillNode: SkillNode,
};

const SkillMap = () => {
  const initialNodes = [
    // Ideas (Project Owner)
    { id: 'ideas', type: 'skillNode', position: { x: 50, y: 50 }, data: { label: 'Ideas', iconComponent: MessageSquare, description: 'Brainstorming and conceptualizing innovative project solutions and features.' } },
    { id: 'project-owner', type: 'skillNode', position: { x: 50, y: 200 }, data: { label: 'Project Owner', iconComponent: Brain, level: 'Stakeholder', description: 'Defining project vision, managing stakeholders, and ensuring alignment with business goals.' } },

    // Planning (Languages)
    { id: 'planning', type: 'skillNode', position: { x: 300, y: 50 }, data: { label: 'Languages', iconComponent: Code, description: 'Choosing programming languages to meet project requirements and performance needs.' } },
    { id: 'python', type: 'skillNode', position: { x: 300, y: 200 }, data: { label: 'Python', iconUrl: '/logos/python.svg', iconComponent: DiPython, level: 'Intermediate', description: 'A versatile, high-level language used for web development, AI/ML, data analysis, and automation.' } },
    { id: 'java', type: 'skillNode', position: { x: 300, y: 350 }, data: { label: 'Java', iconUrl: '/logos/java.svg', iconComponent: DiJava, level: 'Expert', description: 'A robust, object-oriented language for enterprise applications, Android development, and large-scale systems.' } },
    { id: 'javascript', type: 'skillNode', position: { x: 300, y: 500 }, data: { label: 'JavaScript', iconUrl: '/logos/javascript.svg', iconComponent: DiJavascript, level: 'Intermediate', description: 'The primary language for web development, enabling dynamic and interactive user interfaces.' } },
    { id: 'typescript', type: 'skillNode', position: { x: 300, y: 650 }, data: { label: 'TypeScript', iconUrl: '/logos/typescript.svg', iconComponent: SiTypescript, level: 'Beginner', description: 'A typed superset of JavaScript that enhances code scalability and maintainability.' } },

    // Requirement Analysis (Frameworks)
    { id: 'req-analysis', type: 'skillNode', position: { x: 600, y: 50 }, data: { label: 'Web Frameworks', iconComponent: Server, description: 'Selecting frameworks to streamline development of scalable web applications.' } },
    { id: 'react', type: 'skillNode', position: { x: 600, y: 170 }, data: { label: 'React', iconUrl: '/logos/react.svg', iconComponent: DiReact, level: 'Intermediate', description: 'A JavaScript library for building fast, component-based user interfaces.' } },
    { id: 'nodejs', type: 'skillNode', position: { x: 600, y: 290 }, data: { label: 'Node.js', iconUrl: '/logos/nodejs.svg', iconComponent: DiNodejs, level: 'Intermediate', description: 'A JavaScript runtime for building scalable server-side applications.' } },
    { id: 'springboot', type: 'skillNode', position: { x: 600, y: 410 }, data: { label: 'Spring Boot', iconUrl: '/logos/spring.svg', iconComponent: SiSpringboot, level: 'Beginner', description: 'A Java framework for creating production-ready, microservices-based applications.' } },
    { id: 'nextjs', type: 'skillNode', position: { x: 600, y: 530 }, data: { label: 'Next.js', iconUrl: '/logos/nextjs.png', iconComponent: SiNextdotjs, level: 'Beginner', description: 'A React framework for server-side rendering, static sites, and optimized web apps.' } },
    {id:"express", type: 'skillNode', position: { x: 600, y: 650 }, data: { label: 'Express.js', iconUrl: '/logos/express-js.png', iconComponent: SiExpress, level: 'Intermediate', description: 'A minimal and flexible Node.js web application framework for building APIs.' } },

    // Design & Prototyping (Editors)
    { id: 'design-proto', type: 'skillNode', position: { x: 900, y: 50 }, data: { label: 'Code Editors', iconComponent: MonitorSmartphone, description: 'Utilizing IDEs and editors for efficient coding and debugging.' } },
    { id: 'vscode', type: 'skillNode', position: { x: 900, y: 200 }, data: { label: 'VS Code', iconUrl: '/logos/vscode.svg', iconComponent: VscAdd, level: 'Expert', description: 'A lightweight, customizable editor with support for multiple languages and extensions.' } },
    { id: 'intellij', type: 'skillNode', position: { x: 900, y: 350 }, data: { label: 'IntelliJ IDEA', iconUrl: '/logos/Intellij.png', iconComponent: SiIntellijidea, level: 'Advanced', description: 'A powerful IDE optimized for Java and other languages with advanced refactoring tools.' } },
    { id: 'eclipse', type: 'skillNode', position: { x: 900, y: 500 }, data: { label: 'Eclipse', iconUrl: '/logos/eclipse.svg', iconComponent: DiEclipse, level: 'Intermediate', description: 'An open-source IDE primarily used for Java development with plugin support.' } },

    // Source Code (AI/ML and Backend)
    { id: 'source-code', type: 'skillNode', position: { x: 1200, y: 50 }, data: { label: 'AI/ML Frameworks', iconComponent: FaRobot, description: 'Leveraging frameworks for machine learning and backend development.' } },
    { id: 'pytorch', type: 'skillNode', position: { x: 1200, y: 200 }, data: { label: 'PyTorch', iconUrl: '/logos/pytorch.svg', iconComponent: SiPytorch, level: 'Intermediate', description: 'An open-source ML framework for dynamic neural networks and research.' } },
    { id: 'tensorflow', type: 'skillNode', position: { x: 1200, y: 300 }, data: { label: 'TensorFlow', iconUrl: '/logos/tensorflow.svg', iconComponent: SiTensorflow, level: 'Intermediate', description: 'A comprehensive ML framework for building and deploying large-scale models.' } },
    { id: 'keras', type: 'skillNode', position: { x: 1200, y: 400 }, data: { label: 'Keras', iconUrl: '/logos/keras.png', iconComponent: SiKeras, level: 'Intermediate', description: 'A high-level API for building neural networks, integrated with TensorFlow.' } },
    { id: 'sklearn', type: 'skillNode', position: { x: 1200, y: 500 }, data: { label: 'Scikit-learn', iconUrl: '/logos/ScikitLearn.png', iconComponent: SiScikitlearn, level: 'Expert', description: 'A Python library for machine learning with tools for classification, regression, and clustering.' } },
    { id: 'huggingface', type: 'skillNode', position: { x: 1200, y: 600 }, data: { label: 'Hugging Face', iconUrl: '/logos/huggingface.png', iconComponent: SiHuggingface, level: 'Intermediate', description: 'A platform for NLP models, datasets, and pre-trained transformers.' } },
    { id: 'openai', type: 'skillNode', position: { x: 1200, y: 700 }, data: { label: 'OpenAI', iconComponent: SiOpenai, level: 'Intermediate', description: 'APIs for advanced AI models, including language models like GPT.' } },
    { id: 'fastapi', type: 'skillNode', position: { x: 1200, y: 800 }, data: { label: 'FastAPI', iconUrl: '/logos/fastapi.svg', iconComponent: SiFastapi, level: 'Beginner', description: 'A modern Python framework for building fast, asynchronous APIs.' } },

    // Functional Software (DevOps)
    { id: 'functional-sw', type: 'skillNode', position: { x: 900, y: 800 }, data: { label: 'Functional Software', iconComponent: GitBranch, description: 'Implementing version control and CI/CD for reliable software delivery.' } },
    { id: 'docker', type: 'skillNode', position: { x: 900, y: 900 }, data: { label: 'Docker', iconUrl: '/logos/docker.svg', iconComponent: DiDocker, level: 'Beginner', description: 'A platform for containerizing applications for consistent deployment.' } },
    { id: 'git', type: 'skillNode', position: { x: 900, y: 1000 }, data: { label: 'Git', iconUrl: '/logos/git.svg', iconComponent: DiGit, level: 'Intermediate', description: 'A distributed version control system for tracking code changes.' } },
    { id: 'postman', type: 'skillNode', position: { x: 900, y: 1100 }, data: { label: 'Postman', iconUrl: '/logos/postman.png', iconComponent: SiPostman, level: 'Intermediate', description: 'A tool for designing, testing, and documenting APIs.' } },

    // Deployment (Databases and Platforms)
    { id: 'deployment', type: 'skillNode', position: { x: 600, y: 800 }, data: { label: 'Deployment and Databases', iconComponent: Database, description: 'Managing databases and platforms for deploying applications.' } },
    { id: 'mongodb', type: 'skillNode', position: { x: 600, y: 900 }, data: { label: 'MongoDB', iconUrl: '/logos/mongodb.svg', iconComponent: DiMongodb, level: 'Intermediate', description: 'A NoSQL database for handling unstructured data in scalable applications.' } },
    { id: 'mysql', type: 'skillNode', position: { x: 600, y: 1000 }, data: { label: 'MySQL', iconUrl: '/logos/mysql.svg', iconComponent: DiMysql, level: 'Intermediate', description: 'A relational database for structured data and SQL queries.' } },
    { id: 'redis', type: 'skillNode', position: { x: 600, y: 1100 }, data: { label: 'Redis', iconUrl: '/logos/redis.svg', iconComponent: SiRedis, level: 'Beginner', description: 'An in-memory database for caching and real-time data processing.' } },
    { id: 'vercel', type: 'skillNode', position: { x: 600, y: 1200 }, data: { label: 'Vercel', iconUrl: '/logos/vercel.png', iconComponent: SiVercel, level: 'Beginner', description: 'A platform for deploying and scaling web applications with ease.' } },
    { id: 'github', type: 'skillNode', position: { x: 600, y: 1300 }, data: { label: 'GitHub', iconUrl: '/logos/github.png', iconComponent: SiGithub, level: 'Intermediate', description: 'A platform for code hosting, collaboration, and CI/CD integration.' } },
    { id: 'convex', type: 'skillNode', position: { x: 600, y: 1400 }, data: { label: 'Convex', iconUrl: '/logos/convex.png', iconComponent: SiHuggingface, level: 'Beginner', description: 'A backend-as-a-service platform for real-time, reactive applications.' } },
  ];

  const initialEdges = [
    // Flow between sections (animated)
    { id: 'e-ideas-planning', source: 'ideas', target: 'planning', animated: true },
    { id: 'e-planning-req', source: 'planning', target: 'req-analysis', animated: true },
    { id: 'e-req-design', source: 'req-analysis', target: 'design-proto', animated: true },
    { id: 'e-design-source', source: 'design-proto', target: 'source-code', animated: true },
    { id: 'e-source-func', source: 'source-code', target: 'functional-sw', animated: true },
    { id: 'e-func-deploy', source: 'functional-sw', target: 'deployment', animated: true },
    { id: 'e-deploy-ideas', source: 'deployment', target: 'ideas', animated: true },

    // Ideas to Project Owner
    { id: 'e-ideas-po', source: 'ideas', target: 'project-owner' },

    // Planning to Languages
    { id: 'e-plan-python', source: 'planning', target: 'python' },
    { id: 'e-plan-java', source: 'planning', target: 'java' },
    { id: 'e-plan-js', source: 'planning', target: 'javascript' },
    { id: 'e-plan-ts', source: 'planning', target: 'typescript' },

    // Requirement Analysis to Frameworks
    { id: 'e-req-react', source: 'req-analysis', target: 'react' },
    { id: 'e-req-node', source: 'req-analysis', target: 'nodejs' },
    { id: 'e-req-spring', source: 'req-analysis', target: 'springboot' },
    { id: 'e-req-nextjs', source: 'req-analysis', target: 'nextjs' },

    // Design & Prototyping to Editors
    { id: 'e-design-vsc', source: 'design-proto', target: 'vscode' },
    { id: 'e-design-intel', source: 'design-proto', target: 'intellij' },
    { id: 'e-design-eclipse', source: 'design-proto', target: 'eclipse' },

    // Source Code to AI/ML and Backend
    { id: 'e-source-py', source: 'source-code', target: 'pytorch' },
    { id: 'e-source-tf', source: 'source-code', target: 'tensorflow' },
    { id: 'e-source-keras', source: 'source-code', target: 'keras' },
    { id: 'e-source-sk', source: 'source-code', target: 'sklearn' },
    { id: 'e-source-hf', source: 'source-code', target: 'huggingface' },
    { id: 'e-source-oai', source: 'source-code', target: 'openai' },
    { id: 'e-source-fastapi', source: 'source-code', target: 'fastapi' },

    // Functional Software to DevOps
    { id: 'e-func-docker', source: 'functional-sw', target: 'docker' },
    { id: 'e-func-git', source: 'functional-sw', target: 'git' },
    { id: 'e-func-postman', source: 'functional-sw', target: 'postman' },

    // Deployment to Databases and Platforms
    { id: 'e-deploy-mongo', source: 'deployment', target: 'mongodb' },
    { id: 'e-deploy-mysql', source: 'deployment', target: 'mysql' },
    { id: 'e-deploy-redis', source: 'deployment', target: 'redis' },
    { id: 'e-deploy-vercel', source: 'deployment', target: 'vercel' },
    { id: 'e-deploy-github', source: 'deployment', target: 'github' },
    { id: 'e-deploy-convex', source: 'deployment', target: 'convex' },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5" />
          Software Development Skill Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[900px] border rounded-lg overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            className="bg-background"
          >
            <Controls />
            <Background gap={12} size={1} />
          </ReactFlow>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          💡 Click on nodes to expand details. Drag to explore the skill map!
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillMap;