import React, { useEffect, useState } from "react";
import { videos } from "./Component/Data";
import { useLocation } from "react-router-dom";
import { NavRoute } from "../../Component/NavBar/NavLink/NavLink";
import { MainFooter, MainNav } from "../../Component/Footer/Footer";
import Cursor from "../../Component/Cursor/Cursor";
import ProjectItem from "./Component/ProjectItem";
import { Pattern, Pattern2 } from "../../Component/pattern/Pattern";
import NavItem from "../../Component/NavBar/NavItem/NavItem";
const OverView = ({
  defaultColor,
  addClass2,
  handleBlueMode,
  setClass2,
  handleWhiteMode,
  handleLightMode,
  whiteModeArray,
  blueModeArray,
}) => {
  const [addClass, setClass] = useState(false);
  const location = useLocation();

  const [expanded, setExpanded] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const [itemer, setItemer] = useState({});

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
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = "100px";
    cursor.style.top = "200px";
    window.addEventListener("mousemove", (e) => {
      if (cursor) {
        var posX = e.clientX;
        var posY = e.clientY;

        var offset = 20;

        posX = Math.min(Math.max(offset, posX), window.innerWidth - offset);
        posY = Math.min(Math.max(offset, posY), window.innerHeight - offset);

        cursor.style.left = posX + "px";
        cursor.style.top = posY + "px";
      }
    });
    if (location.pathname === "/project-overview") {
      setClass(true);
    }
  }, [location]);
  const toggle = addClass === true ? "scale-[100%]" : "";
  const bounce = addClass === true ? "lg:translate-x-[0]" : "";
  return (
    <div className="">
      <Cursor itemer={itemer} />
      <section>
        <MainNav
          addClass={addClass}
          title={"Chizuruoke / Projects"}
          defaultValue={itemer?.bg}
        >
          <NavItem
            defaultColor={defaultColor}
            addClass={addClass2}
            handleLightMode={handleLightMode}
            setClass={setClass2}
            whiteModeArray={whiteModeArray}
            handleBlueMode={handleBlueMode}
            handleWhiteMode={handleWhiteMode}
            blueModeArray={blueModeArray}
          />
        </MainNav>
        <section
          className={`flex lg:flex-row flex-col overflow-hidden justify-between px-10`}
        >
          <p
            className={`lg:w-[30%] w-[100%] mt-4 text-sm ${
              addClass === true
                ? "translate-x-[0] lg:translate-y-[0]"
                : "-translate-x-[100%] lg:-translate-y-[100%]"
            } duration-[2s] `}
          >
            Empowering digital transformations for visionary brands, delivering
            innovative and results-driven solutions as a versatile web
            development specialist and an integral team contributor.
          </p>

          <h1
            className={`lg:text-[60px] text-[40px] font-semibold text-right ${
              addClass === true
                ? "lg:translate-y-[0] translate-x-[0] lg:translate-x-[0] "
                : "translate-x-[100%] lg:translate-x-[0]  lg:-translate-y-[100%]"
            } duration-[2s] `}
          >
            SELECTED PROJECTS [{videos.length}]
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
        <div
          className="lg:text-[40px] text-[26px] text-center lg:w-[600px] w-[100%] px-3 m-auto fonty"
          style={{
            textShadow: "0 0 2px #cccfcabf",
          }}
        >
          <p> To collaborate send an email to</p>

          <NavRoute
            title={"  perfectionchizuruoke"}
            to="mailto:perfectionchizuruoke@gmail.com?subject=Hello"
            blank=""
            defaultValue={itemer?.bg}
          />
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default OverView;
