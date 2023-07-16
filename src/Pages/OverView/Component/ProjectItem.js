import { Tooltip } from "@chakra-ui/react";
import React from "react";
import NavLink from "../../../Component/NavBar/NavLink/NavLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
const ProjectItem = ({
  videos,
  itemer,
  handleClick,
  setItemer,
  expanded,
  toggle,
  location,
  isExpanded,
}) => {
  return (
    <div>
      {videos.map((item, index) => {
        return (
          <div className={`scale-[0] ${toggle} duration-[1s] parent`}>
            <Tooltip
              className="tooltip fonty hidden lg:block"
              label={expanded[index] ? "Expanded" : "Collapsed"}
              p={"4px"}
              borderRadius={"4px"}
              bg={item?.bg}
              color={"#000"}
            >
              <div>
                <span className="vertical-line block"></span>

                <div
                  className="  flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => {
                    handleClick(index);
                    setItemer(item);
                  }}
                >
                  <h1 className="lg:text-[40px] text-[25px]  font-semibold  flex lg:items-center  lg:gap-5 lg:flex-row flex-col">
                    <span className=" block fonter">{item?.title}</span>
                    <p className="text-sm mt-4">
                      {" "}
                      {item?.date}
                      <span className="block mt-1">{item?.location}</span>
                    </p>
                  </h1>
                  <div>
                    <div className="lg:block hidden">
                      <NavLink
                        title={"View Site"}
                        to={item?.to}
                        defaultValue={itemer?.bg}
                        blank="_blank"
                      />
                    </div>
                    <a
                      href={item?.to}
                      target="_blank"
                      className="w-[30px] h-[30px] rounded-full flex items-center justify-center lg:hidden block"
                      style={{
                        background: item?.bg,
                      }}
                    >
                      <ArrowRightIcon className="h-5 w-5 text-black" />
                    </a>
                  </div>
                </div>
                <span className="vertical-line block relative hh">
                  <span className=" block absolute top-0 left-0  h-[100%] tap duration-[0.8s]"></span>
                </span>
              </div>
            </Tooltip>

            <div
              className={`${
                isExpanded(index) ? "lg:h-[400px] lg:p-10 " : "lg:h-[0] lg:p-0"
              } overflow-hidden col-span-5  h-[0]  rounded  duration-[0.5s] flex justify-between  `}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`${
                  item?.title === "GMFB" ? "bg-[#ffffff4b]" : "bg-white"
                } w-[45%] h-[100%] flex-col flex  justify-center items-center overflow-hidden px-10`}
              >
                <div
                  style={{
                    background: item?.bg,
                  }}
                >
                  {item.title === "GMFB" ? (
                    <img
                      src={item?.src}
                      key={item?.id}
                      className=" scale-[90%]  "
                    />
                  ) : (
                    <video
                      key={item?.id}
                      src={item?.src}
                      autoPlay={location.pathname === "/project-overview"}
                      muted
                      className=" scale-[90%]  "
                    ></video>
                  )}
                </div>
              </div>
              <div
                className={`${
                  item?.title === "GMFB" ? "bg-[#ffffff4b]" : "bg-white"
                } w-[45%] h-[100%] flex-col flex  justify-center items-center overflow-hidden px-10`}
              >
                <div
                  style={{
                    background: item?.bg,
                  }}
                >
                  <img
                    key={item?.id}
                    src={item?.wallPaper}
                    autoPlay={location.pathname === "/project-overview"}
                    muted
                    className=" scale-[90%]  "
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItem;
