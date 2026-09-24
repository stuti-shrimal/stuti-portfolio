import Link from "next/link";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function ContactCTA() {
  return (
    <Section id="contact-cta" eyebrow="Contact" title={site.contact.title}>
      <div className="glass flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center">
        <div>
          <p className="max-w-xl text-muted">{site.contact.body}</p>
          <p className="mt-3 text-sm text-muted">{site.contact.note}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary rounded-full px-5 py-3 text-sm font-semibold">
            Email me
          </Link>
          <a href={site.links.linkedin} className="rounded-full border border-line px-5 py-3 text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
