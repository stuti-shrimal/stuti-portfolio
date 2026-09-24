"use client";

import { FileDown } from "lucide-react";
import { site } from "@/content/site";

export function FloatingResume() {
  return (
    <a
      href={site.links.resume}
      download
      className="glass fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-fg shadow-lg transition hover:border-accent"
    >
      <FileDown size={16} className="text-accent" />
      Resume
    </a>
  );
}
