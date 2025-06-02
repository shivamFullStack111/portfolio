import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { primary } from "../../utils";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";

const Projects = () => {
  return (
    <div>
      <Link to={"/"}>
        <div className="p-3 text-xl cursor-pointer  bg-[#E6FF00] w-min my-3 text-black rounded-full ">
          <FaArrowLeft />{" "}
        </div>
      </Link>

      <div className="mt-14">
        <p
          style={{ borderColor: primary }}
          className="border-b-3 text-xl inline font-semibold "
        >
          Projects
        </p>
        <p className="italic  mt-4">
          Some of the projects I've built to showcase my skills and creativity.{" "}
        </p>
        <div className="flex w-full justify-center "></div>
      </div>

      <div className="flex px-14 mt-12 gap-7 ">
        <div className="w-1/3 h-[310px] ">
          <img
            src="chat-fussion.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Chat Fussion</p>
            <p className="text-gray-300 text-[12px] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugit et?{" "}
            </p>
            <div className="flex justify-end p-2">
              <span>
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[310px] ">
          <img
            src="chat-fussion.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Chat Fussion</p>
            <p className="text-gray-300 text-[12px] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugit et?{" "}
            </p>
            <div className="flex justify-end p-2">
              <span>
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[310px] ">
          <img
            src="chat-fussion.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Chat Fussion</p>
            <p className="text-gray-300 text-[12px] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugit et?{" "}
            </p>
            <div className="flex justify-end p-2">
              <span>
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </span>
            </div>
          </div>
        </div>
       
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
