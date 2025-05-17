import React from "react";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { LiaWhatsapp } from "react-icons/lia";
import { SiFiverr } from "react-icons/si";

export default function Footer() {
  return (
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
              <LiaWhatsapp size={22} className="icon" />
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
            <a href="https://www.upwork.com/freelancers/~01c2b7acdb7eb0c312">
              <SiFiverr size={22} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
