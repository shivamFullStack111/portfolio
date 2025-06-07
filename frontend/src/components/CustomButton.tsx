import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

interface CUSTOMBUTTON_PROPS {
  onClick: () => void;
  className: string;
  title: string;
  isLoading?: boolean;
  setisLoading?: (val: boolean) => void;
}

const CustomButton: React.FC<CUSTOMBUTTON_PROPS> = (props) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        if (props.isLoading) return;
        props.onClick();
      }}
      className={`w-full rounded-xl cursor-pointer text-black p-1 text-center  ${
        props?.isLoading
          ? "hover:bg-[#e5ff00bb] bg-[#e5ff00bb]"
          : "hover:bg-[#eaff2c] bg-[#E6FF00]"
      } font-semibold text-lg   ${props.className}`}
    >
      {props.isLoading ? (
        <CgSpinnerTwoAlt className="animate-spin text-3xl p-1 mx-auto" />
      ) : (
        props?.title
      )}
    </div>
  );
};

export default CustomButton;
