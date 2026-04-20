import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="editorial flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group flex items-baseline gap-2"
          aria-label="Ritankar Jana — home"
        >
          <span className="font-display text-2xl tracking-tight text-foreground">
            Ritankar
          </span>
          <span className="display-wonk text-2xl text-accent leading-none">
            Jana
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground link-underline transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/riyal-rj"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-foreground transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="editorial flex flex-col gap-5 py-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
