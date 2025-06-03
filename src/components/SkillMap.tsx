
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

// Initial nodes data
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'skillNode',
    position: { x: 250, y: 0 },
    data: {
      label: 'Frontend',
      icon: Code,
      level: 'Expert',
      description: 'React, TypeScript, Next.js, Tailwind CSS'
    }
  },
  {
    id: '2',
    type: 'skillNode',
    position: { x: 100, y: 150 },
    data: {
      label: 'Backend',
      icon: Server,
      level: 'Advanced',
      description: 'Node.js, Python, API design'
    }
  },
  {
    id: '3',
    type: 'skillNode',
    position: { x: 400, y: 150 },
    data: {
      label: 'Database',
      icon: Database,
      level: 'Intermediate',
      description: 'PostgreSQL, MongoDB, Redis'
    }
  },
  {
    id: '4',
    type: 'skillNode',
    position: { x: 250, y: 300 },
    data: {
      label: 'DevOps',
      icon: GitBranch,
      level: 'Intermediate',
      description: 'Docker, CI/CD, AWS'
    }
  }
];

// Initial edges data
const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#ef4444' }
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    animated: true,
    style: { stroke: '#ef4444' }
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    style: { stroke: '#ef4444' }
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    style: { stroke: '#ef4444' }
  }
];

const SkillMap = () => {
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
