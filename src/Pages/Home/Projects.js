import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Projects = ({
  children,
  bg = "bg-[#000]",
  defaultValue = "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  useEffect(() => {
    if (location.pathname === "/home") {
      addClass(true);
    }
  }, [location]);
  return (
    <div className="lg:mt-[0px] -mt-[100px]">
      <p
        className={`text-[31px]  ${
          classN === true ? "scale-[100%] " : "scale-[0%]"
        } duration-[1s] overflow-hidden `}
      >
        Projects
      </p>
      <div className="relative bg-black z-10 lg:w-[300px] w-[100%] ">
        <div
          className={`absolute top-1 left-1 w-[100%]  ${
            classN === true ? "h-[250px] " : "h-[0]"
          } z-10 duration-[2s]`}
          style={{
            background: defaultValue,
          }}
        ></div>
        <div
          className={`absolute top-[0] left-[0] h-[250px]  lg:w-[300px] w-[100%] ${bg} z-10`}
        >
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
