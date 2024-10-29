import React from "react";

export default function Skills({ image, title }) {
  return (
    <div class="blog_card_small hover:-translate-y-3 transition-all duration-500 cursor-pointer">
      <img
        alt=""
        src={image}
        style={{
          height: 35,
          width: 35,
          objectFit: "contain",
        }}
      />
      <h3 className="ml-2 font-bold text-xl text-blue-950">{title}</h3>
    </div>
  );
}
