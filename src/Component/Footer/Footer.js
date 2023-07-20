import React from "react";
import { NavRoute } from "../NavBar/NavLink/NavLink";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import spotify from "../../Assets/spotify.png";
import useMonthAndYaer from "../../hooks/useMonthAndYaer";

import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { year } = useMonthAndYaer();

  return <div>@{year} Chizuruoke.dev</div>;
};

export default Footer;
export const MainNav = ({ addClass, title, defaultValue, children }) => {
  return (
    <div>
      <div className=" mt-7">
        <div
          className={`flex justify-between lg:px-10 md:px-10 px-4 mb-3 drop-shadow-md -translate-y-[200%]${
            addClass === true ? "translate-y-[0]" : ""
          } duration-[2s]`}
        >
          <p className="text-xl">{title}</p>
          <div className="flex items-center gap-7">
            {children}
            <NavRoute
              title={"Back"}
              to={"/home"}
              blank={""}
              defaultValue={defaultValue}
            />
          </div>
        </div>
        <span className="block vertical-line"></span>
      </div>
    </div>
  );
};
export const MainFooter = () => {
  const { year } = useMonthAndYaer();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const location = useNavigate();
  return (
    <footer>
      <div
        className={`${
          location.pathname === "/project-overview" ? "mt-[120px]" : "mt-[90px]"
        }`}
      >
        <div className="vertical-line "></div>
        <div className="flex lg:justify-between justify-center">
          <a href className="fonty  items-center gap-2 p-3 hidden lg:flex">
            <img src={spotify} width={"30px"}></img>
            Upcoming Podcast
          </a>

          <div
            className="flex items-center gap-1 p-3 fonty cursor-pointer"
            onClick={scrollToTop}
          >
            Back to Top
            <ArrowUpIcon className="w-3 h-3" />
          </div>
          <div className="flex items-center hidden lg:block gap-1 p-3 fonty">
            &copy; Perfection.{year}
          </div>
        </div>
      </div>
    </footer>
  );
};
