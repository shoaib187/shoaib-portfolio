import React, { memo } from "react";
import "../App.css";

const TestimonialCard = memo(({ image, name, country, review }) => {
  return (
    <div className="testimonial_card p-4">
      <div className="flex items-center w-full">
        <img
          src={image}
          className={"testimonial_card_image"}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            objectFit: "cover",
          }}
          alt="image not found"
        />
        <div className={"ml-4 text-left"}>
          <h1 className="font-semibold text-lg text-blue-950">{name}</h1>
          <p className="text-slate-600">{country}</p>
        </div>
      </div>
      <p
        className="testimonial_text text-slate-500 text-left mt-4"
        style={{ fontWeight: 500 }}
      >
        {review}
      </p>
      <div className="text-yellow-500 text-left text-2xl mt-2">✩✩✩✩✩</div>
    </div>
  );
});

export default TestimonialCard;
