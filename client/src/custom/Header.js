import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import {
  MdMailOutline,
  MdOutlineBuild,
  MdOutlineBuildCircle,
  MdOutlineHome,
  MdOutlineSmartDisplay,
  MdPersonOutline,
  MdStarOutline,
  MdWorkOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  // Update `isDesktop` when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setVisible(false); // Automatically close sidebar on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header flex items-center justify-center w-full sticky z-10 py-3">
      <nav className="flex w-11/12 justify-between items-center">
        <h1 className="text-4xl">
          <span style={{ color: "red", fontFamily: "cursive" }}>M .</span>S
        </h1>

        {/* Desktop Navigation */}
        {isDesktop ? (
          <ul className="flex items-center w-2/3 justify-between">
            <li className="flex items-center">
              <MdOutlineHome
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#home">Home</a>
            </li>
            <li className="flex items-center">
              <MdOutlineBuild
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#services">Services</a>
            </li>
            <li className="flex items-center">
              <MdPersonOutline
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center">
              <MdWorkOutline
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="flex items-center">
              <MdOutlineBuildCircle
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#skills">Skills</a>
            </li>
            <li className="flex items-center">
              <MdStarOutline
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="flex items-center">
              <MdMailOutline
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <a href="#contact">Contact us</a>
            </li>
            <li className="flex items-center">
              <MdOutlineSmartDisplay
                size={18}
                className={`mr-2 ${isDesktop ? "hidden" : "block"}`}
              />
              <Link to={"/templates"}>Templates</Link>
            </li>
          </ul>
        ) : (
          // Mobile Toggle Button
          <div
            className="toggle_btn w-10 h-10 rounded-md flex items-center justify-center cursor-pointer"
            style={{
              background: "#fd246c",
            }}
            onClick={toggleVisible}
          >
            <FiMenu size={20} color="#fff" />
          </div>
        )}
        <button>Hire Me</button>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-20 transform transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <CgClose
            size={24}
            className="cursor-pointer"
            onClick={toggleVisible}
          />
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="flex items-center">
            <MdOutlineHome size={18} className="mr-2" />
            <a href="#home">Home</a>
          </li>
          <li className="flex items-center">
            <MdOutlineBuild size={18} className="mr-2" />
            <a href="#services">Services</a>
          </li>
          <li className="flex items-center">
            <MdPersonOutline size={18} className="mr-2" />
            <a href="#about">About</a>
          </li>
          <li className="flex items-center">
            <MdWorkOutline size={18} className="mr-2" />
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="flex items-center">
            <MdOutlineBuildCircle size={18} className="mr-2" />
            <a href="#skills">Skills</a>
          </li>
          <li className="flex items-center">
            <MdStarOutline size={18} className="mr-2" />
            <a href="#testimonial">Testimonial</a>
          </li>
          <li className="flex items-center">
            <MdMailOutline size={18} className="mr-2" />
            <a href="#contact">Contact us</a>
          </li>
          <li className="flex items-center">
            <MdOutlineSmartDisplay size={18} className="mr-2" />
            <Link to={"/templates"}>Templates</Link>
          </li>
        </ul>
      </div>

      {/* Background Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleVisible}
      />
    </header>
  );
}
