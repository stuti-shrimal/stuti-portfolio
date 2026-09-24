"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Metrics() {
  return (
    <section aria-label="Impact" className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
        {site.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="bg-bg px-4 py-6 sm:px-5"
          >
            <p className="font-serif text-3xl tracking-tight sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
