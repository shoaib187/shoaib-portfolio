import React, { useState, useEffect } from "react";
import { CgClose, CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import {
  MdMailOutline,
  MdMiscellaneousServices,
  MdOutlineBuild,
  MdOutlineBuildCircle,
  MdOutlineHome,
  MdOutlineSmartDisplay,
  MdPersonOutline,
  MdReportGmailerrorred,
  MdStarOutline,
  MdWorkOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/db";
import { LiaServicestack } from "react-icons/lia";

export default function Headers() {
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
    <header className="header flex items-center justify-center w-full sticky z-10 py-3 border-b border-b-slate-100">
      <nav className="flex w-11/12 justify-between items-center">
        <h1 className="text-4xl">
          <span style={{ color: "red", fontFamily: "cursive" }}>M .</span>S
        </h1>

        {/* Desktop Navigation */}
        {isDesktop ? (
          <>
            <ul className="flex items-center w-2/3 lg:max-w-[800px] justify-between">
              {navLinks?.map((item, index) => (
                <li className="flex items-center" key={`header_index-${index}`}>
                  {item?.type === "route" ? (
                    <Link
                      to={`${item?.type === "route" ? item?.to : item?.href}`}
                    >
                      <a href={`${item?.href}`}>{item?.name}</a>
                    </Link>
                  ) : (
                    <a href={`${item?.href}`}>{item?.name}</a>
                  )}
                </li>
              ))}
            </ul>
            <Link to={"https://www.upwork.com/freelancers/~01c2b7acdb7eb0c312"}>
              <button>Hire Me</button>
            </Link>
          </>
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
            <CgHomeAlt size={18} className="mr-2" />
            <Link to={"/home"}>
              <a href="#home">Home</a>
            </Link>
          </li>
          <li className="flex items-center">
            <MdMiscellaneousServices size={18} className="mr-2" />
            <a href="#services">Services</a>
          </li>
          <li className="flex items-center">
            <MdPersonOutline size={18} className="mr-2" />
            <a href="#about">About</a>
          </li>
          <li className="flex items-center">
            <CgLaptop size={18} className="mr-2" />
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
            <MdReportGmailerrorred size={18} className="mr-2" />
            <Link to={"/templates"}>Projects</Link>
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
