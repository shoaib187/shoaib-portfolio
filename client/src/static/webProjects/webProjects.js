import React from "react";
import { project } from "../../components/constants/db";
import ProjectCard from "../../custom/ProjectCard";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function WebProjects() {
  return (
    <section id="portfolio" class="flex flex-col items-center justify-center">
      {/* top_bar */}
      <div class="top_bar flex-col min-h-60 flex items-center justify-center">
        <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
          PORTFOLIO
        </h2>
        <h1 className="text-5xl font-bold mt-2 text-blue-950">
          My Latest Projects
        </h1>
      </div>
      <div class="flex flex-wrap items-center justify-between w-11/12">
        {project.slice(0, 3).map((item, index) => (
          <ProjectCard
            key={`index ${index}`}
            image={item?.image}
            type={item?.subtitle}
            title={item?.title}
            link={item?.link}
            buttonText={"Live Preview"}
            technologies={item?.technologies}
          />
        ))}
      </div>
      <Link to={"/templates"}>
        <a href="/" className="font-bold mt-2 flex items-center">
          <span style={{ color: "#fe3377" }}>Show More</span>
          <span>
            <FiArrowRight size={20} color="#fe3377" />
          </span>
        </a>
      </Link>
    </section>
  );
}
