import React from "react";

const Heading = ({ children, size = "18rem", darkMode }) => {
  return (
    <div>
      <h1
        style={{
          fontSize: size,
        }}
        className={`leading-[16rem] tracking-tighter lg:block hidden ${
          darkMode ? "hover:text-primary" : "hover:text-gray-800"
        } duration-75 `}
      >
        {children}
      </h1>
      <h1
        className={`md:leading-[7rem] sm:leading-[5.4rem] leading-[5rem] sm:text-[5.4rem] md:text-[8rem] text-[5.4rem] tracking-tighter lg:hidden block ${
          darkMode ? "hover:text-primary" : "hover:text-gray-800"
        } duration-75 `}
      >
        {children}
      </h1>
    </div>
  );
};

export default Heading;
