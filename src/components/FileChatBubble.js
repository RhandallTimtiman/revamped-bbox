import React from "react";

const FileChatBubble = ({ isSelf = false, fileName = "" }) => {
  return (
    <div
      className={`flex flex-col w-full ${
        isSelf ? "pl-24 pr-4 md:pr-8" : "pl-4 pr-24"
      }`}
    >
      <div className={`flex flex-row ${isSelf ? "justify-end" : "gap-3"}`}>
        <div className="w-12"></div>
        <div>
          <div
            className={`rounded-lg py-2 max-w-xs flex flex-col ${
              isSelf ? "bg-default" : "bg-gray-100"
            }`}
          >
            <div className={`flex h-10 flex-row gap-4 px-4 items-center `}>
              <svg
                className={`h-7 w-7 ${isSelf ? "text-white" : "text-default"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="36"
                viewBox="0 0 27 36"
              >
                <path
                  id="Icon_awesome-file-alt"
                  data-name="Icon awesome-file-alt"
                  d="M15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V11.25H17.438A1.692,1.692,0,0,1,15.75,9.563Zm4.5,16.594a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406a.846.846,0,0,1,.844.844Zm0-4.5a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406a.846.846,0,0,1,.844.844Zm0-5.062v.563a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406A.846.846,0,0,1,20.25,16.594ZM27,8.571V9H18V0h.429a1.686,1.686,0,0,1,1.2.492l6.884,6.891A1.682,1.682,0,0,1,27,8.571Z"
                  fill="currentColor"
                />
              </svg>
              <div className="w-24">
                <p
                  className={`text-sm line-clamp-2 text-left underline ${
                    isSelf ? "text-white" : "text-default"
                  }`}
                >
                  {fileName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileChatBubble;
