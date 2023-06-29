import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Successfully logged in");
    } catch (err) {
      alert("Login failed");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" mb-64">
        <h1 className="text-[28px] text-center mb-4">Login</h1>
        <form className="max-w-xl mx-auto" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Sign In</button>

          <div className=" text-center justify-center py-2 text-gray-500">
            <h1>
              Don&apos;t have an account?{" "}
              <Link className="underline text-black" to={"/register"}>
                {" "}
                Register now
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
