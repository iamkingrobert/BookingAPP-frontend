import { useContext, useState } from "react";
import { UserContext } from "../UserContex";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
  const [onLogout, setOnLogout] = useState(false);

  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setOnLogout("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !onLogout) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6 text-[18px]";
    if (type === subpage) {
      classes += " bg-black text-white rounded-full";
    }
    return classes;
  }

  if (onLogout) {
    return <Navigate to={onLogout} />;
  }
  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto ">
          Hello! {user.name} <br></br> Email: {user.email}
          <br></br>
          <button
            onClick={logout}
            className="text-white rounded-full max-w-md w-40 h-10 mt-4"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
