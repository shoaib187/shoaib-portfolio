import React, { useState } from "react";
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
  return (
    <header className="header flex items-center justify-center w-full h-20 sticky z-10">
      <nav className="flex w-11/12 justify-between items-center">
        <h1 className="text-4xl">
          <span style={{ color: "red", fontFamily: "cursive" }}>M .</span>S
        </h1>
        <ul
          className={`navigation_list w-2/3 flex items-center justify-between`}
        >
          <div class="close" onClick={() => setVisible(!visible)}>
            <CgClose size={20} />
          </div>
          <li>
            <MdOutlineHome size={18} className="mr-2" id="nav_icon" />
            <a href="#home">Home</a>
          </li>
          <li>
            <MdOutlineBuild size={18} className="mr-2" id="nav_icon" />
            <a href="#services">Services</a>
          </li>
          <li>
            <MdPersonOutline size={18} className="mr-2" id="nav_icon" />
            <a href="#about">About</a>
          </li>
          <li>
            <MdWorkOutline size={18} className="mr-2" id="nav_icon" />
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <MdOutlineBuildCircle size={18} className="mr-2" id="nav_icon" />
            <a href="#skills">Skills</a>
          </li>
          <li>
            <MdStarOutline size={18} className="mr-2" id="nav_icon" />
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <MdMailOutline size={18} className="mr-2" id="nav_icon" />
            <a href="#contact">Contact us</a>
          </li>
          <li>
            <MdOutlineSmartDisplay size={18} className="mr-2" id="nav_icon" />
            <Link to={"/templates"}>
              <a href="#templates">Templates</a>
            </Link>
          </li>
        </ul>
        <button>Hire Me</button>
        <div
          onClick={() => setVisible(true)}
          className="toggle_btn w-10 h-10 rounded-md border-2 border-red-400 bg-slate-600 flex items-center justify-center"
          style={{
            background: "#fd246c",
          }}
        >
          <FiMenu size={20} color="#fff" />
        </div>
      </nav>
    </header>
  );
}
