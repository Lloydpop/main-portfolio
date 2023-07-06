import React from "react";

const Cursor = ({ itemer }) => {
  return (
    <div>
      <div
        className={`w-[23px] h-[23px] rounded-full  absolute top-0 left-0 overflow-hidden custom-cursor z-[100]`}
        style={{
          background:
            itemer?.bg === undefined
              ? "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)"
              : itemer?.bg,

          transition: " 0.2s ease",
        }}
      >
        <div className="h-[100%] w-[100%] rounded-full"></div>
      </div>
    </div>
  );
};

export default Cursor;
