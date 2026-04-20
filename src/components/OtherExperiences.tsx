import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import logoOSS from "@/assets/logos/oss.png";
import logoWhisper from "@/assets/logos/whisper.png";
import logoAimail from "@/assets/logos/aimail.png";
import logoLogging from "@/assets/logos/logging.png";
import logoMentor from "@/assets/logos/mentor.png";
import logoHack from "@/assets/logos/hack.png";

interface Item {
  kind: string;
  title: string;
  org: string;
  when: string;
  detail: string;
  highlight?: string;
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    kind: "AI / Systems",
    title: "WebMeAnything — RAG Document Assistant",
    org: "Self-initiated · Groq · FAISS · Streamlit",
    when: "2024",
    detail:
      "Engineered a RAG-based document intelligence system improving retrieval efficiency by ~85–90% using FAISS vector indexing and Groq’s LPU™ inference engine for ultra-fast response generation. Implemented semantic search pipelines and contextual answer synthesis with an interactive frontend.",
    highlight: "85–90% Boost · RAG · Groq · FAISS",
    logo: logoWhisper,
    fallback: "RAG",
  },
  {
    kind: "Full-Stack",
    title: "GradgyHub — Electronics E-Commerce",
    org: "Self-initiated · React · Node.js · Express",
    when: "2024",
    detail:
      "Engineered a scalable electronics marketplace with Redis caching for low-latency product retrieval, JWT-secured authentication, and Stripe-powered checkout. Integrated Cloudinary for media pipelines and built a reactive UI with Zustand and Framer Motion.",
    highlight: "Redis · Stripe · JWT · Cloudinary",
    logo: logoLogging,
    fallback: "SHOP",
  },
  {
    kind: "Backend",
    title: "Advanced Authentication System",
    org: "Self-initiated · Node.js · Express · MongoDB",
    when: "2024",
    detail:
      "Built a secure, token-driven authentication backend supporting signup, login, logout, email verification, and password reset. Implemented HTTP-only JWT cookies and Nodemailer-based token workflows for production-grade session security.",
    highlight: "Auth Flows · JWT · Email Verification",
    logo: logoHack,
    fallback: "AUTH",
  },
  {
    kind: "AI / Applied",
    title: "Lingua-AI — Personalized English Tutor",
    org: "Self-initiated · Llama 3.1 · Deepgram",
    when: "2024",
    detail:
      "Developed a conversational AI tutor enabling real-time speech interaction using LLM-driven responses and speech-to-text integration. Designed adaptive feedback loops for pronunciation, fluency, and contextual learning.",
    highlight: "Conversational AI · STT · LLM",
    logo: logoWhisper,
    fallback: "AI",
  },
  {
    kind: "Technical Writing",
    title: "Distributed Logging with Winston",
    org: "Node.js · Observability Systems",
    when: "2025",
    detail:
      "Published a comprehensive guide on building scalable logging systems using Winston, including structured logging, multi-transport pipelines, error stack tracing, and performance profiling.",
    highlight: "Logging · Observability · Systems",
    logo: logoMentor,
    fallback: "BLOG",
  },
  {
    kind: "Technical Writing",
    title: "Demystifying gRPC for Microservices",
    org: "Distributed Systems · APIs",
    when: "2025",
    detail:
      "Authored a deep-dive on gRPC covering Protocol Buffers, streaming RPC patterns, HTTP/2 internals, and API Gateway integration for microservices communication.",
    highlight: "gRPC · HTTP/2 · Microservices",
    logo: logoMentor,
    fallback: "BLOG",
  },
];

export function OtherExperiences() {
  return (
    <section id="other" className="relative py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-16 border-b border-border pb-10">
            <p className="eyebrow mb-4">07 — Other Experiences</p>
            <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Side quests &amp;{" "}
              <span className="display-wonk text-accent">contributions</span>.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Open-source work, side projects, hackathons and the occasional deep
              dive — the stuff that doesn't fit on a résumé but actually shaped the
              engineer I am.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06}>
              <article className="group relative flex h-full flex-col gap-5 bg-background p-8 transition-colors duration-500 hover:bg-canvas-warm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {it.kind}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    {it.when}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <EntityLogo
                    src={it.logo}
                    alt={`${it.title} logo`}
                    fallback={it.fallback}
                    size="sm"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                      {it.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                      {it.org}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                  {it.detail}
                </p>

                {it.highlight && (
                  <p className="mt-auto border-t border-border pt-4 font-display text-sm italic text-foreground">
                    → {it.highlight}
                  </p>
                )}

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
