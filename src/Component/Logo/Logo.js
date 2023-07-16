import React from "react";
import Perfect from "../../Assets/My project-1.png";
const Logo = ({ onClick }) => {
  return (
    <div className="relative" onClick={onClick}>
      <img
        src={Perfect}
        className="lg:w-[160px] md:w-[160px] sm:w-[140px] w-[140px]  -mt-[10px] -ml-[30px] cursor-pointer relative z-[1990] "
        style={{
          filter: "brightness(2) saturate(0.7%)",
        }}
      />
    </div>
  );
};

export default Logo;
