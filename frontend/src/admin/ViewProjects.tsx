import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import AdminLayout from "./AdminLayout";

interface PROJECT {
  _id: string;
  title: string;
  description: string;
  images: string[];
}

const ViewProjects = () => {
  const [projects, setProjects] = useState<PROJECT[]>([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [secret, setSecret] = useState("");

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://portfolio-dcwm.onrender.com/api/projects");
      // const res = await axios.get("http://localhost:8000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async () => {
    try {
      await axios.delete(
        `https://portfolio-dcwm.onrender.com/api/projects/${selectedId}`,
        // `http://localhost:8000/api/projects/${selectedId}`,
        {
          headers: {
            "x-admin-secret": secret,
          },
        }
      );

      setDeletePopup(false);
      setSecret("");
      fetchProjects();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
  <AdminLayout>
      <div className="w-full">

      <p className="border-b-3 border-[#E6FF00] text-xl inline font-semibold">
        View Projects
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">

        {projects.map((project) => (
          <div
            key={project._id}
            className="border border-gray-600 rounded p-3"
          >

            <img
              src={project.images?.[0]}
              className="h-[180px] w-full object-cover border border-gray-500"
            />

            <p className="text-[#E6FF00] font-semibold mt-2">
              {project.title}
            </p>

            <p className="text-gray-300 text-sm italic line-clamp-2">
              {project.description}
            </p>

            <div className="flex gap-3 mt-4">

              {/* EDIT BUTTON */}

              <Link
                to={`/admin/edit-project/${project._id}`}
                className="w-full"
              >
                <CustomButton
                  title="Edit"
                  className="text-sm w-full"
                  onClick={() => {}}
                />
              </Link>

              {/* DELETE BUTTON */}

              <button
                className="bg-red-500 px-4 text-sm rounded"
                onClick={() => {
                  setSelectedId(project._id);
                  setDeletePopup(true);
                }}
              >
                Delete
              </button>

            </div>

          </div>
        ))}
      </div>

      {/* DELETE POPUP */}

      {deletePopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-black border border-gray-600 p-6 w-[350px] rounded">

            <p className="text-lg font-semibold mb-4">
              Confirm Delete
            </p>

            <input
              type="password"
              placeholder="Enter Admin Secret"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              className="w-full p-2 border border-gray-600 bg-black rounded mb-4"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setDeletePopup(false)}
                className="px-4 py-2 border border-gray-500 rounded"
              >
                Cancel
              </button>

              <button
                onClick={deleteProject}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  </AdminLayout>
  );
};

export default ViewProjects;