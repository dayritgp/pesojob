"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import JobPosts from "./components/JobPosts";
import FindJobSeeker from "./components/FindJobSeeker";
import Page from "./page"; // Importing page.tsx as the Dashboard

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Function to render the selected component dynamically
  const renderComponent = () => {
    switch (activeComponent) {
      case "jobPosts":
        return <JobPosts />;
      case "findJobSeeker":
        return <FindJobSeeker />;
      case "dashboard":
      default:
        return <Page />; // Using `page.tsx` as the default dashboard
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveComponent={setActiveComponent} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 flex-1 overflow-auto">
          {renderComponent() || children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
