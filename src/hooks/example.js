import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "./style.css";
import NavLink from "../Component/NavBar/NavLink/NavLink";
import Projects from "../Pages/HomePage/About/Component/Projects";
import { WelcomeContent } from "../Pages/HomePage/About/Component/Content/Content";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const Example = ({
  welcome,
  setWelcome,
  tabs,
  page,
  setPage,
  direction,
  bg,
}) => {
  const location = useLocation();
  const [classN, addClass] = useState(false);
  useEffect(() => {
    if (location.pathname === "/home") {
      addClass(true);
    }
  }, [location]);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handle = (i, page) => {
    if (i === page && welcome === false) {
      setWelcome(true);
    } else {
      setWelcome(false);
    }
  };
  return (
    <div className="container">
      <AnimateSharedLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-[700px]  min-h-[500px] overflow-hidden pl-[70px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.section
                className="absolute w-[100%] h-[100%]"
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 2,
                  },
                  opacity: { duration: 0.2 },
                }}
              >
                {welcome === true ? (
                  <div
                    className={`-translate-x-[100%]${
                      classN === true ? "translate-x-[0]" : ""
                    } duration-[1s]`}
                  >
                    <WelcomeContent
                      page={page}
                      direction={direction}
                      variants={variants}
                    />
                  </div>
                ) : (
                  <motion.section
                    className="absolute w-[100%] h-[100%] mt-[70px]"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 170,
                        damping: 30,
                        duration: 2,
                      },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    <div
                      className={`-translate-y-[150%]${
                        classN === true ? "translate-y-[0]" : ""
                      } duration-[1.5s]`}
                    >
                      {tabs[page]?.content}
                    </div>
                  </motion.section>
                )}
              </motion.section>
            </AnimatePresence>
          </div>
          <ul className="tabs-header pl-[100px]">
            <Projects
              bg={bg}
              defaultValue={
                welcome === true
                  ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                  : tabs[page]?.bg
              }
            >
              {tabs.map(({ title }, i) => {
                const isActive = i === page;
                return (
                  <div
                    key={i}
                    className={`mt-8   -translate-y-[100%] scale-[0]${
                      classN === true ? "translate-y-[0] scale-[100%] " : ""
                    } duration-[1.5s]`}
                  >
                    <NavLink
                      defaultValue={
                        welcome === true
                          ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                          : tabs[page]?.bg
                      }
                      title={title}
                      onClick={() => {
                        setPage([i, i - page]);
                        setWelcome(false);
                        handle(i, page);
                      }}
                    />
                  </div>
                );
              })}
            </Projects>
          </ul>
        </div>
      </AnimateSharedLayout>
    </div>
  );
};
