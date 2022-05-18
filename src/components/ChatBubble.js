import React from "react";

const ChatBubble = ({ isSelf = false }) => {
  return (
    <div
      className={`flex flex-col w-full ${
        isSelf ? "pl-24 pr-4 md:pr-8" : "pl-4 pr-24"
      }`}
    >
      <div className={`flex flex-row ${isSelf ? "justify-end" : "gap-3"}`}>
        {!isSelf && (
          <div className="relative w-12 h-12 pt-6">
            <img
              className={`rounded-full shadow-sm border-black border`}
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="A design"
            />
          </div>
        )}
        <div>
          {!isSelf && (
            <p className="text-md text-gray-400">Rhandall Logistics</p>
          )}
          <div
            className={`rounded-lg p-4 max-w-xs flex flex-col ${
              isSelf ? "bg-default" : "bg-gray-100"
            }`}
          >
            <p className={`text-sm ${isSelf ? "text-white" : ""}`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to
            </p>
            <div className="flex flex-row justify-end">
              <p
                className={`text-xs  ${
                  isSelf ? "text-white" : "text-gray-400"
                }`}
              >
                2:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
