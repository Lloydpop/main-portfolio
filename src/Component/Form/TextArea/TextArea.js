import React from "react";

const TextArea = () => {
  return (
    <div>
      <textarea
        className="bg-transparent mt-5 outline-0 h-auto text-white block w-full px-2  border-b-[1px] text-sm placeholder:text-lg"
        placeholder="Message"
      />
    </div>
  );
};

export default TextArea;
