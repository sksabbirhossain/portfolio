import * as motion from "motion/react-client";
import Image from "next/image";
import ProjectCardLink from "./Card/ProjectCardLink";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mx-auto max-w-5xl px-4 pt-18 sm:pt-[75px]"
      id="projects"
    >
      {/* heading */}
      <div className="space-y-1 text-center">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-ovo text-xl text-gray-600"
        >
          What i was do
        </motion.p>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-ovo mb-2 text-4xl font-bold text-gray-700 sm:text-5xl"
        >
          My projects
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-ovo mx-auto max-w-xl text-[16px] text-gray-700"
        >
          Explore some of the projects I’ve built, showcasing my skills in
          full-stack development, UI/UX design, and modern web technologies.
        </motion.p>
      </div>

      {/* description */}
      <div>
        <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {/* background */}
          <div className="absolute top-[50%] right-0 -z-10 h-12 w-full max-w-[500rem] bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% blur-[150px] sm:rotate-12" />

          {/* project */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
          >
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
                backend={
                  "https://github.com/sksabbirhossain/business-ims-server"
                }
              />
            </div>
          </motion.div>

          {/* project 2 */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
          >
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
                backend={
                  "https://github.com/sksabbirhossain/daily-blogs-server"
                }
              />
            </div>
          </motion.div>

          {/* project 3 */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
          >
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
                megamart -{" "}
                <span className="font-medium">e-commerce website</span>
              </h3>
              {/* details */}
              <p className="font-ovo mt-1 text-[16px] text-gray-600">
                scalable online shopping platform featuring product management,
                secure checkout, and a seamless user experience for both
                customers and admins.
              </p>

              {/*code link */}
              <ProjectCardLink
                frontend={
                  "https://github.com/sksabbirhossain/megamart-ecommerce"
                }
                live={"https://megamart-ecommerce.netlify.app"}
                backend={
                  "https://github.com/sksabbirhossain/megamart-ecommerce-server"
                }
              />
            </div>
          </motion.div>

          {/* project 4*/}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
          >
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
                backend={
                  "https://github.com/sksabbirhossain/social-media-server"
                }
              />
            </div>
          </motion.div>

          {/* project 5*/}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            {/* image */}
            <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
              <Image
                src={"/projects/chat-app.png"}
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
                updates powered by Socket.IO for smooth and instant
                communication.
              </p>

              {/*code link */}
              <ProjectCardLink
                frontend={"https://github.com/sksabbirhossain/chat-app"}
                live={"https://github.com/sksabbirhossain"}
                backend={"https://github.com/sksabbirhossain/chat-app-server"}
              />
            </div>
          </motion.div>

          {/* project 6*/}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
          >
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
          </motion.div>
        </div>
      </div>
      {/* show more button */}
      <div className="relative mt-8 flex items-center justify-center">
        {/* background */}
        <div className="absolute bottom-4 left-0 -z-10 h-14 w-full max-w-[500rem] bg-gradient-to-r from-sky-500/80 from-10% via-green-700/80 via-30% to-emerald-500/80 to-90% blur-[65px]" />

        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          href="#"
          className="font-ovo inline-block rounded-full border border-gray-300/30 bg-emerald-600/80 px-6 py-2 text-center font-medium text-gray-50 capitalize backdrop-blur-sm transition-all duration-500 ease-in-out hover:bg-gray-100/30 hover:text-gray-700 hover:shadow hover:shadow-gray-400/30"
        >
          Show more
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Projects;
