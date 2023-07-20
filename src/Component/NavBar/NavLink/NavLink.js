import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({
  to,
  title,
  nav,
  key,
  navL,
  id,
  onClick,
  doubleClick,
  defaultValue = "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
  small,
  size = "",
  blank = "_blank",
}) => {
  return (
    <div>
      <a
        onClick={onClick}
        onDoubleClick={doubleClick}
        className={`inline-block relative cursor-pointer ${
          small
            ? "hover:text-white"
            : "hover:scale-[110%] transition duration-500"
        } ${size}`}
        href={to}
        target={blank}
        key={key}
        id={id}
        rel="noreferrer"
      >
        {nav ? (
          <span className="block h-[30px] w-[30px] flex items-center hover:brightness-0 justify-center tilt">
            <img src={title} width={"20px"} alt={"alt"} />
          </span>
        ) : (
          <div
            className="absolute -bottom-1 w-[100%] h-[1px]"
            style={{
              background: defaultValue,
            }}
          />
        )}
        {!nav && title}
      </a>
    </div>
  );
};
export const NavRoute = ({
  to,
  title,
  nav,
  key,
  navL,
  id,
  onClick,
  doubleClick,
  defaultValue = "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
  small,
  size = "",
  blank = "_blank",
}) => {
  return (
    <div>
      <Link
        onClick={onClick}
        onDoubleClick={doubleClick}
        className={`inline-block relative cursor-pointer ${
          small
            ? "hover:text-white"
            : "hover:scale-[110%] transition duration-500"
        } ${size}`}
        to={to}
        target={blank}
        key={key}
        id={id}
        rel="noreferrer"
      >
        {nav ? (
          <span className="block h-[30px] w-[30px] flex items-center hover:brightness-0 justify-center tilt">
            <img src={title} width={"20px"} alt={""} />
          </span>
        ) : (
          <div
            className="absolute -bottom-1 w-[100%] h-[1px]"
            style={{
              background: defaultValue,
            }}
          />
        )}
        {!nav && title}
      </Link>
    </div>
  );
};
export default NavLink;
