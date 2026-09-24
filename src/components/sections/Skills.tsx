"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Skills() {
  const [active, setActive] = useState(site.skills[0].id);
  const group = site.skills.find((g) => g.id === active) ?? site.skills[0];

  return (
    <Section
      id="skills"
      eyebrow="Technical expertise"
      title="Tools I use to ship data systems, not a wall of percentages."
      description="Labels describe how I use a tool in production. Core means I reach for it without thinking. Working knowledge means I can be useful, not that I lead with it."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {site.focusAreas.map((area, i) => (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-[1.5rem] p-6 transition hover:-translate-y-0.5"
          >
            <h3 className="font-serif text-2xl">{area.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{area.body}</p>
            <p className="mt-4 font-mono text-[11px] leading-6 text-accent">{area.tech.join(" · ")}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16">
        <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">Core technologies</p>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {site.coreTechnologies.map((item) => (
            <li key={item.name} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:items-baseline">
              <span className="font-serif text-2xl">{item.name}</span>
              <span className="text-sm text-muted">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
        {site.skills.map((g) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={active === g.id}
            onClick={() => setActive(g.id)}
            className={`rounded-full border px-4 py-2 text-sm ${
              active === g.id ? "btn-primary border-transparent" : "border-line text-muted"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {group.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-4 rounded-2xl border border-line px-4 py-4">
            <span className="text-sm">{skill.name}</span>
            <span className="shrink-0 font-mono text-[10px] tracking-wider text-accent uppercase">{skill.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
