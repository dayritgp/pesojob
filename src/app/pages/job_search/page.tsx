"use client";

import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import JobList from "@/app/components/jobsearch/JobList";
import { useState } from "react";

export default function JobSearchPage() {
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(`/api/suggestions?query=${query}`);
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(
        `/api/search?position=${jobSearch}&location=${locationSearch}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-b from-blue-600 to-blue-400 py-16">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 relative bg-white p-4 rounded-lg shadow-lg">
                <div className="flex-1 flex items-center border rounded-lg px-4 py-2 relative">
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={(e) => {
                      setJobSearch(e.target.value);
                      fetchSuggestions(e.target.value);
                    }}
                    placeholder="Job title, keyword or company"
                    className="w-full outline-none"
                  />
                  {suggestions.length > 0 && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setJobSearch(suggestion);
                            setSuggestions([]);
                          }}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex-1 flex items-center border rounded-lg px-4 py-2">
                  <input
                    type="text"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    placeholder="City, state or zip code"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  Find Jobs
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Jobs Hiring Now
          </h1>
          {error && <p className="text-center text-red-500">{error}</p>}
          <JobList jobs={jobs} />
        </div>

        <Footer />
      </div>
    </>
  );
}
