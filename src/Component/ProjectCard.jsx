import React from "react";

const ProjectCard = ({ image, altText, liveLink, githubLink }) => {
  return (
    <div className="image-container">
      <img
        src={image}
        alt={altText}
        className="w-[20rem] lg:w-[20rem] rounded-md cursor-pointer text-center"
      />
      <div className="button-container flex gap-2 justify-center">
        {/* <a
          href={liveLink}
          className="button live-project-button"
          target="_blank"
        >
          <i className="fa-solid fa-link mx-2"></i>Live Project
        </a> */}

        <button className="bg-regal-blue p-2 lg:py-2 rounded-md items-center font-poppins lg:text-[15px] text-white my-8 hover:dark:bg-violet-800">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Project
          </a>
        </button>

        {/* <a href={githubLink} className="button github-button">
          <i className="fa-brands fa-github mx-2"></i>GitHub
        </a> */}

        <button className=" bg-white border border-regal-blue p-2 lg:py-2 rounded-md items-center font-poppins lg:text-[15px] text-regal-blue hover:text-violet-800 my-8 hover:dark:border-violet-800">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
