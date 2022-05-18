import React from "react";

const SearchInput = () => {
  return (
    <div className="w-full">
      <div className="flex bg-gray-100 items-center rounded-full shadow-md">
        <div className="pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="bg-gray-100 rounded-full w-full py-2 pr-4 pl-2 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
