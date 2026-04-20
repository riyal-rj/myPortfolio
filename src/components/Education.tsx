import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import logoTMSL from "@/assets/logos/tmsl.png";
import logoJDS from "@/assets/logos/jds.png";

interface Edu {
  when: string;
  school: string;
  stream: string;
  detail: string;
  marks?: string;
  logo?: string;
  fallback: string;
}

const ITEMS: Edu[] = [
  {
    when: "2021 — 2025",
    school: "Academy of Technology, Hooghly, West Bengal, India",
    stream: "B.Tech · Computer Science & Engineering",
    detail:
      "Focused coursework in algorithms, operating systems, DBMS, and computer networks — paired with self-driven projects across distributed backends and applied AI.",
    marks: "CGPA · 8.92 / 10",
    logo: logoTMSL,
    fallback: "TMSL",
  },
  {
    when: "2018 — 2020",
    school: "W.W.A. Cossipore English School, Kolkata",
    stream: "Higher Secondary ·ISC · Science (PCM + CS)",
    detail:
      "Specialised in Physics, Chemistry, Mathematics with Computer Science. First serious exposure to programming and problem-solving.",
    marks: "89.5%",
    logo: logoJDS,
    fallback: "JDS",
  },
  {
    when: "2006 — 2018",
    school: "W.W.A. Cossipore English School, Kolkata",
    stream: "Secondary · ICSE",
    detail:
      "Twelve formative years — built the discipline, curiosity, and academic foundation everything since has been built on.",
    marks: "90.8%",
    logo: logoJDS,
    fallback: "JDS",
  },
];

export function Education() {
  return (
    <section id="education" className="relative bg-canvas-warm py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-16 border-b border-border pb-10">
            <p className="eyebrow mb-4">06 — Education</p>
            <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Where it all <span className="display-wonk text-accent">began</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* vertical rail */}
          <div
            aria-hidden
            className="absolute left-[39px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-14 md:space-y-20">
            {ITEMS.map((it, i) => {
              const isRight = i % 2 === 1;
              return (
                <Reveal key={`${it.school}-${it.when}`} delay={i * 0.06}>
                  <li className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                    {/* logo node — replaces simple dot */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 z-10 md:left-1/2 md:-translate-x-1/2"
                    >
                      <EntityLogo
                        src={it.logo}
                        alt={`${it.school} logo`}
                        fallback={it.fallback}
                        size="md"
                        className="bg-background"
                      />
                    </span>

                    <div
                      className={`pl-24 md:pl-0 ${
                        isRight ? "md:order-2 md:pl-20" : "md:pr-20 md:text-right"
                      }`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                        {it.when}
                      </p>
                      <h3 className="mt-2 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                        {it.school}
                      </h3>
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
                        {it.stream}
                      </p>
                      {it.marks && (
                        <p className="mt-3 font-display text-lg italic text-ink-soft">
                          {it.marks}
                        </p>
                      )}
                    </div>

                    <div
                      className={`pl-24 md:pl-0 ${
                        isRight ? "md:order-1 md:pr-20 md:text-right" : "md:pl-20"
                      }`}
                    >
                      <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                        {it.detail}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
