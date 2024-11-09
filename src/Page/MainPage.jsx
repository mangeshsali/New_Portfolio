import React from "react";
import NavSection from "../Component/NavSection";
import MainSection from "../Component/MainSection";
import AboutSection from "../Component/AboutSection";
import TechStack from "../Component/TechStack";
import ProjectSection from "../Component/ProjectSection";
import FooterSection from "../Component/FooterSection";
import ContactSection from "../Component/ContactSection";

const MainPage = () => {
  return (
    <div>
      <NavSection />
      <MainSection />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default MainPage;
