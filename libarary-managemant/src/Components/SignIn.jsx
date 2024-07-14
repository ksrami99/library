import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { loginupuser } from "../config/api";
import {useDispatch,useSelector} from 'react-redux'
import  { useState } from "react";
import {loginSuccess, loginFailure} from '../Redux/slices/authslice'


function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onEvent = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(data);

  const signinUser = async (e) => {
    e.preventDefault();
    const res = await loginupuser(data);
    const { token, user, msg } = res;
    dispatch(loginSuccess({ user, token }));
    console.log(msg);

    navigate('/')

  };

  return (
    <div>
      <Header />
      <div className="bg-[#3a3e3e] p-8 rounded-lg shadow-lg w-full max-w-sm m-auto mt-40">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action="#" method="">
          <div className="mb-4">
            <label
              for="email"
              className="block text-[#dbb7a4] text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter your e-mail here"
              type="email"
              onChange={onEvent}
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
            >
              Password
            </label>
            <input
              placeholder="Enter your password here"
              type="password"
              id="password"
              onChange={onEvent}
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-between">
            <button
              type="submit"
              onClick={signinUser}
              className="bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-[#dbb7a4]"
              to="/register"
            >
              Sign up using e-mail
            </Link>
            <Link
              className="inline-block align-baseline font-bold text-sm text-[#dbb7a4]"
              href="#"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
