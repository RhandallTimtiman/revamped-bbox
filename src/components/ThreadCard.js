import React from "react";
import { useHistory } from "react-router-dom";

const ThreadCard = () => {
  let history = useHistory();

  function goToChatPage() {
    history.push("/chat");
  }

  return (
    <div className="px-2 cursor-pointer" onClick={() => goToChatPage()}>
      <div className="w-auto border-t-2 py-4 px-2 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-bold text-primary">LESOL12321312</p>
          <p className="text-xs text-gray-400">June 12, 2021 2:00 pm</p>
        </div>
        <div className="flex flex-row">
          <div className="flex justify-start w-full h-12">
            <p className="text-left line-clamp-2">
              <span className="font-bold text-primary">Rhandall Timtiman</span>
              {" : "}
              <span className="font-semibold text-gray-500">
                Honollu delivered etshashdsakj askdsaoiq ksadlkasd jxvlkxc
                asldiap qwpeiopqw asdas
              </span>
            </p>
          </div>
          <div className="flex flex-col w-1/6 justify-start items-end">
            <div className="rounded-full h-4 w-4 bg-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
