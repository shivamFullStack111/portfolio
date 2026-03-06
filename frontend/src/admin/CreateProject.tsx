import { useState } from "react";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import AdminLayout from "./AdminLayout";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";

const CreateProject = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    tools: [] as string[],
    features: [] as string[],
    webUrl: "",
    downloadLink: "",
    secret: ""
  });

  const [images, setImages] = useState<File[]>([]);

  const [newTool,setNewTool] = useState("");
  const [newFeature,setNewFeature] = useState("");

  const addItem = (value:string, field:"tools"|"features", setter:any) => {

    if(!value) return;

    setForm({
      ...form,
      [field]: [...form[field], value]
    });

    setter("");

  };

  const removeItem = (index:number, field:"tools"|"features") => {

    const arr = [...form[field]];
    arr.splice(index,1);

    setForm({
      ...form,
      [field]:arr
    });

  };

  const handleImageUpload = (e:any) => {

    const files = Array.from(e.target.files);

    setImages([
      ...images,
      ...files as File[]
    ]);

  };

  const removeImage = (index:number) => {

    const arr = [...images];
    arr.splice(index,1);

    setImages(arr);

  };

const createProject = async () => {

  const formData = new FormData();

  formData.append("title",form.title);
  formData.append("description",form.description);
  formData.append("webUrl",form.webUrl);
  formData.append("downloadLink",form.downloadLink);

  formData.append("tools", JSON.stringify(form.tools));
  formData.append("features", JSON.stringify(form.features));

  images.forEach(img=>{
    formData.append("images",img);
  });

  try{

    await axios.post(
      // "https://portfolio-dcwm.onrender.com/api/projects",
      "http://localhost:8000/api/projects",
      formData,
      {
        headers:{
          "Content-Type":"multipart/form-data",
          "x-admin-secret":form.secret
        }
      }
    );

    alert("Project Created");

  }catch(err){

    console.log(err);
    alert("Error Creating Project");

  }

};

  return (

    <AdminLayout>

      <div className="mx-auto flex flex-col items-center">

        <div className="min-w-[80vw] md:min-w-[60vw] px-4">

          <div className="mt-10">

            <p className="border-b-3 border-[#E6FF00] text-xl inline font-semibold">
              Create Project
            </p>

            <p className="italic mt-3">
              Add new project to your portfolio
            </p>

          </div>

          <div className="mt-10 max-w-[900px]">

            {/* TITLE */}

            <input
              value={form.title}
              onChange={(e)=>setForm({...form,title:e.target.value})}
              placeholder="Project Title"
              className="w-full p-3 bg-black border border-gray-600 rounded mb-4"
            />

            {/* DESCRIPTION */}

            <textarea
              value={form.description}
              onChange={(e)=>setForm({...form,description:e.target.value})}
              placeholder="Description"
              className="w-full p-3 bg-black border border-gray-600 rounded mb-6"
            />

            {/* TOOLS */}

            <p className="text-[#E6FF00] mb-2">Tools</p>

            <div className="flex gap-2 mb-3">
              <input
                value={newTool}
                onChange={(e)=>setNewTool(e.target.value)}
                placeholder="Add Tool"
                className="flex-1 p-2 bg-black border border-gray-600 rounded"
              />
              <button
                onClick={()=>addItem(newTool,"tools",setNewTool)}
                className="bg-[#E6FF00] text-black px-4 rounded"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {form.tools.map((tool,index)=>(
                <div
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded flex items-center gap-2"
                >
                  {tool}
                  <FaTrash
                    className="cursor-pointer text-red-400"
                    onClick={()=>removeItem(index,"tools")}
                  />
                </div>
              ))}
            </div>

            {/* FEATURES */}

            <p className="text-[#E6FF00] mb-2">Features</p>

            <div className="flex gap-2 mb-3">
              <input
                value={newFeature}
                onChange={(e)=>setNewFeature(e.target.value)}
                placeholder="Add Feature"
                className="flex-1 p-2 bg-black border border-gray-600 rounded"
              />
              <button
                onClick={()=>addItem(newFeature,"features",setNewFeature)}
                className="bg-[#E6FF00] text-black px-4 rounded"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {form.features.map((feature,index)=>(
                <div
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded flex items-center gap-2"
                >
                  {feature}
                  <FaTrash
                    className="cursor-pointer text-red-400"
                    onClick={()=>removeItem(index,"features")}
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

              {images.map((img,index)=>(
                <div key={index} className="relative">

                  <img
                    src={URL.createObjectURL(img)}
                    className="h-[120px] w-full object-cover border border-gray-600"
                  />

                  <FaTrash
                    className="absolute top-2 right-2 text-red-500 cursor-pointer"
                    onClick={()=>removeImage(index)}
                  />

                </div>
              ))}

            </div>

            {/* LINKS */}

            <input
              value={form.webUrl}
              onChange={(e)=>setForm({...form,webUrl:e.target.value})}
              placeholder="Live Website URL"
              className="w-full p-3 bg-black border border-gray-600 rounded mb-4"
            />

            <input
              value={form.downloadLink}
              onChange={(e)=>setForm({...form,downloadLink:e.target.value})}
              placeholder="Download Link"
              className="w-full p-3 bg-black border border-gray-600 rounded mb-6"
            />

            {/* SECRET */}

            <input
              type="password"
              value={form.secret}
              onChange={(e)=>setForm({...form,secret:e.target.value})}
              placeholder="Admin Secret"
              className="w-full p-3 bg-black border border-gray-600 rounded mb-6"
            />

            <div className="flex justify-end">

              <CustomButton
                title="Create Project"
                className="px-10"
                onClick={createProject}
              />

            </div>

          </div>

          <Footer/>

        </div>

      </div>

    </AdminLayout>

  );

};

export default CreateProject;