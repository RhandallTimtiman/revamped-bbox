import React from "react";
import { ThreadCard, SearchInput } from "../components/Components";

import BlackboxIcon from "../assets/icons/BlackboxIcon.png";

const MainChatList = () => {
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
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
          <ThreadCard />
        </div>
      </div>
    </div>
  );
};

export default MainChatList;
