import React from "react";

const NotificationBubble = ({ isAlert = false, hasAttachment = false }) => {
  return (
    <div className="flex flex-row rounded-lg shadow-sm mx-8">
      <div
        className={`flex flex-col w-20 ${
          isAlert ? "bg-danger" : "bg-default"
        } rounded-tl-3xl rounded-bl-3xl items-center justify-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-grow p-4 border rounded-tr-3xl rounded-br-3xl gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex-grow flex-col">
            <p className="text-sm leading-snug">Trip Status</p>
            <p
              className={`text-md leading-snug font-extrabold ${
                isAlert ? "text-danger" : "text-default"
              }`}
            >
              EMERGENCY SOS
            </p>
            <p className="text-sm leading-snug">TR-12312</p>
          </div>
          <div className="flex flex-col w-20 items-center justify-center">
            {hasAttachment && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.221"
                height="19.681"
                viewBox="0 0 17.221 19.681"
              >
                <path
                  id="Icon_awesome-paperclip"
                  data-name="Icon awesome-paperclip"
                  d="M1.662,17.918a6.022,6.022,0,0,1,.053-8.363L9.778,1.307a4.3,4.3,0,0,1,6.176,0,4.474,4.474,0,0,1,0,6.238L8.926,14.727a2.868,2.868,0,0,1-4.151-.038,2.979,2.979,0,0,1,.056-4.111l5.525-5.644a.615.615,0,0,1,.87-.009l.879.86a.615.615,0,0,1,.009.87L6.589,12.3a.52.52,0,0,0-.025.7.41.41,0,0,0,.6.006L14.2,5.825a2.013,2.013,0,0,0,0-2.8,1.844,1.844,0,0,0-2.658,0L3.474,11.274a3.56,3.56,0,0,0-.046,4.932,3.278,3.278,0,0,0,4.73.011l6.614-6.765a.615.615,0,0,1,.87-.01l.879.86a.615.615,0,0,1,.01.87L9.918,17.936a5.735,5.735,0,0,1-8.255-.019Z"
                  fill="#cacbce"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="text-left line-clamp-4">
          <p className="leading-tight w-96 text-sm">
            <b>Lorem Ipsum</b> is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <p className="text-right text-xs pt-2">2:00 pm</p>
      </div>
    </div>
  );
};

export default NotificationBubble;
