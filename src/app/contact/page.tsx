import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/content/site";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contact.body,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
      <div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">Contact</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight">{site.contact.title}</h1>
        <p className="mt-4 max-w-md leading-7 text-muted">{site.contact.body}</p>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a href={site.links.email} className="inline-flex items-center gap-2">
              <Mail size={16} className="text-accent" /> Email me
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} className="inline-flex items-center gap-2">
              <LinkedInIcon className="text-accent" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={site.links.github} className="inline-flex items-center gap-2">
              <GitHubIcon className="text-accent" /> GitHub
            </a>
          </li>
          <li>
            <a href={site.links.resume} className="text-accent">
              Download resume
            </a>
          </li>
        </ul>
        <p className="mt-8 text-sm text-muted">{site.contact.note}</p>
      </div>
      <ContactForm />
    </div>
  );
}
