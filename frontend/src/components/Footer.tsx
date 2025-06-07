import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-14  flex max-md:flex-col gap-3 justify-center md:justify-between items-center  text-gray-400 font-semibold text-sm">
      <p>Copyright 2022 - All right reserved</p>
      <div className="flex gap-5 items-center">
        <p className="hover:text-[#E6FF00] cursor-pointer">Gihub</p>
        <p className="hover:text-[#E6FF00] cursor-pointer">Linkedin</p>
        <p className="hover:text-[#E6FF00] cursor-pointer">Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
