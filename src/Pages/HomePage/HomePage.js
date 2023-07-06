import React, { useEffect, useState } from "react";
import NavItem, { SocialItems } from "../../Component/NavBar/NavItem/NavItem";
import Logo from "../../Component/Logo/Logo";
import Message from "./About/Component/Message";
import Projects from "./About/Component/Projects";
import Footer from "../../Component/Footer/Footer";

import pat from "../../Assets/pattern.svg";
import { Example } from "../../hooks/example";
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
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    });
  }, []);
  return (
    <main>
      <div
        className={`w-[23px] h-[23px] rounded-full  absolute top-0 left-0 overflow-hidden custom-cursor z-[100]`}
        style={{
          background:
            welcome === true
              ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
              : tabs[page]?.bg,
          transition: " 0.2s ease",
        }}
      >
        <div className="h-[100%] w-[100%] rounded-full"></div>
      </div>

      <section className="mt-[60px] flex relative z-[50]">
        <Example
          bg={bg}
          welcome={welcome}
          setWelcome={setWelcome}
          tabs={tabs}
          setPage={setPage}
          page={page}
          direction={direction}
        />
        <div
          className={`fixed -bottom-[26px] right-[90px] -translate-y-[100%] scale-[0]${
            classN === true ? "translate-y-[0] scale-[100%] " : ""
          } duration-[1.5s]`}
        >
          <SocialItems />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
