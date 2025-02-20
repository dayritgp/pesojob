import React from "react"
import Footer from "@/app/components/footer/page"
import Header from "@/app/components/header/page"
import Image from "next/image"
import bg from "..//../images/jobseekerguide.jpg"

export default function EmployerGuide() {
    const guides = [
      {
        title: "Getting Started",
        steps: [
          {
            title: "Create Company Account",
            description: "Register your company and complete the verification process",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            ),
          },
          {
            title: "Complete NSRP Form 2",
            description: "Fill out company background and establishment details",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        title: "Managing Job Posts",
        steps: [
          {
            title: "Post New Jobs",
            description: "Create and publish job vacancies with detailed requirements",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            ),
          },
          {
            title: "Track Job Posts",
            description: "Monitor active listings and manage applications",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
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
            title: "Review Applicants",
            description: "Browse profiles and evaluate job seeker applications",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            ),
          },
          {
            title: "Process Applications",
            description: "Approve or reject applications and send responses",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ),
          },
        ],
      },
      {
        title: "Using Dashboard",
        steps: [
          {
            title: "View Analytics",
            description: "Access hiring trends and application statistics",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            ),
          },
          {
            title: "Check Notifications",
            description: "Stay updated with application and system alerts",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Employer's Guide</h1>
            <p className="text-lg text-center max-w-2xl mx-auto text-teal-100">
              Learn how to effectively use the PESO Job Portal to find the perfect candidates
            </p>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {guides.map((section, sectionIndex) => (
              <div key={sectionIndex} className="relative">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                </div>
  
                <div className="grid md:grid-cols-2 gap-6">
                  {section.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-teal-500 text-white p-2 rounded-lg">{step.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <div className="bg-teal-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Need Assistance?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is ready to help you with any questions about using the platform.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300 text-sm">
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