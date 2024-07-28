import React from 'react'
import { GoBell } from "react-icons/go";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";

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
            <div className='flex gap-[20px] align-center items-center'>
            <GoBell size={20} color={"#666666"}/>
            <AiOutlineLoading3Quarters size={20} color={"#666666"}/>
            <p className='text-[#666666]'>{">>"}</p>
            <button className="bg-[#F4F4F4] text-[#797979] text-sm px-[8px] py-[8px]">Logout</button>
            </div>
          </div>
        </div>
        <nav className="space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Home</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Boards</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Settings</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Teams</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Analytics</a>
        </nav>
      </div>
      <div>
        <button className="w-full bg-purple-600 text-white p-2 rounded">Create new task</button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Download the app</p>
          <button className="text-sm text-blue-600 underline">Get the full experience</button>
        </div>
      </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 bg-gray-50">
      {/* Header */}
      <header className="mb-6">
        <div className='flex mb-4 justify-between'>
        <h1 className="text-2xl font-bold">Good morning, Joe!</h1>
        <h2 className="text-sm flex gap-2 items-center text-[#080808]">Help & feedback
        <GoQuestion />
        </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Info Cards */}
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="font-bold text-lg">Introducing tags</h2>
            <p>Easily categorize and find your notes by adding tags.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="font-bold text-lg">Share Notes Instantly</h2>
            <p>Effortlessly share your notes with others via email or link.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="font-bold text-lg">Access Anywhere</h2>
            <p>Sync your notes across all devices.</p>
          </div>
        </div>
      </header>

      {/* Task Lists */}
      <div className="grid grid-cols-4 gap-6">
        {/* To Do */}
        <div>
          <h2 className="text-xl font-semibold mb-4">To do</h2>
          <div className="space-y-4">
            <TaskCard title="Implement User Authentication" priority="Urgent" date="2024-08-15" />
            <button className="w-full p-2 bg-gray-200 rounded">Add new</button>
          </div>
        </div>

        {/* In Progress */}
        <div>
          <h2 className="text-xl font-semibold mb-4">In progress</h2>
          <div className="space-y-4">
            <TaskCard title="Design Home Page UI" priority="Medium" date="2024-08-15" />
            <TaskCard title="Conduct User Feedback Survey" priority="Low" date="2024-08-05" />
            <button className="w-full p-2 bg-gray-200 rounded">Add new</button>
          </div>
        </div>

        {/* Under Review */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Under review</h2>
          <div className="space-y-4">
            <TaskCard title="Integrate Cloud Storage" priority="Urgent" date="2024-08-20" />
            <button className="w-full p-2 bg-gray-200 rounded">Add new</button>
          </div>
        </div>

        {/* Finished */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Finished</h2>
          <div className="space-y-4">
            <TaskCard title="Test Cross-browser Compatibility" priority="Medium" date="2024-07-30" />
            <button className="w-full p-2 bg-gray-200 rounded">Add new</button>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}
function TaskCard({ title, priority, date }) {
  const priorityColor = {
    Urgent: 'bg-red-200 text-red-800',
    Medium: 'bg-yellow-200 text-yellow-800',
    Low: 'bg-green-200 text-green-800',
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <div className={`mt-2 p-1 text-xs rounded ${priorityColor[priority]}`}>{priority}</div>
      <div className="mt-2 text-sm text-gray-600">{date}</div>
    </div>
  );
}

