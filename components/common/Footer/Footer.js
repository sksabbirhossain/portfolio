import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-[100px] w-full border-t border-gray-300/50">
      {/* background */}
      <div className="absolute top-3 left-[5%] -z-10 h-5 w-[90%] max-w-[500rem] bg-gradient-to-r from-sky-500 from-10% via-indigo-500 via-30% to-emerald-500 to-90% blur-[55px]" />

      <div className="w-full bg-white/50 backdrop-blur-md">
        <div className="mx-auto w-full max-w-5xl py-4">
          <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 px-4 text-[#626262] sm:gap-5 lg:justify-between">
            <p className="font-ovo text-center text-[16px] capitalize">
              © 2025 Md Sabbir Hossain. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href=""
                className="text-md font-ovo rounded-lg text-center text-[#626262] transition-colors duration-300 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Services
              </Link>
              <Link
                href=""
                className="text-md font-ovo rounded-lg text-center text-[#626262] transition-colors duration-300 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </div>

            {/* social link */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
                <Link
                  href={"https://www.linkedin.com/in/sk-sabbir-hossain"}
                  target="_blank"
                >
                  <Image
                    src={"/social/linkedin.png"}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </Link>
              </div>

              <div class="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
                <Link
                  href={"https://www.github.com/sksabbirhossain"}
                  target="_blank"
                >
                  <Image
                    src={"/social/github.png"}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </Link>
              </div>

              <div class="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
                <Link
                  href={"https://www.facebook.com/sksabbirhossain4"}
                  target="_blank"
                >
                  <Image
                    src={"/social/facebook.png"}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </Link>
              </div>

              <div class="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
                <Link
                  href={"https://www.instagram.com/sk.sabbir.hossain"}
                  target="_blank"
                >
                  <Image
                    src={"/social/instagram.png"}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
