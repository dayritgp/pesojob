"use client"
import React, { useState } from "react";
import Header from '../../components/header/page';
import Footer from '../../components/footer/page';
import Image from 'next/image';
import bg from '../../images/cityhall.jpg';

export default function AboutPage() {
    return (
        <>
        <Header />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B2237] to-[#2A3A5A] text-white py-28 w-full">
        <Image src={bg} alt="About Hero" layout="fill" objectFit="cover" className="absolute inset- z-0 opacity-50" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About the PESO Job Referral System</h1>
          <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-200">
        A web-based platform developed for the Public Employment Service Office (PESO) of LGU - General Santos City,
        designed to enhance job matching and referral services.
          </p>
        </div>
      </section>
  
      {/* System Overview */}
      <section className="py-12 container mx-auto px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1B2237]">System Overview</h2>
        <p className="text-gray-700 text-md">
          The PESO Job Referral System transforms the traditional manual process into a streamlined digital platform,
          making job matching and employment services more efficient and accessible for the people of General Santos
          City.
        </p>
        </div>
      </section>
  
      {/* Challenges Section */}
      <section className="bg-gradient-to-b from-blue-50 to-orange-50 py-12">
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#1B2237]">Current System Challenges</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Manual Registration Process",
            "Time-Consuming Job Matching",
            "Limited Job Posting Methods",
            "No Automated Tracking",
          ].map((challenge, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
            <div className="rounded-full w-10 h-10 bg-gradient-to-r from-[#4287f5] to-[#3670cc] text-white flex items-center justify-center mb-2">
              {index + 1}
            </div>
            <h3 className="font-semibold text-md mb-2 text-[#1B2237]">{challenge}</h3>
            </div>
          ))}
        </div>
        </div>
      </section>
  
      {/* User Types */}
      <section className="py-12 container mx-auto px-4 bg-gradient-to-b from-orange-50 to-white">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#1B2237]">Who Can Use This System?</h2>
        <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Job Seekers",
            description: "Register, search for job opportunities, and apply online through our platform.",
            icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
            ),
          },
          {
            title: "Employers",
            description: "Post job vacancies, review applications, and connect with potential candidates.",
            icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
            ),
          },
          {
            title: "PESO Staff",
            description: "Manage job referrals, approve postings, and oversee the recruitment process.",
            icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            ),
          },
        ].map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 transition-all hover:shadow-lg hover:bg-blue-50"
          >
            <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto text-[#4287f5] mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {user.icon}
            </svg>
            <h3 className="text-lg font-bold mb-2 text-[#1B2237]">{user.title}</h3>
            <p className="text-gray-700 text-sm">{user.description}</p>
            </div>
          </div>
        ))}
        </div>
      </section>
  
      {/* System Objectives */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#1B2237]">System Objectives</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            "Digitize registration for job seekers and employers",
            "Automate job matching to speed up referrals",
            "Enable real-time job postings for employers",
            "Improve job vacancy tracking for better accuracy",
          ].map((objective, index) => (
            <div
            key={index}
            className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-orange-50"
            >
            <svg
              className="w-5 h-5 text-[#4287f5] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-700 text-sm">{objective}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
  
      {/* Call to Action */}
      <section className="py-12 text-center container mx-auto px-4 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-2xl font-bold mb-4 text-[#1B2237]">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Join the PESO Job Referral System today and experience a more efficient way to connect with employment
        opportunities in General Santos City.
        </p>
        <div className="space-x-4">
        <button className="bg-gradient-to-r from-[#4287f5] to-[#3670cc] hover:from-[#3670cc] hover:to-[#4287f5] text-white px-6 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
          Register Now
        </button>
        <button className="border-2 border-[#4287f5] text-[#4287f5] hover:bg-[#4287f5] hover:text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
          Learn More
        </button>
        </div>
      </section>
    </div>
      <Footer />
      </>
    )
  }
  
  
  
  