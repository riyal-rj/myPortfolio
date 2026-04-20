import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorDot } from "@/components/CursorDot";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { OtherExperiences } from "@/components/OtherExperiences";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import  SkillsMap  from "@/components/SkillsMap";
import { Stack } from "@/components/Stack";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritankar Jana — Backend Engineer & LLM Tinkerer" },
      {
        name: "description",
        content:
          "Portfolio of Ritankar Jana — software engineer building robust backend systems, microservices, and LLM-powered products. Based in Kolkata, India.",
      },
      { property: "og:title", content: "Ritankar Jana — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Backend engineer building microservices, distributed systems, and applied AI products. Selected work, stack and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorDot />
      <SiteHeader />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Education />
     <OtherExperiences />
      {/* <SkillsMap />  */}
      <Contact />
      <SiteFooter />
    </main>
  );
}
