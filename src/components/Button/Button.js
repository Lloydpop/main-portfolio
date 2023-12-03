import React from "react";

function Button({ children, onClick, darkMode, href }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferer"
        href={href}
        className={`px-4 py-2 bg-black shadow-none outline-none ${
          darkMode ? " bg-white text-black font-[600]" : "text-white "
        } rounded-3xl  font-sauce tracking-tighter block text-sm font-[500]`}
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
}

export default Button;
