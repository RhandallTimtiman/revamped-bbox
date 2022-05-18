import React from "react";

const ChatHead = ({ isActive = false, header, notification = 0, ...rest }) => {
  return (
    <div
      className="h-full flex flex-col justify-center items-center align-top gap-2"
      onClick={() => rest.onClick(rest.index)}
    >
      <div className="relative w-16 h-16">
        <img
          className={`rounded-full shadow-sm transition-all duration-100 ease-in-out ${
            isActive ? "border-secondary border-4" : "border-black border"
          }`}
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="A design"
        />
        {notification !== 0 && (
          <div className="absolute top-0 right-0 h-5 w-5 my-1 border-2 border-gray-100 rounded-full bg-red-400 z-2">
            <p className="text-xs text-white text-center">{notification}</p>
          </div>
        )}
      </div>
      <div className="text-center w-24 h-8">
        <p
          className={`text-xs transition-all duration-100 ease-in-out ${
            isActive ? "text-secondary font-bold" : "text-black"
          } line-clamp-2`}
        >
          {header}
        </p>
      </div>
    </div>
  );
};

export default ChatHead;
