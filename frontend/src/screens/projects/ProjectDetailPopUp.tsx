import { motion } from "framer-motion";
import { primary } from "../../utils";
import { RxCross1 } from "react-icons/rx";
import React, { useState, type ChangeEvent } from "react";
import CustomButton from "../../components/CustomButton";
import { FaRegStar, FaStar } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface PROJECT_DATA_TYPES {
  _id?: string;
  title: string;
  description: string;
  tools: string[];
  features: string[];
  images: string[];
  webUrl?: string;
  downloadLink?: string;
}

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
  const navigate = useNavigate();

  const [feedbackForm, setfeedbackForm] = useState<FEEDBACKFORM_TYPES>({
    name: "",
    email: "",
    message: "",
    rate: 0,
    projectTitle: "",
  });

  const [isLoading, setisLoading] = useState(false);

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
      } else {
        toast.error(res.data.message);
      }

      setisLoading(false);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      setisLoading(false);
    }
  };

  return (
    <div className="fixed z-40 flex justify-center items-start top-0 left-0 w-full h-screen">

      <div className="container flex justify-center items-center bg-[#00000071] h-screen">

        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: isClosing ? 0 : open ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
          className="md:max-w-[650px] w-full h-[95%] relative flex flex-col overflow-y-auto bg-[#0b0b0b] border border-gray-400 rounded-lg"
        >

          {/* Close */}
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
            className="absolute z-40 text-3xl cursor-pointer hover:text-red-500 transition-all text-black p-2 bg-[#E6FF00] rounded-full m-3 top-0 right-0"
          />

          {/* Image section */}

          <div className="relative min-h-[340px] w-full">

            <img
              src={selectedImage || selectedProject.images?.[0]}
              className="h-full mx-auto"
              alt=""
            />

            <div className="absolute bg-[#0004] bottom-0 w-full">

              <div className="w-[70%] p-3 mx-auto flex justify-center gap-2 overflow-x-auto">

                {selectedProject.images?.map((img: string, index: number) => (

                  <div
                    key={index}
                    onClick={() => setselectedImage(img)}
                    className={`h-12 w-12 cursor-pointer border border-[#E6FF00] rounded-md ${
                      selectedImage === img && "scale-110"
                    }`}
                  >
                    <img src={img} className="h-full mx-auto" alt="" />
                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="p-3">

            {/* Title */}

            <p
              style={{ borderColor: primary }}
              className="border-b-3 text-xl inline font-semibold"
            >
              {selectedProject.title}
            </p>

            {/* Description */}

            <div className="mt-6">

              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold"
              >
                Description
              </p>

              <p className="italic px-2 mt-2">
                {selectedProject.description}
              </p>

            </div>

            {/* Tools */}

            <div className="mt-6">

              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold"
              >
                Technologies Used
              </p>

              <ul className="flex px-2 flex-wrap mt-2">

                {selectedProject.tools?.map((tool, index) => (
                  <li key={index} className="w-1/3">
                    {tool}
                  </li>
                ))}

              </ul>

            </div>

            {/* Features */}

            <div className="mt-6">

              <p
                style={{ borderColor: primary }}
                className="border-b-3 text-xl inline font-semibold"
              >
                Key Features
              </p>

              <ul className="px-2 mt-2 italic">

                {selectedProject.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}

              </ul>

            </div>

            <p className="w-[95%] mx-auto border-b-2 border-gray-500 my-12"></p>

            {/* Feedback */}

            <div className="flex justify-center w-full">

              <div className="w-[600px]">

                <p
                  style={{ borderColor: primary }}
                  className="border-b-3 text-center text-xl font-semibold"
                >
                  Feedback
                </p>

                <div className="flex flex-wrap">

                  <InputField
                    value={feedbackForm.name}
                    title="Name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setfeedbackForm((p) => ({ ...p, name: e.target.value }))
                    }
                  />

                  <InputField
                    value={feedbackForm.email}
                    title="Email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setfeedbackForm((p) => ({ ...p, email: e.target.value }))
                    }
                  />

                  {/* Rating */}

                  <div className="p-2 mt-4 w-full">

                    <div className="text-sm text-gray-300">Rate:</div>

                    <div className="flex justify-center gap-2">

                      {Array.from({ length: 5 }).map((_, i) => {

                        if (i >= feedbackForm.rate) {
                          return (
                            <FaRegStar
                              key={i}
                              onClick={() =>
                                setfeedbackForm((p) => ({
                                  ...p,
                                  rate: i + 1,
                                }))
                              }
                              className="text-2xl cursor-pointer"
                            />
                          );
                        }

                        return (
                          <FaStar
                            key={i}
                            onClick={() =>
                              setfeedbackForm((p) => ({
                                ...p,
                                rate: i + 1,
                              }))
                            }
                            className="text-2xl cursor-pointer text-[#E6FF00]"
                          />
                        );

                      })}

                    </div>

                  </div>

                  {/* Message */}

                  <div className="p-2 mt-4 w-full">

                    <textarea
                      rows={5}
                      placeholder="Enter your message"
                      className="outline-none border-b-2 focus:border-[#E6FF00] w-full"
                      value={feedbackForm.message}
                      onChange={(e) =>
                        setfeedbackForm((p) => ({
                          ...p,
                          message: e.target.value,
                        }))
                      }
                    />

                    <CustomButton
                      isLoading={isLoading}
                      setisLoading={setisLoading}
                      className="mt-4"
                      onClick={handleSubmit}
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