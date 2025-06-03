import React, { useState, useCallback, useMemo } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, GitBranch, Brain } from "lucide-react";

// Custom node component
const SkillNode = ({ data }: { data: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = data.icon;

  return (
    <div className="skill-node bg-card border border-border rounded-lg p-3 shadow-md min-w-[120px]">
      <Handle type="target" position={Position.Top} />
      <div 
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <IconComponent className="w-6 h-6 mb-2 text-primary" />
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
      
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const nodeTypes = {
  skillNode: SkillNode,
};

const SkillMap = () => {
  const initialNodes: Node[] = [
    {
      id: 'root',
      type: 'skillNode',
      position: { x: 400, y: 50 },
      data: { 
        label: 'My Skill Graph', 
        icon: Brain,
        level: 'Overview'
      },
    },
    // Languages
    {
      id: 'languages',
      type: 'skillNode',
      position: { x: 100, y: 200 },
      data: { 
        label: 'Languages', 
        icon: Code,
        description: 'Programming languages I work with'
      },
    },
    {
      id: 'python',
      type: 'skillNode',
      position: { x: 50, y: 350 },
      data: { 
        label: 'Python', 
        icon: Code,
        level: 'Expert',
        description: 'Backend dev, ML, automation'
      },
    },
    {
      id:"java",
      type: 'skillNode',
      position: { x: 100, y: 350 },
      data: { 
        label: 'Java', 
        icon: Code,
        level: 'Expert',
        description: 'Object-oriented programming language'
    },},
    {
      id: 'javascript',
      type: 'skillNode',
      position: { x: 150, y: 350 },
      data: { 
        label: 'JavaScript', 
        icon: Code,
        level: 'Expert',
        description: 'Frontend & backend development'
      },
    },
    // Languages
    // Frameworks
    {
      id: 'frameworks',
      type: 'skillNode',
      position: { x: 400, y: 200 },
      data: { 
        label: 'Frameworks', 
        icon: Server,
        description: 'Web frameworks and libraries'
      },
    },
    {
      id: 'react',
      type: 'skillNode',
      position: { x: 300, y: 350 },
      data: { 
        label: 'React', 
        icon: Server,
        level: 'Intermediate',
        description: 'UI library for building interfaces'
      },
    },
    {
      id: 'nodejs',
      type: 'skillNode',
      position: { x: 400, y: 350 },
      data: { 
        label: 'Node.js', 
        icon: Server,
        level: 'Intermediate',
        description: 'Server-side JavaScript runtime'
      },
    },
    {
      id: 'springboot',
      type: 'skillNode',
      position: { x: 500, y: 350 },
      data: { 
        label: 'Spring Boot', 
        icon: Server,
        level: 'Beginner',
        description: 'Modern Python web framework'
      },
    },
    // Databases
    {
      id: 'databases',
      type: 'skillNode',
      position: { x: 700, y: 200 },
      data: { 
        label: 'Databases', 
        icon: Database,
        description: 'Data storage solutions'
      },
    },
    {
      id: 'postgresql',
      type: 'skillNode',
      position: { x: 650, y: 350 },
      data: { 
        label: 'PostgreSQL', 
        icon: Database,
        level: 'Beginner',
        description: 'Relational database'
      },
    },
    {
      id: 'mongodb',
      type: 'skillNode',
      position: { x: 750, y: 350 },
      data: { 
        label: 'MongoDB', 
        icon: Database,
        level: 'Intermediate',
        description: 'NoSQL document database'
      },
    },
    // DevOps
    {
      id: 'devops',
      type: 'skillNode',
      position: { x: 250, y: 500 },
      data: { 
        label: 'DevOps', 
        icon: GitBranch,
        description: 'Development & deployment tools'
      },
    },
    {
      id: 'docker',
      type: 'skillNode',
      position: { x: 200, y: 650 },
      data: { 
        label: 'Docker', 
        icon: GitBranch,
        level: 'Advanced',
        description: 'Containerization platform'
      },
    },
    {
      id: 'git',
      type: 'skillNode',
      position: { x: 300, y: 650 },
      data: { 
        label: 'Git', 
        icon: GitBranch,
        level: 'Expert',
        description: 'Version control system'
      },
    },
    // AI/ML
    {
      id: 'aiml',
      type: 'skillNode',
      position: { x: 550, y: 500 },
      data: { 
        label: 'AI/ML', 
        icon: Brain,
        description: 'Artificial intelligence & machine learning'
      },
    },
    {
      id: 'pytorch',
      type: 'skillNode',
      position: { x: 500, y: 650 },
      data: { 
        label: 'PyTorch', 
        icon: Brain,
        level: 'Intermediate',
        description: 'Deep learning framework'
      },
    },
    {
      id: 'tensorflow',
      type: 'skillNode',
      position: { x: 600, y: 550 },
      data: { 
        label: 'TensorFlow', 
        icon: Brain,
        level: 'Intermediate',
        description: 'Machine learning framework'
      },
    },
    {
      id: 'transformers',
      type: 'skillNode',
      position: { x: 600, y: 650 },
      data: { 
        label: 'Transformers', 
        icon: Brain,
        level: 'Intermediate',
        description: 'NLP model architecture'
      },
    },
  ];

  const initialEdges: Edge[] = [
    { id: 'e1', source: 'root', target: 'languages', animated: true },
    { id: 'e2', source: 'root', target: 'frameworks', animated: true },
    { id: 'e3', source: 'root', target: 'databases', animated: true },
    { id: 'e4', source: 'languages', target: 'python' },
    { id: 'e5', source: 'languages', target: 'javascript' },
    { id: 'e6', source: 'languages', target: 'java' },
    { id: 'e7', source: 'frameworks', target: 'react' },
    { id: 'e8', source: 'frameworks', target: 'nodejs' },
    { id: 'e9', source: 'frameworks', target: 'springboot' },
    { id: 'e10', source: 'databases', target: 'postgresql' },
    { id: 'e11', source: 'databases', target: 'mongodb' },
    { id: 'e12', source: 'root', target: 'devops', animated: true },
    { id: 'e13', source: 'root', target: 'aiml', animated: true },
    { id: 'e14', source: 'devops', target: 'docker' },
    { id: 'e15', source: 'devops', target: 'git' },
    { id: 'e16', source: 'aiml', target: 'pytorch' },
    { id: 'e17', source: 'aiml', target: 'transformers' },
    { id: 'e18', source: 'aiml', target: 'tensorflow' },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5" />
          Interactive Skill Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] border rounded-lg overflow-hidden">
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
            <MiniMap />
            <Background gap={12} size={1} />
          </ReactFlow>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          💡 Click on nodes to expand details. Drag to explore the skill graph!
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillMap;