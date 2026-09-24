"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { ProjectArt } from "@/components/ui/ProjectArt";

export function Projects() {
  const visible = site.projects.filter((project) => !project.hidden);
  const [arch, setArch] = useState<(typeof site.projects)[number] | null>(null);

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
                <button type="button" className="text-muted" onClick={() => setArch(project)}>
                  Architecture
                </button>
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

      <AnimatePresence>
        {arch && (
          <motion.div
            className="fixed inset-0 z-[65] grid place-items-center bg-black/60 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setArch(null)}
          >
            <motion.div
              role="dialog"
              aria-label={`${arch.title} architecture`}
              className="glass max-h-[80vh] w-full max-w-lg overflow-auto rounded-3xl p-6"
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-serif text-2xl">{arch.title}</h4>
                <button type="button" aria-label="Close" onClick={() => setArch(null)}>
                  <X size={18} />
                </button>
              </div>
              <ol className="mt-6 space-y-3">
                {arch.architecture.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
