import React from 'react'

function HomePage() {
  return (
    <div className="flex bg-[#3a3e3e] p-4 rounded-lg shadow-md">
        <img src="https://via.placeholder.com/100" alt="Book Cover" className="w-24 h-32 object-cover rounded-md mr-4" />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              Odoo 14 Development Cookbook: Rapidly build, customize,
              and ...
            </h3>
            <p className="text-sm text-[#dbb7a4] mb-2">
              With over 200 recipes covering real-world examples, take
              your Odoo development skills to the next level and solve
              complex business problems using this guide Key
              FeaturesLearn to develop new modules and modify existing
              modules using the Odoo ...
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block bg-[#dbb7a4] text-[#3a3e3e] font-bold py-1 px-2 rounded">3 Days Remain</span>
          </div>
        </div>
      </div>
  )
}

export default HomePage