"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import JobPosts from "./components/JobPosts";
import FindJobSeeker from "./components/FindJobSeeker";
import Applicants from "./components/Applicants";
import Notifications from "./components/Notifications";
import UsersGuide from "./components/UsersGuide";
import ManageAccount from "./components/ManageAccount";
import Page from "./page"; // Importing page.tsx as the Dashboard

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false); // ✅ Logout modal state

  // Function to handle logout
  const handleLogout = () => {
    setShowLogoutModal(false);
    console.log("User logged out"); // Replace this with actual logout logic
    // Example: Clear authentication tokens and redirect
    localStorage.removeItem("authToken");
    window.location.href = "/login"; // Redirect to login page
  };

  // Function to render the selected component dynamically
  const renderComponent = () => {
    switch (activeComponent) {
      case "jobPosts":
        return <JobPosts />;
      case "findJobSeeker":
        return <FindJobSeeker />;
      case "applicants":
        return <Applicants />;
      case "notifications":
        return <Notifications />;
      case "usersGuide":
        return <UsersGuide />;
      case "manageAccount":
        return <ManageAccount />;
      case "dashboard":
      default:
        return <Page />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveComponent={setActiveComponent} setShowLogoutModal={setShowLogoutModal} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 flex-1 overflow-auto">
          {renderComponent() || children}
        </main>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Confirm Logout</h2>
            <p className="text-gray-600 my-4">Are you sure you want to log out?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
