import React from "react";

const ToggleMode = ({
  setClass,
  addClass,
  handleBlueMode,
  handleWhiteMode,
  whiteModeArray,
  className = "lg:flex hidden",
  blueModeArray,
}) => {
  return (
    <div>
      <div
        className={`trans p-2 rounded-[30px] text-sm  ${className} items-center  overflow-hidden cursor-pointer`}
        onMouseOver={() => {
          setClass(true);
        }}
        onMouseLeave={() => {
          setClass(false);
        }}
      >
        <div
          className={`flex gap-3 ${
            addClass === true ? `w-[60px]` : "w-[0]"
          } duration-[0.5s] ease-out`}
        >
          <div
            className=" w-[20px] h-[20px] rounded-[30px] relative overflow-hidden "
            onClick={() => {
              handleWhiteMode();
              whiteModeArray();
            }}
          >
            <div className="absolute left-0 top-0 h-[100%] w-[50%] bg-white"></div>
            <div className="absolute right-0 top-0 h-[100%] w-[50%] bg-[#152a21]"></div>
          </div>

          <div
            className=" w-[20px] h-[20px] rounded-[30px] relative overflow-hidden "
            onClick={() => {
              handleBlueMode();
              blueModeArray();
            }}
          >
            <div className="absolute left-0 top-0 h-[100%] w-[50%] bg-white"></div>
            <div className="absolute right-0 top-0 h-[100%] w-[50%] bg-[#000d1a]"></div>
          </div>
        </div>
        <span className="block">COLOR MODE</span>
      </div>
    </div>
  );
};

export default ToggleMode;
