import { Hero } from "@/components/hero";
import { About } from "@/components/about";
//import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
