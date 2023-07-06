import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import HomePage from "../../Pages/HomePage/HomePage";
import Wrapper from "../../Component/Wrapper/Wrapper";
import { tabs } from "../../hooks/tabs";
import OverView from "../../Pages/OverView/OverView";
import About from "../../Pages/About/About";
import Loader from "../../Pages/Loading/Loader";

const RoutesLayout = () => {
  const [welcome, setWelcome] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const [addClass, setClass] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const handleLightMode = () => {
    const main = (document.body.style.backgroundColor = "#000");
    if (lightMode === false) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  };
  const switchUp =
    lightMode === true
      ? (document.body.style.backgroundColor = "#1d1d20")
      : (document.body.style.backgroundColor = "#000");
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
            addClass2={addClass}
            setClass={setClass}
            children={<Outlet />}
            bg={lightMode === true ? "bg-[#1d1d20]" : "bg-[#000]"}
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
              direction={direction}
              bg={lightMode === true ? "bg-[#1d1d20]" : "bg-[#000]"}
            />
          }
        />
      </Route>
      <Route path="/project-overview" element={<OverView />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Loader />} />
    </Routes>
  );
};

export default RoutesLayout;
