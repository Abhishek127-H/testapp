import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";

function Navbar() {
  const navigate = useNavigate();

  const user =
    localStorage.getItem("currentUser") || "Admin";

  const logout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="ml-64 bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold text-purple-700">
          Welcome {user} 👋
        </h1>

        <p className="text-gray-500 text-sm">
          Manage your inventory smoothly
        </p>
      </div>

      <button type="button" class="btn btn-primary"
        onClick={logout}
        
      >
        Logout
      </button>

    </div>
  );

  
}

export default Navbar;
