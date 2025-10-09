import ScrollToTop from "@/components/common/ScrollToTop";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sk Sabbir Hossain",
    alternateName: ["Sabbir Hossain", "Sk S Hossain"],
    image:
      "https://sk-sabbir-hossain-portfolio.vercel.app/sk-sabbir-hossain.png",
    jobTitle: "Full Stack Web Developer",
    url: "https://sk-sabbir-hossain-portfolio.vercel.app",
    sameAs: [
      "https://www.facebook.com/sksabbirhossain4",
      "https://www.instagram.com/sk.sabbir.hossain",
      "https://www.linkedin.com/in/sk-sabbir-hossain",
      "https://github.com/sksabbirhossain",
      "https://x.com/sksabbir393",
    ],
    description:
      "Sk Sabbir Hossain is a Bangladeshi Full Stack Web Developer skilled in Next.js, React, Node.js, and MongoDB, passionate about creating production-ready web applications.",
  };
  return (
    <>
      {/* ✅ JSON-LD structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="space-y-16 sm:space-y-24">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    </>
  );
}
