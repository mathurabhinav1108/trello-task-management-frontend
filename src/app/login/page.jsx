"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Listings from "../api/Listings";
import { useRouter } from 'next/navigation'; // Use useRouter hook
import toast from 'react-hot-toast';

export default function Page() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Initialize the useRouter hook

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) {
            return;
        }
        setLoading(true);

        const main = new Listings();
        main.Login({
            email: formData.email,
            password: formData.password,
        })
        .then((res) => {
            setLoading(false);
            if (res && res.data && res.data.status) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", res.data.user.name);
                toast.success(res.data.message);
                setFormData({ email: "", password: "" });
                router.push('/'); // Navigate to the homepage using router.push
            } else {
                toast.error(res.data.message || "An error occurred");
            }
        })
        .catch((error) => {
            setLoading(false);
            console.error("Error:", error);
            toast.error(error.message || "An error occurred");
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
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border bg-[#EBEBEB] border-gray-300 rounded-md shadow-sm"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border bg-[#EBEBEB] border-gray-300 rounded-md shadow-sm"
                            placeholder="password"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full p-2 text-white bg-[#766bbc] rounded">
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don&apos;t have an account? Create a 
                    <Link href="/signup" className="text-blue-500 hover:underline"> new account</Link>.
                </p>
            </div>
        </div>
    );
}
