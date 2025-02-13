import React, { useState } from "react";
import { Button, Link } from "@nextui-org/react";

import { GridBkg, PrismLogohero } from "../AllAssets";

function LoginPage() {
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", UserData);
  };

  return (
    <div className="relative w-full flex justify-center items-center p-6 overflow-hidden">
      {/* Background Grid */}
      <div
        style={{ backgroundImage: `url(${GridBkg})` }}
        className="absolute inset-0 bg-cover bg-center opacity-45 z-0 pointer-events-none"
      ></div>

      {/* PRISM Logo */}
      <div className="absolute top-[15%] left-[35.5%] items-center h-[55%] w-[75%]  opacity-20 md:opacity-30 z-5 ">
        <img src={PrismLogohero} alt="prism logo" className="w-[35%] h-auto" />
      </div>

      {/* Form Container */}
      <div className="relative z-40 bg-transparent p-6 rounded-lg shadow-lg max-w-lg w-[100vb] text-white">
        <h2 className="text-2xl font-sephora mb-4">Login </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={UserData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={UserData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <div className="relative p-[2px] w-[200px] flex justify-center bg-gradient-to-r from-[#9747FF] via-[#DBC1FD] to-[#9C1466]">
              <Button
                type="submit"
                className="relative p-6 w-[195px] text-white bg-black text-lg rounded-none"
              >
                Submit
              </Button>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <div>
              <Link href="/register">Sign up</Link>{" "}
              instead?
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
