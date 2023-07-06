import React from "react";
import { NavData, socials } from "../NavData/NavData";
import NavLink, { NavRoute } from "../NavLink/NavLink";

const NavItem = ({ defaultColor, addClass, setClass, handleLightMode }) => {
  return (
    <div className="uppercase gap-5 flex items-center">
      <div
        className="trans p-2 rounded-[30px] text-sm flex items-center  overflow-hidden cursor-pointer"
        onMouseOver={() => {
          setClass(true);
        }}
        onMouseLeave={() => {
          setClass(false);
        }}
      >
        <div
          className={`flex gap-3 ${
            addClass === true ? "w-[30px] " : "w-[0]"
          } duration-[0.5s] ease-out`}
        >
          <p
            className=" w-[20px] h-[20px] rounded-[30px] relative overflow-hidden "
            onClick={() => {
              handleLightMode();
            }}
          >
            <p className="absolute left-0 top-0 h-[100%] w-[50%] bg-white"></p>
            <p className="absolute right-0 top-0 h-[100%] w-[50%] bg-[#1d1d20]"></p>
          </p>
        </div>
        <span className="block">COLOR MODE</span>
      </div>
      {NavData?.map((item) => (
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
