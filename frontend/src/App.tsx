import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/Home";
import ImageLoader from "./components/ImageLoader";
import Contact from "./screens/contact/Contact";
import Projects from "./screens/projects/Projects";
import { Toaster } from "react-hot-toast";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
