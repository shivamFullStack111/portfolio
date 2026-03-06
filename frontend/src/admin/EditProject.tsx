import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";

const EditProject = () => {
  const { id } = useParams();

  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    tools: [],
    features: [],
    images: [],
    webUrl: "",
    downloadLink: "",
    secret: "",
  });

  const [newImages, setNewImages] = useState<File[]>([]);
  const [newTool, setNewTool] = useState("");
  const [newFeature, setNewFeature] = useState("");

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    const res = await axios.get(
      `https://portfolio-dcwm.onrender.com/api/projects/${id}`,
    );

    setForm({
      ...res.data,
      secret: "",
    });
  };

  /* IMAGE UPLOAD */

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);

    setNewImages((prev) => [...prev, ...(files as File[])]);
  };

  /* REMOVE EXISTING IMAGE */

  const removeExistingImage = (index: number) => {
    setForm((prev: any) => {
      const arr = [...prev.images];
      arr.splice(index, 1);

      return {
        ...prev,
        images: arr,
      };
    });
  };
  /* REMOVE NEW IMAGE */

  const removeNewImage = (index: number) => {
    setNewImages((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);

      return arr;
    });
  };

  /* REMOVE TOOL / FEATURE */

  const removeItem = (index: number, field: "tools" | "features") => {
    const arr = [...form[field]];
    arr.splice(index, 1);

    setForm((prev: any) => ({
      ...prev,
      [field]: arr,
    }));
  };

  /* ADD TOOL / FEATURE */

  const addItem = (value: string, field: "tools" | "features", setter: any) => {
    if (!value.trim()) return;

    setForm((prev: any) => ({
      ...prev,
      [field]: [...prev[field], value],
    }));

    setter("");
  };

  /* UPDATE PROJECT */

  const updateProject = async () => {
    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("webUrl", form.webUrl);
      formData.append("downloadLink", form.downloadLink);

      /* IMPORTANT FIX */

      formData.append("tools", JSON.stringify(form.tools));
      formData.append("features", JSON.stringify(form.features));
      formData.append("existingImages", JSON.stringify(form.images));

      /* NEW IMAGES */

      newImages.forEach((img) => {
        formData.append("images", img);
      });

      await axios.put(
        `https://portfolio-dcwm.onrender.com/api/projects/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-admin-secret": form.secret,
          },
        },
      );

      alert("Project Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="min-w-[80vw] md:min-w-[60vw] px-4">
        <div className="mt-10">
          <p className="border-b-3 border-[#E6FF00] text-xl inline font-semibold">
            Edit Project
          </p>

          <p className="italic mt-3">Update your portfolio project</p>
        </div>

        <div className="mt-10 max-w-[900px]">
          {/* TITLE */}

          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Project Title"
            className="w-full p-3 bg-black border border-gray-600 rounded mb-4"
          />

          {/* DESCRIPTION */}

          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="w-full p-3 bg-black border border-gray-600 rounded mb-6"
          />

          {/* TOOLS */}

          <p className="text-[#E6FF00] mb-2">Tools</p>

          <div className="flex gap-2 mb-3">
            <input
              value={newTool}
              onChange={(e) => setNewTool(e.target.value)}
              placeholder="Add Tool"
              className="flex-1 p-2 bg-black border border-gray-600 rounded"
            />

            <button
              onClick={() => addItem(newTool, "tools", setNewTool)}
              className="bg-[#E6FF00] text-black px-4 rounded"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {form.tools.map((tool: string, index: number) => (
              <div
                key={index}
                className="bg-gray-800 px-3 py-1 rounded flex items-center gap-2"
              >
                {tool}

                <FaTrash
                  className="cursor-pointer text-red-400"
                  onClick={() => removeItem(index, "tools")}
                />
              </div>
            ))}
          </div>

          {/* FEATURES */}

          <p className="text-[#E6FF00] mb-2">Features</p>

          <div className="flex gap-2 mb-3">
            <input
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              placeholder="Add Feature"
              className="flex-1 p-2 bg-black border border-gray-600 rounded"
            />

            <button
              onClick={() => addItem(newFeature, "features", setNewFeature)}
              className="bg-[#E6FF00] text-black px-4 rounded"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {form.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="bg-gray-800 px-3 py-1 rounded flex items-center gap-2"
              >
                {feature}

                <FaTrash
                  className="cursor-pointer text-red-400"
                  onClick={() => removeItem(index, "features")}
                />
              </div>
            ))}
          </div>

          {/* IMAGES */}

          <p className="text-[#E6FF00] mb-2">Images</p>

          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="mb-4"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {/* EXISTING IMAGES */}

            {form.images.map((img: string, index: number) => (
              <div key={index} className="relative">
                <img
                  // src={"https://portfolio-dcwm.onrender.com"+img}
                  src={"http://localhost:8000" + img}
                  className="h-[120px] w-full object-cover border border-gray-600"
                />

                <FaTrash
                  className="absolute top-2 right-2 text-red-500 cursor-pointer"
                  onClick={() => removeExistingImage(index)}
                />
              </div>
            ))}

            {/* NEW IMAGES */}

            {newImages.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  className="h-[120px] w-full object-cover border border-gray-600"
                />

                <FaTrash
                  className="absolute top-2 right-2 text-red-500 cursor-pointer"
                  onClick={() => removeNewImage(index)}
                />
              </div>
            ))}
          </div>

          {/* URLS */}

          <input
            value={form.webUrl}
            onChange={(e) => setForm({ ...form, webUrl: e.target.value })}
            placeholder="Live Website URL"
            className="w-full p-3 bg-black border border-gray-600 rounded mb-4"
          />

          <input
            value={form.downloadLink}
            onChange={(e) => setForm({ ...form, downloadLink: e.target.value })}
            placeholder="Download Link"
            className="w-full p-3 bg-black border border-gray-600 rounded mb-6"
          />

          {/* SECRET */}

          <input
            type="password"
            value={form.secret}
            onChange={(e) => setForm({ ...form, secret: e.target.value })}
            placeholder="Admin Secret"
            className="w-full p-3 bg-black border border-gray-600 rounded mb-6"
          />

          <div className="flex justify-end">
            <CustomButton
              title="Update Project"
              className="px-10"
              onClick={updateProject}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default EditProject;
