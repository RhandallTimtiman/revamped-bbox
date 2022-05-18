import React from "react";

const FileBubble = ({ fileName = "" }) => {
  return (
    <div className="h-16 w-44 rounded-lg bg-white flex-col">
      <div className="flex flex-row justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex h-10 flex-row gap-4 px-4 items-start">
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="36"
          viewBox="0 0 27 36"
        >
          <path
            id="Icon_awesome-file-alt"
            data-name="Icon awesome-file-alt"
            d="M15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V11.25H17.438A1.692,1.692,0,0,1,15.75,9.563Zm4.5,16.594a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406a.846.846,0,0,1,.844.844Zm0-4.5a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406a.846.846,0,0,1,.844.844Zm0-5.062v.563a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406A.846.846,0,0,1,20.25,16.594ZM27,8.571V9H18V0h.429a1.686,1.686,0,0,1,1.2.492l6.884,6.891A1.682,1.682,0,0,1,27,8.571Z"
            fill="#1492c5"
          />
        </svg>
        <div className="w-24">
          <p className="text-xs line-clamp-2 text-left text-active underline">
            {fileName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileBubble;
