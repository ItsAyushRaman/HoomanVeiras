import {NAAC, Uol, LULogoNew, PrismLogohero} from "../AllAssets"



function Header() {
  return (
    <>
    <div className='w-[100vw] h-[7vh] md:h-[8vh] bg-black flex flex-row  justify-between items-center  lg:px-10 '>
     <img src={NAAC} alt="" className="h-[95%] md:h-[11vh]"/>
     <div className="flex flex-row">
     <img src={LULogoNew} alt="" className="h-[5vh] md:h-[11vh] "/>
      <img src={Uol} alt="" className="h-[5vh] md:h-[11vh]"/>
     </div>
     <img src={PrismLogohero} alt="" className="h-[95%] md:h-[11vh] "/>
    </div>
    </>
  )
}

export default Header