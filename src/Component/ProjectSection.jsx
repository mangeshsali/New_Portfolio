// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path as necessary

const ProjectSection = () => {
  const projects = [
    // {
    //   image: "/assets/sorting.png",
    //   altText: "Sorting Visualizer",
    //   liveLink: "https://sorting-visualiz.netlify.app/",
    //   githubLink: "https://github.com/mangeshsali/Sorting_visualizer",
    // },
      {
      image: "/assets/streamer.png",
      altText: "Streamer App",
      liveLink: "https://streamer-eosin.vercel.app/",
      githubLink: "https://github.com/mangeshsali/Strammer",
    },
        {
      image: "/assets/cinema.png",
      altText: "Cinema GPT",
      liveLink: "https://cinemaa-gpt.vercel.app/",
      githubLink: "https://github.com/mangeshsali/CinemaGPT",
    },
  
    {
      image: "/assets/Screenshot_20240202_122353.png",
      altText: "Python Documentation",
      liveLink: "https://pythondoc.netlify.app/",
      githubLink: "https://github.com/mangeshsali/python-doc",
    },

    // {
    //   image: "/assets/news.jpg",
    //   altText: "News App",
    //   liveLink: "https://newswavee.netlify.app/",
    //   githubLink: "https://github.com/mangeshsali/News_App",
    // },

    // {
    //   image: "/assets/changecolor.png",
    //   altText: "Color Flipper",
    //   liveLink: "https://flipercolor.netlify.app/",
    //   githubLink:
    //     "https://github.com/mangeshsali/OIBSIP/tree/main/Color%20Fliper",
    // },
    {
      image: "/assets/bubblegame.jpg",
      altText: "Bubble Game",
      liveLink: "https://thebubblegame.netlify.app/",
      githubLink: "https://github.com/mangeshsali/Bubbble_Game",
    },
    {
      image: "/assets/Screenshot_20240202_123122.png",
      altText: "Foodies App",
      liveLink: "https://foodiess.vercel.app/",
      githubLink: "https://github.com/mangeshsali/foodies",
    },

  ];

  return (
    <section>
      <div className="lg:w-[1100px] mx-auto my-[95px] sm:text-center">
        <h2
          id="Projects"
          className="font-poppins font-medium text-[2.5rem] lg:text-[38px] text-center"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-8 gap-8 place-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              altText={project.altText}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
