"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Home, Search, Building2, ClipboardList, Bell, UserCircle, Menu, X, LogOut } from "lucide-react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 p-5 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 shadow-lg z-20`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-8 ">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EvK7XAmG2Iv6fXCWTawPGN2SihTGk6.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <h2 className="text-lg font-semibold text-gray-900">PESO Job Portal</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="border-b-2 border-gray-100 mb-4 mt-[-0.9rem] left-0 right-0"></div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          <Link
            href="/jobseeker"
            className="flex items-center h-10 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Home size={20} />
            <span className="ml-3 font-medium">Home</span>
          </Link>

          <Link
            href="/find/job"
            className="flex items-center h-10 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Search size={20} />
            <span className="ml-3 font-medium">Find Jobs</span>
          </Link>

          <Link
            href="/find/company"
            className="flex items-center h-10 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Building2 size={20} />
            <span className="ml-3 font-medium">Find Companies</span>
          </Link>

          <Link
            href="/applications"
            className="flex items-center h-10 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <ClipboardList size={20} />
            <span className="ml-3 font-medium">My Applications</span>
          </Link>

          <Link
            href="/notifications"
            className="flex items-center h-10 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Bell size={20} />
            <span className="ml-3 font-medium">Notifications</span>
            <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
              3
            </span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center h-10 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <UserCircle size={20} />
            <span className="ml-3 font-medium">Profile</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button className="flex items-center w-full h-10 px-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 bg-white text-gray-600 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 shadow-md z-30"
      >
        <Menu size={24} />
      </button>
    </div>
  )
}

export default Sidebar

