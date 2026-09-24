import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.person.name,
    jobTitle: site.person.role,
    email: site.person.email.includes("REPLACE") ? undefined : site.person.email,
    url: site.seo.url,
    sameAs: [site.links.linkedin, site.links.github],
    alumniOf: site.education.map((ed) => ({
      "@type": "EducationalOrganization",
      name: ed.school,
    })),
    knowsAbout: site.seo.keywords,
    description: site.seo.description,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
