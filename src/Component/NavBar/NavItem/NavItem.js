import React, { useState } from "react";
import { NavData, socials } from "../NavData/NavData";
import NavLink, { NavRoute } from "../NavLink/NavLink";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ToggleMode from "../../Switch/ToggleMode";

const NavItem = ({
  defaultColor,
  addClass,
  setClass,

  handleBlueMode,
  handleWhiteMode,
  whiteModeArray,
  blueModeArray,
  handleToggle,
  toggle,
}) => {
  const location = useLocation();

  return (
    <div className="uppercase gap-5 flex items-center  relative">
      {location.pathname === "/project-overview" ||
      location.pathname === "/about" ? null : (
        <div
          className={` fixed  top-[45px] lg:hidden flex flex-col gap-2  w-[50px] h-[50px] rounded-full items-center justify-center cursor-pointer  z-[1000000] duration-[0.5s]`}
          style={{
            background: defaultColor,
          }}
          onClick={() => {
            handleToggle();
          }}
        >
          <span
            className={`block w-[30px] border-b-[1px] border-[#000] ${
              toggle === true ? "rotate-[40deg] translate-y-[5px]" : "rotate-0"
            } duration-[0.5s]`}
          ></span>
          <span
            className={`block w-[30px] border-b-[1px] border-[#000]  ${
              toggle === true
                ? "-rotate-[40deg] -translate-y-[5px]"
                : "rotate-0"
            } duration-[0.5s]`}
          ></span>
        </div>
      )}

      <ToggleMode
        addClass={addClass}
        setClass={setClass}
        blueModeArray={blueModeArray}
        handleBlueMode={handleBlueMode}
        handleWhiteMode={handleWhiteMode}
        whiteModeArray={whiteModeArray}
      />
      <div className=" items -center gap-6 lg:flex hidden">
        {location.pathname === "/project-overview" ||
        location.pathname === "/about"
          ? null
          : NavData?.map((item) => (
              <div key={item?.title}>
                <NavRoute
                  to={item?.to}
                  title={
                    <p
                      style={{
                        textShadow: "0 0 2px #cccfcabf",
                      }}
                    >
                      {item?.title}
                    </p>
                  }
                  blank=""
                  defaultValue={item?.title === "About" ? defaultColor : ""}
                />
              </div>
            ))}
      </div>
    </div>
  );
};
export const SocialItems = () => {
  return (
    <div className="uppercase gap-5 flex mb-2 ">
      {socials?.map((item) => (
        <div key={item?.title}>
          <NavLink to={item?.to} title={item?.title} nav />
        </div>
      ))}
    </div>
  );
};
export default NavItem;
