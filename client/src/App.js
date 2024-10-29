import "./App.css";
import { useState } from "react";
import MainPage from "./MainPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import user_img from "./assets/images/IMG_20220619_230806-fotor-bg-remover-20240623125845.png";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { CounterProvider } from "./components/context/CounterContext";
import Templates from "./Templates";

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

function WelcomePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  return (
    <>
      {loading && <LoadingIndicator />}
      <header className="flex w-full items-center justify-center sticky top-0 left-0 right-0 min-h-24 z-10">
        <nav className="flex w-11/12 items-center justify-between">
          <img
            src={user_img}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              objectFit: "cover",
              borderWidth: 3,
              borderColor: "#eee",
            }}
            alt="not found"
          />
          <h3 style={{ textTransform: "uppercase" }}>
            Muhammad <span style={{ color: "#fe3377" }}>Shoaib</span>
          </h3>
        </nav>
      </header>
      <section
        id="home"
        class="welcome_page flex flex-wrap justify-center min-h-screen w-full -z-10"
      >
        {/* inner_content */}
        <div class="inner_content flex w-11/12 items-center">
          {/* about_me */}
          <div class="about_me flex flex-col pr-4">
            <h4 className="text-2xl text-blue-950">WELCOME TO MY PORTFOLIO</h4>
            <h1 className="text-6xl font-bold mt-2 mb-1 text-blue-950">
              Hi, I’m <span style={{ color: "#fd246c" }}>Muhammad Shoaib</span>
            </h1>
            <ReactTyped
              strings={[
                "Welcome to our site!",
                "Front-End-Developer!",
                "React Native Developer!",
                "React Js Developer!",
                "Web Developer!",
                "Node Js Developer!",
                "MERN Stack Developer!",
              ]}
              typeSpeed={80}
              backSpeed={80}
              loop
              className="auto_type text-6xl font-bold text-blue-950"
            />

            {/* animate */}
            <p className="text-slate-600 mt-6">
              Building Your Idea Through My Development Skills, front-end web
              development, specializing in React JS, React Native,Tailwind CSS,
              HTML5, CSS3, Javascript and Material-UI. With a strong foundation
              in these technologies, I aim to create responsive and
              user-friendly web and mobile application interfaces, leveraging my
              skills to contribute to innovative projects.
            </p>
            <h3 className="text-blue-950 mt-4 mb-3">Find with me</h3>
            <ul className="w-1/5 flex justify-between">
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
                <a href="#linkedin">
                  <FiLinkedin size={22} className="icon" />
                </a>
              </li>
            </ul>
            <button className="welcome_btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/home/*" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CounterProvider>
  );
}

export default App;
