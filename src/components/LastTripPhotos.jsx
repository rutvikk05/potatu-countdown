import React from 'react'

export default function LastTripPhotos() {
  const images = Array.from({ length: 8 }, (_, i) => `/pic${i + 1}.jpg`)

  return (
    <div className="w-full px-4 sm:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        January 1st, 2025
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Trip photo ${index + 1}`}
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full h-40 sm:h-80"
          />
        ))}
      </div>
    </div>
  )
}
