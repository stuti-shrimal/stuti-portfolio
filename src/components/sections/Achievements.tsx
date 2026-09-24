import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Awards and recognition tied to the work.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.achievements.map((item) => (
          <article key={item.title} className="rounded-2xl border border-line p-5">
            <p className="font-mono text-[10px] text-accent uppercase">{item.category}</p>
            <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
            {item.year && <p className="mt-3 text-xs text-muted">{item.year}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
