import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const SOCIALS = [
  { label: "Email", href: "mailto:ritankar.jana.official@gmail.com" },
  { label: "GitHub", href: "https://github.com/riyal-rj" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/riyal-rj/" },
  { label: "X / Twitter", href: "https://x.com/jana_ritankar" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:ritankar.jana.official@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-foreground text-background py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <p className="eyebrow mb-8 text-background/60">06 — Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[12vw] leading-[0.92] tracking-[-0.04em] sm:text-[9vw] lg:text-[7.5vw]">
            Let's build
            <br />
            something <span className="display-wonk text-accent">good.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <Field name="name" label="Your name" required />
                <Field name="email" label="Email address" type="email" required />
              </div>
              <Field name="message" label="The message" textarea required />

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                {sent && (
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    Opening your mail client…
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5">
            <p className="eyebrow text-background/60">Direct lines</p>
            <ul className="mt-6 divide-y divide-background/15 border-y border-background/15">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 transition-colors hover:text-accent"
                  >
                    <span className="font-display text-2xl">{s.label}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-background/60 transition-transform group-hover:-translate-y-0.5 group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-sm border border-background/20 p-6">
              <p className="eyebrow text-background/60">Currently</p>
              <p className="mt-3 font-display text-xl leading-snug">
                Open to backend / full-stack roles and interesting freelance
                collaborations.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}

function Field({ name, label, type = "text", textarea, required }: FieldProps) {
  const baseClass =
    "peer w-full bg-transparent border-b border-background/30 px-0 py-3 font-display text-2xl text-background placeholder-transparent focus:border-accent focus:outline-none transition-colors";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          placeholder={label}
          className={baseClass + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={label}
          className={baseClass}
        />
      )}
      <span className="pointer-events-none absolute -top-2 left-0 font-mono text-[11px] uppercase tracking-widest text-background/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-display peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-background/40 peer-focus:-top-2 peer-focus:font-mono peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-accent">
        {label}
      </span>
    </label>
  );
}
