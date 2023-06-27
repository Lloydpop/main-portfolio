import React from "react";
import { NavData } from "../NavData/NavData";
import NavLink from "../NavLink/NavLink";
const NavItem = () => {
  console.log(NavData);
  return (
    <div className="uppercase gap-5 flex ">
      {NavData?.map((item) => (
        <div key={item?.title}>
          <NavLink to={item?.to} title={item?.title} nav />
        </div>
      ))}
    </div>
  );
};

export default NavItem;
