import { useState } from "react";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import AdminLayout from "./AdminLayout";

const CreateProject = () => {

  const [form, setform] = useState({
    title: "",
    description: "",
    tools: "",
    features: "",
    webUrl: "",
    downloadLink: "",
    secret: ""
  });

  const [images, setImages] = useState<string[]>([""]);

  const handleChange = (e:any) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (value:string,index:number) => {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  };

  const addImage = () => {
    setImages([...images,""]);
  };

  const removeImage = (index:number) => {
    setImages(images.filter((_,i)=>i!==index));
  };

  const handleSubmit = async () => {

    const payload = {
      ...form,
      images,
      tools: form.tools.split(","),
      features: form.features.split(",")
    };

    try {

      await axios.post(
        "http://localhost:8000/api/projects",
        payload,
        {
          headers:{
            "x-admin-secret":form.secret
          }
        }
      );

      alert("Project Created");

    } catch (err) {

      alert("Error");

    }

  };

  return (
    <AdminLayout>

    <div className="mx-auto flex flex-col items-center"> 
     <div className="min-w-[80vw] md:min-w-[60vw]">
            <p className="border-b-3  border-[#E6FF00] text-xl inline font-semibold">
        Create Project
      </p>

      <div className="mt-10 flex flex-col gap-5 max-w-[800px]">

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        <input
          name="tools"
          value={form.tools}
          onChange={handleChange}
          placeholder="Tools (React,Node,MongoDB)"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        <input
          name="features"
          value={form.features}
          onChange={handleChange}
          placeholder="Features"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        {/* images */}

        <div>

          <p className="text-[#E6FF00] mb-2">
            Images
          </p>

          {images.map((img,index)=>(
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-3 mb-3"
            >

              <input
                value={img}
                onChange={(e)=>handleImageChange(e.target.value,index)}
                placeholder="Image URL"
                className="flex-1 p-3 bg-black border border-gray-600 rounded"
              />

              {images.length>1 && (
                <button
                  onClick={()=>removeImage(index)}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  Delete
                </button>
              )}

            </div>
          ))}

          <button
            onClick={addImage}
            className="text-[#E6FF00]"
          >
            + Add Image
          </button>

        </div>

        <input
          name="webUrl"
          value={form.webUrl}
          onChange={handleChange}
          placeholder="Live URL"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        <input
          name="downloadLink"
          value={form.downloadLink}
          onChange={handleChange}
          placeholder="Download Link"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        <input
          name="secret"
          value={form.secret}
          onChange={handleChange}
          placeholder="Admin Secret"
          className="p-3 bg-black border border-gray-600 rounded w-full"
        />

        <div className="flex justify-end">
          <CustomButton
            title="Create Project"
            className="px-8"
            onClick={handleSubmit}
          />
        </div>

      </div>
     </div>
      </div>

    </AdminLayout>
  );
};

export default CreateProject;