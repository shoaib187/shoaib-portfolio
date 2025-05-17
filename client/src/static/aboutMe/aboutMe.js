import React, { memo } from "react";
import { image } from "../../components/constants/images";

const AboutMe = memo(() => {
  return (
    <>
      <section
        id="about"
        class="flex flex-wrap w-full items-center justify-center"
      >
        {/* about_me */}
        <div class="about_section4_about_me flex flex-wrap justify-between w-11/12">
          <div class="images">
            <img src={image.user_img} alt="" />
          </div>
          <div class="about w-2/3">
            <p style={{ color: "#fd246c" }}>WHO I AM?</p>
            <h1
              className="text-4xl font-bold mt-4 mb-4"
              style={{
                color: "#152a60",
              }}
            >
              About Me
            </h1>
            <p
              style={{
                color: "#888",
                fontWeight: 500,
              }}
            >
              Thank you for visiting my portfolio! My name is{" "}
              <span style={{ color: "#152a60" }}>Muhammad Shoaib</span>, and I
              am a dedicated front-end developer with over two years of
              experience specializing in React and React Native. I have a strong
              command of modern front-end technologies, including React JS,
              React Native, Material UI, Tailwind CSS, HTML, CSS, Bootstrap,
              JavaScript, and TypeScript. Additionally, I have experience
              working with Firebase to build scalable and efficient
              applications.
            </p>
            <p
              style={{
                color: "#888",
                marginTop: 20,
                fontWeight: 500,
              }}
            >
              I have a deep interest in web development i made
              <span style={{ background: "yellow", fontWeight: 600 }}>
                4+ live projects
              </span>{" "}
              for a company and my clients. I wish to use my technical acumen to
              contribute to a team that works and scales and also creates a
              positive impact on society. I Love to join you to improve my
              development skills and communication skills.
            </p>
            <a href="/cv.pdf" download="Shoaib_CV.pdf">
              <button
                style={{
                  width: 140,
                  height: 45,
                  backgroundColor: "#fd246c",
                  border: "none",
                  outline: "none",
                  borderRadius: 4,
                  color: "#fff",
                  fontSize: 16,
                  cursor: "pointer",
                  marginTop: 20,
                }}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export default AboutMe;
