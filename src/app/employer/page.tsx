"use client";

const Dashboard = () => {
  return (
    <div className="ml-64">

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <p className="text-gray-600">Referred Applicants</p>
          <strong className="text-xl">45</strong>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <p className="text-gray-600">Job Vacancies</p>
          <strong className="text-xl">12</strong>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <p className="text-gray-600">Jobs Posted</p>
          <strong className="text-xl">8</strong>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <p className="text-gray-600">Applicants Available</p>
          <strong className="text-xl">34</strong>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>New job post: <strong>Software Engineer</strong></li>
          <li>Applicant approved: <strong>Data Analyst</strong></li>
          <li>Job Seeker applied for: <strong>Graphic Designer</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
