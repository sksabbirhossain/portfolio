"use client";
import useMobileMenu from "@/contexts/mobileMenuContext";

const MenuOpenButton = () => {
  const { menuOpen, mobileMenuHandler } = useMobileMenu();
  return (
    <button
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-700 ring-1 ring-emerald-300 hover:bg-gray-100/50 focus:ring-2 focus:ring-emerald-400 focus:outline-none md:hidden"
      onClick={mobileMenuHandler}
    >
      {!menuOpen ? (
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
      ) : (
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default MenuOpenButton;
