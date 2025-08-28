import * as motion from "motion/react-client";
import Image from "next/image";
import Progress from "./Progress";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mx-auto max-w-5xl px-4 pt-18 sm:pt-[75px]"
      id="skills"
    >
      {/* heading */}
      <div className="space-y-1 text-center">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-ovo text-xl text-gray-600"
        >
          technical level
        </motion.p>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-ovo mb-2 text-4xl font-bold text-gray-700 sm:text-5xl"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-ovo mx-auto max-w-xl text-[16px] text-gray-700"
        >
          Here are the technical skills and tools I’ve mastered to build modern,
          scalable, and user-friendly web applications.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative mt-10 grid grid-cols-1 gap-15 sm:grid-cols-2"
      >
        {/* background */}
        <div className="absolute top-18 right-0 h-12 w-full max-w-[500rem] -rotate-10 bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% blur-[70px]" />

        {/* skills progress bar */}
        <div className="z-10 space-y-6 transition-all duration-300 ease-in-out">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-ovo mb-2 text-xl font-semibold text-gray-800 capitalize"
          >
            My skills
          </motion.h3>

          {/* skils items */}
          <div className="space-y-4">
            {/* skill 1 */}
            <Progress title="html 5" percent={90} />
            <Progress title="css3" percent={80} />
            <Progress title="bootstrap & tailwindcss" percent={90} />
            <Progress title="javascript" percent={80} />
            <Progress title="react js & next js" percent={90} />
            <Progress title="node js & mongodb" percent={85} />
          </div>
        </div>

        {/* skills descriptions */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="z-10 flex flex-col"
        >
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-ovo mb-2 text-xl font-semibold text-gray-800 capitalize"
          >
            Why choose me?
          </motion.h3>

          <motion.div className="space-y-4">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-ovo text-[17px] text-gray-800"
            >
              I’m a passionate full-stack web developer who builds modern,
              scalable, and user-friendly applications. With expertise in the
              MERN stack, I ensure both clean design and powerful functionality.
              I use NextAuth for secure authentication, caching for high
              performance, and message queues like BullMQ and RabbitMQ for
              efficient background processing. My goal is to deliver reliable,
              responsive, and tailored solutions that truly meet client needs.
            </motion.p>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-ovo text-[17px] text-gray-800"
            >
              I am committed to continuous learning and staying updated with the
              latest web development trends and best practices. My goal is to
              deliver high-quality solutions that drive success for my clients
              and contribute positively to the tech community.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
