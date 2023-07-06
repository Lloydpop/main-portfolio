import React, { useEffect } from "react";
import { NavRoute } from "../NavBar/NavLink/NavLink";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import spotify from "../../Assets/spotify.png";
import useMonthAndYaer from "../../hooks/useMonthAndYaer";
const Footer = () => {
  const { year } = useMonthAndYaer();

  return <div>@{year} Chizuruoke.dev</div>;
};

export default Footer;
export const MainNav = ({ addClass, title }) => {
  return (
    <>
      <div className=" mt-7">
        <div
          className={`flex justify-between px-10 mb-3 -translate-y-[200%]${
            addClass === true ? "translate-y-[0]" : ""
          } duration-[2s]`}
        >
          <p
            className="text-xl"
            style={{
              textShadow: "0 0 5px #cccfcabf",
            }}
          >
            {title}
          </p>
          <NavRoute title={"Back"} to={"/home"} blank={""} />
        </div>
        <span className="block vertical-line"></span>
      </div>
    </>
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

  return (
    <footer>
      <div className="mt-[120px]">
        <div className="vertical-line "></div>
        <div className="flex justify-between">
          <a href className="fonty flex items-center gap-2 p-3">
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
          <div className="flex items-center gap-1 p-3 fonty">
            &copy; Perfection.{year}
          </div>
        </div>
      </div>
    </footer>
  );
};
