"use client";

import { FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold ml-72">Employer Dashboard</h1>
      <div className="flex gap-4">
        <FiBell className="text-gray-600 text-2xl cursor-pointer" />
        <FiUser className="text-gray-600 text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
