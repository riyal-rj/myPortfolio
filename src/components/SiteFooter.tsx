export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="editorial flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          © {year} Ritankar Jana — Designed & coded with care.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          Kolkata · IN &nbsp;·&nbsp; <span className="text-accent">●</span> Available
        </p>
      </div>
    </footer>
  );
}
