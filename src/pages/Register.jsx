import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteCookie } from "../utility/helper";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    let res = new FormData(e.target);
    let formData = Object.fromEntries(res);
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((res) => {
        console.log("🚀 ~ User registered", res);
        e.target.reset();
        deleteCookie("token");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full ">
      <form
        onSubmit={submitForm}
        className="w-72 p-6 border-2 border-amber-300 rounded-lg bg-white shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2 text-left"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-1 border border-gray-300 rounded text-red-900"
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2 text-left mt-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-1 border border-gray-300 rounded text-red-900"
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2 text-left mt-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-1 border border-gray-300 rounded text-red-900 "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
