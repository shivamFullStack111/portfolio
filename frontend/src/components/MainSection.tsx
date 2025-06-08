import { Link } from "react-router-dom";
import { primary } from "../utils";
import { RxCross1 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SlCalender } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

interface MAINSECTION_TYPES {
  setsideBarOpen: (val: boolean) => void;
  sideBarOpen: boolean;
  setresumeOpen: (val: boolean) => void;
}

const MainSection: React.FC<MAINSECTION_TYPES> = ({
  setsideBarOpen,
  sideBarOpen,
  setresumeOpen,
}) => {
  return (
    <div className="flex max-lg:flex-col mt-10 gap-5">
      <div className="w-[30%] w-[100%]   relative  h-96">
        {/* sidebar button  */}
        <div className="relative lg:hidden z-40 flex flex-col items-end ">
          {" "}
          <div
            onClick={() => {
              setsideBarOpen(!sideBarOpen);
            }}
            className=" max-h-12 max-w-12 cursor-pointer min-h-12 min-w-12 flex justify-center items-center rotate-0 text-black rounded-full"
            style={{ backgroundColor: primary }}
          >
            {sideBarOpen && <RxCross1 size={20} className="text-xl" />}
            {!sideBarOpen && (
              <IoReorderThreeOutline size={30} className="text-xl" />
            )}
          </div>
          {sideBarOpen && (
            <div className="right-0 absolute top-auto mt-14">
              {" "}
              <motion.div
                initial={{ x: 80, y: 20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
              >
                Home
              </motion.div>
              <motion.div
                initial={{ x: 80, y: 20 }}
                onClick={() => {
                  setresumeOpen(true);
                  setsideBarOpen(false);
                }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
              >
                Resume
              </motion.div>
              <Link to={"/projects"}>
                {" "}
                <motion.div
                  initial={{ x: 80, y: 20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mt-3 cursor-pointer hover:text-[#E6FF00] text-right"
                >
                  Projects
                </motion.div>
              </Link>
              <Link to={"/contact"}>
                {" "}
                <motion.div
                  initial={{ x: 80, y: 20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                >
                  Contact
                </motion.div>
              </Link>
            </div>
          )}
        </div>
        <img
          src={"self.png"}
          className="h-full object-contain customRadius w-full  "
          alt=""
        />
        <div className="w-full -bottom-6 flex   overflow-hidden justify-center  absolute  z-20">
          <div className="rounded-2xl p-3 backdrop-blur-sm w-[70%] bg-[#ffffff24] flex justify-evenly">
            <Link to={"i"} target="_blank">
              <img className="h-6 w-6" alt="" src="github.png" />
            </Link>
            <Link to={"i"} target="_blank">
              <img className="h-6 w-6" alt="" src="linkedin.png" />
            </Link>
            <Link to={"i"} target="_blank">
              <img className="h-6 w-6" alt="" src="instagram.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-14 w-[70%] w-[100%]  h-min ">
        {/* heading and sidebar button  */}
        <div className="w-full flex justify-between items-end">
          <div>
            <p className="text-lg">Hello Everyone 👋</p>
          </div>

          {/* sidebar button  */}
          <div className="relative max-lg:hidden z-40 flex flex-col items-end ">
            {" "}
            <div
              onClick={() => {
                setsideBarOpen(!sideBarOpen);
              }}
              className=" max-h-12 max-w-12 cursor-pointer min-h-12 min-w-12 flex justify-center items-center rotate-0 text-black rounded-full"
              style={{ backgroundColor: primary }}
            >
              {sideBarOpen && <RxCross1 size={20} className="text-xl" />}
              {!sideBarOpen && (
                <IoReorderThreeOutline size={30} className="text-xl" />
              )}
            </div>
            {sideBarOpen && (
              <div className="right-0 absolute top-auto mt-14">
                {" "}
                <motion.div
                  initial={{ x: 80, y: 20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                >
                  Home
                </motion.div>
                <motion.div
                  initial={{ x: 80, y: 20 }}
                  onClick={() => {
                    setresumeOpen(true);
                    setsideBarOpen(false);
                  }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                >
                  Resume
                </motion.div>
                <Link to={"/projects"}>
                  {" "}
                  <motion.div
                    initial={{ x: 80, y: 20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="mt-3 cursor-pointer hover:text-[#E6FF00] text-right"
                  >
                    Projects
                  </motion.div>
                </Link>
                <Link to={"/contact"}>
                  {" "}
                  <motion.div
                    initial={{ x: 80, y: 20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                  >
                    Contact
                  </motion.div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <div className=" text-[26px] md:text-[32px] lg:text-[36px] ">
            {" "}
            <p className=" font-semibold leading-7 ">I'm Shivam</p>
            <div className=" flex items-center font-semibold ">
              <p>I am a </p>&nbsp;{" "}
              <div style={{ color: primary }}>
                <Typewriter
                  words={["Web Developer", "App Developer", "Devops Engineer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </div>
            </div>
          </div>
          <p className="border-b-2 border-gray-800 mt-6 w-[100%] mx-auto"></p>
          <div className="w-full max-lg:flex-col  flex flex-wrap lg:items-center">
            <div className="flex  items-center lg:w-3/12 mt-6 gap-4">
              <p>
                <SlCalender color={primary} />
              </p>
              <p>18 Feb 2004</p>
            </div>
            <div className="flex  items-center lg:w-4/12 mt-6 gap-4">
              <p>
                <FaWhatsapp color={primary} />
              </p>
              <p>+91 9464046810</p>
            </div>
            <div className="flex  items-center lg:w-5/12 mt-6 gap-4">
              <p>
                <SiMaildotru color={primary} />
              </p>
              <p>shvam12340987@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
