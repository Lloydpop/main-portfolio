import React, { useEffect, useRef, useState } from "react";
import smoke from "../../Assets/loader.gif";
import useMonthAndYaer from "../../hooks/useMonthAndYaer";
import NavLink from "../../Component/NavBar/NavLink/NavLink";
const Loader = () => {
  const { year } = useMonthAndYaer();
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? "0" + minute : minute;

  const [counter, setCounter] = useState(10);
  const intervalIDRef = useRef(null);

  useEffect(() => {
    intervalIDRef.current = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 100 ? prevCounter + 10 : prevCounter
      );
    }, 500);
    return () => {
      clearInterval(intervalIDRef.current);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(intervalIDRef.current);
    }
  }, [counter]);
  return (
    <div className="flex  gap-6 px-8 mt-[30px] flex-col lg:flex-row">
      <div className="trans2 absolute p-2 lg:top-8 md:top-8 w-[fit-content] h-[35px] right-[27px] rounded bottom-8">
        {hour} : {minute} WAT
      </div>
      <div
        className="fonty text-[40px]  font-semibold"
        style={{
          textShadow: "0 0 3px #cccfcabf",
        }}
      >
        Chizuruoke
      </div>
      <div className="mt-5 text-sm">
        <p
          style={{
            textShadow: "0 0 3px #cccfcabf",
          }}
        >
          Portfolio {year === 2023 ? "" : year}-{year}
          <p>LAGOS, NG</p>
        </p>
        <p
          className="fonty text-sm uppercase mt-10"
          style={{
            textShadow: "0 0 3px #cccfcabf",
          }}
        >
          {counter < 100 ? (
            ` Loading.... ${counter}%`
          ) : (
            <div className="trans2 w-[50px] h-[50px] rounded-full flex items-center justify-center">
              100%
            </div>
          )}
        </p>
        <div className="vertical-line mt-7">
          <p className="w-[200px] pt-5">
            YOU’VE BEEN GRANTED ACCESS TO MY FOLIO, CLICK ON THE ENTER BUTTON
            WHEN LOADING IS COMPLETE.
          </p>
          <div
            className={`${
              counter === 100 ? "opacity-1" : "opacity-0"
            } duration-[2s] mt-3`}
          >
            <NavLink title={"ENTER NOW"} to={"/home"} blank="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
