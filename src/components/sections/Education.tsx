import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="University of Maryland and University of Mumbai.">
      <div className="grid gap-6 md:grid-cols-2">
        {site.education.map((ed) => (
          <article key={ed.school} className="glass rounded-[1.6rem] p-6">
            <p className="font-mono text-[11px] text-accent">{ed.end}</p>
            <h3 className="mt-2 font-serif text-2xl">{ed.school}</h3>
            <p className="text-sm text-muted">
              {ed.degree} · {ed.location}
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-wider text-muted uppercase">Coursework</p>
            <ul className="mt-2 space-y-1 text-sm">
              {ed.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[10px] tracking-wider text-muted uppercase">Achievements</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {ed.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
