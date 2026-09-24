"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Experience() {
  const [open, setOpen] = useState<string | null>(site.experience[0]?.id ?? null);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Enterprise healthcare systems, then the products built on top of them."
      description="Expand a role for business impact and the details behind the headline."
    >
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {site.experience.map((job, i) => {
          const expanded = open === job.id;
          return (
            <li key={job.id} className="relative">
              <span className="absolute top-6 -left-[31px] h-3 w-3 rounded-full bg-accent sm:-left-[47px]" />
              <motion.article
                layout
                className="glass rounded-[1.6rem] p-5 transition hover:-translate-y-0.5 hover:border-accent/40 sm:p-7"
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 font-mono text-xs text-accent">
                    {job.logoText}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-muted">
                      {job.start} — {job.end} · {job.location}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl">{job.role}</h3>
                    <p className="text-sm text-muted">{job.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{job.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6">
                  {job.achievements.slice(0, expanded ? undefined : 3).map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                {expanded && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] tracking-wider text-accent uppercase">Business impact</p>
                      <ul className="mt-2 space-y-2 text-sm text-muted">
                        {job.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {job.details && (
                      <div>
                        <p className="font-mono text-[10px] tracking-wider text-accent uppercase">More detail</p>
                        <ul className="mt-2 space-y-2 text-sm text-muted">
                          {job.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-accent"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : job.id)}
                >
                  {expanded ? "Collapse" : "Expand details"}
                  <ChevronDown size={14} className={expanded ? "rotate-180" : ""} />
                </button>
                <span className="sr-only">Role {i + 1}</span>
              </motion.article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
