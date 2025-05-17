import React from "react";
import ProjectCard from "./custom/ProjectCard";

import { project } from "./components/constants/db";
import AppProject from "./static/appProjects/appProject";
const Templates = React.memo(() => {
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
          {project?.map((item, index) => (
            <ProjectCard
              key={`index ${index}`}
              image={item?.image}
              type={item?.subtitle}
              title={item?.title}
              buttonText={"Live Preview"}
              onClick={item?.link}
              technologies={item?.technologies}
            />
          ))}
        </div>
      </section>
      <AppProject />
    </div>
  );
});

export default Templates;
