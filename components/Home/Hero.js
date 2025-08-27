import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute top-0 left-[10%] h-14 w-[80%] max-w-[500rem] bg-gradient-to-r from-sky-500 from-10% via-green-700 via-30% to-emerald-500 to-90% blur-[75px]" />

      <div className="absolute top-[50%] left-[10%] h-14 w-[80%] max-w-[500rem] bg-gradient-to-r from-sky-500 from-10% via-indigo-500 via-30% to-emerald-500 to-90% blur-[75px]" />

      <div className="z-10 items-center px-2 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={"/me.png"}
            width={150}
            height={150}
            alt="me image"
            className="h-24 w-24 rounded-full object-cover ring-2 ring-gray-200 sm:h-32 sm:w-32"
          />
          <p className="font-ovo text-xl text-gray-500 capitalize sm:text-2xl">
            Hi! I’m Md Sabbir Hossain 👋🏻
          </p>
        </div>
        <div className="mt-3 flex flex-col items-center justify-center text-center">
          <h1 className="font-ovo w-full max-w-4xl text-3xl text-gray-900 capitalize sm:text-7xl">
            full stack web developer from Bangladesh.
          </h1>
          <p className="mt-4 w-full max-w-2xl text-gray-500">
            I love turning ideas into beautiful, high-performance websites and
            web applications. With 3 years of experience as a Full Stack (MERN)
            developer from Bangladesh, I focus on building fast, scalable, and
            engaging digital experiences that truly connect with people.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gray-700 px-8 py-2 text-white transition-colors duration-500 hover:bg-gray-800"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2 text-gray-700 capitalize transition-colors duration-500 ease-in-out hover:bg-gray-700 hover:text-white"
          >
            <span>my resume</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
