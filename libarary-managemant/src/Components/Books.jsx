import React from 'react'

function Books() {
  return (
    <div className="bg-[#3a3e3e] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row gap-4 m-auto">
        <img src="https://via.placeholder.com/100" alt="Book Cover" className="w-full sm:w-24 h-32 object-cover rounded-md" />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Powerful Python: The Most Impactful Patterns, Features, and
              ...
            </h2>
            <p className="text-xs sm:text-sm text-[#dbb7a4] mb-2">
              Aaron Maxwell - 2017 - No preview
            </p>
            <p className="text-xs sm:text-sm text-white">
              "John Beauford (@johnbeauford) "I just wanted to let you
              know what an excellent book this is... I keep going back to
              your book to learn Python." - Fahad Qazi, London, UK
              "Thanks. Keep up the good work.
            </p>
          </div>
          <button className="mt-4 sm:mt-0 bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Follow This Book
          </button>
        </div>
      </div>
  )
}

export default Books