import { primary } from "../utils";

const WhatIDo = () => {
  return (
    <div className=" mt-10">
      <p
        style={{ borderColor: primary }}
        className="border-b-3 text-xl inline font-semibold "
      >
        What i do
      </p>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5  mt-8 font-semibold text-lg ">
        <div className="flex gap-4 lg:w-1/3 items-center">
          <img src="coding.png" className="h-16 w-16 bg-white invert" alt="" />
          <p>Web Sites and Platforms</p>
        </div>
        <div className="flex gap-4 lg:w-1/3 items-center">
          <img
            src="mobile-development.png"
            className="h-16 w-16 bg-white invert"
            alt=""
          />
          <p>Mobile Development</p>
        </div>
        <div className="flex gap-4 lg:w-1/3 items-center">
          <img
            src="migration.png"
            className="h-16 w-16 bg-white invert"
            alt=""
          />
          <p>Cloud Services</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
