import { motion } from "framer-motion";
import { primary } from "../../utils";
import { RxCross1 } from "react-icons/rx";
import React, { useState, type ChangeEvent } from "react";
import CustomButton from "../../components/CustomButton";
import { FaRegStar, FaStar } from "react-icons/fa";
import type { PROJECT_DATA_TYPES } from "./projectsData";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface PROJECTDETAIL_POPUP {
  open: boolean;
  setopen: (value: boolean) => void;
  selectedProject: PROJECT_DATA_TYPES;
  setselectedProject: (val: PROJECT_DATA_TYPES) => void;
}

interface FEEDBACKFORM_TYPES {
  projectTitle: string;
  name: string;
  email: string;
  message: string;
  rate: number;
}

const ProjectDetailPopUp: React.FC<PROJECTDETAIL_POPUP> = ({
  open,
  setopen,
  selectedProject,
  setselectedProject,
}) => {
  const [isClosing, setisClosing] = useState(false);

  const [selectedImage, setselectedImage] = useState("");

  const [feedbackForm, setfeedbackForm] = useState<FEEDBACKFORM_TYPES>({
    name: "",
    email: "",
    message: "",
    rate: 0,
    projectTitle: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      const res = await axios.post(
        "https://portfolio-dcwm.onrender.com/feedback/create",
        { ...feedbackForm, projectTitle: selectedProject.title }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
      if (!res.data.success) toast.error(res.data.message);

      setisLoading(false);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      setisLoading(false);
    }
  };

  return (
    <div className="fixed  z-40  flex justify-center items-start top-0 left-0 w-full h-screen">
      <div className="container p6 flex justify-center items-center bg-[#00000071] rounded-lg h-screen shadow-lg ">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: isClosing ? 0 : open ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
          className="w-[60% h-[98%] md:h-[95%] w-full mx-auto  md:max-w-[650px] relative flex flex-col  overflow-y-auto bg-[#0b0b0b] border border-gray-400 rounded-lg overflow-hidden"
        >
          <RxCross1
            onClick={() => {
              setisClosing(true);
              setTimeout(() => {
                setopen(false);
              }, 200);
              setselectedProject({
                description: "",
                features: [],
                images: [],
                title: "",
                tools: [],
                downloadLink: "",
                webUrl: "",
              });
            }}
            className="absolute z-40 text-3xl cursor-pointer hover:text-red-500 hover:scale-105 transition-all duration-200 text-black p-2 bg-[#E6FF00] rounded-full m-3 top-0 right-0"
          />
          {/* image section  */}
          <div className="relative min-h-[340px]   w-full ">
            <img
              src={selectedImage || selectedProject.images[0]}
              className="h-full mx-auto"
              alt=""
            />
            <div className="absolute bg-[#0004] bottom-0 w-full   ">
              <div className="w-[70%]  px-5z overflow-visible  p-3  overflow-x-auto  mx-auto flex justify-center gap-2">
                {" "}
                {selectedProject.images.map((i: string) => (
                  <div
                    onClick={() => setselectedImage(i)}
                    className={`h-12  cursor-pointer hover:scale-110 transition-all duration-300 border border-[#E6FF00] min-h-12 min-w-12 w-12 rounded-md backdrop-blur-md   bg-[#ffffff47] ${
                      selectedImage == i && " scale-110 "
                    }`}
                  >
                    <img src={i} className="h-full mx-auto" alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2">
            {" "}
            {/* title and 1 line explain  */}
            <div>
              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold "
              >
                {selectedProject?.title}
              </p>
            </div>
            {/* description */}
            <div className="mt-6">
              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold "
              >
                Description
              </p>
              <p className="italic  px-2 mt-2">
                {selectedProject?.description}
              </p>
            </div>
            {/* Technologies Used  */}
            <div className="mt-6">
              {" "}
              <p
                style={{ borderColor: primary }}
                className="border-b-3 6 text-xl inline font-semibold "
              >
                Technologies Used
              </p>
              <div className="flex px-2 w-full flex-wrap mt-2 ">
                {selectedProject?.tools?.map((i: string) => (
                  <li className="w-1/3 ">{i}</li>
                ))}
              </div>
            </div>
            {/* Key Features  */}
            <div className="mt-6">
              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold "
              >
                Key Features
              </p>
              <p className="italic  px-2 mt-2">
                {selectedProject?.features?.map((i: string) => (
                  <li className="w-1/3 ">{i}</li>
                ))}
              </p>
            </div>
            <p className="w-[95%] mx-auto  border-b-2 border-gray-500 my-12"></p>
            {/* form  */}
            <div className="flex justify-center  w-full">
              <div className="w-[600px] ">
                <p
                  style={{ borderColor: primary }}
                  className="border-b-3 text-center w-full text-xl  font-semibold "
                >
                  Feedback
                </p>

                <div className="flex flex-wrap">
                  <InputField
                    onChange={(e) =>
                      setfeedbackForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Enter your name"
                    title="Name"
                    type="text"
                    value={feedbackForm.name}
                  />
                  <InputField
                    onChange={(e) =>
                      setfeedbackForm((p) => ({ ...p, email: e.target.value }))
                    }
                    value={feedbackForm.email}
                    placeholder="Enter your email"
                    title="Email"
                    type="email"
                  />

                  <div className="p-2 mt-4 w-2/2">
                    <div className="block text-sm text-gray-300">Rate:</div>
                    <div className="flex justify-center gap-2">
                      {Array.from({ length: 5 }, (_, i) => i).map(
                        (i: number) => {
                          if (i > feedbackForm.rate - 1) {
                            return (
                              <FaRegStar
                                onClick={() =>
                                  setfeedbackForm((p) => ({
                                    ...p,
                                    rate: i + 1,
                                  }))
                                }
                                className="text-2xl cursor-pointer"
                              />
                            );
                          } else {
                            return (
                              <FaStar
                                onClick={() =>
                                  setfeedbackForm((p) => ({
                                    ...p,
                                    rate: i + 1,
                                  }))
                                }
                                className="text-2xl cursor-pointer text-[#E6FF00]"
                              />
                            );
                          }
                        }
                      )}
                    </div>
                  </div>

                  {/* message  */}
                  <div className="p-2 mt-4 w-2/2">
                    <label
                      className="block text-sm text-gray-300"
                      htmlFor="message"
                    >
                      Message:
                    </label>
                    <textarea
                      onChange={(e) =>
                        setfeedbackForm((p) => ({
                          ...p,
                          message: e.target.value,
                        }))
                      }
                      value={feedbackForm.message}
                      rows={5}
                      className="mt-1 outline-none border-b-2 focus:border-[#E6FF00]  w-full"
                      placeholder={"Enter your message"}
                      name={"message"}
                      id={"message"}
                    />
                    <CustomButton
                      isLoading={isLoading}
                      setisLoading={setisLoading}
                      className=" mt-4"
                      onClick={() => {
                        handleSubmit();
                      }}
                      title="Submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPopUp;

interface INPUTFIELD_TYPE {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

const InputField: React.FC<INPUTFIELD_TYPE> = (props) => {
  return (
    <>
      <div className="p-2 mt-4 w-2/2">
        <label className="block text-sm text-gray-300" htmlFor={props.title}>
          {props?.title}:
        </label>
        <input
          className="mt-1 outline-none border-b-2 focus:border-[#E6FF00]  w-full"
          placeholder={props.placeholder}
          onChange={props.onChange}
          type={props.type}
          value={props.value}
          name={props.title}
          id={props.title}
        />
      </div>
    </>
  );
};
