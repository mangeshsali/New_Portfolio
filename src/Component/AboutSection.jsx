import React from "react";
import AboutImage from "/src/assets/img.png"; // Adjust the path as needed

const AboutSection = () => {
  return (
    <section>
      <div className="lg:w-[1100px] mx-auto my-0 md:my-0">
        <h2
          id="About"
          className="font-poppins font-medium text-[2.5rem] lg:text-[38px] text-center"
        >
          About Me
        </h2>

        <div className="container flex my-[2rem] flex-col items-center justify-center lg:flex-row">
          <div className="left mr-[10rem]">
            <img
              src={AboutImage}
              alt="Mangesh Sali"
              className="w-[10rem] md:w-[22rem] lg:w-[80rem] rounded-full text-center place-content-center"
            />
          </div>
          <div className="right ml-5 mr-5">
            <h2 className="font-poppins text-[1.8rem] lg:text-[2.5rem] font-semibold">
              Mangesh Sali
            </h2>
            <p className="bg-white-shade text-[1.2rem] lg:text-[1rem] text-regal-blue w-[12rem] lg:w-[10rem] my-4">
              Frontend Developer
            </p>
            <p className="font-poppins text-black-grey text-[1rem] leading-relaxed tracking-normal lg:text-[1.2rem]">
              &emsp;🚀 I'm a passionate MCA student with a deep-rooted
              enthusiasm for programming and technology. My journey through
              computer science has built a strong foundation in programming
              languages, and I specialize in web development, Java, and Python.
              As an aspiring web developer, I excel in crafting dynamic,
              user-friendly websites. Proficient in HTML, CSS, JavaScript, and
              React, I create visually captivating and responsive web
              interfaces. My expertise spans front-end and back-end
              technologies, enabling me to craft seamless and engaging web
              experiences.
            </p>
            <button className="bg-regal-blue p-2 lg:py-2 rounded-md items-center font-poppins lg:text-[17px] text-white my-8 hover:dark:bg-violet-800">
              <a
                href="https://drive.google.com/file/d/1LgPRBErKG3AnD1IMLNG65szuWuhy0ptl/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
