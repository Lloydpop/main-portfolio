"use client";
import { DocumentDownload, Moon, MusicPlay, Sun } from "iconsax-react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import useMonthAndYear from "@/hooks/useMonthAndYaer";
import wave from "../../../public/img/wave.gif";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Wrapper = ({ children, darkMode, setDarkMode }) => {
  const { year, date } = useMonthAndYear();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    audioRef.current.volume = 0.1;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 1500);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isVisible]);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <div
        className={`fixed  bottom-8 right-4  ${
          darkMode
            ? "bg-primary text-black hover:bg-white"
            : "bg-black text-white"
        } p-2 rounded-full cursor-pointer duration-300 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
        onClick={scrollToTop}
      >
        <svg
          fill={darkMode ? "#000000" : "#fff"}
          className="w-5 h-5 bounce"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330.002 330.002"
          xmlSpace="preserve"
        >
          <g id="XMLID_7_">
            <path
              id="XMLID_8_"
              d="M315.001,180.001h-300c-6.371,0-12.046,4.024-14.154,10.035c-2.109,6.011-0.19,12.699,4.784,16.678
      l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287l149.996-120
      c4.974-3.98,6.893-10.667,4.784-16.678C327.047,184.024,321.371,180.001,315.001,180.001z M165.005,295.791L57.764,210.001H272.24
      L165.005,295.791z"
            />
            <path
              id="XMLID_11_"
              d="M15.001,150.001h300c6.371,0,12.046-4.024,14.154-10.035c2.109-6.011,0.19-12.699-4.784-16.678
      l-150.004-120c-5.479-4.382-13.262-4.382-18.741,0l-149.996,120c-4.974,3.979-6.893,10.667-4.784,16.678
      C2.955,145.977,8.631,150.001,15.001,150.001z M164.997,34.21l107.241,85.79H57.762L164.997,34.21z"
            />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div className={`px-10 py-6 ${darkMode ? "text-gray-300 " : "#000"}`}>
      <audio ref={audioRef} className="mt-4">
        <source src={"/billy.mp3"} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <ScrollToTopButton />
      <header>
        <nav className="flex lg:flex-row flex-col justify-between lg:items-center text-sm">
          <div>
            <p className="font-sauce font-[500] tracking-tight uppercase">
              Open for freelance opportunities starting {date} {year}.
            </p>
          </div>
          <div className="lg:self-start self-end">
            <p className="font-sauce font-[500] tracking-tight lg:block hidden">
              PERFECTION CHIZURUOKE <br />
              PORTFOLIO / 2021 — {year}
            </p>
          </div>
          <div className="flex items-center gap-4 lg:self-start self-end lg:mt-0 md:mt-0 sm:mt-4 mt-4">
            <div className="cursor-pointer" onClick={togglePlay}>
              {isPlaying ? (
                <Image
                  src={wave}
                  alt=""
                  className={`w-12 h-12 ${darkMode ? "" : "gray"}`}
                />
              ) : (
                <MusicPlay variant="Bold" />
              )}
            </div>

            <div
              className={`w-[100px] h-[40px] rounded-[25px] flex  shadow-2xl items-center border relative ${
                darkMode ? "  border-[#ffffff85]" : "border-[#000000b6]"
              } overflow-hidden cursor-pointer`}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <p
                className={`w-[50%] rounded-full scale-[90%] absolute top-0 left-0 h-full  duration-300 ${
                  darkMode ? " lg:left-[55%] left-[64%]" : "left-0"
                }`}
              >
                {darkMode ? (
                  <Moon className="h-full lg:w-12 w-8" />
                ) : (
                  <Sun variant="Bold" className=" h-full lg:w-12 w-8" />
                )}
              </p>
              <p
                className={`font-sauce duration-300   ${
                  darkMode ? "ml-4" : "ml-12"
                }`}
              >
                {darkMode ? "DARK" : "LIGHT"}
              </p>
            </div>
            <Button href={"assets/cv.pdf"} darkMode={darkMode}>
              <p className="flex items-center gap-2">
                MY RESUME
                <DocumentDownload className="w-4 h-4" />
              </p>
            </Button>
          </div>
          <p className="font-sauce font-[500] tracking-tight lg:hidden block lg:self-start self-end mt-4">
            PERFECTION CHIZURUOKE <br />
            PORTFOLIO / 2021 — {year}
          </p>
        </nav>
      </header>
      <div className="overflow-hidden">{children}</div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Wrapper;
