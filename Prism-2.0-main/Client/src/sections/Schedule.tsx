import {cardContentDay1,cardContentDay2} from "../config/Events.ts";
import { Card } from "../AllComponents";
import { useState, useRef, useEffect } from "react";


const Schedule: React.FC = () => {
  const [daysHidden, setDaysHidden] = useState({
    day1: false,
    day2: false,
  });
  const scheduleRef = useRef<HTMLDivElement>(null);
  const day1Ref = useRef<HTMLDivElement>(null);
  const day2Ref = useRef<HTMLDivElement>(null);
  // const day3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverlap = () => {
      if (scheduleRef.current) {
        const scheduleRect = scheduleRef.current.getBoundingClientRect();

        [day1Ref, day2Ref].forEach((dayRef, index) => {
          if (dayRef.current) {
            const dayRect = dayRef.current.getBoundingClientRect();
            const isOverlapping = scheduleRect.bottom > dayRect.top;

            setDaysHidden((prev) => ({
              ...prev,
              [`day${index + 1}`]: isOverlapping,
            }));
          }
        });
      }
    };

    window.addEventListener("scroll", checkOverlap);
    checkOverlap();
    return () => window.removeEventListener("scroll", checkOverlap);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8">
      <div
        ref={scheduleRef}
        className="sticky top-32 z-10 flex flex-row"
        id="schedule"
      >
        <div className="backdrop-blur-0">
          <h2 className="text-white font-sephora text-4xl">SCHEDULE</h2>
        </div>
      </div>

      {/* Half-Sticky Vertical Section */}
      <div className="flex flex-col md:flex-row h-fit bg-transparent">
        {/* Sticky Part */}
        <div
          className={`z-2 sticky top-48 h-fit md:w-1/2 mb-4 md:mb-0 flex bg-transparent transition-all duration-300`}
        >
          <div ref={day1Ref} className="mx-0 mt-0">
            <h3
              className={`font-nunito_sans text-2xl text-white mb-0 transition-opacity duration-300 ${
                daysHidden.day1 ? "opacity-0" : "opacity-100"
              }`}
            >
              <p>DAY 01</p>
            </h3>
          </div>
        </div>

        {/* Scrolling Part */}
        <div className="md:w-1/2 h-fit bg-transparent flex flex-col items-center justify-center text-3xl">
          <div className="h-fit flex flex-col items-center w-full gap-8">
            {cardContentDay1.map((card, index) => (
              <Card
                key={index}
                time={card.time}
                date={card.date}
                location={card.location}
                title={card.title}
                desc={card.desc}
                bgImage={card.bgImage}
                modalContent={card.modalContent}
                chip={card.chip}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Half-Sticky Vertical Section */}
      <div className="flex flex-col md:flex-row h-fit bg-transparent">
        {/* Sticky Part */}
        <div
          className={`z-2 sticky top-48 h-fit md:w-1/2 mb-4 md:mb-0 flex bg-transparent transition-all duration-300`}
        >
          <div ref={day2Ref} className="mx-0 mt-0">
            <h3
              className={`font-nunito_sans text-2xl text-white mb-0 transition-opacity duration-300 ${
                daysHidden.day2 ? "opacity-0" : "opacity-100"
              }`}
            >
              DAY 02
            </h3>
          </div>
        </div>

        {/* Scrolling Part */}
        <div className="md:w-1/2 h-fit bg-transparent flex flex-col items-center justify-center text-3xl">
          <div className="h-fit flex flex-col items-center mt-0 w-full px-0 gap-8">
            {cardContentDay2.map((card, index) => (
              <Card
                key={index}
                time={card.time}
                date={card.date}
                location={card.location}
                title={card.title}
                desc={card.desc}
                bgImage={card.bgImage}
                modalContent={card.modalContent}
                chip={card.chip}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
