import { CarouselDemo } from "../CarouselDemo";
import PatronSection from "../PatronSection";

export default function About() {
  return (
    <div id="about-section-homepage">
      <div className="flex flex-col items-center gap-8">
        {/* Title */}
        <div className="font-sephora w-full text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-wider text-left flex flex-row flex-wrap justify-start">
          ABOUT PRISM
        </div>
        {/* Carousel */}
        <div className="w-full h-fit">
          {/* Carousel here */}
          <CarouselDemo />
        </div>
        {/* Description */}
        <div className="text-md md:text-xl mx-16 w-[100%]">
          <p className="w-[100%] text-center">
            The <b className="font-extrabold">University of Lucknow</b>, founded
            in 1867, is a prestigious institution known for academic excellence
            and a rich legacy. NAAC A++ accredited, it fosters a transformative
            learning environment with a distinguished faculty guiding students
            toward success. Through innovative programs, state-of-the-art
            facilities, and a strong emphasis on research, the university shapes
            future leaders, thinkers, and innovators.
          </p>
        </div>
        <div className="text-md md:text-xl mx-16 w-[100%] text-center">
          <p>
            Re-established in 2017, the{" "}
            <b className="font-extrabold">
              Faculty of Engineering & Technology (FoET)
            </b>{" "}
            at the University of Lucknow aims to excel in interdisciplinary
            engineering education. Offering B.Tech., BCA, and MCA programs, FoET
            focuses on experiential learning through internships, projects, and
            workshops.
          </p>
        </div>
        {/* Patrons */}
        <PatronSection />
      </div>
    </div>
  );
}
