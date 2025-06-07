import { useState } from "react";
import Footer from "../../components/Footer";
import ResumePopUp from "../../components/ResumePopUp";
import MainSection from "../../components/MainSection";
import WhatIDo from "../../components/WhatIDo";
import Skills from "../../components/Skills";

const Home = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const [resumeOpen, setresumeOpen] = useState(false);

  return (
    <div>
      {resumeOpen && <ResumePopUp open={resumeOpen} setopen={setresumeOpen} />}
      {sideBarOpen && (
        <div
          onClick={() => setsideBarOpen(false)}
          className="z-30 bg-[#0008] h-screen w-[100vw] top-0 left-0 fixed"
        ></div>
      )}

      <MainSection
        setresumeOpen={setresumeOpen}
        setsideBarOpen={setsideBarOpen}
        sideBarOpen={sideBarOpen}
      />
      {/* about me  */}
      <p className="mt-14 text-gray-400 text-lg">
        A highly motivated and growth-focused full-stack web and mobile app
        developer with a strong foundation in the MERN stack and React Native,
        experienced in building scalable, real-time, and user-centric
        applications such as food delivery platforms, chat systems, and
        e-commerce solutions. Passionate about continuous learning and mastering
        cutting-edge technologies like Mapbox, socket.io, and native modules to
        deliver impactful, performance-optimized products while striving to
        achieve excellence and a high-paying career in the tech industry.
      </p>

      {/* waht i do  */}
      <WhatIDo />
      <p className="border-b-2 border-gray-800 my-10 w-[100%] mx-auto"></p>

      {/* skills  */}
      <Skills />

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;
