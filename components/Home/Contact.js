import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-18 sm:pt-[75px]" id="contact">
      {/* heading */}
      <div className="space-y-1 text-center">
        <p className="font-ovo text-xl text-gray-600 capitalize">
          contact with me
        </p>
        <h1 className="font-ovo mb-2 text-4xl font-bold text-gray-700 capitalize sm:text-5xl">
          get in touch
        </h1>
        <p className="font-ovo mx-auto max-w-xl text-[16px] text-gray-700">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </div>
      {/* form */}
      <form className="relative mx-auto mt-8 flex max-w-2xl flex-col space-y-4">
        {/* background */}
        <div className="absolute top-0 left-0 -z-10 h-14 w-full max-w-[500rem] -rotate-12 bg-gradient-to-r from-green-500 from-20% via-sky-700 via-30% to-emerald-500 to-90% blur-[85px]" />
        <input
          type="text"
          placeholder="Your Name"
          className="backdrop-blur-5xl w-full rounded border border-gray-300 bg-white/50 px-4 py-2 text-gray-700 focus:border-emerald-600 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="backdrop-blur-5xl w-full rounded border border-gray-300 bg-white/50 px-4 py-2 text-gray-700 focus:border-emerald-600 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="backdrop-blur-5xl w-full rounded border border-gray-300 bg-white/50 px-4 py-2 text-gray-700 focus:border-emerald-600 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="cursor-pointer self-center rounded bg-gray-600 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
