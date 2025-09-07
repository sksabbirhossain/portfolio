import * as motion from "motion/react-client";
import Form from "./Form";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mx-auto max-w-5xl px-4 pt-18 sm:pt-[75px]"
      id="contact"
    >
      {/* heading */}
      <div className="space-y-1 text-center">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-ovo text-xl text-gray-600 capitalize"
        >
          contact with me
        </motion.p>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-ovo mb-2 text-4xl font-bold text-gray-700 capitalize sm:text-5xl"
        >
          get in touch
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-ovo mx-auto max-w-xl text-[16px] text-gray-700"
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </motion.p>
      </div>
      {/* form */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="relative mx-auto mt-8 flex max-w-2xl flex-col"
      >
        {/* background */}
        <div className="absolute top-0 left-0 -z-10 h-14 w-full max-w-[500rem] -rotate-12 bg-gradient-to-r from-green-500 from-20% via-sky-700 via-30% to-emerald-500 to-90% blur-[85px]" />

        {/* form fields */}
        <Form />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
