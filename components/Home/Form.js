"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // handle form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setLoading(false);
        // clear form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setLoading(false);
        toast.error(
          data.errors?.common?.msg || "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name here..."
        className="backdrop-blur-5xl w-full rounded border border-emerald-500/40 bg-white/30 px-2 py-2.5 text-gray-700 transition-all duration-500 ease-in-out focus:border-transparent focus:shadow focus:ring-1 focus:ring-emerald-600/50 focus:outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Your email here..."
        className="backdrop-blur-5xl w-full rounded border border-emerald-500/40 bg-white/30 px-2 py-2.5 text-gray-700 lowercase transition-all duration-500 ease-in-out focus:border-transparent focus:shadow focus:ring-1 focus:ring-emerald-600/50 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Write your message here..."
        rows="5"
        className="backdrop-blur-5xl w-full rounded border border-emerald-500/40 bg-white/30 px-2 py-2.5 text-gray-700 transition-all duration-500 ease-in-out focus:border-transparent focus:shadow focus:ring-1 focus:ring-emerald-600/50 focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      {/* button */}
      <button
        disabled={loading}
        className="font-ovo flex cursor-pointer items-center gap-1 self-center rounded-full border border-gray-500/30 bg-emerald-600/80 px-5 py-2 text-center text-gray-50 capitalize transition-all duration-500 ease-in-out hover:border-gray-200/30 hover:bg-gray-100/30 hover:text-gray-700 hover:shadow hover:shadow-gray-400/30 hover:backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-95"
      >
        {loading ? (
          <>
            <span className="animate-spin">
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
                  d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
            </span>
            <span>sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </span>
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
