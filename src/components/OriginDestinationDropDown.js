import React from "react";

const OriginDestinationDropDown = () => {
  return (
    <div
      className={`absolute divide-y-2 right-0 mt-28 mr-3 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-500 ease-in-out`}
    >
      <a
        href="/chat"
        className="block px-4 py-2 text-sm text-active font-semibold cursor-pointer"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
      >
        Origin
      </a>
      <a
        href="/chat"
        className="text-gray-700 block px-4 py-2 text-sm font-semibold cursor-pointer"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-1"
      >
        Destination
      </a>
    </div>
  );
};

export default OriginDestinationDropDown;
