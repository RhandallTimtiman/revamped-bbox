import React from "react";
import { useHistory } from "react-router-dom";
import { getListOfChannels } from "../service/blackbox-service";

const ThreadCard = ({ topic }) => {
  let history = useHistory();

  const goToChatPage = async () => {
    let result = await getListOfChannels({
      memberId: "e7536091-fbfb-46e2-a6fa-a15765639bef",
      topic,
    });

    if (result.status === 200) {
      const {
        data: { data: channels },
      } = result;

      let mappedChannels = channels.map((channel) => {
        return {
          header: channel.channel,
          notification: 0,
          isActive: false,
          chatHeader: "",
          serviceHeader: "",
          ...channel,
        };
      });

      mappedChannels[0].isActive = true;

      history.push({
        pathname: "/chat",
        state: {
          channels: mappedChannels,
          currentUser: "e7536091-fbfb-46e2-a6fa-a15765639bef",
          topic,
        },
      });
    }
  };

  return (
    <div className="px-2 cursor-pointer" onClick={() => goToChatPage()}>
      <div className="w-auto border-t-2 py-4 px-2 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-bold text-primary">{topic}</p>
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
