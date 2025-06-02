import React from "react";

interface CUSTOMBUTTON_PROPS {
  onClick: () => void;
  className: string;
  title: string;
}

const CustomButton: React.FC<CUSTOMBUTTON_PROPS> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`w-full rounded-xl cursor-pointer text-black p-1 text-center  hover:bg-[#eaff2c] font-semibold text-lg bg-[#E6FF00]  ${props.className}`}
    >
      {props?.title}
    </div>
  );
};

export default CustomButton;
