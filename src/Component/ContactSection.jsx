import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mrbgpprk");

  if (state.succeeded) {
    return (
      <p class="bg-green-300 text-black font-medium p-4 rounded-lg m-4 alert">
        Thank You...🙌
      </p>
    );
  }

  return (
    <div className="lg:w-[1100px] mx-auto lg:my-[95px]" id="Contact">
      <h2 className="font-poppins font-medium text-[2.5em] lg:text-[38px] text-center">
        Contact Me
      </h2>

      <div className="flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="lg:w-[50%] hidden lg:block">
          <img src="src/assets/contact.png" alt="Contact" />
        </div>

        <div className="flex flex-col lg:w-[50%]">
          <form
            id="contactForm"
            onSubmit={handleSubmit}
            className="text-left px-4 lg:px-0"
          >
            <p className="font-poppins font-medium text-[1.5rem] lg:text-[28px] my-4">
              Get in touch
            </p>

            {/* Name input */}
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                required
                className="focus:outline-none font-poppins text-[1.5rem] lg:text-[1.1rem] mb-4 lg:w-[70%] w-full rounded-lg py-3 px-3 border"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </label>

            {/* Email input */}
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                required
                placeholder="Email*"
                className="focus:outline-none font-poppins text-[1.5rem] lg:text-[1.1rem] mb-4 lg:w-[70%] w-full rounded-lg py-3 px-3 border"
              />

              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
            </label>

            {/* Message textarea */}
            <label htmlFor="message">
              <textarea
                name="message"
                placeholder="Message"
                required
                className="focus:outline-none font-poppins text-[1.5rem] mb-4 lg:w-[70%] w-full rounded-lg py-3 px-3 border"
              ></textarea>
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-regal-blue py-2 px-5 rounded-md font-poppins lg:text-[17px] text-white my-5 hover:bg-violet-800 text-[1rem]"
            >
              Say Hello 👋
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
