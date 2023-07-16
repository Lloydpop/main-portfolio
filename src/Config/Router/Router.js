import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import HomePage from "../../Pages/Home/HomePage";
import Wrapper from "../../Component/Wrapper/Wrapper";
import { tabs } from "../../hooks/tabs";
import OverView from "../../Pages/OverView/OverView";
import About from "../../Pages/About/About";
import Loader from "../../Pages/Loading/Loader";
import { useMemo } from "react";

const RoutesLayout = () => {
  const [welcome, setWelcome] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const [addClass, setClass] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [blueMode, setBlueMode] = useState(false);
  const [whiteMode, setWhiteMode] = useState(false);
  const [color, setColor] = useState(false);
  const [blue, setBlue] = useState(false);
  const [addClass2, setAddClass2] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  const ArrayData = [
    {
      bg: "linear-gradient(135deg, #DECBA4 10%, #3E5151 100%)",
    },
    {
      bg: "linear-gradient(315deg, #fffffc 0%, #beb7a4 74%)",
    },
    {
      bg: "linear-gradient(to right, #d3cce3, #e9e4f0)",
    },

    {
      bg: "linear-gradient(315deg, #d3d3d3 0%, #7bed9f 74%)",
    },
  ];

  const blueColorArray = [
    {
      bg: "linear-gradient(135deg, #FFCF71 10%, #2376DD 100%)",
    },
    {
      bg: " linear-gradient(135deg, #13547a 10%, #80d0c7 100%)",
    },
    {
      bg: "linear-gradient(135deg, #247BA0 10%, #FFFFB5 100%)",
    },

    {
      bg: "linear-gradient(135deg, #A8BFFF 10%, #884D80 100%)",
    },
  ];

  const whiteModeArray = () => {
    if (color === false) {
      setBlue(false);
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const blueModeArray = () => {
    if (blue === false) {
      setBlue(true);
      setColor(false);
    } else {
      setBlue(false);
    }
  };
  const handleLightMode = () => {
    const main = (document.body.style.backgroundColor = "#000");

    if (lightMode === false) {
      setLightMode(true);
      setBlueMode(false);
      setWhiteMode(false);
    } else {
      setLightMode(false);
    }
  };
  const handleBlueMode = () => {
    const main = (document.body.style.backgroundColor = "#000");
    if (blueMode === false) {
      setBlueMode(true);
      setLightMode(false);
      setWhiteMode(false);
    } else {
      setBlueMode(false);
    }
  };
  const handleWhiteMode = () => {
    const main = (document.body.style.backgroundColor = "#000");
    if (whiteMode === false) {
      setWhiteMode(true);
      setBlueMode(false);
      setLightMode(false);
    } else {
      setWhiteMode(false);
    }
  };
  const switchUp = useMemo(() => {
    if (lightMode === true) {
      document.body.style.backgroundColor = "#1d1d20";
    }
    if (blueMode === true) {
      document.body.style.backgroundColor = "#000d1a";
    }
    if (whiteMode === true) {
      document.body.style.backgroundColor = "#152a21";
    } else {
      return "";
    }
    // return lightMode === true
    //   ? (document.body.style.backgroundColor = "#1d1d20")
    //   : blueMode === true
    //   ? (document.body.style.backgroundColor = "#00022e")
    //   : whiteMode === true
    //   ? (document.body.style.backgroundColor = "#fff")
    //   : whiteMode === true
    //   ? (document.body.style.color = "#000")
    //   : "";
  }, [lightMode, blueMode, whiteMode]);

  return (
    <Routes>
      <Route
        element={
          <Wrapper
            welcome={welcome}
            setWelcome={setWelcome}
            page={page}
            tabs={tabs}
            handle={handleLightMode}
            handleBlueMode={handleBlueMode}
            handleWhiteMode={handleWhiteMode}
            addClass2={addClass}
            setClass={setClass}
            whiteModeArray={whiteModeArray}
            color={color}
            blue={blue}
            blueModeArray={blueModeArray}
            blueColorArray={blueColorArray}
            ArrayData={ArrayData}
            handleToggle={handleToggle}
            toggle={toggle}
            children={<Outlet />}
            bg={
              lightMode === true
                ? "bg-[#1d1d20]"
                : blueMode === true
                ? "bg-[#000d1a]"
                : whiteMode === true
                ? "bg-[#152a21]"
                : "bg-[#000]"
            }
          />
        }
      >
        <Route
          path="/home"
          element={
            <HomePage
              welcome={welcome}
              setWelcome={setWelcome}
              setPage={setPage}
              page={page}
              tabs={tabs}
              color={color}
              mainc={ArrayData[page].bg}
              blue={blue}
              color2={blueColorArray[page].bg}
              direction={direction}
              bg={
                lightMode === true
                  ? "bg-[#1d1d20]"
                  : blueMode === true
                  ? "bg-[#000d1a]"
                  : whiteMode === true
                  ? "bg-[#152a21]"
                  : "bg-[#000]"
              }
            />
          }
        />
      </Route>
      <Route
        path="/project-overview"
        element={
          <OverView
            addClass2={addClass2}
            setClass2={setAddClass2}
            handleBlueMode={handleBlueMode}
            handleLightMode={handleLightMode}
            handleWhiteMode={handleWhiteMode}
            whiteModeArray={whiteModeArray}
            blueModeArray={blueModeArray}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            addClass2={addClass2}
            setClass2={setAddClass2}
            handleBlueMode={handleBlueMode}
            handleLightMode={handleLightMode}
            handleWhiteMode={handleWhiteMode}
            whiteModeArray={whiteModeArray}
            blueModeArray={blueModeArray}
            blue={blue}
          />
        }
      />
      <Route path="/" element={<Loader />} />
    </Routes>
  );
};

export default RoutesLayout;
