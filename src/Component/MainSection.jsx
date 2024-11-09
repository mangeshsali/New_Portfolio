import React from "react";
import ProfileIMG from "/src/assets/Propic1652556568004.png";
import PatternIMG from "/src/assets/dotted-pattern.svg";
import BGIMG from "/src/assets/herobgc1.jpg";
import WavingGIF from "/src/assets/waving-hand.1da6fc7a.gif";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import MyComponent from "./MyComponent";

const MainSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BGIMG})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-full w-full m-0 p-0 pb-[3rem] lg:pb-[8rem] max-w-full"
    >
      <div className="flex flex-col-reverse lg:flex-row lg:w-[1100px] mx-auto lg:mt-[150px] mt-[90px]">
        <div>
          <p className="flex items-center m-3" id="Home">
            <img
              src={WavingGIF}
              alt="Waving hand"
              loading="lazy"
              className="w-12"
            />
            <span className="font-poppins text-[1rem] lg:text-[20px] mx-3 font-normal">
              Heyy...
            </span>
          </p>
          <h1 className="font-poppins text-[2.2rem] lg:text-[56px] font-semibold my-3 m-3">
            I'm Mangesh Sali
          </h1>
          <p className="font-poppins text-[1.9rem] lg:text-[30px] font-light m-3 flex gap-2">
            I am a
            <MyComponent />
          </p>

          <p className="font-poppins text-[1rem] lg:text-[1.2rem] text-black-grey my-5 m-3">
            I focus on developing user-friendly web applications that meet the
            client's requirements, with attention to detail, scalability, and
            performance.
          </p>

          <button className="bg-regal-blue p-3 lg:py-2 rounded-lg items-center font-poppins lg:text-[17px] text-white my-5 hover:dark:bg-violet-800 m-3">
            <a href="#About">About me</a>
          </button>
          <div className="lg:flex flex-col fixed left-12 bottom-6 hidden">
            <Link
              to="https://www.linkedin.com/in/mangesh-sali-535b55224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="bg-regal-blue py-2 px-2 rounded-full my-[0.3rem] text-white cursor-pointer text-[2.6rem]" />
            </Link>

            <Link
              to="https://github.com/mangeshsali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="bg-regal-blue py-2 px-2 rounded-full my-[0.3rem] text-white cursor-pointer text-[2.6rem]" />
            </Link>

            <Link
              to="https://www.instagram.com/mangesh._.sali16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="bg-regal-blue py-2 px-2 rounded-full my-[0.3rem] text-white cursor-pointer text-[2.6rem]" />
            </Link>

            <Link
              to="https://www.facebook.com/mangesh.sali.14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="bg-regal-blue py-2 px-2 rounded-full my-[0.3rem] text-white cursor-pointer text-[2.6rem]" />
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ProfileIMG}
            alt="Profile"
            loading="lazy"
            className="mx-auto w-[18rem] lg:w-[65%]"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src={PatternIMG}
          alt="Dotted pattern"
          width="180px"
          height="100px"
          className="absolute hidden top-[550px] opacity-60"
        />
      </div>
    </section>
  );
};

export default MainSection;
