import ribbonright from "../assets/ribbonright.png";
import LULogoNew from "../assets/LULogoNew.png";

function Ribbon() {
  return (
    <div className=" bg-gradient-to-r from-[#200021] via-[#42006e] to-[#200021]  w-full h-[7vh]  flex  flex-row  justify-between items-center lg:px-10">
      <img src={LULogoNew} alt="" className="h-[70%] md:h-[7vh] mr-5 md:mr-7 " />

      <div className="flex flex-col items-center justify-center h-full text-white text-center">
      <p className="font-bold text-xl md:text-2xl xl:text-3xl text-center" style={{ fontFamily: 'Unbounded, sans-serif' }}>

          University of Lucknow
        </p>
        <p className=" text-xs  font-sans">
          {"("}Accredited A++ By NAAC{")"}
        </p>
      </div>

      <img src={ribbonright} alt="" className="h-[80%] md:h-[7vh] mr-4 md:mr-6" />
      
      
    </div>
  );
}


export default Ribbon;
