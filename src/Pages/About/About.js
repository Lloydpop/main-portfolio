import React, { useEffect, useState } from "react";
import NavLink, { NavRoute } from "../../Component/NavBar/NavLink/NavLink";
import me from "../../Assets/me.jpg";
import me2 from "../../Assets/workspace.jpg";
import me3 from "../../Assets/edit.jpg";
import spotify from "../../Assets/spotify.png";
import { useLocation } from "react-router-dom";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Cursor from "../../Component/Cursor/Cursor";
import { MainFooter, MainNav } from "../../Component/Footer/Footer";
import useMonthAndYaer from "../../hooks/useMonthAndYaer";
const About = () => {
  const { date, year } = useMonthAndYaer();

  const location = useLocation();
  const [addClass, setClass] = useState(false);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor");

      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    });
    if (location.pathname === "/about") {
      setClass(true);
    }
  }, [location]);
  return (
    <div>
      <Cursor itemer={undefined} />
      <MainNav title={"Chizuruoke / about"} addClass={addClass} />
      <div className="mt-[70px] flex justify-between items-center px-[60px] overflow-hidden">
        <div
          className={`w-[700px] translate-y-[100%]${
            addClass === true ? "translate-y-[0]" : ""
          } duration-[2s]`}
        >
          <h1
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
            className={` text-[55px] font-bold`}
          >
            Hello! I'm Perfection Chizuruoke, a meticulous frontend developer
          </h1>
          <p
            className="mt-2"
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
          >
            {" "}
            Available from {date} {year}, always looking to
            <br /> collaborate with creators and creative teams.
          </p>
        </div>
        <img
          src={me}
          width={"350px"}
          className={`rounded-full scale-0${
            addClass === true ? "scale-[100%]" : ""
          } duration-[2s]`}
        />
      </div>

      <div className=" mt-[120px] flex justify-between px-20">
        <div className=" w-[60%] ">
          <p
            className="text-2xl"
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
          >
            <NavLink title={"About me"} />
          </p>
          <p className={`text-[30px] mt-6`}>
            {" "}
            As a frontend developer based in Lagos, Nigeria, I have a passion
            for crafting beautiful and interactive user interfaces that leave a
            lasting impression on users. I collaborate remotely with Xanotech
            Solutions teams, where I contribute my expertise in creating
            impactful digital experiences and web applications using React.
          </p>
        </div>
        <div>
          <p
            className="text-2xl"
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
          >
            <NavLink title={"My Skills"} />
          </p>
          <p className="  mt-6">
            <ul className="flex flex-col gap-1">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>CSS Libraries(chakra ui, material ui,antD)</li>
              <li>Boostrap</li>
              <li>Tailwind</li>
              <li>Rest API</li>
              <li>Google Firebase</li>
              <li>Git version control</li>
            </ul>
          </p>
        </div>
      </div>
      <div className=" mt-[120px] flex justify-between px-20">
        <div className=" w-[60%] ">
          <p className="text-[30px] mt-6">
            To talk collaborations, send an email to
            perfectionchizuruoke@gmail.com
          </p>
        </div>
        <div className="">
          <div className="flex gap-10">
            <div>
              <p
                className="text-xl"
                style={{
                  textShadow: "0 0 3px #cccfcabf",
                }}
              >
                <NavLink title={"Socials"} />
              </p>
              <p className="  mt-6">
                <ul className="flex  gap-4">
                  <li>Linkden</li>
                  <li>Twitter</li>
                  <li>GitHub</li>
                  <li>Gmail</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-20 relative">
        <div
          className="w-[300px] h-[300px] absolute -top-[30px] right-[45px]"
          style={{
            backgroundImage: `url(${me3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="w-[300px] h-[300px] "
          style={{
            backgroundImage: `url(${me2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <MainFooter />
    </div>
  );
};

export default About;
