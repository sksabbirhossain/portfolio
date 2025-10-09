import * as motion from "motion/react-client";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute top-0 left-[10%] h-14 w-[80%] max-w-[500rem] bg-gradient-to-r from-sky-500 from-10% via-green-700 via-30% to-emerald-500 to-90% blur-[75px]" />

      <div className="absolute bottom-36 left-[10%] h-14 w-[80%] max-w-[500rem] bg-gradient-to-r from-sky-500 from-10% via-indigo-400 via-30% to-emerald-500 to-90% blur-[85px]" />

      <div className="z-10 items-center px-2 text-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Image
              src={"/sk-sabbir-hossain.png"}
              width={150}
              height={150}
              alt="me image"
              className="h-24 w-24 rounded-full object-cover ring-2 ring-emerald-300 sm:h-26 sm:w-26"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-ovo text-xl text-gray-600 capitalize sm:text-2xl"
          >
            Hi👋I’m Sk Sabbir Hossain
          </motion.h1>
        </div>
        <div className="mt-3 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-ovo w-full max-w-4xl text-3xl text-gray-900 md:text-5xl lg:text-7xl"
          >
            Full stack web developer from Bangladesh.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 w-full max-w-2xl text-gray-700"
          >
            I love turning ideas into beautiful, high-performance websites and
            web applications. With 3 years of experience as a Full Stack (MERN)
            developer from Bangladesh, I focus on building fast, scalable, and
            engaging digital experiences that truly connect with people.
          </motion.p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          {/* hire me */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="font-ovo flex cursor-pointer items-center gap-2 rounded-full border border-gray-500/30 bg-emerald-600 px-6 py-2 text-center text-gray-100 capitalize transition-all duration-500 ease-in-out hover:border-gray-200/30 hover:bg-gray-100/30 hover:text-gray-700 hover:shadow hover:shadow-gray-400/30 hover:backdrop-blur-sm"
          >
            Hire Me{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </motion.a>

          {/* resume download button */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            href="/resume.pdf"
            download
            className="font-ovo flex cursor-pointer items-center gap-2 rounded-full border border-gray-500/30 bg-transparent px-5 py-2 text-center text-gray-700 capitalize transition-all duration-300 ease-in-out hover:border-gray-200/30 hover:bg-gray-100/30 hover:shadow hover:shadow-gray-400/30 hover:backdrop-blur-sm"
          >
            <span>my resume</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
