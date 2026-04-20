import { Reveal } from "./Reveal";

interface Group {
  label: string;
  items: { name: string; note: string; level: "core" | "working" | "exploring" }[];
}

const GROUPS: Group[] = [
  {
    label: "Languages",
    items: [
      { name: "Java", note: "Core & Advanced, OOP, Large-scale systems", level: "core" },
      { name: "JavaScript / TS", note: "ES6+, Async, Type-safe development", level: "core" },
      { name: "Python", note: "Scripting, Web APIs, AI/ML Pipelines", level: "working" },
      { name: "C#", note: "Workflow expressions, Document generation", level: "working" },
    ],
  },
  {
    label: "Backend & Web",
    items: [
      { name: "Node.js / Express", note: "Scalable APIs, Microservices", level: "core" },
      { name: "Spring Boot", note: "Enterprise Java, Security, JPA", level: "working" },
      { name: "React / Next.js", note: "Component-based UI, SSR, Hooks", level: "core" },
      { name: "FastAPI", note: "Asynchronous Python APIs", level: "working" },
    ],
  },
  {
    label: "Enterprise & CLM",
    items: [
      { name: "Salesforce CRM", note: "Admin, Dev", level: "exploring" },
      { name: "DocuSign CLM", note: "Workflow architecture, Global rollout", level: "working" },
      { name: "Business Automation", note: "Flows, Triggers, Process optimization", level: "exploring" },
      { name: "Apex", note: "Salesforce backend, Triggers, Bulkified logic", level: "exploring" },
      { name: "LWC", note: "Lightning Web Components, SF Customization", level: "exploring" },
    ],
  },
  {
    label: "Data & Infrastructure",
    items: [
      { name: "MongoDB", note: "NoSQL, Schema design, Aggregation", level: "core" },
      { name: "MySQL / PostgreSQL", note: "Relational modeling, Joins, CTEs", level: "core" },
      { name: "Redis", note: "Caching, Real-time data, Presence", level: "exploring" },
      { name: "Docker", note: "Containerization, Multi-stage builds", level: "exploring" },
      { name: "Git / GitHub", note: "CI/CD, Version control, Workflows", level: "core" },
    ],
  },
  {
    label: "AI / Machine Learning",
    items: [
      { name: "Computer Vision", note: "YOLOv8, Object detection", level: "working" },
      { name: "NLP / LLMs", note: "FinBERT, Transformers, Prompting", level: "working" },
      { name: "PyTorch / Sklearn", note: "Model training, Data analysis", level: "working" },
    ],
  },
];

const DOT = {
  core: "bg-foreground",
  working: "bg-accent",
  exploring: "bg-transparent border border-foreground",
} as const;

export function Stack() {
  return (
    <section id="stack" className="relative bg-canvas-warm py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
            <div>
              <p className="eyebrow mb-4">04 — The Stack</p>
              <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
                Tools, well <span className="display-wonk text-accent">used</span>.
              </h2>
            </div>
            <ul className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-foreground" /> Core
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" /> Working
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full border border-foreground" />{" "}
                Exploring
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 0.06}>
              <div>
                <p className="eyebrow mb-6">{g.label}</p>
                <ul className="divide-y divide-border border-y border-border">
                  {g.items.map((it) => (
                    <li
                      key={it.name}
                      className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-background/40"
                    >
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`mt-1 h-2 w-2 shrink-0 rounded-full ${DOT[it.level]}`}
                        />
                        <span className="font-display text-2xl text-foreground">
                          {it.name}
                        </span>
                      </div>
                      <span className="text-right font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                        {it.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
