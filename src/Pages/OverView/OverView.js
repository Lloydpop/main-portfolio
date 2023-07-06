import React, { useEffect, useState } from "react";
import { videos } from "./Component/Data";
import { useLocation } from "react-router-dom";
import { NavRoute } from "../../Component/NavBar/NavLink/NavLink";
import { MainFooter, MainNav } from "../../Component/Footer/Footer";
import Cursor from "../../Component/Cursor/Cursor";
import ProjectItem from "./Component/ProjectItem";
const OverView = () => {
  const [addClass, setClass] = useState(false);
  const location = useLocation();

  const [expanded, setExpanded] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const [itemer, setItemer] = useState({});
  console.log(location);

  const toggleItem = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClick = (index, item) => {
    if (activeIndex !== null && activeIndex !== index) {
      setExpanded((prevState) => ({
        ...prevState,
        [activeIndex]: false,
      }));
      setItemer(item);
    }

    toggleItem(index);
    setActiveIndex(expanded[index] ? null : index);
  };

  const isExpanded = (index) => {
    return expanded[index];
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor");

      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    });
    if (location.pathname === "/project-overview") {
      setClass(true);
    }
  }, [location]);
  const toggle = addClass === true ? "scale-[100%]" : "";
  const bounce = addClass === true ? "translate-x-[0]" : "";
  return (
    <div className="">
      <Cursor itemer={itemer} />
      <section>
        <MainNav addClass={addClass} title={"Chizuruoke / projects"} />
        <section className={`flex overflow-y-hidden justify-between px-10`}>
          <p
            className={`w-[30%] mt-4 text-sm -translate-x-[100%]${bounce} duration-[2s] `}
          >
            Empowering digital transformations for visionary brands, delivering
            innovative and results-driven solutions as a versatile web
            development specialist and an integral team contributor.
          </p>
          <h1
            className={`text-[60px] font-semibold text-right -translate-y-[100%]${
              addClass === true ? "translate-y-[0]" : ""
            } duration-[2s] `}
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
          >
            SELECTED PROJECTS ({videos.length})
            <span className="block">2022-2023</span>
          </h1>
        </section>
        <div className=" mt-[80px]">
          <ProjectItem
            videos={videos}
            itemer={itemer}
            isExpanded={isExpanded}
            handleClick={handleClick}
            setItemer={setItemer}
            toggle={toggle}
            location={location}
            expanded={expanded}
          />
        </div>
      </section>
      <div className="mt-[90px]">
        <h1
          className="text-[40px] text-center w-[600px] m-auto fonty"
          style={{
            textShadow: "0 0 2px #cccfcabf",
          }}
        >
          <p> To collaborate send an email to</p>
          <a href="" className="block ">
            perfectionchizuruoke@gmail.com
          </a>
          <p className="flex justify-center gap-4">
            {" "}
            OR <NavRoute title={"contact"} to={"/contact"} />
          </p>
        </h1>
      </div>
      <MainFooter />
    </div>
  );
};

export default OverView;
