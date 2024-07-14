import React from 'react'

function Search() {
  return (
    <div>
         <section>
        <div className="container mx-auto mb-10">
          <div className="w-[100%]">
            <div className="flex text-[#CEAB94] justify-center text-5xl font-Mistral font-black max-sm:text-2xl">
              <p>Search The Books Available In Library</p>
            </div>
            <div className="mt-10">
              <form className="flex items-center max-w-[40rem] mx-auto ">   
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  </div>
                  <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Explore available books in library.." required />
                  <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                  </button>
                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#3a3e3e] rounded-lg border border-[#3a3e3e] hover:bg-[#3a3e3e]-800 focus:ring-4 focus:outline-none focus:ring-[#3a3e3e]-300 dark:bg-[#3a3e3e]-600 dark:hover:bg-[#3a3e3e]-700 dark:focus:ring-[#3a3e3e]-800">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search