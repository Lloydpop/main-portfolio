import React from "react";
import Perfect from "../../Assets/My project-1.png";
const Logo = ({ onClick }) => {
  return (
    <div className="relative" onClick={onClick}>
      <img
        src={Perfect}
        className="w-[160px]  -mt-[10px] -ml-[30px] cursor-pointer "
        style={{
          filter: "brightness(2) saturate(0.7%)",
        }}
      />
    </div>
  );
};

export default Logo;
