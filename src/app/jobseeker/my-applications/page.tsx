"use client";

import { useState } from "react";
import {
  Search,
  Settings,
  Filter,
  Upload,
  Calendar,
  Mail,
  CheckCircle,
  FileText,
} from "lucide-react";

const ApplicationsPage = () => {
  const [selectedApplicant, setSelectedApplicant] = useState<number | null>(0);
  const applicants = [
    {
      name: "Michael Almanoche",
      date: "09/02/2024 · 18:10",
      experience: "Senior UI/UX Designer - Google",
      description:
        "I'm an experienced UI/UX designer passionate about creating engaging digital experiences.",
      appliedFor: "Product Designer",
      applicationDate: "09/02/2024 · 08:12",
      totalExperience: "2nd Total Experience",
      files: ["michael-cv-updated.pdf", "michael-portfolio-new.pdf"],
      avatar: "https://bracketfights.com/images/templates/2019/397/best-anime-characters-397/yukino-yukinoshitapng.png",
    },
    {
      name: "Alrafael Usman",
      date: "12/02/2024 · 15:13",
      experience: "Graphic Designer - Facebook",
      description: "Creative Graphic Designer with 5 years of experience in branding and marketing.",
      appliedFor: "Graphic Designer",
      applicationDate: "12/02/2024 · 10:45",
      totalExperience: "5 Years Experience",
      files: ["alrafael-cv.pdf", "alrafael-portfolio.pdf"],
      avatar: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="flex min-h-screen p-6 ml-64">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-5 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Others Applied</h2>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Applied..."
            className="pl-10 p-2 w-full border rounded-lg"
          />
        </div>
        <ul>
          {applicants.map((applicant, index) => (
            <li
              key={index}
              className={`flex items-center p-3 mb-2 cursor-pointer rounded-lg ${
                selectedApplicant === index ? "bg-blue-100" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedApplicant(index)}
            >
              <img src={applicant.avatar} alt={applicant.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="font-medium">{applicant.name}</p>
                <p className="text-sm text-gray-500">{applicant.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <main className="flex-1 bg-white shadow-md rounded-lg p-6 ml-6">
        {selectedApplicant !== null && (
          <div>
            <h2 className="text-3xl font-bold">{applicants[selectedApplicant].appliedFor}</h2>
            <p className="text-gray-500">{applicants[selectedApplicant].description}</p>
            <div className="flex items-center gap-4 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Mail size={16} /> Schedule Interview
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg">Move Draft</button>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Overview</h3>
              <p><strong>Applied For:</strong> {applicants[selectedApplicant].appliedFor}</p>
              <p><strong>Application Date:</strong> {applicants[selectedApplicant].applicationDate}</p>
              <p><strong>Experience:</strong> {applicants[selectedApplicant].totalExperience}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">File Attachment</h3>
              <ul>
                {applicants[selectedApplicant].files.map((file, index) => (
                  <li key={index} className="flex items-center gap-2 mt-2">
                    <FileText size={18} /> {file}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApplicationsPage;
