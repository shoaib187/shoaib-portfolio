import "./App.css";
import { MdSend } from "react-icons/md";
import { ReactTyped } from "react-typed";
import {
  FiArrowRight,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMenu,
  FiTwitter,
} from "react-icons/fi";
import emailjs from "emailjs-com";
import ProjectCard from "./custom/ProjectCard";
import { useEffect, useState } from "react";
import Skills from "./custom/Skills";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  LiaLocationArrowSolid,
  LiaMailBulkSolid,
  LiaPhoneVolumeSolid,
} from "react-icons/lia";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdClose } from "react-icons/md";
import { SiFiverr } from "react-icons/si";
import { Link } from "react-router-dom";
import TestimonialCard from "./custom/TestimonialCard";
import { ChatComponent } from "./custom/ChatComponent";
import { image } from "./components/constants/images";
import Header from "./custom/Header";
function MainPage() {
  const [achievements, setAchievements] = useState([
    {
      image: image.coding,
      title: "Web Development",
      description:
        "For web development, we create stunning, user-friendly websites tailored to your brand and goals. Our expertise in coding, design, and optimization ensures a seamless online presence that captivates and converts visitors.",
      elipse: image.elipse1,
      background: "#fd246c",
    },
    {
      image: image.design,
      title: "Creative Design",
      description:
        "With creative design, we bring your vision to life through captivating visuals and branding. Our artistic prowess transforms ideas into eye-catching graphics, logos, and marketing materials that resonate with your audience and elevate your brand identity.",
      elipse: image.elipse2,
      background: "#48cda0",
    },
    {
      image: image.projects,
      title: "Project Consultancy",
      description:
        "In project consultancy, we serve as your strategic partner, offering expert guidance to navigate complex endeavors. Our tailored solutions and insights ensure seamless project execution, cost-efficiency, and optimal results, empowering your business to thrive.",
      elipse: image.elipse3,
      background: "#177fff",
    },
    {
      image: image.services,
      title: "Exceptional Services",
      description:
        "Our focus on excellence shines through in every project. We meticulously plan, design, and develop solutions that exceed expectations. Trust us for flawlessly executed projects that deliver tangible results and drive success.",
      elipse: image.elipse4,
      background: "#e6bc14",
    },
    {
      image: image.idea,
      title: "Awesome Idea",
      description:
        "With Awesome Idea, we transform your innovative concepts into reality. Our creative team refines, prototypes, and brings your ideas to life, ensuring they're not just great but truly exceptional. Your vision, our expertise, limitless possibilities.",
      elipse: image.elipse5,
      background: "#e614df",
    },
    {
      image: image.development,
      title: "Development Design",
      description:
        "Development Design is our specialty. We seamlessly blend development and design, crafting websites and applications that are not only functional but also visually appealing. Our holistic approach ensures a harmonious and engaging user experience.",
      elipse: image.elipse6,
      background: "#14dfe6",
    },
  ]);
  const [project, setProjects] = useState([
    {
      image: image.project1,
      title: "Online auto shop and spare parts",
      subtitle: "Business website",
      technologies: ["HTML5", "CSS3", "Javascript"],
      link: "https://auto-shop-topaz.vercel.app",
    },
    {
      image: image.project2,
      title: "Buy furniture online from your home",
      subtitle: "E-Commerce Furniture website",
      technologies: ["HTML5", "CSS3", "Javascript"],
      link: "https://e-commerce-furniture-website-kappa.vercel.app",
    },
    {
      image: image.project3,
      title: "Online books shop buy books online",
      subtitle: "Books Shop",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project4,
      title: "Web Developer portfolio website",
      subtitle: "Portfolio website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project5,
      title: "Electrician portfolio website",
      subtitle: "Portfolio website",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      image: image.project6,
      title: "American model star portfolio website",
      subtitle: "Portfolio website",
      technologies: ["HTML5", "CSS3", "Javascript"],
      link: "https://modelstar-portfolio.vercel.app",
    },
  ]);
  const [my_skills, set_my_skills] = useState([
    {
      image: image.react_icon,
      title: "React Js",
    },
    {
      image: image.tailwind_icon,
      title: "Tailwind Css",
    },

    {
      image: image.javascript,
      title: "Javascript",
    },
    {
      image: image.typescript,
      title: "Typescript",
    },
    {
      image: image.html,
      title: "HTML5",
    },
    {
      image: image.css,
      title: "CSS3",
    },
    {
      image: image.vscode,
      title: "VSCode",
    },
    {
      image: image.firebase,
      title: "Firebase",
    },
    {
      image: image.material_icon,
      title: "Material UI",
    },
    {
      image: image.reactnative,
      title: "React Native",
    },
    {
      image: image.mongodb,
      title: "MongoDB",
    },
    {
      image: image.nodejs,
      title: "Node.js",
    },
    {
      image: image.express,
      title: "Express.js",
    },
    {
      image: image.redux,
      title: "Redux",
    },
  ]);

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

  const [value, setValue] = useState(0);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./cv.pdf";
    link.download = "Muhammad_Shoaib_CV.pdf";
    link.click();
  };

  const [status, setStatus] = useState("");
  const notify = () =>
    toast.success(status, {
      icon: <MdSend />,
      type: "success",
    });
  const [formData, setFormData] = useState({
    to_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { to_name, from_email, phone, message } = formData;
    const templateParams = {
      to_name, // Receiver's name (you can set it as your name)
      from_email, // Sender's email (the one user entered)
      phone, // User's phone number
      message, // User's message
    };

    // console.log(templateParams);
    // Send the form data using EmailJS
    emailjs
      .send(
        "service_7gx3ul6", // Replace with your Service ID from EmailJS
        "template_sz9s69p", // Replace with your Template ID from EmailJS
        templateParams, // Target the form to send form data
        "qCtVYXrdJoqEWJ-xt" // Replace with your User ID from EmailJS
      )
      .then(
        (result) => {
          setStatus("Email sent successfully!");
        },
        (error) => {
          // console.log(error.text);
          setStatus("Failed to send email. Please try again later.");
        }
      );

    notify();
  };

  return (
    <div className="App">
      <Header />
      <ToastContainer
        icon={true}
        progressStyle={{ background: "#fe3377" }}
        pauseOnHover={false}
        toastStyle={{ background: "#fff" }}
      />
      {/* about_section1 */}
      <section
        id="home"
        class="about_section1 flex flex-wrap justify-center min-h-screen"
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
                "Welcome to our site!",
                "Front-End-Developer!",
                "React Js Developer!",
                "Web Developer!",
                "React Native Developer!",
                "Node Js Developer!",
                "MERN Stack Developer!",
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
              user-friendly web interfaces, leveraging my skills to contribute
              to innovative projects.
            </p>
            <h3 className="text-blue-950 mt-4 mb-3">Find with me</h3>
            <ul className="flex items-center justify-between w-1/4">
              <li className="w-14 h-14 rounded-lg" class="li">
                <a href="https://www.facebook.com/profile.php?id=100043930358095">
                  <FiFacebook size={22} className="icon" />
                </a>
              </li>
              <li className="w-14 h-14" class="li">
                <a href="#twitter">
                  <FiTwitter size={22} className="icon" />
                </a>
              </li>
              <li className="w-14 h-14" class="li">
                <a href="https://www.linkedin.com/in/muhammad-shoaib-b71247209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
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
      {/* about_section2 */}
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
      {/* about_section3 */}
      <section class="flex items-center justify-center w-full flex-col min-h-screen">
        {/* top_bar */}
        <div class="top_bar min-h-56 flex flex-col items-center justify-center">
          <h2 className="text-xl mb-4" style={{ color: "#fd246c" }}>
            CREATIVE SERVICE
          </h2>
          <h1 className="font-bold text-6xl text-blue-950">What Do I Offer?</h1>
        </div>
        <div class="flex flex-wrap items-center justify-between w-11/12">
          {achievements.map((item) => {
            return (
              <div class="card">
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
      {/* about_section4 */}
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
              First of all, I am very Thankful to you for Visting my Portfolio,
              my name is{" "}
              <span style={{ color: "#152a60" }}> Muhammad Shoaib </span>, and i
              am a frontend React developer I have two years of experience in
              front-end development. I am doing my fronted from IIFA TECH It
              Solutions, and my specialization in React JS,and React Native with
              Material UI and Tailwind CSS, and also html css or Bootstrap
              Javascript, Typescript and Firebase.
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
                10+ live projects
              </span>
              for a company and my clients. I wish to use my technical acumen to
              contribute to a team that works and scales and also creates a
              positive impact on society. I Love to join you to improve my
              development skills and communication skills.
            </p>
            <button
              onClick={handleDownload}
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
          </div>
        </div>
      </section>
      {/* about_section3 */}
      <section id="portfolio" class="flex flex-col items-center justify-center">
        {/* top_bar */}
        <div class="top_bar flex-col min-h-60 flex items-center justify-center">
          <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
            PORTFOLIO
          </h2>
          <h1 className="text-5xl font-bold mt-2 text-blue-950">
            My Latest Projects
          </h1>
        </div>
        <div class="flex flex-wrap items-center justify-between w-11/12">
          {project.slice(0, 3).map((item, index) => (
            <ProjectCard
              key={`index ${index}`}
              image={item?.image}
              type={item?.subtitle}
              title={item?.title}
              link={item?.link}
              technologies={item?.technologies}
            />
          ))}
        </div>
        <Link to={"/templates"}>
          <a href="#" className="font-bold mt-2 flex items-center">
            <span style={{ color: "#fe3377" }}>Show More</span>
            <span>
              <FiArrowRight size={20} color="#fe3377" />
            </span>
          </a>
        </Link>
      </section>
      {/* about_section4 */}
      <section id="skills" class="flex flex-col items-center justify-center">
        {/* top_bar */}
        <div class="top_bar flex-col min-h-60 flex items-center justify-center">
          <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
            Why Choose Me{" "}
          </h2>
          <h1 className="text-5xl font-bold mt-2 text-blue-950">
            My Top Skills
          </h1>
        </div>
        <div class="flex flex-wrap justify-between items-center w-11/12">
          {my_skills.map((item) => (
            <Skills
              image={item?.image}
              title={item?.title}
              onClick={() => {}}
            />
          ))}
        </div>
      </section>
      {/* about_section5 */}
      <section
        id="testimonial"
        class="flex flex-col items-center justify-center"
      >
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
      {/* contact us page */}
      <section
        id="contact"
        class="flex flex-wrap flex-col items-center justify-center"
      >
        {/* top_bar */}
        <div class="top_bar flex-col min-h-60 flex items-center justify-center">
          <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
            GET IN TOUCH WITH US
          </h2>
          <h1 className="text-5xl font-bold mt-2 text-blue-950">CONTACT US</h1>
        </div>
        <div class="contact flex flex-wrap justify-between items-center w-11/12">
          <div className="contact_page w-40">
            <div class="info_card">
              <LiaLocationArrowSolid size={50} color="#fd246c" />
              <p className="text-xl font-semibold mt-2 mb-2 text-blue-950">
                Our Location
              </p>
              <h1 className="font-semibold  text-blue-950 text-center">
                {" "}
                Near Pakistan Army, Khanewal Punjab, Pakistan.
              </h1>
            </div>
            <div class="info_card">
              <LiaPhoneVolumeSolid size={50} color="#fd246c" />
              <p className="text-xl font-semibold mt-2 mb-2 text-blue-950">
                Phone Number
              </p>
              <h1 className="font-semibold  text-blue-950"> +92-324-8052718</h1>
            </div>
            <div class="info_card">
              <LiaMailBulkSolid size={50} color="#fd246c" />
              <p className="text-xl font-semibold mt-2 mb-2 text-blue-950">
                Email Address
              </p>
              <h1 className="font-semibold  text-blue-950">
                shoaibriaze@gmail.com
              </h1>
            </div>
          </div>
          <div className="w-40 bg-white" class="contact_card">
            <form className="w-full" onSubmit={handleSubmit}>
              <label className="font-semibold">Name*</label>
              <input
                type="text"
                name="to_name"
                placeholder="Your Name"
                value={formData.to_name}
                onChange={handleChange}
                className="w-full h-12 pl-4 mb-4 rounded-lg mt-1 bg-slate-50"
              />
              <label className="font-semibold">Email address*</label>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                className="w-full h-12 pl-4 mb-4 rounded-lg mt-1 bg-slate-50"
              />
              <label className="font-semibold">Phone number*</label>
              <input
                type="text"
                name="phone"
                placeholder="Your Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 pl-4 mb-4 rounded-lg mt-1 bg-slate-50"
              />
              <label className="font-semibold">Type your message*</label>
              <textarea
                name="message"
                placeholder="Leave a message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full h-40 p-3 rounded-lg mt-1 bg-slate-50"
              />
              <button
                type="submit"
                id="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4"
              >
                Send Message
              </button>
              {/* {status && <p className="mt-4">{status}</p>}{" "} */}
              {/* Show status message */}
            </form>
          </div>
        </div>
      </section>
      {/* Footer section */}
      <footer className="footer_outer w-full flex mt-10 items-center justify-center bg-white shadow-lg h-28">
        <div className="footer w-11/12 flex items-center justify-between ">
          <h1>Copyright © 2023 M.S Web Services. All rights reserved.</h1>
          <ul className="footer_ul flex items-center justify-between w-2/5">
            <li className="w-14 h-14 rounded-lg" class="li">
              <a href="https://www.facebook.com/profile.php?id=100043930358095">
                <FiFacebook size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="#twitter">
                <FiTwitter size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="https://www.linkedin.com/in/muhammad-shoaib-b71247209">
                <FiLinkedin size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="https://github.com/muhammadshoaibriaz">
                <FiGithub size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="#linkedin">
                <FiInstagram size={22} className="icon" />
              </a>
            </li>
            <li className="w-14 h-14" class="li">
              <a href="#linkedin">
                <SiFiverr size={22} className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div
        className={`chat_section flex flex-col items-center h-5/6 fixed bg-white overflow-hidden rounded-md  shadow-xl z-10 transition-all duration-500 bottom-20 ${
          value === 1
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-0 translate-y-48 opacity-0"
        }`}
        style={{ right: 20, bottom: "5%" }}
      >
        {value === 1 ? <ChatComponent /> : null}
      </div>
      {value === 0 ? (
        <button
          onClick={() => setValue(1)}
          className="w-12 h-12 bg-green-600 rounded-full fixed bottom-3 right-3"
        >
          <img src={image.profile} />
        </button>
      ) : (
        <button
          className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full fixed bottom-3 right-3 text-white z-10"
          onClick={() => setValue(0)}
        >
          <MdClose size={20} />
        </button>
      )}
    </div>
  );
}

export default MainPage;
