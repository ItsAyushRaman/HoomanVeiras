import { Button } from "@nextui-org/react";
import { PrismLogohero, GridBkg } from "../AllAssets";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/react";

export default function Hero() {
  // Set the target date for the event
  const eventDate = new Date("2025-03-29T00:00:00");

  // State to store countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Pad single-digit numbers with a leading zero
  const padZero = (num: number) => num.toString().padStart(2, "0");

  useEffect(() => {
    // Function to calculate and update countdown
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      } else {
        // Event has passed
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    // Initial call
    updateCountdown();

    // Set up interval to update countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[94vh] overflow-hidden" id="hero-container">
      {/* Layer 1 - Date, Title, Tagline, Countdown, Register button */}
      <div
        className="absolute z-10 text-white p-6 md:p-16 flex flex-col gap-8 md:gap-8 h-[100%] justify-center"
        id="layer-1"
      >
        {/* Text Contents */}
        <div
          className="flex flex-col flex-wrap gap-6 md:gap-0 font-nunito_sans"
          id="text-content"
        >
          <p className="w-fit font-normal text-xl sm:text-2xl md:text-2xl lg:text-[2rem] bg-gradient-to-r from-[#9E11F5] to-[#FFFFFF] inline-block text-transparent bg-clip-text font-sephora uppercase">
            28 - 29 MARCH 2025
          </p>
          <div className="flex flex-col flex-wrap gap-4 md:gap-8 mt-2">
            <h1 className="w-fit font-blanka text-7xl lg:text-[11rem] leading-none">
              PRISM 2.0
            </h1>
            <p className="w-fit text-2xl md:txt-4xl lg:text-[2.5rem]">
              UNIVERSITY OF LUCKNOW
            </p>
          </div>
          <p className="mt-10 w-fit font-sephora text-lg sm:text-xl md:text-2xl lg:text-[1.703rem] bg-gradient-to-r from-[#9E11F5] to-[#FFFFFF] inline-block text-transparent bg-clip-text">
            {padZero(days)} DAYS | {padZero(hours)} HOURS | {padZero(minutes)}{" "}
            MIN | {padZero(seconds)} SEC
          </p>
        </div>
        {/* Button */}
        <Link color="foreground" href="/events" className="text-white" >
          <div className="relative p-[2px] w-[200px] flex justify-center bg-gradient-to-r from-[#9747FF] to-[#9C1466] rounded-xl">
            <Button
              className="relative p-6 w-[195px] text-white bg-black text-lg rounded-xl"
            >
              REGISTER NOW
            </Button>
          </div>
        </Link>
      </div>

      {/* Layer 2 - PRISM Logo */}
      <div className=" opacity-20 md:opacity-30 absolute bottom-auto right-[-70%] md:right-[-24%] w-30%  md:w-3/5 md:h-full flex flex-col justify-center">
        <img src={PrismLogohero} alt="prism logo" />
      </div>

      {/* Layer 3 - Background Grid */}
      <div
        style={{ backgroundImage: `url(${GridBkg})` }}
        className="absolute w-[99%] h-[100%] inset-0 bg-cover bg-center opacity-45 z-[1]"
      ></div>

      {/* Bottom left violet fade effect */}
      <div className="bg-[#9E11F7] opacity-70 blur-[30vw] w-[60%] h-[20rem] absolute left-[-30rem] top-[5rem] md:top-[40rem] rounded-full"></div>
      {/* <div className=" absolute bottom-[-100%] left-[-94%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[-1]">
        <div className="relative pt-10 mt-20 w-[0.05rem] h-[0.1rem] rounded-full bg-[#9e11f7] shadow-[0_0_400px_400px_#9747FF,0_0_200px_200px_#9C1466]"></div>
      </div> */}
      <div className=" absolute top-[-100%] right-[-84%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[1]">
        <div className="relative pt-10 mt-20 w-[0.05rem] h-[0.1rem] rounded-full bg-[#9e11f7] shadow-[0_0_500px_500px_#9747FF,0_0_200px_200px_#9C1466]"></div>
      </div>
      <div className=" absolute top-[-100%] right-[-84%] flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-[1]">
        <div className="relative pt-10 mt-20 w-[0.05rem] h-[0.1rem] rounded-full bg-[#9e11f7] shadow-[0_0_200px_200px_#9747FF,0_0_100px_100px_#9C1466]"></div>
      </div>
    </div>
  );
}
