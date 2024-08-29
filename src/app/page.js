"use client";
import Image from "next/image";
import Heading from "../components/Heading/Heading";
import profile from "../../public/img/me.png";
import profile2 from "../../public/img/me.jpg";
import Projects from "./pageComponents/Projects/Projects";
import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import Skills from "./pageComponents/Skills/Skills";
export default function Home() {
  const [view, setView] = useState(false);
  const [darkMode, setDarkMode] = useState("true");
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
  }, [darkMode]);
  useEffect(() => {
    setView(true);
  }, []);
  return (
    <Wrapper darkMode={darkMode} setDarkMode={setDarkMode}>
      <main className="">
        <section className="lg:mt-28 mt-12 flex lg:flex-row flex-col justify-between gap-10">
          <div className="mt-1">
            <div className="overflow-hidden lg:pr-4 text-center lg:text-start">
              <div
                className={`${
                  view ? "translate-x-0" : "-translate-x-[100%]"
                } duration-[1s] ease-in-out`}
              >
                <Heading darkMode={darkMode}>Frontend</Heading>
              </div>
              <div
                className={`${
                  view ? "translate-x-0" : "translate-x-[100%]"
                } duration-[1s] ease-in-out`}
              >
                <Heading darkMode={darkMode}>developer</Heading>
              </div>
            </div>
          </div>
          <div className="lg:w-[400px] md:w-[400px] mx-auto sm:w-full w-full">
            <div
              className={`${
                view ? "scale-100" : "scale-0"
              } duration-[1s] ease-in-out`}
            >
              <Image
                alt="profile"
                className="rounded-[50%] lg:w-[20rem] md:w-[20rem] sm:w-[80%] w-[80%] mx-auto object-contain"
                src={darkMode ? profile2 : profile}
              />
            </div>
            <div
              className={` font-sauce mt-4  ${
                view ? "translate-y-0" : "-translate-y-[100%]"
              } duration-[1s] ease-in-out`}
            >
              <span className="text-primary font-[600] flex items-center gap-1">
                ABOUT ME
                <span className="w-[50px] h-[3px] bg-primary block"></span>
              </span>
              <p
                className={`${
                  darkMode ? " text-gray-300" : " text-gray-800"
                }  font-[500] text-sm`}
              >
                I am a seasoned developer based in Lagos, Nigeria, dedicated to
                crafting sophisticated and interactive digital experiences on
                the web. My expertise extends to collaborating with diverse
                brands and industry leaders, contributing to the advancement of
                innovative and exceptional projects.
              </p>
            </div>
          </div>
        </section>

        <Projects darkMode={darkMode} />

        <Skills darkMode={darkMode} />
      </main>
    </Wrapper>
  );
}
