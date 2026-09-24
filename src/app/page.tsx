import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Education />
      <Certifications />
      <Achievements />
      <ContactCTA />
    </>
  );
}
