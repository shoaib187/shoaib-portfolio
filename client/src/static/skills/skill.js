import React from "react";
import { my_skills } from "../../components/constants/db";
import Skills from "../../custom/Skills";

export default function Skill() {
  return (
    <section id="skills" class="flex flex-col items-center justify-center">
      {/* top_bar */}
      <div class="top_bar flex-col min-h-60 flex items-center justify-center">
        <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
          Why Choose Me
        </h2>
        <h1 className="text-5xl font-bold mt-2 text-blue-950">My Top Skills</h1>
      </div>
      <div class="flex flex-wrap justify-between items-center w-11/12">
        {my_skills.map((item, index) => (
          <Skills
            image={item?.image}
            title={item?.title}
            onClick={() => {}}
            key={`image-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
