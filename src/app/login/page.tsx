"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/footer/page";
import logo from "../images/PESO LOGO NEW.png";
import Image from 'next/image';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      const data = response.data as { token: string, user_type: string };
      localStorage.setItem("token", data.token);
      if (data.user_type === 'employer') {
        window.location.href = "/employer";
      } else if (data.user_type === 'job_seeker') {
        window.location.href = "/jobseeker";
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-gray-900">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-center">
        <Image src={logo} alt="logo" className="w-[4.3rem] h-[4.3rem] mr-4" />
        <h3 className="text-2xl font-semibold">PESO JobPortal</h3>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow px-4 mt-14">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-left">Account Log In</h2>
          <p className="text-left text-gray-600 mb-4">Fill out the information below in order to access your account.</p>
          
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="flex-grow p-3 text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                className="px-3 py-[0.9rem] bg-gray-50 text-blue-500 hover:bg-gray-200 text-sm font-medium border-l border-blue-300"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <div className="text-right text-sm text-blue-500">
              <Link href="#" className="hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-3 rounded-md mt-4 hover:opacity-90 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Log In
            </button>
          </form>
          <div className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Create one</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;