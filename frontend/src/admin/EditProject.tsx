import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
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
    secret: ""
  });

  const [newTool, setNewTool] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {

    const res = await axios.get(`http://localhost:8000/api/projects/${id}`);

    setForm({
      ...res.data,
      secret: ""
    });
  };

  const updateProject = async () => {

    try {

      await axios.put(
        `http://localhost:8000/api/projects/${id}`,
        form,
        {
          headers: {
            "x-admin-secret": form.secret
          }
        }
      );

      alert("Project Updated");

    } catch (err) {
      alert("Update Failed");
    }

  };

  const removeItem = (index:number, field:string) => {

    const arr = [...form[field]];
    arr.splice(index,1);

    setForm({
      ...form,
      [field]: arr
    });

  };

  const addItem = (value:string, field:string, setter:any) => {

    if(!value) return;

    setForm({
      ...form,
      [field]: [...form[field], value]
    });

    setter("");

  };

  return (

   <div className="mx-auto flex flex-col items-center"> 
     <div className="w-full">
        <Link to="/admin/projects">
        <div className="p-3 text-xl bg-[#E6FF00] text-black w-min rounded-full mt-4">
          <FaArrowLeft/>
        </div>
      </Link>
     </div>
     <div className="min-w-[80vw] md:min-w-[60vw] px-4">

  

      <div className="mt-10">

        <p className="border-b-3 border-[#E6FF00] text-xl inline font-semibold">
          Edit Project
        </p>

        <p className="italic mt-3">
          Update your portfolio project
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
          {form.tools.map((tool:string,index:number)=>(
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
          {form.features.map((feature:string,index:number)=>(
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

        <div className="flex gap-2 mb-4">
          <input
            value={newImage}
            onChange={(e)=>setNewImage(e.target.value)}
            placeholder="Paste Image URL"
            className="flex-1 p-2 bg-black border border-gray-600 rounded"
          />
          <button
            onClick={()=>addItem(newImage,"images",setNewImage)}
            className="bg-[#E6FF00] text-black px-4 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">

          {form.images.map((img:string,index:number)=>(
            <div key={index} className="relative">

              <img
                src={img}
                className="h-[120px] w-full object-cover border border-gray-600"
              />

              <FaTrash
                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                onClick={()=>removeItem(index,"images")}
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
            title="Update Project"
            className="px-10"
            onClick={updateProject}
          />

        </div>

      </div>

      <Footer/>

    </div>
   </div>
  );
};

export default EditProject;