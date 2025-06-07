import Marquee from "react-fast-marquee";
import { primary } from "../utils";

const Skills = () => {
  return (
    <div className="">
      {" "}
      <p
        style={{ borderColor: primary }}
        className="border-b-3 text-xl inline font-semibold "
      >
        Skills
      </p>
      <Marquee>
        <div className="flex gap-16 md:gap-26  lg:gap-40 mt-14 overflow-x-auto">
          <img alt="" src="react.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="angular.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="node.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="mongodb.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="reactNative.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="redux.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="redis.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="graphql.png" className="h-16 md:h-20   lg:h-20"></img>
          <img alt="" src="nextjs.png" className="h-16 md:h-20   lg:h-20 mr-28"></img>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
