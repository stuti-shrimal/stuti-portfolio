import { BackToTop } from "@/components/chrome/BackToTop";
import { FloatingResume } from "@/components/chrome/FloatingResume";
import { Footer } from "@/components/chrome/Footer";
import { Nav } from "@/components/chrome/Nav";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingResume />
      <BackToTop />
    </>
  );
}
