import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials that map to the work, not a badge wall.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.certifications.map((cert) => (
          <article key={cert.name} className="glass rounded-2xl p-5 transition hover:-translate-y-0.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 font-mono text-[10px] text-accent">
              {cert.provider.slice(0, 3).toUpperCase()}
            </div>
            <h3 className="mt-4 text-sm font-medium">{cert.name}</h3>
            <p className="mt-1 text-xs text-muted">
              {cert.provider}
              {cert.date && !cert.date.includes("REPLACE") ? ` · ${cert.date}` : ""}
            </p>
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} className="mt-3 inline-block text-xs text-accent">
                View credential
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
