"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { initials } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = site.testimonials[i];

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="One line from faculty. Room for recommendations you actually received."
      description="Placeholder cards stay labeled until you paste a real LinkedIn recommendation into src/content/site.ts."
    >
      <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={t.name + i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-3xl"
          >
            {t.placeholder && (
              <span className="mb-4 inline-block rounded-full border border-accent/40 px-3 py-1 font-mono text-[10px] text-accent">
                Sample — replace
              </span>
            )}
            <p className="font-serif text-2xl leading-snug sm:text-3xl">“{t.quote}”</p>
            <footer className="mt-8 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-accent/20 font-mono text-xs">
                {initials(t.name)}
              </div>
              <div>
                <cite className="not-italic">{t.name}</cite>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-line"
            onClick={() => setI((v) => (v - 1 + site.testimonials.length) % site.testimonials.length)}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-line"
            onClick={() => setI((v) => (v + 1) % site.testimonials.length)}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </Section>
  );
}
