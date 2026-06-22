import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <div className="w-full max-w-5xl px-6 flex flex-col gap-24 mt-24">
        <About />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
