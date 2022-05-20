import React, { useEffect, useState } from "react";
import { ThreadCard, SearchInput } from "../components/Components";
import { getListOfTopics } from "../service/blackbox-service";

import BlackboxIcon from "../assets/icons/BlackboxIcon.png";

const MainChatList = () => {
  useEffect(() => {
    getListOfUserTopics();
  }, []);

  const getListOfUserTopics = async () => {
    const result = await getListOfTopics({
      memberId: "e7536091-fbfb-46e2-a6fa-a15765639bef",
      topic: "",
    });

    if (result.status === 200) {
      let {
        data: {
          data: { topics },
        },
      } = result;

      setTopicList([...topics]);
    } else {
      setTopicList([]);
    }
  };

  const [topicList, setTopicList] = useState([]);

  return (
    <div className="flex flex-col gap-4 items-center py-8 px-4 min-h-screen min-w-full">
      <div className="w-full flex flex-row items-center justify-center">
        <img src={BlackboxIcon} alt="Blackbox" />
      </div>
      <div className="px-2 w-full pb-4">
        <SearchInput />
      </div>
      <div className="flex-grow h-full w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
          {topicList.length !== 0 ? (
            topicList.map((topic) => <ThreadCard topic={topic} key={topic} />)
          ) : (
            <>No Data Found</>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainChatList;
