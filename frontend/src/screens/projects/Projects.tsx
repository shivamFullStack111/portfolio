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

      <div className="flex px-14 mt-12 flex-wrap gap-7 ">
        <div className="w-[31.5%] h-[310px] ">
          <img
            src="chat-fussion.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Chat Fussion</p>
            <p className="text-gray-300 text-[12px] italic">
              A feature-rich chat app where users can send messages, make
              audio/video calls, share location, images, and videos, and
              customize settings like notifications and profile picture.
            </p>
            <div className="flex justify-end p-2">
              <Link
                target="_blank"
                to={
                  "https://chat-fussion-chat-app-mern-stack-with-best-practices-s1ed.vercel.app/"
                }
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[31.5%] h-[310px] ">
          <img
            src="ai-resume-builder.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Ai Resume Builder</p>
            <p className="text-gray-300 text-[12px] italic">
              A powerful resume builder with attractive, customizable templates
              — powered by Gemini AI for personalized suggestions based on your
              profile.{" "}
            </p>
            <div className="flex justify-end p-2">
              <Link
                target="_blank"
                to={
                  "https://ai-resume-builder-fi4lnpa6u-shivamfullstack111s-projects.vercel.app/?page=4&templateid=67dea709e90236da68930848&edit=experience-details"
                }
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[31.5%] h-[310px] ">
          <img
            src="job-portal.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Job Portal</p>
            <p className="text-gray-300 text-[12px] italic">
              An attractive job portal landing page built with smooth Framer
              Motion animations for a dynamic user experience.{" "}
            </p>
            <div className="flex justify-end p-2">
              <Link
                target="_blank"
                to={"https://job-portal-website-seven.vercel.app/"}
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[31.5%] h-[310px] ">
          <img
            src="urban-cart.png"
            alt=""
            className="h-[200px]  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Urban Cart</p>
            <p className="text-gray-300 text-[12px] italic">
              Complete e-commerce platform with advanced custom filtering.
            </p>
            <div className="flex justify-end p-2">
              <Link
                target="_blank"
                to={"https://urban-cart-nextjs.vercel.app/"}
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Live Preview"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[31.5%] h-[310px] ">
          <img
            src="gatepass.jpeg"
            alt=""
            style={{ objectFit: "contain" }}
            className="h-[200px] bg-contain  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Gate Pass</p>
            <p className="text-gray-300 text-[12px] italic">
              Developed a Gate Pass mobile app to eliminate paperwork and solve
              faculty issues by enabling real-time notifications.
            </p>
            <div className="flex justify-end p-2">
              <span
              // target="_blank"
              // to={"https://urban-cart-nextjs.vercel.app/"}
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Not Available"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[31.5%] h-[310px] ">
          <img
            src="wonder.jpeg"
            alt=""
            style={{ objectFit: "contain" }}
            className="h-[200px] bg-contain  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Wonder</p>
            <p className="text-gray-300 text-[12px] italic">
              Beautifull wallpaper download mobile app developed using react
              native and 3rd party API
            </p>
            <div className="flex justify-end p-2">
              <Link
                target="_blank"
                to="https://expo.dev/accounts/shivam11111/projects/Wonder/builds/8d4c68a5-a878-4a56-a7fa-8192ca9dffed"
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Download"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[31.5%] h-[310px] ">
          <img
            src="food-delivery.jpeg"
            alt=""
            style={{ objectFit: "contain" }}
            className="h-[200px] bg-contain  w-full border border-gray-500"
          />
          <div className="p-1">
            <p className="font-semibold text-[#E6FF00]">Delivery App</p>
            <p className="text-gray-300 text-[12px] italic">
              Developed multivendor food delivery mobile app. Google Map and
              Mapbox is used for real-time tracking system.
            </p>
            <div className="flex justify-end p-2">
              <span
              // target="_blank"
              // to={"https://urban-cart-nextjs.vercel.app/"}
              >
                <CustomButton
                  className="text-sm px-5"
                  onClick={() => {}}
                  title="Not Available"
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
