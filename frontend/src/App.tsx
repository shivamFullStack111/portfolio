// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./screens/home/Home";
// import ImageLoader from "./components/ImageLoader";
// import Contact from "./screens/contact/Contact";
// import Projects from "./screens/projects/Projects";
// import { Toaster } from "react-hot-toast";
// import CreateProject from "./admin/CreateProject";
// import ViewProjects from "./admin/ViewProjects";
// import EditProject from "./admin/EditProject";

// const App = () => {
//   return (
//     <div className=" overflow-y-hidden  px-4">
//       <Toaster position="top-right" reverseOrder={false} />
//       <ImageLoader></ImageLoader>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/admin/create-project" element={<CreateProject />} />
//           <Route path="/admin/projects" element={<ViewProjects />} />
//           <Route path="/admin/edit-project/:id" element={<EditProject />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import Home from "./screens/home/Home";
import ImageLoader from "./components/ImageLoader";
import Contact from "./screens/contact/Contact";
import Projects from "./screens/projects/Projects";
import { Toaster } from "react-hot-toast";
import CreateProject from "./admin/CreateProject";
import ViewProjects from "./admin/ViewProjects";
import EditProject from "./admin/EditProject";

const App = () => {
  
  useEffect(() => {
    const loadChatbot = async () => {
      try {
        // Public IP fetch
        const res = await fetch("https://api.ipify.org?format=json");
        const { ip } = await res.json();

        const script = document.createElement("script");
        script.src = "https://fusion-ai-zeta.vercel.app/embed.js";
        script.async = true;

        script.setAttribute("data-external-user-id", ip);
        script.setAttribute("data-bot-id", "69c63ac92114b3d3ef27ee16");

        document.body.appendChild(script);
      } catch (error) {
        console.error("Failed to load chatbot:", error);
      }
    };

    loadChatbot();

    return () => {
      const script = document.querySelector(
        'script[src="https://fusion-ai-zeta.vercel.app/embed.js"]'
      );

      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="overflow-y-hidden px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <ImageLoader />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin/create-project" element={<CreateProject />} />
          <Route path="/admin/projects" element={<ViewProjects />} />
          <Route path="/admin/edit-project/:id" element={<EditProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;