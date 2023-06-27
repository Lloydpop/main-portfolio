import React from "react";

export const Pattern = ({
  defaultColor = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
}) => {
  return (
    <div className="w-[300px] h-[300px] absolute -z-10">
      <div
        className="absolute bg-gray-500   w-[20px] h-[100%] lg:-left-8   -left-[70px] top-0"
        style={{
          background: defaultColor,
        }}
      ></div>
      <div
        className="absolute bg-gray-500   w-[100%] h-[20px] -left-[70px] lg:-left-8     -top-5"
        style={{
          borderTopLeftRadius: "10px",
          background: defaultColor,
        }}
      ></div>
      <span className="block bg-[#1d1d20] h-[20px] z-[30] w-[60px] absolute lg:-bottom-2 -rotate-[40deg] lg:-left-[50px] -right-[40px]"></span>
      <span className="block bg-[#1d1d20] h-[20px] z-[30] w-[60px] absolute -top-2 -rotate-[40deg] right-[20px]"></span>
    </div>
  );
};

export const Pattern2 = ({
  defaultColor = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
}) => {
  return (
    <div className="w-[300px] h-[300px] fixed -z-10  lg:right-[35px] right-0 bottom-0">
      <div
        className="absolute bg-gray-500 z-10  w-[20px] h-[100%] -right-0 "
        style={{
          borderBottomRightRadius: "10px",
          background: defaultColor,
        }}
      ></div>
      <div
        className="absolute bg-gray-500 z-10  w-[100%] h-[20px] -left-0 bottom-0"
        style={{
          background: defaultColor,
        }}
      ></div>
      <span className="block bg-[#1d1d20] h-[20px] z-[30] w-[60px] absolute -top-2 -rotate-[40deg] -right-[20px]"></span>
      <span className="block bg-[#1d1d20] h-[20px] z-[30] w-[60px] absolute bottom-2 -rotate-[49deg] -left-[20px]"></span>
    </div>
  );
};
