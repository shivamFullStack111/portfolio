import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaFolderOpen, FaPlusCircle } from "react-icons/fa";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const AdminSidebar = ({ open, setOpen }: Props) => {

  const location = useLocation();

  const menu = [
    {
      name: "View Projects",
      path: "/admin/projects",
      icon: <FaFolderOpen />
    },
    {
      name: "Create Project",
      path: "/admin/create-project",
      icon: <FaPlusCircle />
    }
  ];

  return (
    <>
      {/* overlay mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      <div
        className={`
        fixed lg:static top-0 left-0 z-50
        h-screen w-[250px]
        bg-[#0f0f0f] border-r border-gray-800
        p-6
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >

        {/* mobile header */}
        <div className="flex justify-between items-center lg:hidden mb-8">
          <p className="text-[#E6FF00] font-bold text-lg">Admin</p>
          <FaTimes
            className="cursor-pointer text-gray-400 hover:text-white"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* desktop logo */}
        <div className="hidden lg:block mb-12">
          <h1 className="text-2xl font-bold text-[#E6FF00] tracking-wide">
            Admin Panel
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your projects
          </p>
        </div>

        {/* menu */}
        <nav className="flex flex-col gap-3">

          {menu.map((item) => {

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200
                ${
                  active
                    ? "bg-[#E6FF00] text-black font-medium"
                    : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                }
              `}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}

        </nav>

        {/* bottom section */}
        <div className="absolute bottom-6 left-6 text-xs text-gray-500">
          Admin Dashboard v1.0
        </div>

      </div>
    </>
  );
};

export default AdminSidebar;