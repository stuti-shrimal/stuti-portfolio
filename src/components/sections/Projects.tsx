import Link from "next/link";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { ProjectArt } from "@/components/ui/ProjectArt";

export function Projects() {
  const visible = site.projects.filter((project) => !project.hidden);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Analysis you can open, with the result written down."
      description="Each card follows the project README: the question, the method, and the figures reported there."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.slug}
            className="group glass overflow-hidden rounded-[1.8rem] transition hover:-translate-y-1 hover:border-accent/40"
          >
            <ProjectArt hint={project.imageHint} title={project.title} />
            <div className="p-6">
              <p className="font-mono text-[10px] text-accent uppercase">{project.year}</p>
              <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <p className="mt-3 text-sm leading-6">
                <span className="text-fg">Problem. </span>
                <span className="text-muted">{project.problem}</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {project.impact.slice(0, 2).map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="rounded-full border border-line px-2 py-1 font-mono text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link href={`/projects/${project.slug}`} className="text-accent">
                  Case study →
                </Link>
                {project.github && (
                  <a href={project.github} className="inline-flex items-center gap-1 text-muted">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="text-muted">
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
