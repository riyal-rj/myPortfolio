import { motion } from "framer-motion";
import heroArt from "@/assets/hero-art.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="editorial">
        {/* Top status bar — reinterpretation of Neelakshi's "currently at" idea */}
        <div className="mb-12 flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently — Software Engineer Trainee @ CloudKaptan
          </p>
          <p className="eyebrow">Kolkata, IN · Open to roles</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Headline */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow mb-6"
            >
              <span className="text-accent">●</span>&nbsp;&nbsp;Portfolio / 2026
            </motion.p>

            <h1 className="font-display text-[14vw] leading-[0.88] tracking-[-0.04em] text-foreground sm:text-[11vw] lg:text-[9.2vw]">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Backend, with
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                a taste for{" "}
                <span className="display-wonk text-accent">intelligence</span>.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <p className="eyebrow whitespace-nowrap">↳ The intro</p>
              <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
                I'm <span className="text-foreground">Ritankar Jana</span> — a
                software engineer building robust backend systems and tinkering
                with LLMs, microservices, and the unglamorous parts that make
                products feel effortless. Currently shipping at CloudKaptan,
                always learning out loud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Hero artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-4"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-canvas-warm">
              <img
                src={heroArt}
                alt="Editorial portrait composition"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-background mix-blend-difference">
                <span>RJ — 01</span>
                <span>SS / 26</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-24 border-y border-border py-6">
        <div className="marquee">
          <div className="marquee-track font-display text-4xl text-foreground sm:text-5xl md:text-6xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-12 pr-12">
                <span>Backend Engineering</span>
                <span className="text-accent">✦</span>
                <span className="display-wonk italic">Distributed Systems</span>
                <span className="text-accent">✦</span>
                <span>LLM Pipelines</span>
                <span className="text-accent">✦</span>
                <span className="display-wonk italic">Cloud Native</span>
                <span className="text-accent">✦</span>
                <span>System Design</span>
                <span className="text-accent">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
