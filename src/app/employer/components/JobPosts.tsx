"use client";

import { useEffect, useState } from "react";

interface JobPost {
  id: number;
  position: string;
  location: string;
  salary: string | null;
  description: string | null;
  created_at: string;
  employer_id: number | null;
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
    position: "",
    location: "",
    salary: "",
    description: "",
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
          job.position.toLowerCase().includes(term.toLowerCase()) ||
          job.location.toLowerCase().includes(term.toLowerCase()) ||
          (job.description && job.description.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredJobs(filtered);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        setTimeout(() => setNotification(null), 3000); // Hide after 3 seconds
        fetchJobPosts(); // Refresh job posts
        setShowModal(false); // Close modal
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Failed to post job. Please try again.");
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md ml-64">
      {/* Notification */}
      {notification && (
        <div className="bg-green-500 text-white p-2 rounded-md text-center mb-4">
          {notification}
        </div>
      )}

      {/* Search and Post Job Button */}
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

      {/* Job Posts Table */}
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
                <th className="py-3 px-4 border-b">Description</th>
                <th className="py-3 px-4 border-b">Posted On</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 text-center">
                    <td className="py-3 px-4 border-b">{job.position}</td>
                    <td className="py-3 px-4 border-b">{job.location}</td>
                    <td className="py-3 px-4 border-b">{job.salary || "N/A"}</td>
                    <td className="py-3 px-4 border-b">{job.description || "N/A"}</td>
                    <td className="py-3 px-4 border-b">{new Date(job.created_at).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No matching job posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Post Job Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[45rem]">
            <h2 className="text-xl font-bold mb-4">Post a New Job</h2>
            <input
              type="text"
              name="position"
              placeholder="Position"
              className="border p-2 rounded-md w-full mb-3"
              value={newJob.position}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="border p-2 rounded-md w-full mb-3"
              value={newJob.location}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="salary"
              placeholder="Salary (optional)"
              className="border p-2 rounded-md w-full mb-3"
              value={newJob.salary}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description (optional)"
              className="border p-2 rounded-md w-full mb-3"
              value={newJob.description}
              onChange={handleInputChange}
            />
            <div className="flex justify-end space-x-2">
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={handlePostJob}>
                Post Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPosts;
