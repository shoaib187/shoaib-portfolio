import React from "react";
import { image } from "../../components/constants/images";

const Experience = React.memo(() => {
  return (
    <section
      id="services"
      class="about_section2 flex items-center justify-center w-full"
    >
      {/* my_items */}
      <div class="my_items flex flex-wrap w-10/12 items-center justify-between px-6 bg-white rounded-full mt-5 py-3">
        {/* item */}
        <div class="flex items-center">
          {/* image */}
          <div class="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
            <img src={image.experience} alt="" />
          </div>
          {/* div */}
          <div class="ml-3">
            <h1 className="text-xl font-semibold">1 years job</h1>
            <h3 className="font-semibold text-rose-500">Experience</h3>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
            <img src={image.projects} alt="" />
          </div>
          <div class="ml-3">
            <h1 className="text-xl font-semibold">20+ Projects</h1>
            <h3 className="font-semibold text-rose-500">Completed</h3>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
            <img src={image.support} alt="" />
          </div>
          <div class="ml-3">
            <h1 className="text-xl font-semibold">Online 24/7</h1>
            <h3 className="font-semibold text-rose-500">Support</h3>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
