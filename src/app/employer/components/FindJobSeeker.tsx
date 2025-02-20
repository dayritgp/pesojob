"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiUser, FiX } from "react-icons/fi";

interface JobSeeker {
  id: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: string;
  date_of_birth: string;
  place_of_birth: string;
  sex: "Male" | "Female";
  height_cm?: number;
  contact_number: string;
  civil_status: "Single" | "Married" | "Widowed" | "Separated";
  email: string;
  employment_status: "Employed" | "Unemployed";
  preferred_occupations: string;
  work_experience?: string;
  expected_salary?: string;
  educational_background: string;
  certifications?: string;
  skills?: string;
}

const FindJobSeeker: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);
  const [selectedSeeker, setSelectedSeeker] = useState<JobSeeker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch job seekers from API
  useEffect(() => {
    const fetchJobSeekers = async () => {
      try {
        const response = await fetch("/api/findjobseeker");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setJobSeekers(data);
        } else if (data?.jobSeekers && Array.isArray(data.jobSeekers)) {
          setJobSeekers(data.jobSeekers);
        } else {
          throw new Error("Invalid data format: Expected an array");
        }
      } catch (error: any) {
        console.error("Error fetching job seekers:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobSeekers();
  }, []);

  // Filter job seekers based on search query
  const filteredJobSeekers = jobSeekers.filter((seeker) =>
    `${seeker.first_name} ${seeker.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen ml-64">
      <h1 className="text-2xl font-bold mb-4">Find Job Seeker</h1>

      {/* Search Input */}
      <div className="relative w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search job seekers..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiSearch className="absolute top-3 left-3 text-gray-500 text-lg" />
      </div>

      {/* Job Seekers List */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        {loading ? (
          <p className="text-gray-500">Loading job seekers...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : filteredJobSeekers.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredJobSeekers.map((seeker) => (
              <li
                key={seeker.id}
                className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100 transition"
                onClick={() => setSelectedSeeker(seeker)}
              >
                <FiUser className="text-3xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">
                    {seeker.first_name}{" "}
                    {seeker.middle_name ? seeker.middle_name[0] + "." : ""}{" "}
                    {seeker.last_name} {seeker.suffix ? seeker.suffix : ""}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No job seekers found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedSeeker && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSeeker(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <FiX className="text-2xl" />
            </button>

            <h2 className="text-xl font-bold mb-2">
              {selectedSeeker.first_name} {selectedSeeker.middle_name && selectedSeeker.middle_name[0] + "."}{" "}
              {selectedSeeker.last_name} {selectedSeeker.suffix ? selectedSeeker.suffix : ""}
            </h2>
            <p className="text-gray-600 text-sm">📍 {selectedSeeker.place_of_birth}</p>

            <div className="mt-4 space-y-2 text-gray-700">
              <p><strong>📅 Date of Birth:</strong> {selectedSeeker.date_of_birth}</p>
              <p><strong>📞 Contact:</strong> {selectedSeeker.contact_number}</p>
              <p><strong>📧 Email:</strong> {selectedSeeker.email}</p>
              <p><strong>👤 Sex:</strong> {selectedSeeker.sex}</p>
              <p><strong>📏 Height:</strong> {selectedSeeker.height_cm ? `${selectedSeeker.height_cm} cm` : "N/A"}</p>
              <p><strong>💼 Employment:</strong> {selectedSeeker.employment_status}</p>
              <p><strong>🏠 Civil Status:</strong> {selectedSeeker.civil_status}</p>
              <p><strong>🎓 Education:</strong> {selectedSeeker.educational_background}</p>
              <p><strong>💵 Expected Salary:</strong> {selectedSeeker.expected_salary ?? "Not specified"}</p>
              <p><strong>📜 Certifications:</strong> {selectedSeeker.certifications || "None"}</p>
              <p><strong>🛠 Skills:</strong> {selectedSeeker.skills || "Not specified"}</p>
              <p><strong>🛠 Work Experience:</strong> {selectedSeeker.work_experience || "Not specified"}</p>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedSeeker(null)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindJobSeeker;
