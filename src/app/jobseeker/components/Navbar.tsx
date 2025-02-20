"use client";

import { useState } from "react";
import { Bell, Info, User } from "lucide-react";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="fixed top-0 right-0 left-[16rem] bg-white p-4 flex justify-between items-center border-b-2 z-50 h-[4.5rem]">
        

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4 ml-[63rem]">
        {/* Notifications */}
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={24} className="text-gray-700" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 ">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <ul className="space-y-2">
                <li className="text-sm">📢 New Job Posting available!</li>
                <li className="text-sm">✅ Your application was approved!</li>
                <li className="text-sm">⏳ Interview scheduled for Monday</li>
              </ul>
              <button className="text-blue-500 text-sm mt-2">View All</button>
            </div>
          )}
        </div>

        

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-2 border-2  p-2 rounded-2xl"
          >
            <User size={24} className="text-purple-700 border-2 rounded-lg " />
            <span className="text-gray-700 font-semibold">Welcome, Jane!</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
              <h3 className="font-semibold">Jane Doe</h3>
              <ul className="space-y-2 mt-2">
                <li className="text-sm hover:text-blue-500 cursor-pointer">View Profile</li>
                <li className="text-sm hover:text-blue-500 cursor-pointer">Settings</li>
                <li className="text-sm hover:text-red-500 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
