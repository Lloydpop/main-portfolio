import React from "react";

const Tooltip = ({ expanded, index, item, children, style }) => {
  return (
    <div>
      <div
        className={`tooltip fonty  left-[50%] absolute bottom-10 opacity-0 -z-10 ${style}`}
        style={{
          padding: "4px",
          borderRadius: "4px",
          background: item?.bg,
          color: "#000",
        }}
      >
        {expanded[index] ? "Expanded" : "Collapsed"}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
