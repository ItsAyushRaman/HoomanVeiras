import ribbonright from "../assets/ribbonright.png";
import LULogoNew from "../assets/LULogoNew.png";

function Ribbon() {
  return (
    <div className=" bg-gradient-to-r from-[#200021] via-[#42006e] to-[#200021]  w-full h-[10.2vh]  flex  flex-row  justify-between items-center lg:px-10">
      <img src={LULogoNew} alt="" className="h-[85%] md:h-[8.5vh] " />

      <div className="flex flex-col justify-center sm:justify-start items-center h-full">
        <p className=" font-bold text-xl md:text-2xl xl:text-3xl font-sans">
          Universty of Lucknow
        </p>
        <p className=" text-xs  font-sans">
          {"("}Accredited A++ By NAAC{")"}
        </p>
      </div>

      <img src={ribbonright} alt="" className="h-[97%] md:h-[8.5vh]" />
    </div>
  );
}

export default Ribbon;
