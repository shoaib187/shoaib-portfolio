import React, { useState } from "react";
import Header from "./custom/Header";
import ProjectCard from "./custom/ProjectCard";
import { image } from "./components/constants/images";
export default function Templates() {
  const [project, setProjects] = useState([
    {
      image: image.project1,
      title: "Online auto shop and spare parts",
      subtitle: "Business website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project2,
      title: "Buy furniture online from your home",
      subtitle: "E-Commerce Furniture website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project3,
      title: "Online books shop buy books online",
      subtitle: "Books Shop",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project4,
      title: "Web Developer portfolio website",
      subtitle: "Portfolio website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project5,
      title: "Electrician portfolio website",
      subtitle: "Portfolio website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project6,
      title: "American model star portfolio website",
      subtitle: "Portfolio website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
  ]);
  return (
    <div>
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
          {project.map((item, index) => (
            <ProjectCard
              key={`index ${index}`}
              image={item?.image}
              type={item?.subtitle}
              title={item?.title}
              buttonText={"Live Preview"}
              // onClick={() => alert("Abhi na kuch keh")}
              technologies={item?.technologies}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
