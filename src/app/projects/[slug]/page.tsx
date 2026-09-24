import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/content/site";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { Gallery } from "@/components/projects/Gallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.projects.filter((p) => !p.hidden).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug && !p.hidden);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug && !p.hidden);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link href="/#projects" className="font-mono text-[11px] text-accent">
        ← All projects
      </Link>
      <p className="mt-8 font-mono text-[11px] text-muted uppercase">{project.year}</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{project.title}</h1>
      <p className="mt-4 text-lg text-muted">{project.subtitle}</p>
      <div className="mt-8">
        <ProjectArt hint={project.imageHint} title={project.title} />
      </div>
      <section className="mt-10 space-y-4 text-base leading-8 text-muted">
        <p>{project.description}</p>
        <p>
          <strong className="text-fg">Problem. </strong>
          {project.problem}
        </p>
        <p>
          <strong className="text-fg">Solution. </strong>
          {project.solution}
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl">Business impact</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7">
          {project.impact.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl">What shipped</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl">Architecture</h2>
        <ol className="mt-4 space-y-3">
          {project.architecture.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm">
              <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl">Screenshots</h2>
        <Gallery items={[...project.screenshots]} />
      </section>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[10px]">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-10 flex gap-4 text-sm">
        {project.github && (
          <a href={project.github} className="text-accent">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} className="text-accent">
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
