import React from "react";
import { appProjects } from "../../components/constants/db";
import ProjectCard from "../../custom/ProjectCard";

const AppProject = React.memo(() => {
  return (
    <section id="portfolio" class="flex flex-col items-center justify-center">
      {/* top_bar */}
      <div class="top_bar flex-col min-h-60 flex items-center justify-center">
        <h1 className="text-5xl font-bold mt-2 text-blue-950">My Apps</h1>
      </div>
      <div class="flex flex-wrap items-center justify-between w-11/12">
        {appProjects.map((item, index) => (
          <ProjectCard
            key={`index ${index}`}
            image={item?.image}
            type={item?.subtitle}
            title={item?.title}
            link={item?.link}
            buttonText={"Download Now"}
            technologies={item?.technologies}
          />
        ))}
      </div>
    </section>
  );
});

export default AppProject;
