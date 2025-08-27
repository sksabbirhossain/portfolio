import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-5xl px-4" id="about">
      {/* heading */}
      <div className="space-y-2 text-center">
        <p className="font-ovo text-xl text-gray-500">Introduction</p>
        <h1 className="font-ovo mb-4 text-5xl font-bold text-gray-700">
          About Me
        </h1>
      </div>
      {/* description */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-6 sm:gap-14">
        <div className="sm:col-span-2">
          <Image
            src={"/image.png"}
            width={1000}
            height={1000}
            alt="image"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="space-y-3 sm:col-span-4">
          {/* about */}
          <p className="text-md mx-auto max-w-3xl text-[16px] leading-7 text-gray-600">
            I am a passionate web developer with expertise in creating dynamic
            and responsive websites. With a strong foundation in both front-end
            and back-end technologies, I strive to deliver seamless user
            experiences. My skills include HTML, CSS, JavaScript, React,
            Node.js, and more. I am dedicated to continuous learning and staying
            updated with the latest industry trends to provide innovative
            solutions.
          </p>
          {/* skills */}
          {/* card */}
          <div className="mt-6 flex max-w-3xl flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex flex-3 flex-col rounded-md border border-gray-200 px-3 py-5 hover:shadow-lg">
              {/* lang icon */}
              <p className="text-gray-500">
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
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </p>
              <h3 className="mt-3 text-[20px] font-semibold text-gray-700">
                Languages
              </h3>
              <p className="mt-1 text-[15px] font-normal text-gray-500">
                HTML, CSS, JavaScript, React Js, Next Js, Node Js, Express Js,
                MongoDB, Tailwind CSS,
              </p>
            </div>
            {/* card 2 */}
            <div className="flex flex-3 flex-col rounded-md border border-gray-200 px-3 py-5 hover:shadow-lg">
              {/* lang icon */}
              <p className="text-gray-500">
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </p>
              <h3 className="mt-3 text-[20px] font-semibold text-gray-700">
                Projects
              </h3>
              <p className="mt-1 text-[15px] font-normal text-gray-500">
                Built more than 10 projects including E-commerce, Inventory
                management system, Social Media app etc.
              </p>
            </div>
            {/* card 3 */}
            <div className="flex flex-3 flex-col rounded-md border border-gray-200 px-3 py-5 hover:shadow-lg">
              {/* lang icon */}
              <p className="text-gray-500">
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </p>
              <h3 className="mt-3 text-[20px] font-semibold text-gray-700">
                Projects
              </h3>
              <p className="mt-1 text-[15px] font-normal text-gray-500">
                Built more than 10 projects including E-commerce, Inventory
                management system, Social Media app etc.
              </p>
            </div>
          </div>

          {/* experience */}
          <div className="mt-6">
            <p className="font-ovo text-[16px] font-semibold text-gray-500 capitalize">
              what i use
            </p>
            <div className="mt-2 flex flex-wrap gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
                <Image
                  src={"/tech/vs-code.png"}
                  width={40}
                  height={40}
                  alt="html"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
                <Image
                  src={"/tech/firebase.png"}
                  width={40}
                  height={40}
                  alt="html"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
                <Image
                  src={"/tech/mongodb.png"}
                  width={40}
                  height={40}
                  alt="html"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
                <Image
                  src={"/tech/git.png"}
                  width={40}
                  height={40}
                  alt="html"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
                <Image
                  src={"/tech/figma.png"}
                  width={40}
                  height={40}
                  alt="html"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
