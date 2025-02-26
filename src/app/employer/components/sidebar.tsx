"use client";

import { FiHome, FiBriefcase, FiUsers, FiBell, FiBookOpen, FiSettings, FiLogOut } from "react-icons/fi";
import React from "react";

interface SidebarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
  setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>; // ✅ Add prop
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent, setShowLogoutModal  }) => {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 fixed">
      <h2 className="text-xl font-bold mb-6">Navigation</h2>
      <ul className="space-y-4">
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("dashboard")}
        >
          <FiHome className="text-lg" />
          <span>Dashboard</span>
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("jobPosts")}
        >
          <FiBriefcase className="text-lg" />
          <span>Job Posts</span>
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("findJobSeeker")}
        >
          <FiUsers className="text-lg" />
          <span>Find Job Seeker</span>
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("applicants")}
        >
          <FiUsers className="text-lg" />
          <span>Applicants</span>
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("notifications")}
        >
          <FiBell className="text-lg" />
          <span>Notifications</span>
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("usersGuide")}
        >
          <FiBookOpen className="text-lg" />
          <span>User's Guide</span>
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => setActiveComponent("manageAccount")}
        >
          <FiSettings className="text-lg" />
          <span>Manage Account</span>
        </li>
        <li className="flex items-center gap-3 text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => setShowLogoutModal(true)}> {/* ✅ Open logout modal */}
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
