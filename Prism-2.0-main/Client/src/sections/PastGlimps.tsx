// Version 3

import { useState } from "react";
import { DayOne, DayTwo } from "../AllAssets";

function PastGlimps() {
  const [isHoveredOne, setisHoveredOne] = useState(false);
  const [isHoveredTwo, setisHoveredTwo] = useState(false);

  return (
    <div className="flex flex-col items-center mx-16">
      {/* Title Section */}
      <div className="font-sephora pb-4 w-full text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-wider text-left flex flex-row flex-wrap justify-start">
        <p>PAST GLIMPSE | PRISM 2024</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-start md:justify-evenly gap-4 w-full">
        {/* Card 1 */}
        <div
          className="relative flex flex-col justify-center items-start w-full h-[330px] md:h-[400px] md:w-[45%] lg:w-[40%] bg-[#9747FF] bg-opacity-40 backdrop-blur-lg p-4
          overflow-hidden transition-all duration-500 ease-in-out"
          onMouseEnter={() => setisHoveredOne(true)}
          onMouseLeave={() => setisHoveredOne(false)}
        >
          {/* Header */}
          <div className="font-nunito_sans font-bold min-w-fit bg-[#9747FF] ml-4 md:m-4 text-white p-4 text-center py-2">
            FRIDAY 14 NOVEMBER
          </div>
          {/* Background Image */}
          <div
            style={{ backgroundImage: `url(${DayOne})` }}
            className="absolute w-[100%] h-[100%] inset-0 bg-cover bg-center opacity-0 z-10 transition-all duration-500 hover:opacity-40"
          ></div>
          {/* Title */}
          <div className="font-nunito_sans bg-transparent md:m-4 text-lg ml-4 md:text-2xl font-bold text-white text-center py-2">
            Day 01: Where Ideas Ignite
          </div>
          {/* Hover Content */}
          {isHoveredOne && (
            <div
              className={`text-white w-full p-4 rounded-md transition-all duration-500 ${
                isHoveredOne
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              PRISM kicked off with a bang! The campus buzzed as coders cracked
              codes, robots raced to glory, and wild ideas turned into
              jaw-dropping creations. From sustainable designs to epic robo
              wars, Day 1 wasn’t just about tech—it was pure magic, where
              passion met innovation.
            </div>
          )}
        </div>

        {/* Card 2 */}
        <div
          className="relative flex flex-col justify-center items-start w-full h-[330px] md:h-[400px] md:w-[45%] lg:w-[40%] bg-[#9747FF] bg-opacity-40 backdrop-blur-lg p-4
          overflow-hidden transition-all duration-500 ease-in-out"
          onMouseEnter={() => setisHoveredTwo(true)}
          onMouseLeave={() => setisHoveredTwo(false)}
        >
          {/* Header */}
          <div className="font-nunito_sans font-bold min-w-fit bg-[#9747FF] ml-4 md:m-4 text-white p-4 text-center py-2">
            FRIDAY 14 NOVEMBER
          </div>
          {/* Background Image */}
          <div
            style={{ backgroundImage: `url(${DayTwo})` }}
            className="absolute w-[100%] h-[100%] inset-0 bg-cover bg-center opacity-0 z-10 transition-all duration-500 hover:opacity-40"
          ></div>
          {/* Title */}
          <div className="font-nunito_sans bg-transparent md:m-4 text-lg ml-4 md:text-2xl font-bold text-white text-center py-2">
            Day 02: The Energy Peaks
          </div>
          {/* Hover Content */}
          {isHoveredTwo && (
            <div
              className={`text-white w-full p-4 rounded-md transition-all duration-500 ${
                isHoveredTwo
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              PRISM was all about pushing limits! Cyber geeks, bridge builders,
              and circuit maestros brought their A-game, while quizzes and
              challenges united everyone in friendly fire. The day wrapped up
              with hearts full, minds buzzing, and the promise of a brighter,
              tech-driven future.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PastGlimps;

// Version 2

// import { useState } from "react";
// import { DayOne, DayTwo } from "../AllAssets";

// function PastGlimps() {
//   const [isHoveredOne, setisHoveredOne] = useState(false);
//   const [isHoveredTwo, setisHoveredTwo] = useState(false);

//   return (
//     <div className="flex flex-col items-center mx-16">
//       {/* Title Section */}
//       <div className="font-sephora pb-4 w-full text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-wider text-left flex flex-row flex-wrap justify-start">
//         <p>PAST GLIMPS | PRISM 2024</p>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col md:flex-row justify-start md:justify-evenly gap-4 w-full">
//         {/* Card 1 */}
//         <div
//           className="relative flex flex-col justify-center items-start w-full h-[330px] md:h-[400px] md:w-[45%] lg:w-[40%] bg-[#9747FF] bg-opacity-40 backdrop-blur-lg p-4
//           transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-opacity-0"
//           onMouseEnter={() => setisHoveredOne(true)}
//           onMouseLeave={() => setisHoveredOne(false)}
//         >
//           {/* Header */}
//           <div className="font-nunito_sans font-bold min-w-fit bg-[#9747FF] ml-4 md:m-4 text-white p-4 text-center py-2">
//             FRIDAY 14 NOVEMBER
//           </div>
//           {/* Background Image */}
//           <div
//             style={{ backgroundImage: `url(${DayOne})` }}
//             className="absolute w-[100%] h-[100%] inset-0 bg-cover bg-center opacity-0 z-10 transition-all duration-500 hover:opacity-40"
//           ></div>
//           {/* Title */}
//           <div className="font-nunito_sans bg-transparent md:m-4 text-lg ml-4 md:text-2xl font-bold text-white text-center py-2">
//             Day 01: Where Ideas Ignite
//           </div>
//           {/* Hover Content */}
//           <div
//             className={`text-white w-full p-4 rounded-md transition-all duration-500 ${
//               isHoveredOne
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-4"
//             }`}
//           >
//             PRISM kicked off with a bang! The campus buzzed as coders cracked
//             codes, robots raced to glory, and wild ideas turned into
//             jaw-dropping creations. From sustainable designs to epic robo wars,
//             Day 1 wasn’t just about tech—it was pure magic, where passion met
//             innovation.
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="relative flex flex-col justify-center items-start w-full h-[330px] md:h-[400px] md:w-[45%] lg:w-[40%] bg-[#9747FF] bg-opacity-40 backdrop-blur-lg p-4
//           transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-opacity-0"
//           onMouseEnter={() => setisHoveredTwo(true)}
//           onMouseLeave={() => setisHoveredTwo(false)}
//         >
//           {/* Header */}
//           <div className="font-nunito_sans font-bold min-w-fit bg-[#9747FF] ml-4 md:m-4 text-white p-4 text-center py-2">
//             FRIDAY 14 NOVEMBER
//           </div>
//           {/* Background Image */}
//           <div
//             style={{ backgroundImage: `url(${DayTwo})` }}
//             className="absolute w-[100%] h-[100%] inset-0 bg-cover bg-center opacity-0 z-10 transition-all duration-500 hover:opacity-40"
//           ></div>
//           {/* Title */}
//           <div className="font-nunito_sans bg-transparent md:m-4 text-lg ml-4 md:text-2xl font-bold text-white text-center py-2">
//             Day 02: The Energy Peaks
//           </div>
//           {/* Hover Content */}
//           <div
//             className={`text-white w-full p-4 rounded-md transition-all duration-500 ${
//               isHoveredTwo
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-4"
//             }`}
//           >
//             PRISM was all about pushing limits! Cyber geeks, bridge builders,
//             and circuit maestros brought their A-game, while quizzes and
//             challenges united everyone in friendly fire. The day wrapped up with
//             hearts full, minds buzzing, and the promise of a brighter,
//             tech-driven future.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PastGlimps;

// Version 1

// import { useState } from "react";
// import { DayOne, DayTwo } from "../AllAssets";

// function PastGlimps() {
//   const [isHoveredOne, setisHoveredOne] = useState(false);
//   const [isHoveredTwo, setisHoveredTwo] = useState(false);

//   return (
//     <div className="flex flex-col items-center mx-16">
//       {/* Title Section */}
//       <div className="font-sephora pb-4 w-full text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-wider text-left flex flex-row flex-wrap justify-start">
//         <p>PAST GLIMPS | PRISM 2024</p>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col md:flex-row justify-start md:justify-evenly gap-4 w-full">
//         <div
//           className=" relative flex flex-col justify-center items-start w-full h-[330px] md:h-[400px] md:w-[45%] lg:w-[40%] bg-[#9747FF] bg-opacity-40 backdrop-blur-lg  p-4  hover:bg-transparent "
//           onMouseEnter={() => setisHoveredOne(true)}
//           onMouseLeave={() => setisHoveredOne(false)}
//         >
//           <div className="font-nunito_sans font-bold min-w-fit bg-[#9747FF] ml-4 md:m-4 text-white p-4 text-center py-2 ">
//             FRIDAY 14 NOVEMBER
//           </div>
//           <div
//             style={{ backgroundImage: `url(${DayOne})` }}
//             className="absolute w-[100%] h-[100%] inset-0 bg-cover bg-center opacity-0 z-10 hover:opacity-30"
//           ></div>
//           <div className="font-nunito_sans bg-transparent md:m-4 text-lg ml-4 md:text-2xl font-bold text-white text-center py-2">
//             Day 01 : Where Ideas Ignite
//           </div>
//           {isHoveredOne && (
//             <div className="  text-white w-full  p-4 rounded-md transition-opacity duration-300">
//               PRISM kicked off with a bang! The campus buzzed as coders cracked
//               codes, robots raced to glory, and wild ideas turned into
//               jaw-dropping creations. From sustainable designs to epic robo
//               wars, Day 1 wasn’t just about tech—it was pure magic, where
//               passion met innovation.
//             </div>
//           )}
//         </div>

//         {/* 2nd card  */}
//         <div
//           className=" relative flex flex-col justify-center items-start w-full h-[330px] md:h-[400px] md:w-[45%] lg:w-[40%] hover:bg-transparent bg-[#9747FF] bg-opacity-40 backdrop-blur-lgp-4 "
//           onMouseEnter={() => setisHoveredTwo(true)}
//           onMouseLeave={() => setisHoveredTwo(false)}
//         >
//           <div className="font-nunito_sans font-bold min-w-fit bg-[#9747FF] ml-4 md:m-4 text-white p-4 text-center py-2 ">
//             FRIDAY 14 NOVEMBER
//           </div>

//           <div
//             style={{ backgroundImage: `url(${DayTwo})` }}
//             className=" opacity-0 absolute w-[100%] h-[100%] inset-0 bg-cover bg-center  z-10 hover:opacity-20"
//           ></div>
//           <div className="font-nunito_sans bg-transparent md:m-4 text-lg ml-4 md:text-2xl font-bold text-white text-center py-2">
//             Day 2: The Energy Peaks
//           </div>
//           {isHoveredTwo && (
//             <div className="  text-white w-full  p-4 rounded-md transition-opacity duration-300">
//               PRISM was all about pushing limits! Cyber geeks, bridge builders,
//               and circuit maestros brought their A-game, while quizzes and
//               challenges united everyone in friendly fire. The day wrapped up
//               with hearts full, minds buzzing, and the promise of a brighter,
//               tech-driven future.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PastGlimps;
