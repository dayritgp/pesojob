"use client";

import Link from "next/link";

interface Job {
  id: number;
  position: string;
  location: string;
  salary: string;
  description: string;
}

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-200"
          >
            <Link href={`/jobs/${job.id}`} className="block mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
            </Link>

            <p className="text-gray-500">{job.location}</p>

            {/* Salary badge */}
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">
                💰 {job.salary}/y
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-4">Just now</p>

            <div className="mt-4 text-end">
              <Link
                href={`/jobs/${job.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Apply
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 col-span-full">No jobs available</p>
      )}
    </div>
  );
}
