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
  SiNextdotjs, SiFastapi
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
    { id: 'ideas', type: 'skillNode', position: { x: 50, y: 50 }, data: { label: 'Ideas', iconComponent: MessageSquare, description: 'Project initiation' } },
    { id: 'project-owner', type: 'skillNode', position: { x: 50, y: 200 }, data: { label: 'Project Owner', iconComponent: Brain, level: 'Stakeholder' } },

    // Planning (Languages)
    { id: 'planning', type: 'skillNode', position: { x: 300, y: 50 }, data: { label: 'Languages', iconComponent: Code, description: 'Project planning tools' } },
    { id: 'python', type: 'skillNode', position: { x: 300, y: 200 }, data: { label: 'Python', iconUrl: '/logos/python.svg', iconComponent: DiPython, level: 'Expert' } },
    { id: 'java', type: 'skillNode', position: { x: 300, y: 350 }, data: { label: 'Java', iconUrl: '/logos/java.svg', iconComponent: DiJava, level: 'Expert' } },
    { id: 'javascript', type: 'skillNode', position: { x: 300, y: 500 }, data: { label: 'JavaScript', iconUrl: '/logos/javascript.svg', iconComponent: DiJavascript, level: 'Expert' } },
    { id: 'typescript', type: 'skillNode', position: { x: 300, y: 650 }, data: { label: 'TypeScript', iconUrl: '/logos/typescript.svg', iconComponent: SiTypescript, level: 'Intermediate' } },

    // Requirement Analysis (Frameworks)
    { id: 'req-analysis', type: 'skillNode', position: { x: 600, y: 50 }, data: { label: 'Web Frameworks', iconComponent: Server, description: 'Analysis frameworks' } },
    { id: 'react', type: 'skillNode', position: { x: 600, y: 170 }, data: { label: 'React', iconUrl: '/logos/react.svg', iconComponent: DiReact, level: 'Intermediate' } },
    { id: 'nodejs', type: 'skillNode', position: { x: 600, y: 290 }, data: { label: 'Node.js', iconUrl: '/logos/nodejs.svg', iconComponent: DiNodejs, level: 'Intermediate' } },
    { id: 'springboot', type: 'skillNode', position: { x: 600, y: 410 }, data: { label: 'Spring Boot', iconUrl: '/logos/spring.svg', iconComponent: SiSpringboot, level: 'Beginner' } },
    { id: 'nextjs', type: 'skillNode', position: { x: 600, y: 530 }, data: { label: 'Next.js', iconUrl: '/logos/nextjs.png', iconComponent: SiNextdotjs, level: 'Intermediate' } },

    // Design & Prototyping (Editors)
    { id: 'design-proto', type: 'skillNode', position: { x: 900, y: 50 }, data: { label: 'Code Editors', iconComponent: MonitorSmartphone, description: 'Design tools' } },
    { id: 'vscode', type: 'skillNode', position: { x: 900, y: 200 }, data: { label: 'VS Code', iconUrl: '/logos/vscode.svg', iconComponent: VscAdd, level: 'Expert' } },
    { id: 'intellij', type: 'skillNode', position: { x: 900, y: 350 }, data: { label: 'IntelliJ IDEA', iconUrl: '/logos/Intellij.png', iconComponent: SiIntellijidea, level: 'Advanced' } },
    { id: 'eclipse', type: 'skillNode', position: { x: 900, y: 500 }, data: { label: 'Eclipse', iconUrl: '/logos/eclipse.svg', iconComponent: DiEclipse, level: 'Intermediate' } },

    // Source Code (AI/ML and Backend)
    { id: 'source-code', type: 'skillNode', position: { x: 1200, y: 50 }, data: { label: 'AI/ML Frameworks', iconComponent: FaRobot, description: 'AI/ML and Backend tools' } },
    { id: 'pytorch', type: 'skillNode', position: { x: 1200, y: 200 }, data: { label: 'PyTorch', iconUrl: '/logos/pytorch.svg', iconComponent: SiPytorch, level: 'Intermediate' } },
    { id: 'tensorflow', type: 'skillNode', position: { x: 1200, y: 300 }, data: { label: 'TensorFlow', iconUrl: '/logos/tensorflow.svg', iconComponent: SiTensorflow, level: 'Intermediate' } },
    { id: 'keras', type: 'skillNode', position: { x: 1200, y: 400 }, data: { label: 'Keras', iconUrl: '/logos/keras.png', iconComponent: SiKeras, level: 'Intermediate' } },
    { id: 'sklearn', type: 'skillNode', position: { x: 1200, y: 500 }, data: { label: 'Scikit-learn', iconUrl: '/logos/ScikitLearn.png', iconComponent: SiScikitlearn, level: 'Expert' } },
    { id: 'huggingface', type: 'skillNode', position: { x: 1200, y: 600 }, data: { label: 'Hugging Face', iconUrl: '/logos/huggingface.png', iconComponent: SiHuggingface, level: 'Intermediate' } },
    { id: 'openai', type: 'skillNode', position: { x: 1200, y: 700 }, data: { label: 'OpenAI', iconComponent: SiOpenai, level: 'Intermediate' } },
    { id: 'fastapi', type: 'skillNode', position: { x: 1200, y: 800 }, data: { label: 'FastAPI', iconUrl: '/logos/fastapi.svg', iconComponent: SiFastapi, level: 'Beginner' } },

    // Functional Software (DevOps)
    { id: 'functional-sw', type: 'skillNode', position: { x: 900, y: 700 }, data: { label: 'Functional Software', iconComponent: GitBranch, description: 'Testing tools' } },
    { id: 'docker', type: 'skillNode', position: { x: 900, y: 800 }, data: { label: 'Docker', iconUrl: '/logos/docker.svg', iconComponent: DiDocker, level: 'Beginner' } },
    { id: 'git', type: 'skillNode', position: { x: 900, y: 900 }, data: { label: 'Git', iconUrl: '/logos/git.svg', iconComponent: DiGit, level: 'Expert' } },
    { id: 'postman', type: 'skillNode', position: { x: 900, y: 1000 }, data: { label: 'Postman', iconUrl: '/logos/postman.png', iconComponent: SiPostman, level: 'Intermediate' } },

    // Deployment (Databases and Platforms)
    { id: 'deployment', type: 'skillNode', position: { x: 600, y: 700 }, data: { label: 'Deployment and Databases', iconComponent: Database, description: 'Deployment platforms' } },
    { id: 'mongodb', type: 'skillNode', position: { x: 600, y: 800 }, data: { label: 'MongoDB', iconUrl: '/logos/mongodb.svg', iconComponent: DiMongodb, level: 'Intermediate' } },
    { id: 'mysql', type: 'skillNode', position: { x: 600, y: 900 }, data: { label: 'MySQL', iconUrl: '/logos/mysql.svg', iconComponent: DiMysql, level: 'Intermediate' } },
    { id: 'redis', type: 'skillNode', position: { x: 600, y: 1000 }, data: { label: 'Redis', iconUrl: '/logos/redis.svg', iconComponent: SiRedis, level: 'Beginner' } },
    { id: 'vercel', type: 'skillNode', position: { x: 600, y: 1100 }, data: { label: 'Vercel', iconUrl: '/logos/vercel.png', iconComponent: SiVercel, level: 'Intermediate' } },
    { id: 'github', type: 'skillNode', position: { x: 600, y: 1200 }, data: { label: 'GitHub', iconUrl: '/logos/github.png', iconComponent: SiGithub, level: 'Intermediate' } },
    { id: 'convex', type: 'skillNode', position: { x: 600, y: 1300 }, data: { label: 'Convex', iconUrl: '/logos/convex.png', iconComponent: SiHuggingface, level: 'Beginner' } },
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