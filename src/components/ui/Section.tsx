import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-fg sm:text-5xl">{title}</h2>
            )}
            {description && <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
