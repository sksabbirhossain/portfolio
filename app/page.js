import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-40">
      <Hero />
      <About />
      <Services />
    </div>
  );
}
