import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Features from "../components/Features";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [addedPhoto, setAddedPhoto] = useState("");
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhoto((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filename } = response;
        setAddedPhoto((prev) => {
          return [...prev, filename];
        });
      });
  }

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-black text-white py-2 px-6 rounded-full"
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
      )}

      {action === "new" && (
        <div>
          <form>
            <h2 className="text-xl mt-4">Title</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Apartment Name"
            />

            <h2 className="text-xl mt-4">Address</h2>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Apartment Address"
            />

            <h2 className="text-xl mt-4">Photos</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
                placeholder="Add photos using link"
              />

              <button
                onClick={addPhotoByLink}
                className="bg-black p-3 text-white rounded-2xl text-sm"
              >
                Add Photo
              </button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhoto.length > 0 &&
                addedPhoto.map((link) => (
                  <div key={link}>
                    <img
                      className="rounded-2xl"
                      src={`http://localhost:4000/uploads/${link}`}
                      alt="Image"
                    />
                  </div>
                ))}
              <label className="flex justify-center gap-1 border bg-transparent rounded-md p-4 text-xl text-gray-600 cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={uploadPhoto}
                  className="hidden"
                />
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </label>
            </div>
            <div>
              <h2 className="text-xl mt-4">Description</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=""
              />
            </div>

            <h2 className="text-xl mt-4">Features</h2>
            <p className="text-gray-500 text-sm">Select Features Below</p>
            <Features selected={features} onChange={setFeatures} />

            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">
              Kindly share important information for your Guest
            </p>
            <textarea
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />

            <h2 className="text-2xl mt-4">
              Check-In, Check-Out Time & Max Guest
            </h2>
            <p className="text-gray-500 text-sm">
              Kindly let your Guest know the check-in and check-out time and
              number of Guest allowed.
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check-In Time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="12:00"
                />
              </div>

              <div>
                <h3 className="mt-2 -mb-1">Check-Out Time</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="12:00"
                />
              </div>

              <div>
                <h3 className="mt-2 -mb-1">Max Guest</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                  placeholder="2"
                />
              </div>
            </div>

            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
