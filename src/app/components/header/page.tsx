"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "..//../images/Referral_Logo.png"

const LandingPage: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white relative z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
    <div className="flex items-center space-x-4">
      <div className="text-xl font-bold">
        <Image src={logo} alt="logo" className="w-52 h-22 mx-auto ml-20" />
      </div>
    </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 justify-end w-full mr-3">
          <Link href="/pages/job_search" className="hover:text-blue-400 relative group">
            Job Search
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* User's Guide Dropdown */}
          <div className="relative group">
            <a href="#user-guide" className="hover:text-blue-400 relative group flex items-center">
              User's Guide
              <svg
                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
              <Link href="/pages/job_seeker_guide" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <span className="mr-2">👤</span> Job Seekers
              </Link>
                <Link href="/pages/employer_guide" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <span className="mr-2">🏢</span> Employers
                </Link>
            </div>
          </div>

          <Link href="/pages/about_page" className="hover:text-blue-400 relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mr-10 ml-4">
          <Link href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl border-2 border-transparent hover:bg-gray-900 hover:border-2 hover:border-white transform transition-transform duration-300 hover:scale-110">
              LOGIN
            </button>
          </Link>

          {/* Register Dropdown */}
          <div className="relative group">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl border-2 border-transparent hover:bg-gray-900 hover:border-2 hover:border-white transform transition-transform duration-300 hover:scale-110">
              REGISTER
            </button>
            <div className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
              <a
                href="/users/Job_Seeker_Registration"
                className="flex items-center px-4 py-2 hover:bg-gray-200"
              >
                <span className="mr-2">👤</span> Job Seekers
              </a>
              <a
                href="/users/Employer_Registration"
                className="flex items-center px-4 py-2 hover:bg-gray-200"
              >
                <span className="mr-2">🏢</span> Employers
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LandingPage

