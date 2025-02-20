import React from "react";
import Header from '../../components/header/page';
import Footer from '../../components/footer/page';
import pwd from '../../images/pwd.jpg';
import displaced from '../../images/displaced.png';
import highschool from '../../images/highschool.png';
import government from '../../images/government.png';

const Page: React.FC = () => {
  return (
    <div>
    <Header />
    <div className="text-center mt-8">
      <h2 className="font-bold text-4xl">Special job categories</h2>
      <p className="text-xl font-semibold">
        We have job vacancies for various types of jobseekers
      </p>
    </div>

    <div className="flex justify-center gap-8 mt-12 flex-wrap">
        {/* Card 1 */}
        <div className="group relative w-72 h-72 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
          <img src={pwd.src} alt="Differently abled/PWD" className="w-full h-30 object-cover" />
          <div className="absolute bottom-0 w-full bg-white p-4 transition-colors duration-300 group-hover:bg-blue-600">
            <h3 className="font-bold text-lg text-gray-800 transition-colors duration-300 group-hover:text-white">
              Differently abled/PWD
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
              1 position available
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative w-72 h-72 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
          <img  src={displaced.src} alt="Displaced Workers" className="w-full h-30 object-cover" />
          <div className="absolute bottom-0 w-full bg-white p-4 transition-colors duration-300 group-hover:bg-blue-600">
            <h3 className="font-bold text-lg text-gray-800 transition-colors duration-300 group-hover:text-white">
              Displaced Workers
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
              2 positions available
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative w-72 h-72  overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
          <img  src={highschool.src} alt="High School Graduates" className="w-full h-30 object-cover" />
          <div className="absolute bottom-0 w-full bg-white p-4 transition-colors duration-300 group-hover:bg-blue-600">
            <h3 className="font-bold text-lg text-gray-800 transition-colors duration-300 group-hover:text-white">
              High School Graduates
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
              3 positions available
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group relative w-72 h-72 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
          <img  src={government.src} alt="Government Jobs" className="w-full h-30 object-cover" />
          <div className="absolute bottom-0 w-full bg-white p-4 transition-colors duration-300 group-hover:bg-blue-600">
            <h3 className="font-bold text-lg text-gray-800 transition-colors duration-300 group-hover:text-white">
              Government Jobs
            </h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
              4 positions available
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Quick Stats Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl font-bold mb-2">Quick Stats</h2>
        <p className="text-xl text-muted-foreground mb-16">
          PESO-Gensan is FREE for all and accessible 24/7
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36 bg-gray-100 h-60 w-[75rem] px-20 py-16 align-center ml-[-6rem] rounded-xl">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <p className="text-4xl font-bold mb-2">0</p>
            <p className="text-gray-500">Jobseekers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <path d="M9 18V6"></path>
              <path d="M15 18V6"></path>
            </svg>
            <p className="text-4xl font-bold mb-2">0</p>
            <p className="text-gray-500">Employers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <p className="text-4xl font-bold mb-2">0</p>
            <p className="text-gray-500">Job Vacancies</p>
          </div>
          
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
            <p className="text-4xl font-bold mb-2">0</p>
            <p className="text-gray-500">Jobseekers Hired</p>
          </div>
        </div>
      </section>

      {/* Job Listing Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-2">Job Listing</h2>
        <p className="text-xl text-muted-foreground mb-8">
          We have job vacancies for various types of jobseekers
        </p>
        <p className="text-gray-500">No jobs available</p>
      </section>
    </div>

    <Footer />
  </div>
  );
};

export default Page;
