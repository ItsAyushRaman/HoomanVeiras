import React, { useState } from "react";
import { Team } from "../AllAssets";

type TeamMember = {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
};


const teamMembers: TeamMember[] = [
  // Design Team
  { id: 1, name: "Grilled Bear1", imageUrl: Team, category: "Design" },
  { id: 2, name: "Grilled Bear2", imageUrl: Team, category: "Design" },
  { id: 3, name: "Grilled Bear3", imageUrl: Team, category: "Design" },
  { id: 4, name: "Grilled Bear4", imageUrl: Team, category: "Design" },

  // Technical Team
  { id: 5, name: "Grilled Bear5", imageUrl: Team, category: "Technical" },
  { id: 6, name: "Grilled Bear6", imageUrl: Team, category: "Technical" },
  { id: 7, name: "Grilled Bear7", imageUrl: Team, category: "Technical" },
  { id: 8, name: "Grilled Bear8", imageUrl: Team, category: "Technical" },

  // Sponsorship Team
  { id: 9, name: "Grilled Bear9", imageUrl: Team, category: "Sponsorship" },
  { id: 10, name: "Grilled Bear10", imageUrl: Team, category: "Sponsorship" },
  { id: 11, name: "Grilled Bear11", imageUrl: Team, category: "Sponsorship" },

  // Social PR and Outreach
  {
    id: 12,
    name: "Grilled Bear12",
    imageUrl: Team,
    category: "Social PR",
  },
  {
    id: 13,
    name: "Grilled Bear13",
    imageUrl: Team,
    category: "Social PR",
  },
  {
    id: 14,
    name: "Grilled Bear14",
    imageUrl: Team,
    category: "Social PR",
  },

  // Videography Team
  { id: 15, name: "Grilled Bear15", imageUrl: Team, category: "Videography" },
  { id: 16, name: "Grilled Bear16", imageUrl: Team, category: "Videography" },
  { id: 17, name: "Grilled Bear17", imageUrl: Team, category: "Videography" },

  // Department Lead
  {
    id: 18,
    name: "Grilled Bear18",
    imageUrl: Team,
    category: "Department Lead",
  },
  {
    id: 19,
    name: "Grilled Bear19",
    imageUrl: Team,
    category: "Department Lead",
  },

  // Management Team
  { id: 20, name: "Grilled Bear20", imageUrl: Team, category: "Management" },
  { id: 21, name: "Grilled Bear21", imageUrl: Team, category: "Management" },

  // Content Team
  { id: 22, name: "Grilled Bear22", imageUrl: Team, category: "Content" },
  { id: 23, name: "Grilled Bear23", imageUrl: Team, category: "Content" },
  { id: 24, name: "Grilled Bear24", imageUrl: Team, category: "Content" },
];

const categories = [
  
  "Technical",
  "Sponsorship",
  "Social PR ",
  "Videography",
  "Department Lead",
  "Management",
  "Content",
];

const TeamSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Technical");

  return (
    <div className="flex flex-col justify-center  mx-9 lg:mx-9 items-center h-fit  text-white overflow-hidden">
      <div className="font-sephora bg-gradient-to-r mt-5 text-3xl from-[#ffff] to-[#5B2B99] px-2 sm:px-3 bg-clip-text text-transparent">
        OUR TEAM
      </div>

      {/* for laptop*/}
      <div className="hidden sm:block  lg:w-[80%] lg:p-10">
        <div className="flex w-[100%]  opacity-0 md:opacity-100 ">
          {/* Sidebar */}
          <div className="w-1/6  border-r-1 border-gray-500 ">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer text-lg font-nunito_sans ${
                    activeCategory === category
                      ? "font-bold text-white border-r-3 border-[#9747FF] pl-2"
                      : "text-gray-500 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Grid */}
          <div className="flex-1 p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers
                .filter((member) => member.category === activeCategory)
                .map((member) => (
                  <div
                    key={member.id}
                    className="relative hover:bg-gradient-to-b from-[#1E0034] to-black group overflow-hidden flex flex-col justify-center items-center border-2 w-[150px] h-[150px] border-gray-800 hover:border-[#9D50FF] transition-all"
                  >
                    {/* Highlighted Card */}
                    <div className="flex  justify-center h-[90%] w-[80%] items-center">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className={`w-[90%] h-[90%] pt-3 object-cover  flex justify-center items-center ${
                          activeCategory === "Design"
                            ? "grayscale"
                            : "grayscale"
                        } group-hover:grayscale-0 transition-all`}
                      />
                    </div>
                    <div className=" w-full  bg-opacity-70 text-center p-2">
                      <p className="text-white text-sm">{member.name}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="block sm:hidden">
        {/* Category Chips for smaller screens */}
        <div className="flex flex-wrap justify-center mt-6 mb-8 gap-2 sm:hidden">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` flex  justify-center  items-center px-4 py-2 rounded-full text-sm h-7 font-semibold transition-all border-2 ${
                activeCategory === category
                  ? "bg-[#9D50FF] text-white border-[#9D50FF] shadow-lg"
                  : "text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="w-full p-1">
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {teamMembers
              .filter((member) => member.category === activeCategory)
              .map((member) => (
                <div
                  key={member.id}
                  className="relative  bg-gradient-to-b from-[#1E0034] to-black group overflow-hidden flex  flex-col justify-center items-center border-2 w-[130px] h-[130px] border-gray-800 hover:border-[#9D50FF] transition-all"
                >
                  {/* Image */}
                  <div className="flex justify-center h-[90%] w-[80%] items-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-[90%] h-[90%] pt-3 object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  {/* Name */}
                  <div className="w-full bg-opacity-70 text-center p-2">
                    <p className="text-white text-sm">{member.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
