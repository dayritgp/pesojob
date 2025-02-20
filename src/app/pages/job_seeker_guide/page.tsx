
import React from "react"
import Footer from "@/app/components/footer/page"
import Header from "@/app/components/header/page"
import Image from "next/image"
import bg from "..//../images/jobseekerguide.jpg"

export default function Job_seeker() {
    const guides = [
      {
        title: "Getting Started",
        steps: [
          {
            title: "Create Your Account",
            description: "Sign up with your email and complete your profile information",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            ),
          },
          {
            title: "Complete NSRP Form",
            description: "Fill out your background information for job applications",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            ),
          },
        ],
      },
      {
        title: "Finding Jobs",
        steps: [
          {
            title: "Search Jobs",
            description: "Use filters to find relevant job vacancies",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            ),
          },
          {
            title: "View Details",
            description: "Check job descriptions, requirements, and company information",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ),
          },
        ],
      },
      {
        title: "Managing Applications",
        steps: [
          {
            title: "Track Applications",
            description: "Monitor your job applications and their status",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            ),
          },
          {
            title: "Check Notifications",
            description: "Stay updated with application status and employer responses",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            ),
          },
        ],
      },
    ]
  
    return (
      <>
      <Header/>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
          
        <div className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16">
        <Image src={bg} alt="About" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-90" />
          <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Job Seeker's Guide</h1>
            <p className="text-lg text-center max-w-2xl mx-auto text-teal-100">
              Learn how to navigate the PESO Job Portal and find your perfect job opportunity
            </p>
          </div>
        </div>

        {/* Guide Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {guides.map((section, sectionIndex) => (
              <div key={sectionIndex} className="relative">
                {/* Connection Line */}
                {sectionIndex < guides.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px h-12 bg-gradient-to-b from-teal-500 to-transparent" />
                )}

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {section.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="bg-white rounded-xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-teal-500 text-white p-2 rounded-lg">{step.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <div className="bg-teal-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need More Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have questions or need assistance, our support team is here to help.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  
