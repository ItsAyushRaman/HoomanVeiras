import { useEffect } from "react";
import { PrismLogohero, GridBkg } from "../AllAssets";
// import EventSearch from "./EventSearch";

function HeroEventPage() {
  // const [event, setEvent] = useState({ title: "", description: "" });

  useEffect(() => {
    // Fetch event data from the database
    async function fetchEventData() {
      try {
        // const response = await fetch("/api/events/main"); // Adjust the URL as needed
        // const data = await response.json();
        // setEvent(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    }

    fetchEventData();
  }, []);

  return (
    <div>
      <div
        className="relative md:min-h-[50vh] lg:min-h-[97vh] flex  align-middle  items-center  overflow-hidden "
        id="hero-container"
      >
        {/* Layer 1 - main event card and registration they willbe on corousel */}
        {/* <div className="highlisgtevent mt-10  ml-10 md:w-[70%] w-[90%] ">
          <p className=" ml-3 mb-0 p-3 w-fit font-sephora lg:text-6xl md:text-5xl text-3xl bg-gradient-to-r from-[#FFFFFF] to-[#9E11F5]  inline-block text-transparent bg-clip-text">
            {event.title || "Innovate Beyond Boundaries"}
          </p>
          <div className=" flex flex-col md:flex-row m-3 p-3"> */}
            {/* <div className=" font-nunito_sans text-lg sm:text-xl md:text-2xl md:w-[75%] ">
              {event.description ||
                "Dive into a fusion of engineering brilliance—coding, circuits, machines, and more. Step up, stand out, and register now to make your mark!"}
            </div> */}
            {/* Button */}
            {/* <div className=" ml-3 justify-center items-center p-[2px] w-[180px] h-[60px] flex bg-gradient-to-r from-[#9747FF] via-[#DBC1FD] to-[#9C1466]">
              <Button className="relative w-full h-full text-white !bg-black text-lg rounded-none">
                REGISTER NOW
              </Button>
            </div> */}
          {/* </div> */}
          {/* <EventSearch/> */}
        

        {/* Layer 2 - PRISM Logo */}
        <div className=" opacity-20 md:opacity-30 absolute bottom-auto right-[-30%] md:right-[-10%] w-10%  md:w-3/5 md:h-[40%] flex flex-col justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default HeroEventPage;
