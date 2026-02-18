import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">
        Welcome, {user?.name}
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
