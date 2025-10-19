import projectList from "@/utils/projectList";
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

          {/* project list */}
          {projectList?.map((project) => (
            <motion.div
              key={project?.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-white-50/50 flex flex-3 flex-col overflow-hidden rounded-md shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              {/* image */}
              <div className="flex h-full max-h-[170px] w-full rounded-md shadow">
                <Image
                  src={project?.image}
                  width={1000}
                  height={1000}
                  alt="project image"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-3 py-3">
                {/* tack stack list */}
                <div className="flex flex-wrap items-center justify-center gap-1 gap-y-1.5 capitalize">
                  {project?.tack?.map((tech, index) => (
                    <p
                      className="rounded-2xl border border-gray-300 px-2 py-[2px] text-sm text-gray-600 transition-all duration-300 ease-in-out select-none hover:bg-gray-100 hover:shadow"
                      key={index}
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                {/* title */}
                <h3 className="font-ovo mt-1 text-xl font-bold text-gray-700 capitalize">
                  {project?.title}{" "}
                  <span className="font-medium">{project?.subTitle}</span>
                </h3>
                {/* details */}
                <p className="font-ovo mt-1 text-[16px] text-gray-600">
                  {project?.description}
                </p>

                {/*code link */}
                <ProjectCardLink
                  frontend={project?.links?.frontend || ""}
                  live={project?.links?.live || ""}
                  backend={project?.links?.backend || ""}
                />
              </div>
            </motion.div>
          ))}
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
