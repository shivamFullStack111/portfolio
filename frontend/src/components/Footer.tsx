import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-14  flex max-md:flex-col gap-3 justify-center md:justify-between items-center  text-gray-400 font-semibold text-sm">
      <p>Copyright 2022 - All right reserved</p>
      <div className="flex gap-5 items-center">
        <Link
          to={
            "https://www.linkedin.com/in/shivam-64a486377/"
          }
          target="_blank"
          className="hover:text-[#E6FF00] cursor-pointer"
        >
          Linkedin
        </Link>
        <Link
          to={"https://github.com/shivamFullStack111"}
          target="_blank"
          className="hover:text-[#E6FF00] cursor-pointer"
        >
          Github
        </Link>
        <Link
          to={"https://www.instagram.com/shiv_am_lll?igsh=MXE0YmJyb3V2Y3J2ag=="}
          target="_blank"
          className="hover:text-[#E6FF00] cursor-pointer"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
