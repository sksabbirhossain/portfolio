import MenuOpenButton from "./MenuOpenButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/50 shadow-sm shadow-gray-100/50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2">
        {/* logo */}
        <div className="">
          <a href="#home">
            <h1 className="relative text-2xl font-bold text-gray-800 select-none">
              Portfolio
              <span className="absolute -right-2 bottom-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
            </h1>
          </a>
        </div>

        {/* nav */}
        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
          <li>
            <a
              href="#home"
              className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              My Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-ovo cursor-pointer text-[16px] font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* small devices open menu button */}
        <MenuOpenButton />

        {/* download resume */}
        <a href="/resume.pdf" download className="hidden md:block">
          <button className="font-ovo flex cursor-pointer items-center gap-2 rounded-full border border-gray-500/30 bg-transparent px-5 py-2 text-center text-gray-700 capitalize transition-all duration-300 ease-in-out hover:border-gray-200/30 hover:bg-gray-100/30 hover:shadow hover:shadow-gray-400/30 hover:backdrop-blur-sm">
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
          </button>
        </a>
      </div>

      {/* mobile menu menu */}
      <MobileMenu />
    </nav>
  );
};

export default Header;
