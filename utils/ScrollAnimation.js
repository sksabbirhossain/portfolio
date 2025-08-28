"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // controls smoothness (higher = slower)
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Handle anchor links (like #about, #contact)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          lenis.scrollTo(target, {
            duration: 2.2,
          });
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
};

export default ScrollAnimation;
