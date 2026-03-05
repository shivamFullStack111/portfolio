import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import Footer from "../components/Footer";

const AdminLayout = ({ children }: any) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Top bar mobile */}
      <div className="lg:hidden flex items-center p-4 border-b border-gray-700">

        <FaBars
          className="text-xl cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        <p className="ml-4 font-semibold text-[#E6FF00]">
          Admin Panel
        </p>

      </div>

      <div className="flex flex-1">

        <AdminSidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        <div className="flex-1 p-6 lg:p-10">
          {children}
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default AdminLayout;