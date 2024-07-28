import React from "react";
import { GoBell } from "react-icons/go";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { RiHome4Line } from "react-icons/ri";
import { CiViewBoard } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import Image from "next/image";
import Image1 from "../../public/Image1.png";
import Image2 from "../../public/Image2.png";
import Image3 from "../../public/Image3.png";
import { FiSearch, FiCalendar, FiSettings, FiFilter, FiShare2 } from 'react-icons/fi';
import { FaPlusCircle } from 'react-icons/fa';

export default function page() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <h3 className="text-lg font-semibold">Joe Gardner</h3>
              <div className="flex gap-[15px] align-center items-center">
                <GoBell color={"#666666"} />
                <AiOutlineLoading3Quarters color={"#666666"} />
                <p className="text-[#666666]">{">>"}</p>
                <button className="bg-[#F4F4F4] text-[#797979] text-sm px-[8px] py-[8px]">
                  Logout
                </button>
              </div>
            </div>
          </div>
          <nav className="space-y-2 text-[#797979]">
            <a href="#" className="items-center flex gap-2 p-2 rounded hover:bg-gray-200">
              <RiHome4Line />
              Home
            </a>
            <a href="#" className="items-center flex gap-2 p-2 rounded hover:bg-gray-200">
              <CiViewBoard />
              Boards
            </a>
            <a href="#" className="items-center flex gap-2 p-2 rounded hover:bg-gray-200">
              <IoSettingsOutline />
              Settings
            </a>
            <a href="#" className="items-center flex gap-2 p-2 rounded hover:bg-gray-200">
              <AiOutlineTeam />
              Teams
            </a>
            <a href="#" className="items-center flex gap-2 p-2 rounded hover:bg-gray-200">
              <IoAnalytics />
              Analytics
            </a>
          </nav>
          <button className="items-center justify-center flex gap-2 mt-2 w-full bg-[#382aad] text-white p-2 rounded-md">
            Create new task
            <FaPlusCircle size={24}/>
          </button>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex-shrink-0">
        <GoDownload className="w-6 h-6 text-gray-600" />
      </div>
      <div className="ml-3">
        <p className="text-base font-medium text-gray-800">Download the app</p>
        <p className="text-sm text-gray-600">Get the full experience</p>
      </div>
    </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Header */}
        <header className="mb-6">
          <div className="flex mb-4 justify-between">
            <h1 className="text-2xl font-bold">Good morning, Joe!</h1>
            <h2 className="text-sm flex gap-2 items-center text-[#080808]">
              Help & feedback
              <GoQuestion />
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-2">
            {/* Info Cards */}
            <div className="flex items-center p-4 bg-white rounded shadow-sm">
              <div>
                <Image src={Image1}/>
              </div>
              <div className="p-2">
              <h2 className="font-bold text-[#757575] text-md">Introducing tags</h2>
              <p className="text-[#868686] text-sm">Easily categorize and find your notes by adding tags.</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-sm">
            <div>
                <Image src={Image2}/>
              </div>
              <div className="p-2">
              <h2 className="font-bold text-[#757575] text-md">Share Notes Instantly</h2>
              <p className="text-[#868686] text-sm">
                Effortlessly share your notes with others via email or link.
              </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-sm">
            <div>
                <Image src={Image3}/>
              </div>
              <div className="p-2">
              <h2 className="font-bold text-[#757575] text-md">Access Anywhere</h2>
              <p className="text-[#868686] text-sm">Sync your notes across all devices.</p>
            </div>
            </div>
          </div>
        </header>
        {/* Heafer before tasks */}
        <div className="justify-between flex items-center space-x-4 pb-2 bg-gray-50 border-b border-gray-200 mb-4">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-md bg-white px-2 py-1">
        <FiSearch className="text-[#797979] mr-2" />
        <input 
          type="text" 
          placeholder="Search" 
          className="outline-none bg-transparent"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
      <button className="flex items-center space-x-1 text-[#797979]">
        <span>Calendar view</span>
        <FiCalendar />
      </button>

      <button className="flex items-center space-x-1 text-[#797979]">
        <span>Automation</span>
        <FiSettings />
      </button>

      <button className="flex items-center space-x-1 text-[#797979]">
        <FiFilter />
        <span>Filter</span>
      </button>

      <button className="flex items-center space-x-1 text-[#797979]">
        <span>Share</span>
        <FiShare2 />
      </button>

      {/* Create New Button */}
      <button className="ml-auto flex items-center space-x-2 bg-[#382aad] text-white px-4 py-2 rounded-md">
        <span>Create new</span>
        <FaPlusCircle />
      </button>
      </div>
    </div>

        {/* Task Lists */}
        <div className="grid grid-cols-4 gap-6">
          {/* To Do */}
          <div>
            <h2 className="text-xl font-semibold mb-4">To do</h2>
            <div className="space-y-4">
              <TaskCard
                title="Implement User Authentication"
                priority="Urgent"
                date="2024-08-15"
              />
              <button className="w-full p-2 bg-gray-200 rounded">
                Add new
              </button>
            </div>
          </div>

          {/* In Progress */}
          <div>
            <h2 className="text-xl font-semibold mb-4">In progress</h2>
            <div className="space-y-4">
              <TaskCard
                title="Design Home Page UI"
                priority="Medium"
                date="2024-08-15"
              />
              <TaskCard
                title="Conduct User Feedback Survey"
                priority="Low"
                date="2024-08-05"
              />
              <button className="w-full p-2 bg-gray-200 rounded">
                Add new
              </button>
            </div>
          </div>

          {/* Under Review */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Under review</h2>
            <div className="space-y-4">
              <TaskCard
                title="Integrate Cloud Storage"
                priority="Urgent"
                date="2024-08-20"
              />
              <button className="w-full p-2 bg-gray-200 rounded">
                Add new
              </button>
            </div>
          </div>

          {/* Finished */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Finished</h2>
            <div className="space-y-4">
              <TaskCard
                title="Test Cross-browser Compatibility"
                priority="Medium"
                date="2024-07-30"
              />
              <button className="w-full p-2 bg-gray-200 rounded">
                Add new
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
function TaskCard({ title, priority, date }) {
  const priorityColor = {
    Urgent: "bg-red-200 text-red-800",
    Medium: "bg-yellow-200 text-yellow-800",
    Low: "bg-green-200 text-green-800",
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <div className={`mt-2 p-1 text-xs rounded ${priorityColor[priority]}`}>
        {priority}
      </div>
      <div className="mt-2 text-sm text-gray-600">{date}</div>
    </div>
  );
}
