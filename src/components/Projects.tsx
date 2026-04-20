import { Reveal } from "./Reveal";
import whisperArt from "@/assets/proj-whisper.jpg";
import emailArt from "@/assets/proj-email.jpg";
import microservicesArt from "@/assets/proj-microservices.jpg";
import fileShareArt from "@/assets/proj-fileshare.jpg";

interface Project {
  no: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image: string;
  year: string;
}

const PROJECTS: Project[] = [
  {
    no: "01",
    title: "Whispr",
    tagline: "Real-time chat, microservice-native",
    description: "A chat platform built on Node.js microservices with RabbitMQ for async messaging, Redis for presence and caching, Mongo for persistence, and an AWS-friendly deploy story.",
    tags: ["Microservices", "RabbitMQ", "Redis", "MongoDB", "AWS"],
    github: "https://github.com/riyal-rj/whisper",
    image: whisperArt,
    year: "2025",
  },
  {
    no: "02",
    title: "Email Generator",
    tagline: "AI auto-replies for Gmail, in-line",
    description: "Spring Boot service backed by the Gemini API, paired with a React + ShadCN UI and a Chrome Extension that injects context-aware reply suggestions directly into Gmail.",
    tags: ["Spring Boot", "Gemini API", "React", "Chrome Ext"],
    github: "https://github.com/riyal-rj/email-generator",
    image: emailArt,
    year: "2025",
  },
  {
    no: "03",
    title: "Stokis AI",
    tagline: "Sentiment-aware hybrid forecasting for modern investors",
    description: "A full-stack predictive engine using CNN-BiLSTM and FinBERT to forecast stock trends with 93%+ accuracy by blending technical indicators with real-time market sentiment.",
    tags: ["Next.js", "FastAPI", "CNN-BiLSTM", "FinBERT", "MongoDB", "CrewAI"],
    github: "https://github.com/riyal-rj/Stock-Price-Prediction-and-Forecasting",
    image: microservicesArt,
    year: "2024 - 2025",
  },
  {
    no: "04",
    title: "TriNayan",
    tagline: "AI-powered currency recognition for the visually impaired",
    description: "An accessibility-focused system using YOLOv8 and Vision Transformers to provide real-time currency detection with audio feedback, achieving 95%+ accuracy for the RBI HaRBInger-2024 hackathon.",
    tags: ["YOLOv8", "Vision Transformers", "PyTorch", "OpenCV", "Streamlit", "Python"],
    github: "https://github.com/riyal-rj/identifier",
    image: fileShareArt,
    year: "2024",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
            <div>
              <p className="eyebrow mb-4">03 — Selected Work</p>
              <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
                A handful of <span className="display-wonk text-accent">things</span> I built.
              </h2>
            </div>
            <a
              href="https://github.com/riyal-rj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-foreground link-underline"
            >
              All repositories ↗
            </a>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.05}>
              <article
                className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-zoom relative col-span-1 block overflow-hidden rounded-sm border border-border bg-canvas-warm lg:col-span-7 [direction:ltr]"
                  data-cursor="hover"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} cover`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 backdrop-blur-sm">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                      {p.no} / {p.year}
                    </span>
                  </div>
                </a>

                <div className="col-span-1 lg:col-span-5 [direction:ltr]">
                  <p className="eyebrow mb-4">{p.tagline}</p>
                  <h3 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                    {p.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-6">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-foreground link-underline"
                    >
                      Source ↗
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-widest text-accent link-underline"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
