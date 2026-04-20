import { Reveal } from "./Reveal";

const FACTS = [
  { k: "Based in", v: "Kolkata, India" },
  { k: "Currently", v: "CloudKaptan · Software Engineer Trainee" },
  { k: "Focus", v: "Backend · Microservices · LLMs " },
  { k: "Available", v: "Open to full-time roles" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <p className="eyebrow mb-12">02 — About</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                I build the layers people{" "}
                <span className="display-wonk text-accent">don't see</span> —
                the APIs, queues, and pipelines that let the surface feel
                effortless.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 space-y-6 text-lg leading-relaxed text-ink-soft md:text-xl">
                <p>
                  I'm a software engineer trainee at{" "}
                  <span className="text-foreground">CloudKaptan</span>, with a
                  bias toward backend systems — the kind of work where
                  correctness, latency, and observability matter more than
                  pixels.
                </p>
                <p>
                  My playground sits at the intersection of distributed
                  backends and applied AI: gRPC microservices, message brokers,
                  RAG pipelines and the quiet plumbing that turns a clever
                  prototype into something operable in production.
                </p>
                <p>
                  When I'm not shipping, I'm writing notes on system design,
                  grinding low-level design problems in Java, and exploring
                  Spring Boot and the AWS toolbelt.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <dl className="divide-y divide-border border-y border-border">
                {FACTS.map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-[1fr_2fr] items-baseline gap-6 py-5"
                  >
                    <dt className="eyebrow">{f.k}</dt>
                    <dd className="font-display text-xl text-foreground">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.35}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground link-underline"
              >
                Let's collaborate <span className="text-accent">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
