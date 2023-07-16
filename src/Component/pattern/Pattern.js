import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SocialItems } from "../NavBar/NavItem/NavItem";
import Footer from "../Footer/Footer";

export const Pattern = ({
  defaultColor = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  bg = "bg-[#000]",
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/project-overview" ||
      location.pathname === "/contact"
    ) {
      addClass(true);
    }
  }, [location]);
  return (
    <div className="w-[300px] h-[300px] absolute lg:left-[40px] -left-[3px] z-[1000]">
      <div
        className={`absolute bg-gray-500 top-0   w-[20px] ${
          classN === true ? "h-[100%]" : "h-[0]"
        }     -top-1 duration-[2s]`}
        style={{
          background: defaultColor,
        }}
      ></div>
      <div
        className={`absolute bg-gray-500 ${
          classN === true ? "w-[100%]" : "w-[0]"
        } h-[20px] ${
          location.pathname === "/contact" ? " top-0" : "-top-5"
        } duration-[2s]`}
        style={{
          borderTopLeftRadius: "10px",
          background: defaultColor,
        }}
      ></div>
      <span
        className={`block ${bg} h-[20px] z-[30] w-[50px] absolute -bottom-2 -rotate-[40deg]  -left-[14px]`}
      ></span>
      <span
        className={`block ${bg} h-[20px] z-[30] w-[60px] absolute ${
          location.pathname === "/contact"
            ? " top-0 right-[-30px]"
            : "-top-2 right-[-20px]"
        } -top-2 -rotate-[40deg]`}
      ></span>
    </div>
  );
};

export const Pattern2 = ({
  defaultColor = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  bg = "bg-[#000]",
  pos = "right-[43px]",
  animate,
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/project-overview" ||
      location.pathname === "/contact"
    ) {
      addClass(true);
    }
  }, [location]);
  return (
    <div
      className={`w-[300px] h-[300px] absolute z-[1000] lg:right-[43px] right-0 bottom-0`}
    >
      <div className={`bottom-[30px] absolute left-[50px] z-[100] ${animate}`}>
        <SocialItems />
        <Footer />
      </div>
      <div
        className={` absolute bg-gray-500 z-10  w-[20px] ${
          classN === true ? "h-[100%]" : "h-[0]"
        } -right-0  duration-[2s]`}
        style={{
          borderBottomRightRadius: classN === true ? "10px" : "",
          background: defaultColor,
        }}
      ></div>
      <div
        className={`absolute bg-gray-500 z-10  ${
          classN === true ? "w-[100%]" : "w-[0]"
        } h-[20px] right-0 bottom-0 duration-[2s]`}
        style={{
          background: defaultColor,
        }}
      ></div>
      <span
        className={`block ${bg}  h-[20px] z-[30] w-[60px] absolute -top-2 -rotate-[40deg] -right-[20px] `}
      ></span>
      <span
        className={`block ${bg} h-[20px] z-[30] w-[60px] absolute bottom-2 -rotate-[49deg] -left-[20px] `}
      ></span>
    </div>
  );
};
