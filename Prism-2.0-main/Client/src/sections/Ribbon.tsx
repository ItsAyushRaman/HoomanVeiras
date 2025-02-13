import topribbon from '../assets/topribbon.png';
import ribbonright from '../assets/ribbonright.png';
import LULogoNew from "../assets/LULogoNew.png";
import Toptext from "../assets/Toptext.png"



function Ribbon() {
  return (
    <div 
    style={{ backgroundImage: `url(${topribbon})` }}
    className=' hidden  bg-cover bg-center w-full h-[10vh]   sm:flex  flex-row  justify-between items-center  lg:px-10'
    >
        <img src={LULogoNew} alt="" className="h-[85%] md:h-[8.5vh] " />

        <img src={Toptext} alt="" className="h-[5vh] md:h-[8vh] " />

        <img src={ribbonright} alt="" className="h-[97%] md:h-[8.5vh]" />

        


    </div>
  )
}

export default Ribbon