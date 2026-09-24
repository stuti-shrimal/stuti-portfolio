"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-8 pb-16 sm:px-8 lg:px-12 lg:pt-16 lg:pb-24">
      <div className="aurora pointer-events-none absolute inset-0" />
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase"
          >
            {site.person.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.7, ease }}
            className="mt-5 max-w-4xl font-serif text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Data Engineer building systems that turn data into decisions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7, ease }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted"
          >
            I design scalable data pipelines, analytics platforms, and AI-powered data products using{" "}
            <span className="text-fg">Python, SQL, Spark, Databricks, AWS, PostgreSQL, and modern LLM technologies.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="mt-4 max-w-2xl text-sm leading-7 text-muted"
          >
            Previously worked on enterprise data engineering at <span className="text-fg">Accenture</span> and currently
            building operational analytics and intelligent data solutions in Detroit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.7, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="/#projects" className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              View projects <ArrowUpRight size={16} />
            </Link>
            <a href={site.links.resume} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm">
              <Download size={16} /> Download resume
            </a>
            <a href={site.links.linkedin} className="grid h-12 w-12 place-items-center rounded-full border border-line" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={site.links.github} className="grid h-12 w-12 place-items-center rounded-full border border-line" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={site.links.email} className="grid h-12 w-12 place-items-center rounded-full border border-line" aria-label="Email me">
              <Mail size={16} />
            </a>
          </motion.div>
          <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            Data Engineering · Analytics · Cloud · AI
          </p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease }}
          className="glass relative mx-auto w-full max-w-[220px] rounded-[1.5rem] p-2.5 lg:mx-0"
        >
          <div className="overflow-hidden rounded-[1.15rem] border border-line bg-bg-elev">
            <img
              src={site.person.headshot}
              alt={`Portrait of ${site.person.name}`}
              width={720}
              height={900}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <div className="px-2 pt-3 pb-2">
            <p className="font-serif text-xl">{site.person.name}</p>
            <p className="mt-1 text-sm text-muted">{site.person.secondaryRole}</p>
            <p className="mt-3 text-xs leading-5 text-muted">{site.person.location}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
