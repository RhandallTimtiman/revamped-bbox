import React from "react";
import { NumberChips } from "../components/Components";

const SmsForm = () => {
  return (
    <div className="bg-gray-100 border-t p-4 flex flex-col gap-4">
      <NumberChips placeholder="+639171234567" />
      <textarea
        className="bg-white rounded-md w-full py-2 pr-4 pl-2 text-black leading-tight focus:outline-none resize-none border"
        type="text"
        placeholder="Type Message Here"
      />
      <div className="flex flex-row justify-end items-center">
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

export default SmsForm;
