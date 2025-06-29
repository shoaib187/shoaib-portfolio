import React from "react";
import About from "../about/about";
import Services from "../services/services";
import Experience from "../experience/experience";
import AboutMe from "../aboutMe/aboutMe";
import WebProjects from "../webProjects/webProjects";
import AppProject from "../appProjects/appProject";
import Skill from "../skills/skill";
import Testimonial from "../testimonial/testimonial";
import ContactUs from "../contactUs/contactUs";

export default function LandingPage() {
  return (
    <div>
      <About />
      <Experience />
      <Services />
      <AboutMe />
      <WebProjects />
      <AppProject />
      <Skill />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
