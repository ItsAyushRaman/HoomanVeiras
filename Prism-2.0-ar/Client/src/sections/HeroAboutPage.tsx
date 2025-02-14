// import { PrismLogohero, GridBkg } from "../AllAssets";

function HeroAboutPage() {
  return (
    <div
      className="relative min-h-fit flex justify-center items-center overflow-hidden w-[100%]"
      id="hero-container"
    >
      {/* Layer 1 - Date, Title, Tagline, Countdown, Register button */}

      <div
        id="hero-about-prism-container"
        className="flex flex-col justify-center items-center text-white px- sm:px-0 md:px-8 lg:px-12 "
      >
        <div className="flex flex-col justify-center items-center font-nunito_sans text-center my-4">
          {/* Title */}
          <div className="text-3xl sm:text-3xl md:text-6xl lg:text-5xl font-bold">
            FACULTY OF ENGINEERING AND TECHNOLOGY
          </div>
          {/* Subtitle */}
          <div className="text-xl sm:text-xl md:text-xl lg:text-2xl text-[#D1AEFF] mt-2">
            presents
          </div>
          {/* Description */}
          <div className="flex flex-col justify-center items-center font-sephora mt-4 space-y-2">
            <div className="flex flex-wrap justify-center items-center font-nunito_sans text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Flagship{" "}
              <div className="font-sephora bg-gradient-to-r from-[#BE92F8] to-[#5B2B99] px-2 sm:px-3 bg-clip-text text-transparent">
                TECH
              </div>{" "}
              fest of
            </div>
            <div className="flex flex-wrap justify-center items-center font-sephora text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center">
              UNIVERSITY OF{" "}
              <div className="px-2 sm:px-3 bg-gradient-to-r from-[#BE92F8] to-[#5B2B99] bg-clip-text text-transparent">
                LUCKNOW
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] my-0 md:w-full">
          <div className="font-nunito_sans font-thin pt-12 px-8 md:px-0 pb-3 text-center text-[#FFFFFF] bg-transparent text-lg md:text-2xl">
            PRISM Lucknow is set to inspire and challenge you! Over two dynamic
            days, immerse yourself in exciting coding challenges, hands-on
            workshops, and insightful sessions led by industry experts.
          </div>
          <div className="font-nunito_sans font-thin pt-1 px-8 md:px-11 pb-1 w-80% text-center text-[#FFFFFF] bg-transparent text-lg md:text-2xl">
            Showcase your talents, learn, and grow—we can’t wait to see you
            there!
          </div>
        </div>
      </div>

      {/* Layer 2 - PRISM Logo */}
      {/* <div className=" opacity-20 md:opacity-30 absolute bottom-auto right-[-70%] md:right-[-24%] w-20%  md:w-3/5 md:h-[80%] flex flex-col justify-center">
        <img src={PrismLogohero} alt="prism logo" />
      </div>
      <div
        style={{ backgroundImage: `url(${GridBkg})` }}
        className="absolute w-[99%] h-[100%] inset-0 bg-cover bg-center opacity-30 z-10"
      ></div>

      <div className=" absolute top-[-100%] right-[-94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-10">
        <div className="relative pt-10 mt-20 w-[0.05rem] h-[0.1rem] rounded-full bg-[#9e11f7] shadow-[0_0_500px_500px_#9747FF,0_0_200px_200px_#9C1466]"></div>
      </div>
      <div className=" absolute bottom-[-100%] left-[-94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-10">
        <div className="relative pt-10 mt-20 w-[0.05rem] h-[0.1rem] rounded-full bg-[#9e11f7] shadow-[0_0_500px_500px_#9747FF,0_0_200px_200px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[-100%] right-[-94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-10">
        <div className="relative pt-10 mt-20 w-[0.05rem] h-[0.1rem] rounded-full bg-[#9e11f7] shadow-[0_0_200px_200px_#9747FF,0_0_200px_200px_#9C1466]"></div>
      </div> */}
    </div>
  );
}

export default HeroAboutPage;
