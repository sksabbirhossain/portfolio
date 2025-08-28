"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";

const MobileMenu = () => {
  const { menuOpen, mobileMenuHandler } = useMobileMenu();
  return (
    <ul
      className={`h-screen w-full flex-col items-center gap-4 pt-8 md:hidden ${
        menuOpen ? "flex" : "hidden"
      }`}
    >
      <li onClick={mobileMenuHandler}>
        <a
          href="#home"
          className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
        >
          Home
        </a>
      </li>

      <li onClick={mobileMenuHandler}>
        <a
          href="#about"
          className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
        >
          About me
        </a>
      </li>
      <li onClick={mobileMenuHandler}>
        <a
          href="#services"
          className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
        >
          Services
        </a>
      </li>
      <li onClick={mobileMenuHandler}>
        <a
          href="#skills"
          className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
        >
          My Skills
        </a>
      </li>
      <li onClick={mobileMenuHandler}>
        <a
          href="#projects"
          className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
        >
          Projects
        </a>
      </li>
      <li onClick={mobileMenuHandler}>
        <a
          href="#contact"
          className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
        >
          Contact me
        </a>
      </li>

      {/* download resume */}
      <a href="/resume.pdf" download onClick={mobileMenuHandler}>
        <button className="font-ovo flex cursor-pointer items-center gap-2 rounded-full border border-gray-500/30 bg-transparent px-5 py-2 text-center text-gray-700 capitalize transition-all duration-300 ease-in-out hover:border-gray-200/30 hover:bg-gray-100/30 hover:shadow hover:shadow-gray-400/30 hover:backdrop-blur-sm">
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
        </button>
      </a>
    </ul>
  );
};

export default MobileMenu;
