import React from "react";

function Button({ children, onClick, darkMode, href }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferer"
        href={href}
        className={`px-4 py-2 bg-black shadow-none outline-none ${
          darkMode
            ? " bg-primary text-black font-[800] hover:bg-white"
            : "text-white font-[500] "
        } rounded-3xl  font-sauce tracking-tighter block text-sm  duration-150`}
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
}

export default Button;
