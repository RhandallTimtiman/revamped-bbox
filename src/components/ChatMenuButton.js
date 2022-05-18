import React from "react";

const ChatMenuButton = ({ icon, isActive = false, index, ...rest }) => {
  return (
    <button
      key={index}
      onClick={() => rest.onClick(index)}
      className={`h-10 w-12 p-2 flex flex-col justify-center items-center border bg-gray-200 rounded-md text-gray-500 focus:outline-none ${
        isActive ? "text-active border border-active shadow-md" : ""
      }`}
    >
      {icon}
    </button>
  );
};

export default ChatMenuButton;
