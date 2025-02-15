import React, { useState } from "react";
import { Button, Link } from "@nextui-org/react";

import { GridBkg, PrismLogohero } from "../AllAssets";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";


interface LoginForm {
  email: string;
  password: string;
}


function LoginPage() {
    const [showPassword, setPassword] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  // const [UserData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // });



  const { login, isLoggingIn } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation function 
  const validateForm = (data: LoginForm): boolean => {
    console.log("vcheck 0");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!data.email || !data.password) {
    console.log("vcheck 1");

      toast.error("Please fill in all fields");
      return false;
    }

    if (!emailRegex.test(data.email)) {
    console.log("vcheck 2");

      toast.error("Please enter a valid email");
      return false;
    }

    if (!passwordRegex.test(data.password)) {
    console.log("vcheck 3");

      toast.error(
        "Password must be at least 8 characters long and include at least one letter, one number, and one special character"
      );
      return false;
    }

    return true;
  };

  //handel submit 
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("check 0");
    e.preventDefault();

    if (isLoggingIn || loading) return;
    console.log("check 1");


    if (!validateForm(formData)) return;
    console.log("check 2");

    setLoading(true);
    try {
    console.log("check 3");

      await login(formData);
    console.log("check 1");
    } catch (error) {
    console.log("check 4");

      console.error("Login error:", error);
      toast.error("Invalid email or password. Please try again.");
    } finally {
    console.log("check 5");

      setLoading(false);
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", UserData);
  // };

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
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label block text-sm font-medium">
              Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-black"
                onClick={() => setPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
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
