"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/chrome/CommandPalette";
import { CustomCursor } from "@/components/chrome/CustomCursor";
import { KeyboardShortcuts } from "@/components/chrome/KeyboardShortcuts";
import { LoadingScreen } from "@/components/chrome/LoadingScreen";

export function Providers({ children }: { children: React.ReactNode }) {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <LoadingScreen visible={booting} />
      <CustomCursor />
      <CommandPalette />
      <KeyboardShortcuts />
      {children}
    </ThemeProvider>
  );
}
