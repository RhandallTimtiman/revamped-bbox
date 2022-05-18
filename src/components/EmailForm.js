import React from "react";
import { EmailChips } from "../components/Components";

const EmailForm = () => {
  return (
    <div className="bg-gray-100 border-t p-4 flex flex-col gap-4">
      <EmailChips placeholder="To:" />
      <input
        className="bg-white rounded-md w-full py-2 pr-4 pl-2 text-black leading-tight focus:outline-none resize-none border"
        type="text"
        placeholder="Subject:"
      />
      <textarea
        className="bg-white rounded-md w-full py-2 pr-4 pl-2 text-black leading-tight focus:outline-none resize-none border"
        type="text"
        placeholder="Type Message Here"
      />
      <div className="flex flex-row justify-between items-center">
        <button className="flex flex-col justify-center items-center h-9 w-10 rounded-md bg-gray-200 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.576"
            height="24.395"
            viewBox="0 0 12.576 24.395"
            fill="currentColor"
          >
            <path
              id="Icon_ionic-ios-attach"
              data-name="Icon ionic-ios-attach"
              d="M21.6,9.278a.85.85,0,0,0-.849.849V20.711a4.39,4.39,0,0,1-1.2,3A4.309,4.309,0,0,1,16.535,25h-.74a4.231,4.231,0,0,1-2.983-1.339,4.371,4.371,0,0,1-1.3-3.005V7a2.959,2.959,0,0,1,.942-2.15,3.239,3.239,0,0,1,2.232-.887A3.03,3.03,0,0,1,17.744,7v12.75a1.721,1.721,0,0,1-1.579,1.753,1.673,1.673,0,0,1-1.535-1.753V12.479a.849.849,0,1,0-1.7,0v7.273A3.266,3.266,0,0,0,18.49,22.2a3.439,3.439,0,0,0,.953-2.45V7A4.758,4.758,0,0,0,14.668,2.25a4.777,4.777,0,0,0-3.386,1.388,4.7,4.7,0,0,0-1.41,3.37V20.662a6.084,6.084,0,0,0,1.775,4.246,5.885,5.885,0,0,0,4.143,1.737h.74A5.947,5.947,0,0,0,20.662,24.9a6.116,6.116,0,0,0,1.3-1.884,5.7,5.7,0,0,0,.485-2.292V10.128A.842.842,0,0,0,21.6,9.278Z"
              transform="translate(-9.872 -2.25)"
            />
          </svg>
        </button>
        <div className="flex flex-row gap-2">
          <button className="h-9 w-20 rounded-md py-1 bg-gray-300 border text-white">
            Cancel
          </button>
          <button className="h-9 w-20 rounded-md py-1 bg-active border text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
