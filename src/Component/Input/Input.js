import React from "react";

const Input = ({
  type,
  placeholder,
  defaultColor = "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)",
  onFocus,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        className="block w-full border-b-[1px] pt-3 bg-transparent outline-0 py-2"
      />
      <div
        className="absolute bottom-0 left-0 w-[100%] h-[1px]"
        style={{
          background: defaultColor,
        }}
      ></div>
    </div>
  );
};

export default Input;
