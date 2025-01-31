import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { addData } from "../config/api";


function SignUp() {
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile:'',
    password: "",
    role: "",
    companyname: "",
    address: "",
  });

  const onEvent = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(data);

  const signupUser = async (e) => {
    e.preventDefault();
    const res = await addData(data);
    console.log(res);
    // if (res.msg === "success") {
      //   setOpen(true);
      // setTimeout(() => {
        navigate("/login"); // Navigate to login page after 2 seconds
      // }, 5000);
    // }
  };

  return (
    <div>
      <Header />
      <div className="bg-[#3a3e3e] p-8 rounded-lg shadow-lg w-full max-w-sm m-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form action="#" method="">
          <div className="mb-4">
            <label
              for="name"
              className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              placeholder="Enter your username here"
              onChange={onEvent}
              type="text"
              id="name"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="email"
              className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter your e-mail here"
              onChange={onEvent}
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex mb-4 gap-4">
            <div className="w-1/2">
              <label
                for="company"
                className="block text-[#dbb7a4] text-sm font-bold mb-2"
              >
                Company Name
              </label>
              <input
                placeholder="Enter your company name here"
                onChange={onEvent}
                type="text"
                id="company"
                name="companyname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                for="mobile"
                className="block text-[#dbb7a4] text-sm font-bold mb-2"
              >
                Mobile Number
              </label>
              <input
                placeholder="Enter your mobile number here"
                onChange={onEvent}
                type="tel"
                id="mobile"
                name="mobile"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              for="address"
              className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              placeholder="Enter your address here"
              onChange={onEvent}
              type="text"
              id="address"
              name="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="role"
              className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >
              User Role
            </label>
            <select
              id="role"
              onChange={onEvent}
              name="role"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option>
                Select
              </option>
              <option value="User">
                User
              </option>
              <option value="Librarian">Librarian</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >
              Create Password
            </label>
            <input
              placeholder="Create your password here"
              onChange={onEvent}
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-between">
            <button
              onClick={signupUser}
              className="bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-[#dbb7a4]"
              href="#"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
