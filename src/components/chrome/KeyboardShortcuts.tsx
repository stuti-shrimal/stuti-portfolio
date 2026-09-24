"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { site } from "@/content/site";

export function KeyboardShortcuts() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let pendingG = false;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      if (e.key.toLowerCase() === "t" && !e.metaKey && !e.ctrlKey) {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
      if (e.key.toLowerCase() === "r" && !e.metaKey && !e.ctrlKey) {
        window.open(site.links.resume, "_blank");
      }
      if (e.key.toLowerCase() === "g") {
        pendingG = true;
        window.setTimeout(() => {
          pendingG = false;
        }, 600);
        return;
      }
      if (pendingG) {
        const map: Record<string, string> = {
          h: "/",
          p: "/#projects",
          e: "/#experience",
          c: "/contact",
        };
        const href = map[e.key.toLowerCase()];
        if (href) router.push(href);
        pendingG = false;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resolvedTheme, router, setTheme]);

  return null;
}
