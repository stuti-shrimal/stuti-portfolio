"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { site } from "@/content/site";

type Item = { id: string; label: string; hint: string; run: () => void };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const items = useMemo<Item[]>(
    () => [
      { id: "about", label: "About Stuti", hint: "Navigate", run: () => router.push("/#about") },
      { id: "experience", label: "Experience", hint: "Navigate", run: () => router.push("/#experience") },
      { id: "projects", label: "Featured Projects", hint: "Navigate", run: () => router.push("/#projects") },
      { id: "skills", label: "Skills", hint: "Navigate", run: () => router.push("/#skills") },
      { id: "education", label: "Education", hint: "Navigate", run: () => router.push("/#education") },
      { id: "certs", label: "Certifications", hint: "Navigate", run: () => router.push("/#certifications") },
      { id: "resume", label: "Download Resume", hint: "Action", run: () => window.open(site.links.resume, "_blank") },
      { id: "linkedin", label: "Open LinkedIn", hint: "Action", run: () => window.open(site.links.linkedin, "_blank") },
      { id: "github", label: "Open GitHub", hint: "Action", run: () => window.open(site.links.github, "_blank") },
      { id: "email", label: "Send Email", hint: "Action", run: () => window.open(site.links.email, "_self") },
      {
        id: "theme",
        label: "Toggle Theme",
        hint: "Theme",
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      ...site.projects.filter((p) => !p.hidden).map((p) => ({
        id: p.slug,
        label: p.title,
        hint: "Project",
        run: () => router.push(`/projects/${p.slug}`),
      })),
    ],
    [resolvedTheme, router, setTheme],
  );

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-start bg-black/50 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Command palette"
            className="glass mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Jump to a section, project, or action…"
              className="w-full border-b border-line bg-transparent px-4 py-4 text-sm outline-none placeholder:text-muted"
            />
            <ul className="max-h-80 overflow-auto p-2">
              {filtered.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm hover:bg-accent/10"
                    onClick={() => {
                      item.run();
                      setOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-muted">{item.hint}</span>
                  </button>
                </li>
              ))}
              {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No matches</li>}
            </ul>
            <p className="border-t border-line px-4 py-2 font-mono text-[10px] text-muted">
              ⌘K to toggle · Esc to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
