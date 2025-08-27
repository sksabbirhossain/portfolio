import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mx-auto max-w-5xl px-4 pt-18 sm:pt-[75px]"
      id="services"
    >
      {/* heading */}
      <div className="space-y-1 text-center">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-ovo text-xl text-gray-600"
        >
          What i offers
        </motion.p>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-ovo mb-2 text-4xl font-bold text-gray-700 sm:text-5xl"
        >
          My services
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-ovo mx-auto max-w-xl text-[16px] text-gray-700"
        >
          I provide full-stack web development solutions, creating modern,
          responsive, and user-friendly websites and applications tailored to
          your needs.
        </motion.p>
      </div>

      {/* description */}
      <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="absolute top-18 right-0 h-12 w-full max-w-[500rem] -rotate-10 bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% blur-[70px]" />
        {/* card */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="z-10 flex flex-3 flex-col space-y-2 rounded-md border border-gray-200 bg-amber-50/50 px-4 py-5 backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          {/* icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
            <Image src={"/tech/figma.png"} width={40} height={40} alt="html" />
          </div>
          {/* title */}
          <h3 className="font-ovo mt-4 text-xl font-semibold text-gray-700 capitalize">
            UI/UX design
          </h3>
          {/* details */}
          <p className="font-ovo text-[16px] text-gray-600">
            I design intuitive and engaging UI/UX that enhances user experience
            and boosts interaction.
          </p>
          <Link
            href={""}
            className="font-ovo flex items-center text-[16px] font-semibold text-green-600 transition-colors duration-300 ease-in-out hover:text-green-700"
          >
            Lern more
          </Link>
        </motion.div>

        {/* card 2*/}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="z-10 flex flex-3 flex-col space-y-2 rounded-md border border-gray-200 bg-indigo-50/50 px-4 py-5 backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          {/* icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
            <Image
              src={"/tech/vs-code.png"}
              width={40}
              height={40}
              alt="html"
            />
          </div>
          {/* title */}
          <h3 className="font-ovo mt-4 text-xl font-semibold text-gray-700 capitalize">
            frontend development
          </h3>
          {/* details */}
          <p className="font-ovo text-[16px] text-gray-600">
            I build responsive and dynamic frontend interfaces that bring
            designs to life seamlessly.
          </p>
          <Link
            href={""}
            className="font-ovo flex items-center text-[16px] font-semibold text-green-600 transition-colors duration-300 ease-in-out hover:text-green-700"
          >
            Lern more
          </Link>
        </motion.div>

        {/* card 3*/}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="z-10 flex flex-3 flex-col space-y-2 rounded-md border border-gray-200 bg-teal-50/50 px-4 py-5 backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          {/* icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-100 hover:shadow-lg">
            <Image
              src={"/tech/mongodb.png"}
              width={40}
              height={40}
              alt="html"
            />
          </div>
          {/* title */}
          <h3 className="font-ovo mt-4 text-xl font-semibold text-gray-700 capitalize">
            backend development
          </h3>
          {/* details */}
          <p className="font-ovo text-[16px] text-gray-600">
            I develop robust and scalable backend systems to power smooth and
            secure applications.
          </p>
          <Link
            href={""}
            className="font-ovo flex items-center text-[16px] font-semibold text-green-600 transition-colors duration-300 ease-in-out hover:text-green-700"
          >
            Lern more
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
