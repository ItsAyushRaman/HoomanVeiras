import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { GridBkg, PrismLogohero } from "../AllAssets";

interface TeamMember {
  Name: string;
  College: string;
  Email: string;
  Gender: string;
}

export default function FormTeam() {
  const [teamName, setTeamName] = useState("");
  const [leader, setLeader] = useState<TeamMember>({
    Name: "",
    College: "",
    Email: "",
    Gender: "",
  });
  const [members, setMembers] = useState<TeamMember[]>(
    Array(3).fill({ Name: "", College: "", Email: "", Gender: "" })
  );

  const handleLeaderChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setLeader({ ...leader, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updatedMembers = [...members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [e.target.name]: e.target.value,
    };
    setMembers(updatedMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Team Registered:", { teamName, leader, members });
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-6 overflow-hidden">
      {/* Background */}
      <div
        style={{ backgroundImage: `url(${GridBkg})` }}
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
      ></div>

      {/* Logo */}
      <div className="absolute top-[25%] left-[35%] items-center opacity-30 z-5">
        <img src={PrismLogohero} alt="prism logo" className="w-[45%] h-auto" />
      </div>

      {/* Form Container */}
      <div className="relative z-10 bg-transparent p-6 rounded-lg shadow-lg max-w-4xl w-full text-white">
      <h2 className="text-2xl font-sephora mb-4">Event Registration </h2>


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Team Name */}
          <div>
            <label className="block text-sm font-medium">Team Name *</label>
            <input
              type="text"
              name="TeamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-[#9747FF] focus:ring-4"
              placeholder="Enter your team name"
            />
          </div>

          {/* Team Leader Info */}
          <h3 className="text-lg font-semibold">Team Leader</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(leader).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium">{key} *</label>
                <input
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  value={leader[key as keyof TeamMember]}
                  onChange={handleLeaderChange}
                  required
                  className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-[#9747FF] focus:ring-4"
                  placeholder={`Enter ${key}`}
                />
              </div>
            ))}
          </div>

          {/* Team Members */}
          <h3 className="text-lg font-semibold">Team Members</h3>
          {members.map((member, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-md font-medium">Member {index + 1}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(member).map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-medium">{key} *</label>
                    <input
                      type={key === "email" ? "email" : "text"}
                      name={key}
                      value={member[key as keyof TeamMember]}
                      onChange={(e) => handleMemberChange(index, e)}
                      required
                      className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-[#9747FF] focus:ring-4"
                      placeholder={`Enter ${key}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-center">
          <div className="relative p-[2px] w-[200px] flex justify-center bg-gradient-to-r from-[#9747FF] via-[#DBC1FD] to-[#9C1466]">
              <Button type="submit" className="relative p-6 w-[195px] text-white bg-black text-lg rounded-none">
                Submit
              </Button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
