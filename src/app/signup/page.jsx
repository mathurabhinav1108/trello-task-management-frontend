"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Listings from '../api/Listings';
import { redirect  } from 'next/navigation';
import toast from 'react-hot-toast';

export default function page() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const[loading,setLoading]=useState(false);
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    if (loading == true) { return; }
    setLoading(true);
    const main = new Listings();
    const response = main.Signup({
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    });
    response
      .then((res) => {
        if (res && res.data && res.data.status) {
          toast.success(res.data.message);
          setFormData({
            name: "",
            email: "",
            password: "",
          });
          setLoading(false);
          redirect("/login");
        } else {
          toast.error(res?.data.message);
          setLoading(false);
        }

      })
      .catch((error) => {
        toast.error(error?.response.data);
        setLoading(false);
      });
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
              {loading?"Processing...":"Sign up"}
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
