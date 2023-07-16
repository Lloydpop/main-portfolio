import React, { useEffect, useState } from "react";
import NavItem, { SocialItems } from "../../Component/NavBar/NavItem/NavItem";
import Logo from "../../Component/Logo/Logo";

import Projects from "./Projects";
import Footer from "../../Component/Footer/Footer";

import pat from "../../Assets/pattern.svg";
import { Main } from "./Main";
import { Pattern, Pattern2 } from "../../Component/pattern/Pattern";
import { tabs } from "../../hooks/tabs";
import { useLocation } from "react-router-dom";
const HomePage = ({
  welcome,
  setWelcome,
  setPage,
  tabs,
  page,
  direction,
  bg,
  color,
  mainc,
  blue,
  color2,
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  useEffect(() => {
    if (location.pathname === "/home") {
      addClass(true);
    }
  }, [location]);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.left = "100px";
      cursor.style.top = "200px";
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
  }, []);
  return (
    <main>
      <div
        className={`w-[23px] h-[23px] rounded-full  absolute top-0 left-0 overflow-hidden custom-cursor z-[100] lg:block hidden`}
        style={{
          background:
            welcome === true && color === false && blue === false
              ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
              : color === true
              ? mainc
              : blue === true
              ? color2
              : tabs[page]?.bg,
        }}
      >
        <div className="h-[100%] w-[100%] rounded-full"></div>
      </div>

      <section className="lg:mt-[60px] mt-[30px] flex relative z-[50]">
        <Main
          bg={bg}
          welcome={welcome}
          setWelcome={setWelcome}
          tabs={tabs}
          setPage={setPage}
          page={page}
          direction={direction}
          color={color}
          mainc={mainc}
          blue={blue}
          color2={color2}
        />
        <div
          className={`absolute  right-[90px] -translate-y-[100%] scale-[0]${
            classN === true ? "translate-y-[0] scale-[100%] " : ""
          } duration-[1.5s]`}
        ></div>
      </section>
    </main>
  );
};

export default HomePage;
