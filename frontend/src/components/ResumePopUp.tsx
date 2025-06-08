import React from "react";
import CustomButton from "./CustomButton";

interface RESUMEPOPUP_PROPS {
  open: boolean;
  setopen: (e: boolean) => void;
}

const ResumePopUp: React.FC<RESUMEPOPUP_PROPS> = (props) => {
  return (
    <div className="w-full h-screen  bg-[#0005] z-50 top-0 left-0 flex-col fixed flex justify-center items-center p-5">
      <div className="    ">
        <div className=" h-[85vh] max-h-[800px]  overflow-y-scroll ">
          <img src="resume.png" className="w-full" alt="" />
        </div>
        <div className=" flex w-full  gap-4">
          <CustomButton
            className=" w-[30%]  hover:bg-red-600  bg-red-500 text-white  mt-4"
            onClick={() => props.setopen(false)}
            title="Cancel"
          />
          <a
            className=" w-[70%] "
            href="Shivam_Resume-1.pdf"
            download={"resume.pdf"}
          >
            <CustomButton
              className="mt-4"
              title="Download"
              onClick={() => {}}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePopUp;
