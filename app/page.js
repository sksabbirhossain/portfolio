import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
