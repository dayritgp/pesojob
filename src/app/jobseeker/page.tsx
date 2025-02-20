"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Briefcase, FileText, TrendingUp, ArrowRight, MapPin, Building } from "lucide-react"

const stats = {
  totalVacancies: 120,
  jobMatches: 45,
  pendingApplications: 3,
}

const Home = () => {
  const [recentJobs, setRecentJobs] = useState<any[]>([])

  useEffect(() => {
    setRecentJobs([
      { id: 1, title: "Software Engineer", company: "ABC Tech", location: "Remote" },
      { id: 2, title: "Web Developer", company: "XYZ Corp", location: "San Francisco" },
      { id: 3, title: "Data Analyst", company: "DataCo", location: "New York" },
    ])
  }, [])

  return (
    <div className="md:ml-64 flex-1 p-4 md:p-8">
      <div className="max-w-6xl mx-auto mt-[-3rem]">
        {/* Welcome Section */}
        <div className="mb-8 mt-12 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-2 text-gray-600">Here's what's happening with your job search</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Total Vacancies */}
          <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] p-4 rounded-2xl shadow-lg h-32 w-[21rem] flex flex-col justify-between transform transition-all duration-200 hover:scale-105">
            <div>
              <p className="text-sm font-medium text-white/90">Total Vacancies</p>
              <p className="text-3xl font-bold mt-1 text-white">{stats.totalVacancies}</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-white/20 p-2 rounded-lg">
                <Briefcase size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Job Matches */}
          <div className="bg-gradient-to-r from-[#10B981] to-[#34D399] p-4 rounded-2xl shadow-lg h-32 w-[21rem] flex flex-col justify-between transform transition-all duration-200 hover:scale-105">
            <div>
              <p className="text-sm font-medium text-white/90">Job Matches</p>
              <p className="text-3xl font-bold mt-1 text-white">{stats.jobMatches}</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Pending Applications */}
          <div className="bg-gradient-to-r from-[#F97316] to-[#FB923C] p-4 rounded-2xl shadow-lg h-32 w-[21rem] flex flex-col justify-between transform transition-all duration-200 hover:scale-105">
            <div>
              <p className="text-sm font-medium text-white/90">Pending Applications</p>
              <p className="text-3xl font-bold mt-1 text-white">{stats.pendingApplications}</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-white/20 p-2 rounded-lg">
                <FileText size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>


        {/* Recent Jobs Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Job Listings</h2>
            <Link
              href="/find/job"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:gap-6">
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/find/job/${job.id}`}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 md:px-8 md:py-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to Take the Next Step?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Discover thousands of job opportunities and start your journey towards your dream career today.
            </p>
            <Link
              href="/find/job"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              Search Jobs Now
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

