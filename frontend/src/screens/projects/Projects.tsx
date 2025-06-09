import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { primary } from "../../utils";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import ProjectDetailPopUp from "./ProjectDetailPopUp";
import { useState } from "react";
import { projectsData, type PROJECT_DATA_TYPES } from "./projectsData";

const Projects = () => {
  const [popUpOpen, setpopUpOpen] = useState(false);
  const [selectedProject, setselectedProject] = useState<PROJECT_DATA_TYPES>({
    description: "",
    features: [],
    images: [],
    title: "",
    tools: [],
    downloadLink: "",
    webUrl: "",
  });

  return (
    <div className="">
      <Link to={"/"}>
        <div className="p-3 text-xl container  cursor-pointer  bg-[#E6FF00] w-min my-3 text-black rounded-full ">
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

      {popUpOpen && (
        <ProjectDetailPopUp
          selectedProject={selectedProject}
          setselectedProject={setselectedProject}
          open={popUpOpen}
          setopen={setpopUpOpen}
        />
      )}

      <div className="flex px-3 mt-12 flex-wrap gap-7 ">
        {projectsData?.map((project: PROJECT_DATA_TYPES) => {
          return (
            <div
              onClick={() => {
                setpopUpOpen(true);
                setselectedProject(project);
              }}
              className="w-[31.5%]h-[310px] md:w-[48%] lg:w-[31%] xl:w-[31.5%] w-full  cursor-pointer  "
            >
              <img
                src={project?.images[0]}
                alt=""
                className="h-[200px  h-[40vw] md:h-[20vw] lg:h-[15vw] max-h-[250px]  bg-contain  mx-auto border border-gray-500"
              />
              <div className="p-1">
                <p className="font-semibold text-[#E6FF00]">{project.title}</p>
                <p className="text-gray-300 text-[12px] italic">
                  {project?.description}
                </p>
                {/* buttons  */}
                {/* if webUrl  */}
                {project?.webUrl && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-end p-2"
                  >
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      to={
                        project.webUrl
                      }
                    >
                      <CustomButton
                        className="text-sm px-5"
                        onClick={() => {}}
                        title="Live Preview"
                      />
                    </Link>
                  </div>
                )}

                {/* if downloadLink  */}
                {project?.downloadLink && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-end p-2"
                  >
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      to="https://expo.dev/accounts/shivam11111/projects/Wonder/builds/8d4c68a5-a878-4a56-a7fa-8192ca9dffed"
                    >
                      <CustomButton
                        onClick={() => {}}
                        className="text-sm px-5"
                        title="Download"
                      />
                    </Link>
                  </div>
                )}

                {/* if not webUrl and downloadLink  */}
                {!project?.downloadLink && !project?.webUrl && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-end p-2"
                  >
                    <span

                    // target="_blank"
                    // to={"https://urban-cart-nextjs.vercel.app/"}
                    >
                      <CustomButton
                        onClick={() => {}}
                        className="text-sm px-5"
                        title="Not Available"
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
