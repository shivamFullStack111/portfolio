import { motion } from "framer-motion";
import { primary } from "../../utils";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";

interface PROJECTDETAIL_POPUP {
  open: boolean;
  setopen: (value: boolean) => void;
}

const ProjectDetailPopUp: React.FC<PROJECTDETAIL_POPUP> = ({
  open,
  setopen,
}) => {
  const [isClosing, setisClosing] = useState(false);
  return (
    <div className="fixed  z-40  flex justify-center items-start top-0 left-0 w-full h-screen">
      <div className="container flex justify-center items-center bg-[#00000071] rounded-lg h-screen shadow-lg p-6">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: isClosing ? 0 : open ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
          className="w-[60%] relative flex flex-col  overflow-y-auto mx-auto h-[95%] bg-[#0b0b0b] border border-gray-400 rounded-lg overflow-hidden"
        >
          <RxCross1
            onClick={() => {
              setisClosing(true);
              setTimeout(() => {
                setopen(false);
              }, 200);
            }}
            className="absolute z-40 text-3xl cursor-pointer hover:text-red-500 hover:scale-105 transition-all duration-200 text-black p-2 bg-[#E6FF00] rounded-full m-3 top-0 right-0"
          />
          {/* image section  */}
          <div className="relative min-h-[300px]  w-full bg-red-100">
            <img src="chat-fussion.png" alt="" />
            <div className="absolute bottom-0 gap-2 flex justify-center  w-full my-2 p-2  ">
              {Array.from({ length: 5 }).map(() => (
                <div className="h-12 w-12 rounded-md   bg-white"></div>
              ))}
            </div>
          </div>

          <div className="p-2">
            {" "}
            <div>
              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold "
              >
                Chat Fussion
              </p>
              <p className="italic  px-2 mt-2">
                Some of the projects I've built to showcase my skills and
                creativity.{" "}
              </p>
            </div>
            <div className="mt-6">
              {" "}
              <p
                style={{ borderColor: primary }}
                className="border-b-3 6 text-xl inline font-semibold "
              >
                Tools
              </p>
              <div className="flex px-2 w-full flex-wrap mt-2 ">
                <li className="w-1/3 ">React</li>
                <li className="w-1/3 ">React</li>
                <li className="w-1/3 ">React</li>
                <li className="w-1/3 ">React</li>
                <li className="w-1/3 ">React</li>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPopUp;
