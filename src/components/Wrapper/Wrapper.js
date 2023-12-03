"use client";
import { DocumentDownload, Moon, Sun } from "iconsax-react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import useMonthAndYear from "@/hooks/useMonthAndYaer";
const Wrapper = ({ children, darkMode, setDarkMode }) => {
  const { year, date } = useMonthAndYear();
  return (
    <div className={`px-10 py-6 ${darkMode ? "text-gray-300 " : "#000"}`}>
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
