"use client";

import { useEffect, useState } from "react";

interface JobPost {
  id: number;
  job_position: string;
  job_location: string;
  salary: string;
  job_type: string;
  skill_level: string;
  job_description: string;
  requirements: string;
  created_at: string;
}

const JobPosts = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [newJob, setNewJob] = useState({
    job_position: "",
    job_location: "",
    salary: "",
    job_type: "Full-time",
    skill_level: "Entry",
    job_description: "",
    requirements: "",
  });

  useEffect(() => {
    fetchJobPosts();
  }, []);

  const fetchJobPosts = async () => {
    try {
      const response = await fetch("/api/jobpost");
      if (!response.ok) throw new Error("Failed to fetch job posts");

      const data: JobPost[] = await response.json();
      setJobPosts(data);
      setFilteredJobs(data);
    } catch (err) {
      setError("Error fetching job posts. Please try again.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredJobs(jobPosts);
    } else {
      const filtered = jobPosts.filter(
        (job) =>
          job.job_position.toLowerCase().includes(term.toLowerCase()) ||
          job.job_location.toLowerCase().includes(term.toLowerCase()) ||
          job.job_description.toLowerCase().includes(term.toLowerCase()) ||
          job.requirements.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  async function handlePostJob() {
    try {
      const response = await fetch("/api/jobpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });

      const result = await response.json();

      if (response.ok) {
        setNotification("Job posted successfully!");
        setTimeout(() => setNotification(null), 3000);
        fetchJobPosts();
        setShowModal(false);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Failed to post job. Please try again.");
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md ml-64">
      {notification && (
        <div className="bg-green-500 text-white p-2 rounded-md text-center mb-4">
          {notification}
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border p-2 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => setShowModal(true)}
        >
          Post Job
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">Job Posts</h2>

      {loading ? (
        <p className="text-gray-500">Loading job posts...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b">Position</th>
                <th className="py-3 px-4 border-b">Location</th>
                <th className="py-3 px-4 border-b">Salary</th>
                <th className="py-3 px-4 border-b">Job Type</th>
                <th className="py-3 px-4 border-b">Skill Level</th>
                <th className="py-3 px-4 border-b">Description</th>
                <th className="py-3 px-4 border-b">Requirements</th>
                <th className="py-3 px-4 border-b">Posted On</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 text-center">
                  <td className="py-3 px-4 border-b">{job.job_position}</td>
                  <td className="py-3 px-4 border-b">{job.job_location}</td>
                  <td className="py-3 px-4 border-b">{job.salary || "N/A"}</td>
                  <td className="py-3 px-4 border-b">{job.job_type}</td>
                  <td className="py-3 px-4 border-b">{job.skill_level}</td>
                  <td className="py-3 px-4 border-b">{job.job_description || "N/A"}</td>
                  <td className="py-3 px-4 border-b">{job.requirements || "N/A"}</td>
                  <td className="py-3 px-4 border-b">{new Date(job.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[45rem] relative">
              {/* Close Button */}
              <button 
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>

              <h2 className="text-xl font-bold mb-4 text-center">Post a New Job</h2>

              <input type="text" name="job_position" placeholder="Position" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange} />
              <input type="text" name="job_location" placeholder="Location" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange} />
              <input type="text" name="salary" placeholder="Salary" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange} />

              <select name="job_type" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange}>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Temporary</option>
              </select>

              <select name="skill_level" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange}>
                <option>Entry</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>

              <textarea name="job_description" placeholder="Description" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange} />
              <textarea name="requirements" placeholder="Requirements" className="border p-2 rounded-md w-full mb-3" onChange={handleInputChange} />

              <div className="flex justify-end space-x-2">
                <button className="bg-gray-400 text-white px-4 py-2 rounded-md" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={handlePostJob}>Post Job</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default JobPosts;
