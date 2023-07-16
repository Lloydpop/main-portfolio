import { Pattern, Pattern2 } from "../pattern/Pattern";
import Logo from "../Logo/Logo";
import NavItem, { SocialItems } from "../NavBar/NavItem/NavItem";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavLink from "../NavBar/NavLink/NavLink";
import ToggleMode from "../Switch/ToggleMode";
import Footer from "../Footer/Footer";

const Wrapper = ({
  welcome,
  setWelcome,
  children,
  tabs,
  page,
  addClass2,
  setClass,
  handle,
  bg,
  handleBlueMode,
  handleWhiteMode,
  color,
  whiteModeArray,
  ArrayData,
  blue,
  blueColorArray,
  blueModeArray,
  handleToggle,
  toggle,
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/home") {
      addClass(true);
    }
  }, [location]);
  const handleAbout = () => {
    handleToggle();
    setTimeout(() => {
      navigate("/about");
    }, 800);
  };
  const handleWork = () => {
    handleToggle();
    setTimeout(() => {
      navigate("/project-overview");
    }, 800);
  };

  return (
    <div
      className={`${
        location.pathname === "/home" ? "lg:h-[100vh] h-[auto]" : ""
      }   lg:overflow-y-hidden overflow-y-visible relative`}
    >
      <div
        className={`fixed top-0 left-0 w-[100%] h-[100%] ${bg}  ${
          toggle === true
            ? "translate-y-[0] z-[10000]"
            : "translate-y-[100%] z-0"
        } duration-[0.8s]`}
      >
        <div className="md:text-[50px] sm:text-[40px] text-[40px] flex flex-col gap-8 mt-[120px] px-10">
          <NavLink
            title={"01. WORK"}
            onClick={handleWork}
            defaultValue={
              welcome === true && color === false && blue === false
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : color === true
                ? ArrayData[page].bg
                : blue === true
                ? blueColorArray[page].bg
                : tabs[page]?.bg
            }
          />
          <NavLink
            title={"02. ABOUT"}
            defaultValue={
              welcome === true && color === false && blue === false
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : color === true
                ? ArrayData[page].bg
                : blue === true
                ? blueColorArray[page].bg
                : tabs[page]?.bg
            }
            onClick={handleAbout}
          />

          <div className="absolute top-[50px] left-[50px]">
            <ToggleMode
              setClass={setClass}
              addClass={addClass2}
              handleBlueMode={handleBlueMode}
              handleWhiteMode={handleWhiteMode}
              blueModeArray={blueModeArray}
              whiteModeArray={whiteModeArray}
              className="flex w-[fit-content]"
            />
          </div>
        </div>
        <div className="absolute bottom-[20px] right-[40px]">
          <SocialItems />
          <Footer />
        </div>
      </div>
      <nav className="flex  justify-between">
        <div className="mt-5">
          <Pattern
            bg={bg}
            defaultColor={
              welcome === true && color === false && blue === false
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : color === true
                ? ArrayData[page].bg
                : blue === true
                ? blueColorArray[page].bg
                : tabs[page]?.bg
            }
          />
          <div
            className={` scale-[0]${
              classN === true ? "scale-[100%] " : ""
            } duration-[1.5s]`}
          >
            <div className="lg:ml-[80px] ml-[40px] relative ">
              <Logo
                onClick={() => {
                  setWelcome(true);
                }}
              />
            </div>
          </div>
        </div>
        <div
          className={`lg:mt-10 mt-0 lg:pr-5 ${
            classN === true ? "translate-y-[0]" : "-translate-y-[100%]"
          } duration-[1.5s] mr-[95px] lg:static fixed right-0 z-[100000]`}
        >
          <NavItem
            defaultColor={
              welcome === true && color === false && blue === false
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : color === true
                ? ArrayData[page].bg
                : blue === true
                ? blueColorArray[page].bg
                : tabs[page]?.bg
            }
            addClass={addClass2}
            setClass={setClass}
            handleLightMode={handle}
            handleBlueMode={handleBlueMode}
            handleWhiteMode={handleWhiteMode}
            whiteModeArray={whiteModeArray}
            blueModeArray={blueModeArray}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </nav>
      <div>{children}</div>
      <div className="lg:pt-[0px] pt-[400px]"></div>

      <div>
        <Pattern2
          animate={`${
            classN === true ? "scale-[100%] " : "scale-0"
          } duration-[1.5s]`}
          bg={bg}
          defaultColor={
            welcome === true && color === false && blue === false
              ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
              : color === true
              ? ArrayData[page].bg
              : blue === true
              ? blueColorArray[page].bg
              : tabs[page]?.bg
          }
        />
      </div>
    </div>
  );
};

export default Wrapper;
