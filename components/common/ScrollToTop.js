"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed right-1/12 bottom-6 z-50 flex h-12 w-12 items-center justify-center">
          <div className="relative h-full w-full">
            {/* background */}
            <div className="absolute -top-5 -left-6 -z-10 h-24 w-24 max-w-[500rem] rounded-full bg-gradient-to-r from-indigo-500 from-10% via-red-400 via-30% to-emerald-500 to-90% blur-[45px]" />
            <div
              onClick={scrollToTop}
              className="z-20 h-full w-full cursor-pointer rounded-full border border-gray-500/30 bg-emerald-600 p-3 text-center text-gray-100 transition-all duration-500 ease-in-out hover:border-gray-200/30 hover:bg-gray-100/30 hover:text-gray-700 hover:shadow hover:shadow-gray-400/30 hover:backdrop-blur-sm"
            >
              <motion.p
                animate={{ y: [0, -5, 0] }} // bounce up & down
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeIn" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                  />
                </svg>
              </motion.p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
