import React from 'react'
import Search from './Search'
import Books from './Books'
import Header from './Header'

function HomePage() {
  return (
    <div>
        <Header/>
        <Search/>
        <div class="bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div class="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6">
            New Arrival
          </h2>
          <div class="space-y-6">
            <Books/>
            <Books/>
            <Books/>
            <Books/>
           
          </div>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6">
            Trending
          </h2>
          <div class="space-y-6">
          <Books/><Books/><Books/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage