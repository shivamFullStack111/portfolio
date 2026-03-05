import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/Home";
import ImageLoader from "./components/ImageLoader";
import Contact from "./screens/contact/Contact";
import Projects from "./screens/projects/Projects";
import { Toaster } from "react-hot-toast";
import CreateProject from "./admin/CreateProject";
import ViewProjects from "./admin/ViewProjects";
import EditProject from "./admin/EditProject";

const App = () => {
  return (
    <div className=" overflow-y-hidden  px-4">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <ImageLoader></ImageLoader>

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
