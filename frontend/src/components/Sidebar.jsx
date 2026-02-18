import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-100">
      <div className="p-6 text-2xl font-extrabold text-blue-600 tracking-tight">
        AI Career Compass
      </div>

      <nav className="mt-6 flex flex-col gap-2 px-4">
        <Link
          to="/dashboard"
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          Upload Resume
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
