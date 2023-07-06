import { Pattern, Pattern2 } from "../pattern/Pattern";
import Logo from "../Logo/Logo";
import NavItem from "../NavBar/NavItem/NavItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  useEffect(() => {
    if (location.pathname === "/home") {
      addClass(true);
    }
  }, [location]);

  return (
    <div className=" px-[40px] h-[100vh] lg:overflow-y-hidden overflow-y-visible ">
      <nav className="flex  justify-between">
        <div className="mt-5 pl-[30px]">
          <Pattern
            bg={bg}
            defaultColor={
              welcome === true
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : tabs[page]?.bg
            }
          />
          <div
            className={` scale-[0]${
              classN === true ? "scale-[100%] " : ""
            } duration-[1.5s]`}
          >
            <Logo
              onClick={() => {
                setWelcome(true);
              }}
            />
          </div>
        </div>
        <div
          className={`mt-10 pr-5 -translate-y-[100%]${
            classN === true ? "translate-y-[0]" : ""
          } duration-[1.5s]`}
        >
          <NavItem
            defaultColor={
              welcome === true
                ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                : tabs[page]?.bg
            }
            addClass={addClass2}
            setClass={setClass}
            handleLightMode={handle}
          />
        </div>
      </nav>
      <div>{children}</div>

      <Pattern2
        bg={bg}
        defaultColor={
          welcome === true
            ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
            : tabs[page]?.bg
        }
      />
    </div>
  );
};

export default Wrapper;
