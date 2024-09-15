"use client";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaShareAlt, FaTimes } from "react-icons/fa";
import {
  AiOutlineClockCircle,
  AiOutlineFileText,
  AiOutlinePlus,
} from "react-icons/ai";
import { MdOutlinePriorityHigh } from "react-icons/md";
import toast from "react-hot-toast";
import Listings from "../api/Listings";
import { useRouter } from 'next/navigation'; // Use useRouter hook
import Link from "next/link";


export default function Page() {
    const[loading,setLoading]=useState(false);
  const [formData, setFormData] = useState({
    status: "Under review",
    priority: "Not selected",
    type:"to-do",
    deadline: "",
    description: "",
    title: "",
  });
  const router = useRouter();

  useEffect(() => {
    const tokens = localStorage.getItem("token");
if (tokens) {
} else {
  toast.error("Login First");
  router.push("/login");
  // No token found, handle the unauthenticated state
}}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading == true) {
      return;
    }
    if(formData?.description=="" || formData?.deadline=="" || formData?.title=="")
      {
        toast.error("All fields are mandatory");
        return;
      }
    setLoading(true);
    const main = new Listings();
    const response = main.AddTask({
        status: formData?.status,
        priority: formData?.priority,
        deadline: formData?.deadline,
        description: formData?.description,
        title: formData?.title,
    });
    response
      .then((res) => {
        if (res && res?.data && res?.data?.status) {
          toast.success(res?.data?.message);
          setFormData({
            status: "Under review",
            priority: "Not selected",
            deadline: "",
            description: "",
            title: "",
          });
          router.push('/');
        } else {
          toast.error(res?.data?.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data);
        setLoading(false);
      });
  };

  return (
    <div className="mx-[20px] py-6 ">
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
        <FaTimes className="cursor-pointer text-gray-600" />
        </Link>
        <div className="flex space-x-3">
          <FaShareAlt className="cursor-pointer text-gray-600" />
          <FaRegStar className="cursor-pointer text-gray-600" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <span className="font-medium text-gray-600">Title</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border rounded p-1 text-gray-600"
            />
          </label>
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <span className="font-medium text-gray-600 ">Status</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded p-1 text-gray-600"
            >
              <option value="Under review">Under review</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <MdOutlinePriorityHigh className="text-gray-600" />
            <span className="font-medium text-gray-600">Priority</span>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="border rounded p-1 text-gray-600"
            >
              <option value="Not selected">Not selected</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </label>
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <AiOutlineClockCircle className="text-gray-600" />
            <span className="font-medium text-gray-600">Deadline</span>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="border rounded p-1 text-gray-600"
            />
          </label>
        </div>

        <div className="flex w-full justify-between items-center">
          <label className="flex items-center space-x-2">
            <AiOutlineFileText className="text-gray-600" />
            <span className="font-medium text-gray-600">Description</span>
            <textarea
              name="description"
              value={formData.description}
              rows={5}
              onChange={handleChange}
              className="border rounded p-1 text-gray-600 w-full"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-1/5 mx-auto bg-blue-500 text-white p-2 rounded mt-4 flex items-center justify-center"
        >
          Save
        </button>
      </form>
    </div>
  );
}
