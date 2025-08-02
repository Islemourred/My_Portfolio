import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center w-full">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="w-full max-w-2xl p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-white border-2 border-zinc-200 rounded-[20px] p-6 sm:p-8 xl:p-10">
          <p className={styles.sectionSubText + " text-center"}>Get in touch</p>
          <h3 className={styles.sectionHeadText + " text-center"}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white-100 font-medium mb-4">Your Name</span>
              <div className="rounded-[12px] p-[1.5px] focus-within:green-pink-gradient bg-transparent transition-all duration-300">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-light-gray py-4 px-6 placeholder:text-secondary text-white-100 rounded-[10px] outline-none border border-gray-200 font-medium w-full focus:border-accent-blue focus:ring-0 transition-all duration-300"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <span className="text-white-100 font-medium mb-4">Your email</span>
              <div className="rounded-[12px] p-[1.5px] focus-within:green-pink-gradient bg-transparent transition-all duration-300">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-light-gray py-4 px-6 placeholder:text-secondary text-white-100 rounded-[10px] outline-none border border-gray-200 font-medium w-full focus:border-accent-blue focus:ring-0 transition-all duration-300"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <span className="text-white-100 font-medium mb-4">Your Message</span>
              <div className="rounded-[12px] p-[1.5px] focus-within:green-pink-gradient bg-transparent transition-all duration-300">
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-light-gray py-4 px-6 placeholder:text-secondary text-white-100 rounded-[10px] outline-none border border-gray-200 font-medium w-full focus:border-accent-blue focus:ring-0 transition-all duration-300 resize-none"
                />
              </div>
            </label>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-accent-blue to-blue-400 py-4 px-12 rounded-xl outline-none text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg font-regular"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
