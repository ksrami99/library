import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

function SignIn() {
  return (
    
    <div>
        <Header/>
    <div className="bg-[#3a3e3e] p-8 rounded-lg shadow-lg w-full max-w-sm m-auto mt-40">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form action="#" method="">
        <div className="mb-4">
          <label for="email" className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >Email</label
          >
          <input
            placeholder="Enter your e-mail here"
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >Password</label
          >
          <input
            placeholder="Enter your password here"
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-between">
          <button
            type="submit"
            className="bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-[#dbb7a4]"
            to="/register"
            >Sign up using e-mail</Link>
          <Link
            className="inline-block align-baseline font-bold text-sm text-[#dbb7a4]"
            href="#"
            >Forgot Password?</Link
          >
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignIn