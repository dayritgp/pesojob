"use client";

import { useState } from "react";
import { Search, Filter, MapPin, Briefcase } from "lucide-react";

const FindCompanies = () => {
  const [search, setSearch] = useState("");

  const companies = [
    { name: "Brigada", location: "General Santos City", jobs: 120, salary: "₱12K - ₱15K", type: "Full-Time", logo: "https://philippines.mom-gmr.org/uploads/_processed_/e/a/csm_1481-2446_company_import_d46da001d1.png" },
    { name: "Dole", location: "General Santos City", jobs: 98, salary: "₱11K - ₱14K", type: "Internship", logo: "https://www.bworldonline.com/wp-content/uploads/2021/07/Dole-logo-fb.jpg" },
    { name: "Grand Summit Hotel", location: "General Santos City", jobs: 150, salary: "₱11K - ₱14K", type: "Part-Time", logo: "https://www.grandsummithotels.ph/sites/default/files/13.png" },
    { name: "Holy Trinity College of General Santos City", location: "General Santos City", jobs: 85, salary: "₱10K - ₱13K", type: "Contract", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHGJHrbXHvqUQ/company-logo_200_200/company-logo_200_200/0/1631327137934?e=2147483647&v=beta&t=C0dxwdALr4ksquFte3ILzdHjG6TJ0pPxxeRmwQVaX1k" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 ml-64">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 shadow-md hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Filter</h2>
        
        {/* Job Type */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Job Type</label>
          <div className="space-y-2">
            {["Full-Time", "Part-Time", "Contract", "Internship"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="text-gray-600">{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Range */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Range Salary</label>
          <div className="space-y-2">
            {["Less than ₱1,000", "₱1,000 - ₱15,000", "More than ₱15,000"].map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <input type="radio" name="salary" className="w-4 h-4" />
                <label className="text-gray-600">{range}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Experience</label>
          <div className="space-y-2">
            {["Less than a year", "1-3 years", "3-5 years", "5-10 years"].map((exp) => (
              <div key={exp} className="flex items-center space-x-2">
                <input type="radio" name="experience" className="w-4 h-4" />
                <label className="text-gray-600">{exp}</label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search & Filters */}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for companies..."
            className="w-full focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border rounded-lg p-2 text-gray-700">
            <option>All Locations</option>
            <option>General Santos City</option>
          </select>
          <select className="border rounded-lg p-2 text-gray-700">
            <option>All Job Types</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
          </select>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4 border">
              <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg">{company.name}</h3>
                <p className="text-gray-500 text-sm flex items-center"><MapPin size={14} className="mr-1" /> {company.location}</p>
                <p className="text-blue-600 font-medium">{company.jobs} Open Jobs</p>
                <p className="text-gray-600 text-sm flex items-center"><Briefcase size={14} className="mr-1" /> {company.type}</p>
                <p className="text-green-600 font-semibold">{company.salary}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindCompanies;
