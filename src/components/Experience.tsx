import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import logoCloudKaptan from "@/assets/logos/cloudkaptan.png";
import logoIndependent from "@/assets/logos/independent.png";
import logoLLD from "@/assets/logos/lld.png";
import logoTMSL from "@/assets/logos/tmsl.png";

interface Item {
  when: string;
  role: string;
  org: string;
  detail: string;
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    when: "Nov,2025 — Now",
    role: "Software Engineer Trainee",
    org: "CloudKaptan Consultancy Services",
    detail:
      "Working on DocuSign CLM implementations, managing workflow automation, version-controlled deployments, and multi-environment setups. Supporting structured, scalable contract lifecycle processes across regions.",
    logo: logoCloudKaptan,
    fallback: "CK",
  },
  {
    when: "Jun 2025 — Aug, 2025",
    role: "Software Support Enginner (Intern)",
    org: "Soefia Education Incorporated",
    detail:
      "Assisted in deploying and supporting a multi-tenant AWS architecture (ECS, S3, Amplify, Secrets Manager), while improving backend reliability through pytest-based testing, API edge-case resolution, and systematic bug reporting to enhance overall system stability and product quality.",
    logo: logoIndependent,
    fallback: "RJ",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-16 border-b border-border pb-10">
            <p className="eyebrow mb-4">05 — Trajectory</p>
            <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
              A short <span className="display-wonk text-accent">history</span>.
            </h2>
          </div>
        </Reveal>

        <ol className="space-y-2">
          {ITEMS.map((it, i) => (
            <Reveal key={it.role} delay={i * 0.05}>
              <li className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-8 transition-colors hover:bg-canvas-warm/50 md:grid-cols-[auto_8rem_1fr_1.5fr] md:items-baseline md:gap-8">
                <EntityLogo
                  src={it.logo}
                  alt={`${it.org} logo`}
                  fallback={it.fallback}
                  size="md"
                  className="md:mt-1"
                />
                <span className="font-mono text-xs uppercase tracking-widest text-ink-soft md:self-baseline">
                  {it.when}
                </span>
                <div className="col-span-2 md:col-span-1">
                  <h3 className="font-display text-3xl leading-tight tracking-tight text-foreground">
                    {it.role}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                    {it.org}
                  </p>
                </div>
                <p className="col-span-2 text-base leading-relaxed text-ink-soft md:col-span-1 md:text-lg">
                  {it.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
