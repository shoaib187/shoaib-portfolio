import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  type,
  title,
  technologies,
  onClick,
  image,
  link,
  buttonText,
}) {
  return (
    <div class="blog_card">
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            borderRadius: 10,
          }}
          class="image_hover"
        />
      </div>
      <h4
        className="project_type font-medium mt-2 text-lg uppercase"
        style={{
          color: "#fe3377",
        }}
        numberOfLines={1}
      >
        {type}
      </h4>
      <h1
        className="project_title font-semibold text-2xl"
        style={{ color: "#152a60" }}
      >
        {title}
      </h1>
      <div className="flex items-center flex-wrap mt-2">
        {technologies.map((item, index) => (
          <p
            className="technologies px-4 py-1 my-1 bg-slate-200 rounded-full mr-2"
            style={{ fontWeight: 500 }}
          >
            {item}
          </p>
        ))}
      </div>
      <Link to={link}>
        <button
          className="px-5 h-10 rounded-md mt-4 text-white font-medium absolute bottom-4"
          style={{
            background: "#fe3377",
          }}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
