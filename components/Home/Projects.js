import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCardLink from "./Card/ProjectCardLink";

const Projects = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[75px]" id="projects">
      {/* heading */}
      <div className="space-y-1 text-center">
        <p className="font-ovo text-xl text-gray-500">What i was do</p>
        <h1 className="font-ovo mb-2 text-4xl font-bold text-gray-700 sm:text-5xl">
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
          <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
            <Image
              src={"/projects/business-ims.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-3">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
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
            <h3 className="font-ovo mt-1 text-xl font-bold text-gray-700 capitalize">
              inventory management system
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              full-featured inventory management system designed to streamline
              stock, sales, purchases, and subscriptions with efficiency and
              scalability.
            </p>

            {/*code link */}
            <ProjectCardLink
              frontend={"https://github.com/sksabbirhossain/business-ims"}
              live={"https://business-ims.vercel.app"}
              backend={"https://github.com/sksabbirhossain/business-ims-server"}
            />
          </div>
        </div>

        {/* project 2 */}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
            <Image
              src={"/projects/Daily-Blogs.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-3">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
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
            <h3 className="font-ovo mt-1 text-xl font-bold text-gray-700 capitalize">
              Daily bolgs - <span className="font-medium">blogs website</span>
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              modern blogging platform built with Next.js, offering role-based
              authentication, search, comments, dark mode, and open-source
              collaboration.
            </p>

            {/*code link */}
            <ProjectCardLink
              frontend={"https://github.com/sksabbirhossain/daily-blogs"}
              live={"https://daily-blogs.vercel.app"}
              backend={"https://github.com/sksabbirhossain/daily-blogs-server"}
            />
          </div>
        </div>

        {/* project 3 */}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
            <Image
              src={"/projects/megamart.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-3">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
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
            <h3 className="font-ovo mt-1 text-xl font-bold text-gray-700 capitalize">
              megamart - <span className="font-medium">e-commerce website</span>
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              scalable online shopping platform featuring product management,
              secure checkout, and a seamless user experience for both customers
              and admins.
            </p>

            {/*code link */}
            <ProjectCardLink
              frontend={"https://github.com/sksabbirhossain/megamart-ecommerce"}
              live={"https://megamart-ecommerce.netlify.app"}
              backend={
                "https://github.com/sksabbirhossain/megamart-ecommerce-server"
              }
            />
          </div>
        </div>

        {/* project 4*/}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
            <Image
              src={"/projects/social-media.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-3">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
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
            <h3 className="font-ovo mt-1 text-xl font-bold text-gray-700 capitalize">
              social media website
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              real-time, interactive platform built with MERN stack, featuring
              posts, chat, followers, and an engaging feed for seamless user
              connections.
            </p>

            {/*code link */}
            <ProjectCardLink
              frontend={"https://github.com/sksabbirhossain/social-media"}
              live={"https://github.com/sksabbirhossain"}
              backend={"https://github.com/sksabbirhossain/social-media-server"}
            />
          </div>
        </div>

        {/* project 5*/}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
            <Image
              src={"/projects/social-media.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-3">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
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
            <h3 className="font-ovo mt-1 text-xl font-bold text-gray-700 capitalize">
              chat app - <span className="font-medium">chat application</span>
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              real-time messaging platform with text, file sharing, and live
              updates powered by Socket.IO for smooth and instant communication.
            </p>

            {/*code link */}
            <ProjectCardLink
              frontend={"https://github.com/sksabbirhossain/chat-app"}
              live={"https://github.com/sksabbirhossain"}
              backend={"https://github.com/sksabbirhossain/chat-app-server"}
            />
          </div>
        </div>

        {/* project 6*/}
        <div className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* image */}
          <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
            <Image
              src={"/projects/daily-food.png"}
              width={1000}
              height={1000}
              alt="project image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-3 py-3">
            {/* tack stack list */}
            <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
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
              <p className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow">
                firebase
              </p>
            </div>

            {/* title */}
            <h3 className="font-ovo mt-1 flex items-center text-xl font-bold text-gray-700 capitalize">
              daily food -{" "}
              <span className="text-[14px] font-medium">
                food dalivery services
              </span>
            </h3>
            {/* details */}
            <p className="font-ovo mt-1 text-[16px] text-gray-600">
              delivery platform designed to track meals, manage orders, and
              ensure healthy, hassle-free dining every day.
            </p>

            {/*code link */}
            <ProjectCardLink
              frontend={"https://github.com/sksabbirhossain/daily-food-clint"}
              live={"https://daily-food-1dafd.web.app"}
              backend={"https://github.com/sksabbirhossain/daily-food-server"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
