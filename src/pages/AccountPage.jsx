import { useContext, useState } from "react";
import { UserContext } from "../UserContex";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "./AccountNav";

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

  if (onLogout) {
    return <Navigate to={onLogout} />;
  }
  return (
    <div>
      <AccountNav />
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

      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
