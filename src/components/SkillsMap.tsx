import React, { memo, useMemo, useState } from "react";
import {
  Background,
  Controls,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import {
  Figma,
  ClipboardList,
  User,
  Code2,
  Cloud,
  Boxes,
  Wrench,
} from "lucide-react";

import {
  SiPython,
  SiCplusplus,
  SiGo,
  SiRust,
  SiPhp,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGithub,
  SiGit,
  SiGitlab,
  SiJira,
  SiTrello,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiFastapi,
  SiSpringboot,
  SiGraphql,
  SiQt,
  SiJavascript,
  SiC,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaAws } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
/* -------------------------------------------------------------------------- */
/* TYPES */
/* -------------------------------------------------------------------------- */

type LogoItem = {
  id: string;
  label: string;
  image?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type SectionNodeData = {
  title: string;
  subtitle?: string;
  items?: LogoItem[];
  cols?: number;
  minWidth?: number;
};

type MiniNodeData = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type SkillBadgeNodeData = {
  label: string;
};

/* -------------------------------------------------------------------------- */
/* STYLES */
/* -------------------------------------------------------------------------- */

const panelStyle: React.CSSProperties = {
  background: "rgba(7,10,17,0.92)",
  border: "1px solid rgba(120,160,255,0.22)",
  boxShadow:
    "0 0 0 1px rgba(80,120,255,0.06) inset, 0 0 28px rgba(17,25,40,0.45)",
  borderRadius: 8,
  color: "#f3f6ff",
};

const labelChipStyle: React.CSSProperties = {
  background: "#ffffff",
  color: "#111827",
  borderRadius: 4,
  padding: "2px 6px",
  fontSize: 10,
  fontWeight: 600,
  boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
  whiteSpace: "nowrap",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  textAlign: "center",
  color: "#eef2ff",
};

const subtleTextStyle: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "rgba(226,232,240,0.7)",
};

/* -------------------------------------------------------------------------- */
/* LOGO HELPER */
/* -------------------------------------------------------------------------- */

const LogoTile = memo(({ item }: { item: LogoItem }) => {
  const [imgError, setImgError] = useState(false);
  const Icon = item.icon || Code2;

  return (
    <div
      title={item.label}
      style={{
        width: 42,
        height: 42,
        borderRadius: 6,
        border: "1px solid rgba(148,163,184,0.16)",
        background: "rgba(2,6,23,0.86)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      {item.image && !imgError ? (
        <img
          src={item.image}
          alt={item.label}
          onError={() => setImgError(true)}
          style={{
            width: 22,
            height: 22,
            objectFit: "contain",
            display: "block",
          }}
        />
      ) : (
        <Icon className="w-5 h-5" />
      )}
    </div>
  );
});

LogoTile.displayName = "LogoTile";

/* -------------------------------------------------------------------------- */
/* CUSTOM NODES */
/* -------------------------------------------------------------------------- */

const PersonNode = memo(({ data }: NodeProps<MiniNodeData>) => {
  const Icon = data.icon || User;

  return (
    <div
      style={{
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          border: "1px solid rgba(148,163,184,0.18)",
          background: "rgba(10,14,24,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}>
        {data.label}
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </div>
  );
});

PersonNode.displayName = "PersonNode";

const MiniGroupNode = memo(({ data }: NodeProps<MiniNodeData>) => {
  const Icon = data.icon || Brain;

  return (
    <div
      style={{
        ...panelStyle,
        minWidth: 120,
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Icon className="w-5 h-5" />
      <div style={{ fontSize: 12, fontWeight: 600, textAlign: "center" }}>
        {data.label}
      </div>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
    </div>
  );
});

MiniGroupNode.displayName = "MiniGroupNode";

const SectionNode = memo(({ data }: NodeProps<SectionNodeData>) => {
  const cols = data.cols || 6;
  const minWidth = data.minWidth || 340;

  return (
    <div
      style={{
        ...panelStyle,
        minWidth,
        padding: 14,
      }}
    >
      <div style={sectionTitleStyle}>{data.title}</div>
      {data.subtitle ? (
        <div style={{ ...subtleTextStyle, textAlign: "center", marginTop: 4 }}>
          {data.subtitle}
        </div>
      ) : null}

      {data.items?.length ? (
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gap: 8,
            justifyItems: "center",
          }}
        >
          {data.items.map((item) => (
            <LogoTile key={item.id} item={item} />
          ))}
        </div>
      ) : null}

      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
    </div>
  );
});

SectionNode.displayName = "SectionNode";

const BadgeNode = memo(({ data }: NodeProps<SkillBadgeNodeData>) => {
  return (
    <div style={labelChipStyle}>
      {data.label}
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </div>
  );
});

BadgeNode.displayName = "BadgeNode";

const nodeTypes = {
  person: PersonNode,
  mini: MiniGroupNode,
  section: SectionNode,
  badge: BadgeNode,
};

/* -------------------------------------------------------------------------- */
/* SKILL DATA */
/* -------------------------------------------------------------------------- */

const planningItems: LogoItem[] = [
  { id: "github", label: "GitHub", icon: SiGithub, image: "/logos/github.png" },
  { id: "gitlab", label: "GitLab", icon: SiGitlab, image: "/logos/gitlab.png" },
  { id: "trello", label: "Trello", icon: SiTrello, image: "/logos/trello.png" },
  { id: "jira", label: "Jira", icon: SiJira, image: "/logos/jira.png" },
];

const requirementItems: LogoItem[] = [
  { id: "miro", label: "Miro", icon: Boxes, image: "/logos/miro.png" },
  { id: "aws", label: "AWS", icon: FaAws, image: "/logos/aws.svg" },
];

const designItems: LogoItem[] = [
  { id: "figma", label: "Figma", icon: SiFigma, image: "/logos/figma.svg" },
  { id: "canva", label: "Canva", icon: Figma, image: "/logos/canva.png" },
];

const testingItems: LogoItem[] = [
  { id: "jest", label: "Jest", image: "/logos/jest.png", icon: Wrench },
  { id: "playwright", label: "Playwright", image: "/logos/playwright.svg", icon: Wrench },
  { id: "selenium", label: "Selenium", image: "/logos/selenium.svg", icon: Wrench },
  { id: "postman", label: "Postman", image: "/logos/postman.png", icon: SiPostman },
];

const skillMatrixItems: LogoItem[] = [
  { id: "python", label: "Python", image: "/logos/python.svg", icon: SiPython },
  { id: "cpp", label: "C++", image: "/logos/cpp.svg", icon: SiCplusplus },
  { id: "go", label: "Go", image: "/logos/go.svg", icon: SiGo },
  { id: "java", label: "Java", image: "/logos/java.svg", icon: FaJava },
  { id: "rust", label: "Rust", image: "/logos/rust.svg", icon: SiRust },
  { id: "php", label: "PHP", image: "/logos/php.svg", icon: SiPhp },

  { id: "mongodb", label: "MongoDB", image: "/logos/mongodb.svg", icon: SiMongodb },
  { id: "express", label: "Express", image: "/logos/express-js.png", icon: SiExpress },
  { id: "react", label: "React", image: "/logos/react.svg", icon: SiReact },
  { id: "nodejs", label: "Node.js", image: "/logos/nodejs.svg", icon: SiNodedotjs },
  { id: "nextjs", label: "Next.js", image: "/logos/nextjs.png", icon: SiNextdotjs },
  { id: "tailwind", label: "Tailwind", image: "/logos/tailwind.svg", icon: SiTailwindcss },

  { id: "typescript", label: "TypeScript", image: "/logos/typescript.svg", icon: SiTypescript },
  { id: "postgres", label: "PostgreSQL", image: "/logos/postgresql.svg", icon: SiPostgresql },
  { id: "mysql", label: "MySQL", image: "/logos/mysql.svg", icon: SiMysql },
  { id: "redis", label: "Redis", image: "/logos/redis.svg", icon: SiRedis },
  { id: "spring", label: "Spring Boot", image: "/logos/spring.svg", icon: SiSpringboot },
  { id: "fastapi", label: "FastAPI", image: "/logos/fastapi.svg", icon: SiFastapi },

  { id: "graphql", label: "GraphQL", image: "/logos/graphql.svg", icon: SiGraphql },
  { id: "docker", label: "Docker", image: "/logos/docker.svg", icon: SiDocker },
  { id: "kubernetes", label: "Kubernetes", image: "/logos/kubernetes.svg", icon: SiKubernetes },
  { id: "git", label: "Git", image: "/logos/git.svg", icon: SiGit },
  { id: "github2", label: "GitHub", image: "/logos/github.png", icon: SiGithub },
  { id: "aws2", label: "AWS", image: "/logos/aws.svg", icon: FaAws },

  { id: "tensorflow", label: "TensorFlow", image: "/logos/tensorflow.svg", icon: SiTensorflow },
  { id: "pytorch", label: "PyTorch", image: "/logos/pytorch.svg", icon: SiPytorch },
  { id: "opencv", label: "OpenCV", image: "/logos/opencv.svg", icon: SiOpencv },
  { id: "firebase", label: "Firebase", image: "/logos/firebase.svg", icon: SiFirebase },
  { id: "vercel", label: "Vercel", image: "/logos/vercel.png", icon: SiVercel },
  { id: "qt", label: "Qt", image: "/logos/qt.svg", icon: SiQt },

  { id: "js", label: "JavaScript", image: "/logos/javascript.svg", icon: SiJavascript },
  { id: "csharp", label: "C#", image: "/logos/csharp.png", icon: TbBrandCSharp },
  { id: "c", label: "C", image: "/logos/c.svg", icon: SiC },
  { id: "salesforce", label: "Salesforce", image: "/logos/salesforce.jpg", icon: Cloud },
  { id: "docusign", label: "DocuSign", image: "/logos/docusign.svg", icon: ClipboardList },
  { id: "codeigniter", label: "CodeIgniter", image: "/logos/codeigniter.svg", icon: DiCodeigniter },
];

const deploymentItems: LogoItem[] = [
  { id: "aws-deploy", label: "AWS", image: "/logos/aws.svg", icon:FaAws },
  { id: "gcp", label: "GCP", image: "/logos/gcp.svg", icon: Cloud },
  { id: "digitalocean", label: "DigitalOcean", image: "/logos/digitalocean.svg", icon: Cloud },
  { id: "gitlab-ci", label: "GitLab CI", image: "/logos/gitlab.png", icon: SiGitlab },
  { id: "vercel2", label: "Vercel", image: "/logos/vercel.png", icon: SiVercel },
  { id: "k8s", label: "Kubernetes", image: "/logos/kubernetes.svg", icon: SiKubernetes },
  { id: "postman2", label: "Postman", image: "/logos/postman.png", icon: SiPostman },
  { id: "docker2", label: "Docker", image: "/logos/docker.svg", icon: SiDocker },
];

/* -------------------------------------------------------------------------- */
/* GRAPH */
/* -------------------------------------------------------------------------- */

function createNodesAndEdges(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [
    {
      id: "owner",
      type: "person",
      position: { x: 20, y: 210 },
      data: { label: "Project\nOwner", icon: User },
    },

    {
      id: "planning",
      type: "section",
      position: { x: 180, y: 50 },
      data: {
        title: "Planning",
        items: planningItems,
        cols: 4,
        minWidth: 250,
      },
    },

    {
      id: "req",
      type: "section",
      position: { x: 560, y: 130 },
      data: {
        title: "Requirement Analysis",
        items: requirementItems,
        cols: 2,
        minWidth: 180,
      },
    },

    {
      id: "design",
      type: "section",
      position: { x: 910, y: 50 },
      data: {
        title: "Design & Prototyping",
        items: designItems,
        cols: 2,
        minWidth: 200,
      },
    },

    {
      id: "skills",
      type: "section",
      position: { x: 720, y: 250 },
      data: {
        title: "Skill Matrix",
        subtitle: "Core Technologies",
        items: skillMatrixItems,
        cols: 6,
        minWidth: 520,
      },
    },

    {
      id: "testing",
      type: "section",
      position: { x: 470, y: 520 },
      data: {
        title: "Testing / QA",
        items: testingItems,
        cols: 2,
        minWidth: 180,
      },
    },

    {
      id: "deployment",
      type: "section",
      position: { x: 150, y: 430 },
      data: {
        title: "Deployment",
        items: deploymentItems,
        cols: 4,
        minWidth: 300,
      },
    },

    {
      id: "ideas-label",
      type: "badge",
      position: { x: 135, y: 95 },
      data: { label: "Ideas" },
    },
    {
      id: "project-plan-label",
      type: "badge",
      position: { x: 455, y: 116 },
      data: { label: "Project Plan" },
    },
    {
      id: "srs-label",
      type: "badge",
      position: { x: 838, y: 98 },
      data: { label: "SRS" },
    },
    {
      id: "dds-label",
      type: "badge",
      position: { x: 1108, y: 138 },
      data: { label: "DDS" },
    },
    {
      id: "source-code-label",
      type: "badge",
      position: { x: 670, y: 470 },
      data: { label: "Source Code" },
    },
    {
      id: "functional-label",
      type: "badge",
      position: { x: 370, y: 474 },
      data: { label: "Functional Software" },
    },
  ];

  const edgeBase = {
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 16,
      height: 16,
      color: "rgba(173, 197, 255, 0.85)",
    },
    style: {
      stroke: "rgba(173,197,255,0.45)",
      strokeWidth: 1.35,
    },
  } satisfies Partial<Edge>;

  const edges: Edge[] = [
    { id: "e-owner-planning", source: "owner", target: "planning", ...edgeBase },
    { id: "e-planning-req", source: "planning", target: "req", ...edgeBase },
    { id: "e-req-design", source: "req", target: "design", ...edgeBase },
    { id: "e-design-skills", source: "design", target: "skills", ...edgeBase },
    { id: "e-skills-testing", source: "skills", target: "testing", ...edgeBase },
    { id: "e-testing-deployment", source: "testing", target: "deployment", ...edgeBase },
    { id: "e-deployment-skills", source: "deployment", target: "skills", ...edgeBase },

    {
      id: "e-ideas-label",
      source: "owner",
      target: "ideas-label",
      ...edgeBase,
      style: { stroke: "transparent" },
      markerEnd: undefined,
    },
    {
      id: "e-project-plan-label",
      source: "planning",
      target: "project-plan-label",
      ...edgeBase,
      style: { stroke: "transparent" },
      markerEnd: undefined,
    },
    {
      id: "e-srs-label",
      source: "req",
      target: "srs-label",
      ...edgeBase,
      style: { stroke: "transparent" },
      markerEnd: undefined,
    },
    {
      id: "e-dds-label",
      source: "design",
      target: "dds-label",
      ...edgeBase,
      style: { stroke: "transparent" },
      markerEnd: undefined,
    },
    {
      id: "e-source-label",
      source: "testing",
      target: "source-code-label",
      ...edgeBase,
      style: { stroke: "transparent" },
      markerEnd: undefined,
    },
    {
      id: "e-functional-label",
      source: "deployment",
      target: "functional-label",
      ...edgeBase,
      style: { stroke: "transparent" },
      markerEnd: undefined,
    },
  ];

  return { nodes, edges };
}

/* -------------------------------------------------------------------------- */
/* MAIN */
/* -------------------------------------------------------------------------- */

export default function SkillsMap() {
  const { nodes, edges } = useMemo(() => createNodesAndEdges(), []);

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        height: 760,
        background:
          "radial-gradient(circle at top, rgba(15,23,42,0.8), rgba(2,6,23,1) 45%)",
        border: "1px solid rgba(148,163,184,0.12)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag
        zoomOnScroll
        zoomOnPinch
        minZoom={0.55}
        maxZoom={1.4}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: false,
        }}
      >
        <Background
          variant="dots"
          gap={16}
          size={1}
          color="rgba(148,163,184,0.22)"
        />
        <MiniMap
          pannable
          zoomable
          nodeStrokeWidth={2}
          style={{
            background: "rgba(2,6,23,0.95)",
            border: "1px solid rgba(148,163,184,0.14)",
          }}
        />
        <Controls
          position="bottom-right"
          showInteractive={false}
          style={{
            background: "rgba(2,6,23,0.9)",
            border: "1px solid rgba(148,163,184,0.12)",
          }}
        />
      </ReactFlow>
    </div>
  );
}