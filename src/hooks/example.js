import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "./style.css";
import NavLink from "../Component/NavBar/NavLink/NavLink";
import Projects from "../Pages/HomePage/About/Component/Projects";
import { WelcomeContent } from "../Pages/HomePage/About/Component/Content/Content";
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

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Example = ({
  welcome,
  setWelcome,
  tabs,
  page,
  setPage,
  direction,
}) => {
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  // const imageIndex = wrap(0, images.length, page);

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
                  <WelcomeContent
                    page={page}
                    direction={direction}
                    variants={variants}
                  />
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
                        stiffness: 300,
                        damping: 30,
                        duration: 2,
                      },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {tabs[page]?.content}
                  </motion.section>
                )}
              </motion.section>
            </AnimatePresence>
          </div>
          <ul className="tabs-header pl-[100px]">
            <Projects
              defaultValue={
                welcome === true
                  ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                  : tabs[page]?.bg
              }
            >
              {tabs.map(({ title }, i) => {
                const isActive = i === page;
                return (
                  <div key={i} className="mt-8">
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
                    ></NavLink>
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
