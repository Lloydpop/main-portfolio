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
import NavItem from "../../Component/NavBar/NavItem/NavItem";
import ai from "../../Assets/ai.jpg";
const About = ({
  defaultColor,
  addClass2,
  handleBlueMode,
  setClass2,
  handleWhiteMode,
  handleLightMode,
  whiteModeArray,
  blueModeArray,
  blue,
}) => {
  const { date, year } = useMonthAndYaer();

  const location = useLocation();
  const [addClass, setClass] = useState(false);
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
    if (location.pathname === "/about") {
      setClass(true);
    }
  }, [location]);
  return (
    <div>
      <Cursor itemer={undefined} />
      <MainNav title={"Chizuruoke / About"} addClass={addClass}>
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
      <div className="lg:mt-[70px] mt-[40px] flex lg:justify-between justify-center items-center lg:px-[60px] px-[20px] overflow-hidden lg:flex-row flex-col">
        <div
          className={`lg:w-[800px] translate-y-[100%]${
            addClass === true ? "translate-y-[0]" : ""
          } duration-[2s]`}
        >
          <h1
            className={` lg:text-[55px] text-[30px] font-bold fonty uppercase lg:hidden md:hidden block `}
          >
            Hello!
            <br /> I'm Perfection Chizuruoke,
            <p>a frontend engineer</p>
          </h1>
          <h1
            className={` lg:text-[55px] text-[30px] font-bold fonter   lg:block md:block hidden`}
          >
            Hello!
            <br /> I'm Perfection Chizuruoke,
            <p>
              a frontend developer <span className="change">:)</span>
            </p>
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
          className={`rounded-full scale-0${
            addClass === true ? "scale-[100%]" : ""
          } duration-[2s] mt-10 lg:w-[350px] md:w-[350px] w-[250px]`}
        />
      </div>

      <div className=" lg:mt-[120px] mt-[60px] flex flex-col lg:flex-row justify-between lg:px-20 px-10">
        <div className=" lg:w-[60%] ">
          <p
            className="text-2xl"
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
          >
            <NavLink title={"About me"} />
          </p>
          <p className={`lg:text-[30px] text-[22px] mt-6`}>
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
            className="text-2xl mt-10 lg:mt-0"
            style={{
              textShadow: "0 0 3px #cccfcabf",
            }}
          >
            <NavLink title={"My Skills"} />
          </p>
          <p className="  mt-6">
            <ul className="flex flex-col gap-1 text-[20px] lg:text-normal">
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
            <div className="vertical-line mt-8 lg:hidden md:hidden block"></div>
          </p>
        </div>
      </div>
      <div className=" lg:mt-[100px] mt-[20px] flex flex-col lg:flex-row justify-between lg:items-center lg:px-20 px-10">
        <div className=" lg:w-[60%] ">
          <p className="lg:text-[30px] text-[20px] mt-6 ">
            To talk or collaborate, <br /> send an email to
            <a href="" className=" lg:hidden md:hidden block">
              {" "}
              perfectionchizuruoke
              <br />
              @gmail.com
            </a>
            <a href="" className=" hidden md:block lg:block">
              {" "}
              perfectionchizuruoke@gmail.com
            </a>
          </p>
        </div>
        <div className="">
          <div className="flex gap-10 mt-10 lg:mt-0">
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
                  <li>
                    <a
                      href="https://www.linkedin.com/in/lloydpop/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linkden
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/perfectionchiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Lloydpop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:lloydperfect199@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gmail
                    </a>
                  </li>
                </ul>
                <div className="mt-4">
                  <div
                    className="w-[300px] h-[300px] relative "
                    style={{
                      backgroundImage: `url(${me3})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
};

export default About;
