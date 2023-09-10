import { Link } from "react-router-dom";
import { UserContext } from "../UserContex";
import { useContext } from "react";
import Africa from "../assets/Africa.png";
import "./Header.css";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className="flex justify-between">
        <Link to={"/"} className="flex items-center gap-[2px] cursor-pointer">
          <img src={Africa} className="w-8 h-8" />

          <span className=" font-normal text-[22px]">african star</span>
        </Link>

        {/* Header Searchbar */}
        <div className="flex justify-center self-center gap-2 border border-gray-900 custom-radius py-2 px-4 shadow-md shadow-gray-500 mt-1">
          <div className="p-2 text-[14px] justify-center items-center cursor-pointer">
            City
          </div>
          <div className="border-l border-gray-300"></div>
          <div className="p-2 text-[14px] justify-center items-center cursor-pointer">
            Check-In Date
          </div>
          <div className="border-l border-gray-300"></div>
          <div className="p-2 text-[14px] justify-center items-center cursor-pointer">
            Guests
          </div>
          <div className="">
            <button className="bg-black text-white p-2 justify-center items-center rounded-full self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1 border border-gray-400 custom-radius py-2 px-3 shadow-sm shadow-gray-400">
          <Link
            to={user ? "/account" : "/login"}
            className=" p-1 bg-black text-white rounded-full border border-gray-500 overflow-hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          {!user && (
            <span className="bg-white text-[16px] text-black cursor-pointer">
              Sign-On
            </span>
          )}
          {!!user && (
            <div className="bg-white text-[16px] text-black cursor-pointer">
              {user.name}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
