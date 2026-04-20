import { cn } from "@/lib/utils";

interface EntityLogoProps {
  src?: string;
  alt: string;
  /** Two-letter fallback if no src is provided or image fails */
  fallback: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

const fontMap = {
  sm: "text-[11px]",
  md: "text-sm",
  lg: "text-lg",
};

/**
 * Unified logo container — applies a consistent editorial treatment so any
 * logo (company, school, project) feels part of the same design system.
 * Default: desaturated + slight sepia tint matching the rust/ink palette.
 * On hover: original colors revealed with a soft scale-up.
 */
export function EntityLogo({
  src,
  alt,
  fallback,
  size = "md",
  className,
}: EntityLogoProps) {
  return (
    <span
      className={cn(
        "entity-logo group/logo relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background ring-1 ring-border/40 transition-all duration-500",
        sizeMap[size],
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={512}
          height={512}
          className="entity-logo-img h-full w-full object-contain p-2 transition-all duration-500"
        />
      ) : (
        <span
          className={cn(
            "font-display font-medium tracking-wide text-ink-soft transition-colors duration-500 group-hover/logo:text-foreground",
            fontMap[size],
          )}
        >
          {fallback}
        </span>
      )}
    </span>
  );
}
