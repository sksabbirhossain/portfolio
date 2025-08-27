import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[75px] pb-8" id="projects">
      {/* heading */}
      <div className="space-y-1 text-center">
        <p className="font-ovo text-xl text-gray-500">What i was do</p>
        <h1 className="font-ovo mb-2 text-5xl font-bold text-gray-700">
          My projects
        </h1>
        <p className="font-ovo mx-auto max-w-xl text-[16px] text-gray-500">
          I am a full stack developer from Bangladesh, with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>

      {/* description */}
      <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {/* background */}
        <div className="absolute top-[50%] right-0 -z-10 h-12 w-full max-w-[500rem] bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% blur-[150px] sm:rotate-12" />

        {/* project */}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full w-full rounded-md shadow">
            <Image
              src={"/projects/business-ims.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-5">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5">
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                react
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                next.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                nextAuth
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                node.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                express.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                mongoDB
              </p>
            </div>

            {/* title */}
            <h3 className="font-ovo mt-3 text-xl font-bold text-gray-700 capitalize">
              inventory management system
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptates consectetur fugiat numquam nostrum.
            </p>

            {/*code link */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/vs-code.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full w-full rounded-md shadow">
            <Image
              src={"/projects/Daily-Blogs.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-5">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5">
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                react
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                next.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                nextAuth
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                node.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                express.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                mongoDB
              </p>
            </div>

            {/* title */}
            <h3 className="font-ovo mt-3 text-xl font-bold text-gray-700 capitalize">
              Daily bolgs - <span className="font-medium">blogs website</span>
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptates consectetur fugiat numquam nostrum.
            </p>

            {/*code link */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/vs-code.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full w-full rounded-md shadow">
            <Image
              src={"/projects/megamart.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-5">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5">
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                react
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                node.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                express.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                mongoDB
              </p>
            </div>

            {/* title */}
            <h3 className="font-ovo mt-3 text-xl font-bold text-gray-700 capitalize">
              megamart - <span className="font-medium">e-commerce website</span>
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptates consectetur fugiat numquam nostrum.
            </p>

            {/*code link */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/vs-code.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* project 4*/}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full w-full rounded-md shadow">
            <Image
              src={"/projects/social-media.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-5">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5">
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                react
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                node.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                express.js
              </p>
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                mongoDB
              </p>
            </div>

            {/* title */}
            <h3 className="font-ovo mt-3 text-xl font-bold text-gray-700 capitalize">
              social media website
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptates consectetur fugiat numquam nostrum.
            </p>

            {/*code link */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/vs-code.png"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              <Link
                href={""}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 p-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <Image
                  src={"/tech/mongodb.png"}
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
  );
};

export default Projects;
