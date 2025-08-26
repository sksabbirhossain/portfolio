import React from "react";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute top-0 left-0 h-12 w-full max-w-[500rem] rotate-12 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% blur-3xl" />

      <div className="absolute top-0 right-0 h-12 w-full max-w-[500rem] -rotate-12 bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% blur-[70px]" />

      <div className="z-10 px-2 text-center">
        <h1 className="text-4xl font-bold text-black md:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-700 md:text-xl">
          Showcasing my projects and skills
        </p>
      </div>
    </div>
  );
};

export default Hero;
