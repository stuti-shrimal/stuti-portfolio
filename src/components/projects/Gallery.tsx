"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Gallery({ items }: { items: { label: string; caption: string }[] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((shot, i) => (
          <button
            key={shot.label}
            type="button"
            className="glass rounded-2xl p-4 text-left"
            onClick={() => setActive(i)}
          >
            <p className="text-sm">{shot.label}</p>
            <p className="mt-1 text-xs text-muted">{shot.caption}</p>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="glass max-w-lg rounded-3xl p-6" onClick={(e) => e.stopPropagation()}>
              <p className="font-serif text-2xl">{items[active].label}</p>
              <p className="mt-3 text-sm text-muted">{items[active].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
