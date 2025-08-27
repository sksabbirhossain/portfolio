import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/50 shadow shadow-gray-100 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2">
        {/* logo */}
        <div className="">
          <a href="#home">
            <h1 className="text-2xl font-bold">MyPortfolio</h1>
          </a>
        </div>

        {/* nav */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          <li>
            <a
              href="#home"
              className="cursor-pointer font-medium hover:text-gray-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer font-medium hover:text-gray-500"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="cursor-pointer font-medium hover:text-gray-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="cursor-pointer font-medium hover:text-gray-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer font-medium hover:text-gray-500"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* small devices open menu button */}
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100/50 focus:ring-2 focus:ring-gray-400 focus:outline-none md:hidden">
          <span>
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
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </span>
        </button>

        {/* contact me button */}
        <a href="#contact" className="hidden md:block">
          <button className="flex cursor-pointer items-center gap-2 rounded-full border bg-transparent px-4 py-2 font-medium text-black capitalize transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
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
      </div>
    </nav>
  );
};

export default Header;
