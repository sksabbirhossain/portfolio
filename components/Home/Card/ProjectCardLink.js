import Image from "next/image";
import Link from "next/link";

const ProjectCardLink = ({ frontend, live, backend }) => {
  return (
    <div className="mt-2 flex items-center justify-center gap-3">
      {frontend && (
        <Link
          href={frontend}
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
        >
          <Image
            src={"/projects/github-mark.svg"}
            width={40}
            height={40}
            alt="icon"
          />
        </Link>
      )}
      {live && (
        <Link
          href={live}
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
        >
          <span className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </span>
        </Link>
      )}
      {backend && (
        <Link
          href={backend}
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
        >
          <Image
            src={"/projects/github-mark.svg"}
            width={40}
            height={40}
            alt="icon"
          />
        </Link>
      )}
    </div>
  );
};

export default ProjectCardLink;
