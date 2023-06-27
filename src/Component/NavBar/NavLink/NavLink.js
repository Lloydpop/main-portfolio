import React from "react";

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
        target="_blank"
        key={key}
        id={id}
      >
        {nav ? (
          <span className="block h-[30px] w-[30px] flex items-center hover:brightness-0 justify-center tilt">
            <img src={title} width={"20px"} />
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

export default NavLink;
