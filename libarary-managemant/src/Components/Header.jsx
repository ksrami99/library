
import React from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
function Header() {
  const dispatch = useDispatch();
  const {isAuthenticated, user } = useSelector((state) => state.auth);

  return (

    <div>
      <header className="bg-[#3a3e3e]  text-[#dbb7a4] mb-10">
        {
          <nav className="flex justify-between items-center p-10 m-auto px-20">
          
          <Link className="flex justify-center gap-4 items-center" to="/">
            <span className="material-symbols-outlined text-5xl"> menu_book </span>
            <span className="font-bold text-3xl">BookBridge</span>
          </Link>
          <div className="">
            <ul className="text-lg flex justify-center items-center border-[#dbb7a4] rounded-md p-2 w-20 bg-[#dbb7a4] text-[#3a3e3e]">
               {isAuthenticated? <Link to="/">{user.username}</Link> : <Link to="/login">Login</Link> }
            </ul>
          </div>
        </nav>}
      </header>
    </div>
  );
}

export default Header;
