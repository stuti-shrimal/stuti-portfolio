"use client";

import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">Initializing</p>
            <p className="mt-3 font-serif text-4xl">{site.person.name}</p>
            <motion.div
              className="mx-auto mt-8 h-px w-40 origin-left bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
