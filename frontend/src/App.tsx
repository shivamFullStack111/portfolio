import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/Home";
import ImageLoader from "./components/ImageLoader";
const App = () => {
  return (
    <div className="container overflow-y-hidden mx-auto px-4">
      <ImageLoader></ImageLoader>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
