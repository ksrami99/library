import React from "react";
import Header from "./Header";
import BookComponant from "./BookComponant";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slices/authslice";
import { useNavigate, Link } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutbtn = () => {
    dispatch(logout());
    navigate("/");
  };

  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <Header />
      <section className="bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg sticky top-6 h-max">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/100"
                alt="User Avatar"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{user.username}</h3>
                <p className="text-gray-500">{user.companyname}</p>
              </div>
            </div>
            <div className="text-gray-700 space-y-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zM3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span>{user.address}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zM3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span>{user.mobile}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zM3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span>{user.email}</span>
              </div>
            </div>
            <button className="mt-4 bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Edit information
            </button>
            <br />
            <button
              onClick={logoutbtn}
              className="mt-4 bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              LogOut
            </button>
            <br />
            {user.role === "Librarian" ? (
              <Link>
                <button
                  onClick={navigate("/addbooks")}
                  className="mt-4 bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Books
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search Books */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Search Books</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search your books here.."
                  className="w-full p-2 border border-gray-300 rounded-l-md"
                />
                <button className="bg-[#3a3e3e] text-white font-bold py-2 px-4 rounded-r-md">
                  Search
                </button>
              </div>
            </div>
            {/* My Books */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">My Books</h2>
              <div
                className="space-y-6 overflow-y-auto my-books"
                style={{ maxHeight: "400px" }}
              >
                {/* Book Card */}
                {/* Add more book cards as needed */}
                <BookComponant />
                <BookComponant />
                <BookComponant />
                <BookComponant />
                <BookComponant />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
