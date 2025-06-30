import React from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { image } from "../../components/constants/images";
import { ReactTyped } from "react-typed";

const About = React.memo(() => {
  const phoneNumber = "923248052718";
  const message = encodeURIComponent("Hello! I need help.");

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="home"
      class="about_section1 flex flex-wrap justify-center lg:py-20"
    >
      {/* inner_content */}
      <div class="inner_content flex w-11/12 items-center justify-between">
        {/* about_me */}
        <div class="about_me w-80 pr-4">
          <h4 className="text-2xl text-blue-950">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold mt-4 mb-8 text-blue-950">
            Hi, I’m <span style={{ color: "#fd246c" }}>Muhammad Shoaib</span>
          </h1>
          <ReactTyped
            strings={[
              "Welcome to my site!",
              "React Native & Next.js Developer at Snipbyte!",
              "React Native Developer!",
              "React Js Developer!",
              "Front-End-Developer!",
              "Node Js Developer!",
              "MERN Stack Developer!",
              "Web Developer!",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
            className="auto_type text-6xl font-bold text-blue-950 mb-6"
          />

          {/* animate */}
          <p className="text-slate-600 mt-6">
            Building Your Idea Through My Development Skills, front-end web
            development, specializing in React JS, React Native,Tailwind CSS,
            HTML, CSS, TypeScript, Javascript and Material-UI. With a strong
            foundation in these technologies, I aim to create responsive and
            user-friendly web interfaces, leveraging my skills to contribute to
            innovative projects.
          </p>
          <h3 className="text-blue-950 mt-4 mb-3">Find with me</h3>
          <ul className="flex items-center justify-between w-1/4">
            <li className="w-14 h-14 rounded-lg" class="li">
              <a href="https://www.facebook.com/profile.php?id=100043930358095">
                <FiFacebook size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="/" onClick={handleWhatsAppClick}>
                <SiWhatsapp size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="https://www.linkedin.com/in/shoaib-r-b71247209">
                <FiLinkedin size={22} className="icon" />
              </a>
            </li>
          </ul>
        </div>
        {/* image */}
        <div class="about_image flex w-30 items-center justify-center">
          <img src={image.user_img} alt="" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
});

export default About;
