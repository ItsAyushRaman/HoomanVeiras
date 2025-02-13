import React, { useState } from "react";
import { Link, Button } from "@nextui-org/react";
// import axios from "axios";

import { GridBkg, PrismLogohero } from "../AllAssets";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

interface Member {
  name: string;
}

interface FormData {
  name: string;
  university: string;
  course: string;
  department: string;
  year: string;
  email: string;
  password: string;
  contactNumber: string;
  gender: string;
  type: "SOLO" | "TEAM";
  members: Member[];
}

export default function FormSolo() {
  const [showPassword, setPassword] = useState(false);

  const [isTeam, setIsTeam] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    university: "",
    course: "",
    department: "",
    year: "",
    email: "",
    password: "",
    contactNumber: "",
    gender: "",
    type: "SOLO",
    members: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { name: value };
    setFormData({ ...formData, members: updatedMembers });
  };

  const handleTeamToggle = () => {
    setIsTeam(!isTeam);
    setFormData({
      ...formData,
      type: !isTeam ? "TEAM" : "SOLO",
      gender: !isTeam ? "" : formData.gender,
    });
  };

  // validating form
  const validateForm = (data: FormData): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    console.log("validation check 0");

    // Check for empty fields
    if (
      !data.name ||
      !data.university ||
      !data.course ||
      !data.department ||
      !data.year ||
      !data.email ||
      !data.password ||
      !data.contactNumber 
    ) {
      toast.error("Please fill all details");
    console.log("validation check 1");

      return false;
    }

    // Validate name
    if (!nameRegex.test(data.name)) {
      toast.error("Name should contain only alphabets");
    console.log("validation check 2");

      return false;
    }

    // Validate email
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    // Validate password security
    if (!passwordRegex.test(data.password)) {
      toast.error(
        "Password must be at least 8 characters long and include at least one letter, one number, and one special character"
      );
      return false;
    }

    // Validate phone number
    if (!phoneRegex.test(data.contactNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }

    // Validate member names
    for (const member of data.members) {
      if (member.name && !nameRegex.test(member.name)) {
        toast.error("Member names should contain only alphabets");
        return false;
      }
    }
    console.log("validation check 3");


    return true;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const bodySubmit = {
  //     ...formData,
  //     department: formData.department.toLowerCase(),
  //   };
  //   console.log("Form Submitted:", bodySubmit);
  //   setError("");

  //   try {
  //     const response = await axios.post(
  //       "https://prism-backend.vercel.app/registration/team",
  //       bodySubmit
  //     );
  //     console.log("Form submitted successfully:", response.data);
  //     navigate("/events");
  // window.scrollTo({ top: 0, behavior: "smooth" });
  // alert("Registration Successful");
  // } catch (err) {
  //     console.error("Error submitting form:", err);
  //     if (axios.isAxiosError(err)) {
  //       setError(
  //         err.response?.data?.message ||
  //           "An error occurred while submitting the form"
  //       );
  //     } else {
  //       setError("An error occurred while submitting the form");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("running step 0");
    e.preventDefault();
    // Prevent multiple submissions if already signing up
    console.log("running step 1");
    // if (isSigningUp || loading) return;
    // Validate form before submission
    const success = validateForm(formData);
    if(!success){
      console.log("validation failed")

    }
    // const successtemp=true;
    
    if (success) {
      console.log("running step two")
      setLoading(true);

    try {
      // Securely send the form data to the signup function
      console.log("running step 3")
      await signup(formData);

      // toast.success("Registration successful!");
      // Reset the form after successful submission
      setFormData({
        name: "",
        university: "",
        course: "",
        department: "",
        year: "",
        email: "",
        password: "",
        contactNumber: "",
        gender: "",
        type: "SOLO",
        members: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
      });
       
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during registration. Please try again.");
    }finally {
      setLoading(false);
    }
    }
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
      <div className="relative z-10 bg-transparent p-6  rounded-lg shadow-lg max-w-xl w-[70vb] text-white">
        <div className="flex justify-between items-center  mb-6">
          <h2 className=" text-xl md:text-2xl font-sephora">
            Event Registration
          </h2>
          <div className="flex items-center space-x-3 m-3">
            <span
              className={`text-sm ${
                !isTeam ? "text-[#9747FF]" : "text-gray-400"
              }`}
            >
              Solo
            </span>
            <div
              className="w-16 h-8 rounded-full bg-gray-700 p-1 cursor-pointer"
              onClick={handleTeamToggle}
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#9747FF] transition-transform duration-200 ease-in-out ${
                  isTeam ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span
              className={`text-sm ${
                isTeam ? "text-[#9747FF]" : "text-gray-400"
              }`}
            >
              Team
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              {isTeam ? "Team Name *" : "Name *"}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
              placeholder={isTeam ? "Enter team name" : "Enter your name"}
            />
          </div>

          {/* Team Members (visible only when Team is selected) */}
          {isTeam && (
            <div className="mb-4 space-y-3">
              <label className="block text-sm font-medium">
                Team Members *
              </label>
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  value={formData.members[index].name}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
                  placeholder={`Member ${index + 1} name`}
                />
              ))}
            </div>
          )}

          {/*course*/}

          <div className="mb-4">
            <label className="block text-sm font-medium">Course*</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
            >
              <option value="">Select your course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* University & Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">
                University/College Name *
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
                placeholder="Enter your University/College Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Department *</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
                placeholder="e.g., CSE, IT, ECE"
              />
            </div>
          </div>

          {/* Year */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Year *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
            >
              <option value="">Select your current year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email Address *</label>
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

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Contact Number *
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
              placeholder="Enter your 10-digit mobile number"
            />
          </div>

          {/* Gender (visible only when Solo is selected) */}
          {!isTeam && (
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Gender (Optional)
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-4 focus:ring-[#9747FF] focus:ring-offset-2"
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <div className="relative p-[2px] w-[200px] flex justify-center bg-gradient-to-r from-[#9747FF] via-[#DBC1FD] to-[#9C1466]">
              <Button
                type="submit"
                disabled={loading || isSigningUp}
                className="relative p-6 w-[195px] text-white bg-black text-lg rounded-none"
              >
                {loading ? "Submitting.." : "Submit"}
              </Button>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <div>
              Already registered? <Link href="/login">Login</Link> instead.
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded text-red-500">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
