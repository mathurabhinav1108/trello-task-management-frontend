"use client";
import Link from 'next/link';
import React, { useState } from 'react'

export default function page() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here, such as making API calls or validations
      console.log('Form submitted:', formData);
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#d6d0f9]">
        <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center">
            Welcome to{" "}
            <span className='text-[#4534AC]'>
                 Workflo!
                </span>
            </h2>
          <form onSubmit={handleSubmit} className="mt-6">
          <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border bg-[#EBEBEB] border-gray-300 rounded-md shadow-sm "
                placeholder="Full name"
              />
            </div>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border bg-[#EBEBEB] border-gray-300 rounded-md shadow-sm "
                placeholder="Your email"
              />
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 border bg-[#EBEBEB] border-gray-300 rounded-md shadow-sm "
                placeholder="password"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full p-2 text-white bg-[#766bbc] rounded">
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have have an account? 
            <Link href="/login" className="text-blue-500 hover:underline"> Log in</Link>.
          </p>
        </div>
      </div>
    );
  }
