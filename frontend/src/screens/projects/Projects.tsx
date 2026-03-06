import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { primary } from "../../utils";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import ProjectDetailPopUp from "./ProjectDetailPopUp";
import { useEffect, useState } from "react";
import axios from "axios";

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

const Projects = () => {

  const [projects, setProjects] = useState<PROJECT_DATA_TYPES[]>([]);
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

  const fetchProjects = async () => {
    try {

      const res = await axios.get("http://localhost:8000/api/projects");
            // const res = await axios.get("https://portfolio-dcwm.onrender.com/api/projects");


      setProjects(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>

      <Link to={"/"}>
        <div className="p-3 text-xl container cursor-pointer bg-[#E6FF00] w-min my-3 text-black rounded-full">
          <FaArrowLeft />
        </div>
      </Link>

      <div className="mt-14">
        <p
          style={{ borderColor: primary }}
          className="border-b-3 text-xl inline font-semibold"
        >
          Projects
        </p>

        <p className="italic mt-4">
          Some of the projects I've built to showcase my skills and creativity.
        </p>
      </div>

      {popUpOpen && (
        <ProjectDetailPopUp
          selectedProject={selectedProject}
          setselectedProject={setselectedProject}
          open={popUpOpen}
          setopen={setpopUpOpen}
        />
      )}

      <div className="flex px-3 mt-12 flex-wrap gap-7">

        {projects?.map((project) => {

          return (

            <div
              key={project._id}
              onClick={() => {
                setpopUpOpen(true);
                setselectedProject(project);
              }}
              className="w-[31.5%] md:w-[48%] lg:w-[31%] xl:w-[31.5%] w-full cursor-pointer"
            >

              <img
                src={project?.images?.[0]}
                alt=""
                className="h-[200px] md:h-[20vw] lg:h-[15vw] max-h-[250px] object-contain mx-auto border border-gray-500"
              />

              <div className="p-1">

                <p className="font-semibold text-[#E6FF00]">
                  {project.title}
                </p>

                <p className="text-gray-300 text-[12px] italic">
                  {project?.description}
                </p>

                {/* Live preview */}

                {project?.webUrl && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-end p-2"
                  >
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      to={project.webUrl}
                    >
                      <CustomButton
                        className="text-sm px-5"
                        onClick={() => {}}
                        title="Live Preview"
                      />
                    </Link>
                  </div>
                )}

                {/* Download */}

                {project?.downloadLink && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-end p-2"
                  >
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      to={project.downloadLink}
                    >
                      <CustomButton
                        onClick={() => {}}
                        className="text-sm px-5"
                        title="Download"
                      />
                    </Link>
                  </div>
                )}

                {/* Not Available */}

                {!project?.downloadLink && !project?.webUrl && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-end p-2"
                  >
                    <span>
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