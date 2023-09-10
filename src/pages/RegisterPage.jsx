import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      // Clear input fields after successful registration
      setName("");
      setEmail("");
      setPassword("");
      alert("Registration Successful, You can now login");
    } catch (err) {
      alert("Registration failed");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" mb-64">
        <h1 className="text-[28px] text-center mb-4">Create Account</h1>
        <form className="max-w-xl mx-auto" onSubmit={createUser}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="primary">Sign Up</button>

          <div className=" text-center justify-center py-2 text-gray-500">
            <h1>
              Already have an account?{" "}
              <Link className="underline text-black" to={"/login"}>
                {" "}
                Login now
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
