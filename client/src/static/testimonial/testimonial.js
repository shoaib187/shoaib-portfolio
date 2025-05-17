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
            image={image.image20}
            name="Shamsuddin Malik"
            country={"USA Client"}
            review="Highly satisfied with the services provided by Muhammad Shoaib. Professionalism, expertise, and attention to detail were top-notch. Exceeded expectations, delivering a high-quality product within agreed timeframe. Clear, prompt communication and valuable insights. Exceptional craftsmanship and attention to detail. Highly recommend!"
          />
          <TestimonialCard
            image={image.image3}
            name="Sobia Yaseen"
            country={"React Js developer"}
            review="Muhammad Shoaib was incredibly responsive, even though we live in very different time zones. I had a lot of small adjustments I asked him to make and he made all of them very quickly. I highly recommend him. Best Regards, Sobia Yaseen"
          />
          <TestimonialCard
            image={image.tolga}
            name=" Muneer Khair"
            country={"Mk mobile detailing Owner"}
            review="I am thrilled with the outstanding service I received from Muhammad Shoaib. From start to finish, the team demonstrated exceptional professionalism and expertise. They were attentive to my needs, provided regular updates, and delivered the final product ahead of schedule. The quality exceeded my expectations, and I highly recommend their services to anyone in need."
          />
          <TestimonialCard
            image={image.image20}
            name="Emily Chen"
            country={"Cosmetics & Beauty Salon"}
            review="I have a deep interest in web development i made 90+ live projects for a company and my clients. I wish to use my technical acumen to contribute to a team that works and scales and also creates a positive impact on society. I Love to join you to improve my development skills and communication skills."
          />
        </Carousel>
      </div>
    </section>
  );
}
