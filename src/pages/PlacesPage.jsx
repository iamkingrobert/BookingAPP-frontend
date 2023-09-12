import { Link } from "react-router-dom";
import AccountNav from "./AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-black text-white py-2 px-6 rounded-full mb-9"
          to={"/account/places/new"}
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New Place
        </Link>
      </div>
      <div className="mt-5 mx-[250px]">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              key={place.id}
              to={"/account/places/" + place._id}
              className="flex cursor-pointer gap-4  p-4 rounded-2xl"
            >
              <div className="flex gap-5">
                <PlaceImg
                  place={place}
                  className="w-[330px] h-[330px] object-cover"
                />
              </div>
              <div className="grow-0 shrink w-[800px] ml-4">
                <h2 className="text-xl">{place.title.toUpperCase()}</h2>
                <p className="text-sm mt-2">{place.description}</p>

                <div className="mt-3">
                  <p className="text-[14px] text-gray-600">{place.extraInfo}</p>
                </div>

                <div className="flex gap-1">
                  <p className="pt-2 text-[18px]">Perks:</p>
                  <p className="text-[15px] mt-[11px]">
                    {place.features.join(" ")}
                  </p>
                </div>
                <div className="flex gap-3 mt-1">
                  <div className="flex gap-2">
                    <p className="text-[14px]">Check-In</p>
                    <p className="text-[14px]">{place.checkIn} PM</p>
                  </div>

                  <div className="flex gap-2">
                    <p className="text-[14px]">Check-In</p>
                    <p className="text-[14px]">{place.checkIn} PM</p>
                  </div>
                </div>
                <p className="text-[15px]">
                  Price: $ {place.price} / Per Night
                </p>

                <div className="bg-black mt-4 w-[140px] custom-radius cursor-pointer">
                  <p className="text-white p-4 text-center">edit property</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
