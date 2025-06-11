import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-14  flex max-md:flex-col gap-3 justify-center md:justify-between items-center  text-gray-400 font-semibold text-sm">
      <p>Copyright 2022 - All right reserved</p>
      <div className="flex gap-5 items-center">
        <Link
          to={
            "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHoU2qirbQFXAAAAZddhcAACnoHR1KrYhGuXxDU0JgML2Cuzgcu1_hZnJ2Qf6LWbK8k9KkbbAq8b1Z5NptlZIN4zxL68Qnu3al7eLc3sR2CSz6okeb74fH_A2KIPOUqpXOsk-g=&original_referer=https://l.instagram.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshivam-%25E2%2580%258E-58621630b%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DPAZXh0bgNhZW0CMTEAAadOy_Gz6lIMKs-Mb8aHPRO-oxOuEfJjYZ9i7hQFpgKTSAWkC-WLaqJlNPyC2A_aem_Aa_ilbVioiRzS3ub4MtrRA&fbclid=PAQ0xDSwK191JleHRuA2FlbQIxMAABp9oO4YgkJSG2U0SYew6ghvQiurqrJQmMjSZRg0cvxrzr6w2pcCyiglmx1xyA_aem_vA4V8KQDqVEnTW-r4-EVEg"
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
