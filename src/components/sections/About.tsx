import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={site.headline}>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-muted">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="glass h-fit rounded-[1.6rem] p-6">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">{site.careerFocus.title}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{site.careerFocus.intro}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.careerFocus.areas.map((area) => (
              <li key={area} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-muted">{site.careerFocus.close}</p>
        </aside>
      </div>

      <div className="mt-16 border-t border-line pt-14">
        <h3 className="max-w-2xl font-serif text-4xl leading-tight">{site.philosophy.title}</h3>
        <p className="mt-4 max-w-2xl text-muted">{site.philosophy.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.philosophy.points.map((point) => (
            <article key={point.title} className="rounded-[1.4rem] border border-line p-5">
              <h4 className="font-serif text-xl">{point.title}</h4>
              <p className="mt-2 text-sm leading-7 text-muted">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
