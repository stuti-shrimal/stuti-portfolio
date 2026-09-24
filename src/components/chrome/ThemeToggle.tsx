"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <span className="inline-block h-9 w-9" />;
  }
  const dark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-bg-elev/70 text-fg transition hover:border-accent"
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
