import { Link } from "react-router-dom";
import { primary } from "../../utils";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { SlCalender } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Footer from "../../components/Footer";

const Home = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);
  return (
    <div>
      {sideBarOpen && (
        <div
          onClick={() => setsideBarOpen(false)}
          className="z-30 bg-[#0008] h-screen w-[100vw] top-0 left-0 fixed"
        ></div>
      )}
      <div className="flex mt-10 gap-5">
        <div className="w-[30%]   relative  h-96">
          <img
            src={"self.jpeg"}
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
        <div className="mt-14 w-[70%]  h-min ">
          {/* heading and sidebar button  */}
          <div className="w-full flex justify-between items-end">
            <div>
              <p className="text-lg">Hello Everyone 👋</p>
            </div>

            <div className="relative z-40 flex flex-col items-end ">
              {" "}
              <div
                onClick={() => setsideBarOpen((p) => !p)}
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
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                  >
                    Resume
                  </motion.div>
                  <motion.div
                    initial={{ x: 80, y: 20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                  >
                    Portfolio
                  </motion.div>
                  <motion.div
                    initial={{ x: 80, y: 20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="mt-3 cursor-pointer hover:text-[#E6FF00]  text-right"
                  >
                    Blog
                  </motion.div>
                  <Link to={"/contact"}>
                    {" "}
                    <motion.div
                      initial={{ x: 80, y: 20 }}
                      animate={{ x: 0, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
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
            <p className="text-[36px] font-semibold leading-7 ">I'm Shivam</p>
            <div className="text-[36px] flex items-center font-semibold ">
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
            <p className="border-b-2 border-gray-800 mt-6 w-[100%] mx-auto"></p>
            <div className="w-full  flex flex-wrap items-center">
              <div className="flex  items-center w-1/3 mt-6 gap-4">
                <p>
                  <SlCalender color={primary} />
                </p>
                <p>18 Feb 2004</p>
              </div>
              <div className="flex  items-center w-1/3 mt-6 gap-4">
                <p>
                  <FaWhatsapp color={primary} />
                </p>
                <p>+91 9464046810</p>
              </div>
              <div className="flex  items-center w-1/3 mt-6 gap-4">
                <p>
                  <SiMaildotru color={primary} />
                </p>
                <p>shvam12340987@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about me  */}
      <p className="mt-14 text-gray-400 text-lg">
        I'm a Creative Developer for interactive projects that usually are apps,
        VR and Creative websites. I Spend most of time coding outstanding
        projects or studying new technologies. to improve my development stack.
        I develop compelling designs that spring to life using transition and
        animations that suit my clients, using the most sophisticated
        technologies available today for fully interactive and responsive
        websites and apps.
      </p>

      {/* waht i do  */}
      <div className=" mt-10">
        <p
          style={{ borderColor: primary }}
          className="border-b-3 text-xl inline font-semibold "
        >
          What i do
        </p>
        <div className="flex items-center mt-8 font-semibold text-lg ">
          <div className="flex gap-4 w-1/3 items-center">
            <img
              src="coding.png"
              className="h-16 w-16 bg-white invert"
              alt=""
            />
            <p>Web Sites and Platforms</p>
          </div>
          <div className="flex gap-4 w-1/3 items-center">
            <img
              src="mobile-development.png"
              className="h-16 w-16 bg-white invert"
              alt=""
            />
            <p>Mobile Development</p>
          </div>
          <div className="flex gap-4 w-1/3 items-center">
            <img
              src="migration.png"
              className="h-16 w-16 bg-white invert"
              alt=""
            />
            <p>Cloud Services</p>
          </div>
        </div>
      </div>

      <p className="border-b-2 border-gray-800 my-10 w-[100%] mx-auto"></p>

      {/* skills  */}
      <div className="">
        {" "}
        <p
          style={{ borderColor: primary }}
          className="border-b-3 text-xl inline font-semibold "
        >
          Skills
        </p>
        <Marquee>
          <div className="flex gap-40 mt-14 overflow-x-auto">
            <img alt="" src="react.png" className="h-24"></img>
            <img alt="" src="angular.png" className="h-24"></img>
            <img alt="" src="node.png" className="h-24"></img>
            <img alt="" src="mongodb.png" className="h-24"></img>
            <img alt="" src="reactNative.png" className="h-24"></img>
            <img alt="" src="redux.png" className="h-24"></img>
            <img alt="" src="redis.png" className="h-24"></img>
            <img alt="" src="graphql.png" className="h-24"></img>
            <img alt="" src="nextjs.png" className="h-24 mr-28"></img>
          </div>
        </Marquee>
      </div>

      {/* footer  */}
    <Footer/>
    </div>
  );
};

export default Home;
