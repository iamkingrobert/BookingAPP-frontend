import { Link } from "react-router-dom";
import { UserContext } from "../UserContex";
import { useContext } from "react";
import Africa from "../assets/Africa.png";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className="flex justify-between">
        <Link to={"/"} className="flex items-center gap-1 cursor-pointer">
          <img src={Africa} className="w-14 h-14" />

          <span className="font-semibold text-[26px]">Travrica</span>
        </Link>

        {/* Header Searchbar */}
        <div className="flex gap-2 border border-gray-900 rounded-full py-2 px-4 shadow-md shadow-gray-500 mt-1">
          <div className="p-2 text-[18px] mt-1">Destination</div>
          <div className="border-l border-gray-400"></div>
          <div className="p-2 text-[18px] mt-1">Travel Date</div>
          <div className="border-l border-gray-400"></div>
          <div className="p-2 text-[18px] mt-1">Add Guests</div>
          <button className="bg-black text-white p-3 mb-2 rounded-full">
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

        <div className="flex items-center gap-2 border border-gray-900 rounded-full py-2 px-4 shadow-sm shadow-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
          <Link
            to={user ? "/account" : "/login"}
            className=" p-1 bg-black text-white rounded-full border border-gray-500 overflow-hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative top-1"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          {!!user && (
            <div className="p-2 bg-white text-[18px] text-black">
              {user.name}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
