import { Tooltip } from "@chakra-ui/react";
import React from "react";
import NavLink from "../../../Component/NavBar/NavLink/NavLink";
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
          <div className={`scale-[0] ${toggle} duration-[1s]`}>
            <Tooltip
              className="tooltip fonty"
              label={expanded[index] ? "Expanded" : "Collapsed"}
              p={"4px"}
              borderRadius={"4px"}
              bg={item?.bg}
              color={"#000"}
            >
              <div>
                {item?.title === "Cappen UI Clone" && (
                  <span className="vertical-line block"></span>
                )}
                <div
                  className="  flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => {
                    handleClick(index);
                    setItemer(item);
                  }}
                >
                  <h1
                    className="text-[40px] font-semibold  flex items-center gap-5"
                    style={{
                      textShadow: "0 0 3px #cccfcabf",
                    }}
                  >
                    <span className=" block">{item?.title}</span>
                    <p className="text-sm mt-4">
                      {" "}
                      {item?.date}
                      <span className="block mt-1">{item?.location}</span>
                    </p>
                  </h1>
                  <NavLink
                    title={"View Site"}
                    to={"kkkk"}
                    defaultValue={itemer?.bg}
                  />
                </div>
                <span className="vertical-line block"></span>
              </div>
            </Tooltip>

            <div
              className={`${
                isExpanded(index) ? "h-[400px] p-10 " : "h-[0] "
              } overflow-hidden col-span-5  h-[350px]  rounded  duration-[0.5s] flex justify-between  `}
              style={{
                backgroundColor: "#000",
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
