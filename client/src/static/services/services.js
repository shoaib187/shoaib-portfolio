import React from "react";
import { achievements } from "../../components/constants/db";

export default function Services() {
  return (
    <section class="flex items-center justify-center w-full flex-col min-h-screen">
      {/* top_bar */}
      <div class="top_bar min-h-56 flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4" style={{ color: "#fd246c" }}>
          CREATIVE SERVICE
        </h2>
        <h1 className="font-bold text-6xl text-blue-950">What Do I Offer?</h1>
      </div>
      <div class="flex flex-wrap items-center justify-between w-11/12">
        {achievements.map((item, index) => {
          return (
            <div class="card" key={`achievement ${index}`}>
              <div class="top">
                <div
                  className="absolute w-10 h-16 bg-slate-300 top-0 left-12"
                  style={{ background: item?.background, opacity: 0.2 }}
                ></div>
                <div
                  className="image image2"
                  style={{
                    background: `${item.background}`,
                  }}
                >
                  <img src={item.image} alt="" />
                </div>
              </div>
              <div class="info">
                <h1>{item?.title}</h1>
                <p>{item?.description}</p>
              </div>
              <img id="elipse" src={item?.elipse} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
