import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "../../custom/TestimonialCard";
import { image } from "../../components/constants/images";

export default function Testimonial() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="testimonial" class="flex flex-col items-center justify-center">
      {/* top_bar */}
      <div class="top_bar flex-col min-h-60 flex items-center justify-center">
        <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
          TESTIMONIAL
        </h2>
        <h1 className="text-5xl font-bold mt-2 text-blue-950">
          Client's Review
        </h1>
      </div>
      {/* Testimonials */}
      <div class="w-11/12">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={2000}
          centerMode={true}
          showIndicators={false}
          centerSlidePercentage={centerSlidePercentage}
          swipeable={true}
        >
          <TestimonialCard
            image={
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            }
            name="Sarah M., Marketing Director at NovaTech"
            country={"USA"}
            review="A pleasure to work with! Shoaib not only delivered the project ahead of schedule but also added thoughtful improvements we hadn’t considered. Truly impressed with the professionalism and communication."
          />
          <TestimonialCard
            image={"https://images.unsplash.com/photo-1552058544-f2b08422138a"}
            name="David R., Co-Founder of Breva Studios"
            country={"England"}
            review="Outstanding quality of work. Shoaib translated our rough vision into a fully functional, beautifully designed website. Quick response times and great attention to detail."
          />
          <TestimonialCard
            image={
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            }
            name="Anna K., Project Manager at Loopline"
            country={"United Arab Emirates"}
            review="We hired Shoaib for a front-end overhaul. The result exceeded expectations—modern, responsive, and clean UI. Definitely hiring again!"
          />
          <TestimonialCard
            image={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            }
            name=" Liam T., CTO at Zentrico Solutions"
            country={"Mexico"}
            review="I’ve worked with many developers over the years. Shoaib stands out for being efficient, creative, and truly invested in the success of our product."
          />
        </Carousel>
      </div>
    </section>
  );
}
