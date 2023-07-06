import React from "react";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import NavLink, {
  NavRoute,
} from "../../../../../Component/NavBar/NavLink/NavLink";
import lloyd from "../../../../../Assets/me.jpg";
export const WelcomeContent = ({ page, direction, variants, style }) => {
  return (
    <motion.section
      className={`absolute w-[100%] h-[100%] ${style}`}
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
      <div className=" relative">
        <div className="text-[90px] font-extralight relative">
          <h3 className="bounce ten">
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span
              className="w-[53px] h-[53px] block rounded-full border-[5px] border-[#c0c0c0] mx-[2px]"
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
                <div className=" mt-4 flex items-center gap-10">
                  <NavLink
                    small
                    defaultValue="linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
                    title={
                      <p className="flex items-center gap-2">
                        Download Resume
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
  );
};

export const Cappen = () => {
  return (
    <div>
      <h1 className="text-[30px] mb-2">Cappen.</h1>
      <div className="flex">
        <div
          className=" w-[1px] rounded"
          style={{
            backgroundImage: "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
          }}
        />
        <div className=" ml-6 w-[500px]">
          <p>
            {" "}
            The Animated UI Website project is a visually captivating and
            interactive website that showcases my skills in front-end web
            development and user interface (UI) design. The project demonstrates
            my ability to create engaging user experiences by combining modern
            design trends with smooth animations and transitions.
          </p>
          <div className=" mt-4 flex items-center gap-10">
            <NavRoute
              small
              blank=""
              defaultValue="linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)"
              title={"View More"}
              to={"/project-overview"}
              size={"text-[20px] font-semibold"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Hostinger = () => {
  return (
    <div>
      <h1 className="text-[30px] mb-2">Hostinger UI clone.</h1>
      <div className="flex">
        <div
          className=" w-[1px] rounded"
          style={{
            backgroundImage: "linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%)",
          }}
        />
        <div className=" ml-6 w-[500px]">
          <p>
            The Hostinger Website UI Clone project is a meticulous recreation of
            the user interface of the popular web hosting service, Hostinger.
            The project aims to showcase your skills in front-end web
            development and design by replicating the visual aspects and
            functionality of the original website.
          </p>
          <div className=" mt-4 flex items-center gap-10">
            <NavLink
              small
              defaultValue="linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%)"
              title={"View Site"}
              to={"site"}
              size={"text-[20px] font-semibold"}
            />
            <NavLink
              small
              defaultValue="linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%)"
              title={"Git Hub"}
              to={"site"}
              size={"text-[20px] font-semibold"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const GMFB = () => {
  return (
    <div>
      <h1 className="text-[30px] mb-2">GMFB.</h1>
      <div className="flex">
        <div
          className=" w-[1px] rounded"
          style={{
            backgroundImage: "linear-gradient(315deg, #fefefe 0%, #00a4e4 74%)",
          }}
        />
        <div className=" ml-6 w-[500px]">
          <p>
            The Corporate Banking Application is a comprehensive banking
            solution designed specifically for corporate clients, providing them
            with a seamless and secure platform to manage their financial
            activities. The application offers a wide range of banking services
            tailored to meet the unique needs of businesses, empowering them to
            streamline their banking operations and make informed financial
            decisions.
          </p>
          <div className=" mt-4 flex items-center gap-10">
            <NavLink
              small
              defaultValue="linear-gradient(315deg, #fefefe 0%, #00a4e4 74%)"
              title={"View Site"}
              to={"site"}
              size={"text-[20px] font-semibold"}
            />
            <NavLink
              small
              defaultValue="linear-gradient(315deg, #fefefe 0%, #00a4e4 74%)"
              title={"Git Hub"}
              to={"site"}
              size={"text-[20px] font-semibold"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Cv = () => {
  return (
    <div>
      <h1 className="text-[30px] mb-2">Perfect CV.</h1>
      <div className="flex">
        <div
          className=" w-[1px] rounded"
          style={{
            backgroundImage: "linear-gradient(315deg, #ffffb5 0%, #247ba0 74%)",
          }}
        />
        <div className=" ml-6 w-[500px]">
          <p>
            Developed and designed an online CV (Curriculum Vitae) website to
            showcase professional experience, skills, and achievements. The
            website serves as an interactive platform to present a comprehensive
            and visually appealing resume to potential employers and clients.
          </p>
          <div className=" mt-4 flex items-center gap-10">
            <NavLink
              small
              defaultValue="linear-gradient(315deg, #ffffb5 0%, #247ba0 74%)"
              title={"View Site"}
              to={"site"}
              size={"text-[20px] font-semibold"}
            />
            <NavLink
              small
              defaultValue="linear-gradient(315deg, #ffffb5 0%, #247ba0 74%)"
              title={"Git Hub"}
              to={"site"}
              size={"text-[20px] font-semibold"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
