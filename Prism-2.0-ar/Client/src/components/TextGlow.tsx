function TextGlow() {
  const textstyle = {
    WebkitTextStroke: "1px #9747FF ",
    color: "black",
    display: "flex",
    textShadow: "0 0 -2px rgba(151, 71, 255, 0.7)", // Adding a glow effect
  };
  const sds = {
    WebkitTextStroke: "0.1px #9747FF ",
    textShadow: "0 0 -2px rgba(151, 71, 255, 0.7)", // Adding a glow effect
  };

  return (
    <div className=" pt-0 truncate z-10 w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl flex flex-col animate-slideInOut items-center justify-center origin-bottom font-sephora font-bold tracking-widest">
      <div style={textstyle}>
        OF INNOVATION
        <div className="flex justify-center items-center overflow-visible ">
          <div className="absolute z-10 text-white flex justify-center items-center  ">
            {/* Spark effect here */}
          </div>
          <div
            className="z-20 text-white  ml-4 bg-gradient-to-r from-[#9747FF] to-[#9C1466] h-[10px] md:h-[35px] flex justify-center items-center"
            style={sds}
          >
            UNVEILING
          </div>
        </div>{" "}
        THE SPECTRUM OF INN
      </div>
      <div style={textstyle}>
        TION UNVEILING
        <div className="flex justify-center items-center overflow-hidden ">
          <div className="absolute z-10 text-white flex justify-center items-center ">
            {/* Spark effect here */}
          </div>
          <div
            className="z-20 text-white  ml-4 bg-gradient-to-r from-[#9747FF] to-[#9C1466] h-[10px] md:h-[35px] flex justify-center items-center placeholder:"
            style={sds}
          >
            THE SPECTRUM
          </div>
        </div>
        OF INNOVATION
      </div>
      <div style={textstyle}>
        ING THE SPECTRUM
        <div className="flex justify-center items-center overflow-visible ">
          {/* Spark effect here */}
          <div
            className="z-20 transform -translate-x-2 shadow-inner text-white text-center  bg-gradient-to-r from-[#9747FF] to-[#9C1466] h-[10px] md:h-[35px] flex justify-center items-center"
            style={sds}
          >
            {" "}
            OF INNOVATION{" "}
          </div>
        </div>
        UNVEILING THE
      </div>

      {/* SPARK HERE */}
    </div>
  );
}

export default TextGlow;
