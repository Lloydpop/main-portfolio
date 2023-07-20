import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import NavLink from "../../../Component/NavBar/NavLink/NavLink";
import lloyd from "../../../Assets/me.jpg";
export const WelcomeContent = ({
  page,
  direction,
  variants,
  style,
  defaultColor,
}) => {
  return (
    <div className="overflow-hidden">
      <motion.section
        className={` w-[100%] h-[100%] ${style}`}
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {
            type: "spring",
            stiffness: 100,
            damping: 30,
            duration: 2,
          },
          opacity: { duration: 0.2 },
        }}
      >
        <div className=" relative px-10">
          <div className="lg:text-[90px] text-[50px] font-extralight relative">
            <h3 className="bounce ten">
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span
                className="lg:w-[53px] w-[36px] h-[36px] lg:h-[53px]  block rounded-full lg:border-[5px] border-[3px] border-[#c0c0c0] mx-[3px]"
                style={{
                  backgroundImage: `url(${lloyd})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  letterSpacing: "7px",
                }}
              ></span>
              <span>m</span>
              <span>e</span>
              <span>.</span>
            </h3>
          </div>

          <div className="flex">
            <div
              className=" w-[1px] rounded"
              style={{
                background: "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)",
              }}
            />
            <div className="ml-5 w-[500px]">
              <p>
                {" "}
                My name is Perfection Chizuruoke, I'm a front-end engineer based
                in Nigeria, Lagos state. I have worked on couple of front-end
                projects using react framework.
              </p>
              <p className="mt-3">
                I'm passionate about cutting-edge, pixel-perfect, beautiful
                interfaces and intuitively implemented UX.
              </p>
              <div>
                <div>
                  <div className=" mt-4 mb-[4px] flex items-center gap-10 ">
                    <NavLink
                      small
                      defaultValue={defaultColor}
                      title={
                        <p className="flex items-center gap-2">
                          My Resume
                          <ArrowDownTrayIcon
                            className="h-5 w-5 text-[#12c2e9]"
                            style={{
                              background:
                                "linear-gradient( to right, #f64f59, #c471ed, #12c2e9, #fff)",
                              WebkitTextFillColor: "transparent",
                              WebkitBackgroundClip: "text",
                            }}
                          />
                        </p>
                      }
                      to={"cv.pdf"}
                      size={"text-[19px] font-semibold"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export const ContentWrapper = ({ children, defaultColor, title }) => {
  return (
    <div className="ml-10">
      <h1 className="text-[30px] mb-2">{title}</h1>
      <div className="flex">
        <div
          className=" w-[1px] rounded"
          style={{
            backgroundImage: defaultColor,
          }}
        />
        <div className=" ml-6 w-[500px]">
          <p>{children}</p>
          <div className=" mt-4 flex items-center gap-10">
            <NavLink
              small
              defaultValue={defaultColor}
              title={"View More"}
              to={"/project-overview"}
              size={"text-[20px] font-semibold"}
              blank=""
            />
            <NavLink
              small
              defaultValue={defaultColor}
              title={"Git Hub"}
              to={"https://github.com/Lloydpop"}
              size={"text-[20px] font-semibold"}
              blank="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
