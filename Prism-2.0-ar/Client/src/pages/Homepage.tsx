import {
  Hero,
  FAQ,
  Schedule,
  Stats,
  HeroAboutPage,
  Home_About,
  SponsorsStrip
} from "../AllSections";
import { TextGlow } from "../AllComponents";

export default function Homepage() {
  return (
    <div className="relative">
      {/* Layout */}
      <div className="flex flex-col">
        <Hero />
        <SponsorsStrip/>
        <div className="z-10 mx-5 md:mx-14 mt-16 flex flex-col gap-16">
          <Home_About />
          <HeroAboutPage />
          <Schedule />
          <Stats />
          <FAQ />
        </div>
        <TextGlow />
      </div>

      {/* Background Decorations */}
      <div className="  absolute top-[-85%] right-[94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[-60%] left-[44%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9C1466,300px_300px_300px_300px_#9747FF]"></div>
      </div>
      <div className=" absolute top-[-30%] right-[94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[0%] left-[44%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[20%] right-[94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[40%] left-[44%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[60%] right-[94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[80%] left-[44%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[2]">
        <div className="relative pt-2 mt-2 w-[0.05rem] h-[0.05rem] rounded-full bg-[#9e11f7] shadow-[150px_150px_300px_200px_#9747FF,300px_300px_300px_300px_#9C1466]"></div>
      </div>
      {/* BackgroundDecoration */}
    </div>
  );
}
