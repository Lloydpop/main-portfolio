import React from "react";
import List from "./List";

const Projects = ({
  children,
  defaultValue = "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
}) => {
  return (
    <div>
      <p className="text-[31px]">Projects</p>
      <div className="relative bg-black z-50">
        <div
          className="absolute top-1 left-1 h-[250px] w-[300px] -z-50"
          style={{
            background: defaultValue,
          }}
        ></div>
        <div className="absolute top-[0] left-[0] h-[250px] w-[300px]  bg-[#1d1d20] z-10">
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
