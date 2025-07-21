import React, { useState } from 'react'
import LastTripPhotos from './LastTripPhotos'
import StuffToDo from './StuffToDo'

export default function TabView() {
  const [activeTab, setActiveTab] = useState('photos')

  return (
    <div className="w-full mt-10 px-4 sm:px-10">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab('photos')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeTab === 'photos' ? 'bg-pink-200 text-pink-900' : 'bg-gray-100 text-gray-600'
          }`}
        >
          Last Trip Photos
        </button>
        <button
          onClick={() => setActiveTab('todo')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeTab === 'todo' ? 'bg-pink-200 text-pink-900' : 'bg-gray-100 text-gray-600'
          }`}
        >
          Stuff To Do
        </button>
      </div>

      {/* Conditional rendering */}
      {activeTab === 'photos' && <LastTripPhotos />}
      {activeTab === 'todo' && <StuffToDo />}
    </div>
  )
}
