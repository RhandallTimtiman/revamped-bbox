import React from "react";
import { useHistory } from "react-router-dom";
import { MemberInfo } from "../components/Components";

const MainChatMembers = () => {
  let history = useHistory();

  function goToPreviousPage() {
    history.goBack();
  }

  return (
    <div className="min-h-screen min-w-full flex flex-col pt-8 gap-8">
      <div className="flex flex-row justify-between px-2">
        <div className="flex flex-col items-center justify-center">
          <svg
            onClick={() => goToPreviousPage()}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-secondary cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-md">Service ID</p>
          <p className="text-xl font-semibold text-secondary cursor-pointer hover:underline">
            TRB2954
          </p>
          <p className="text-xl font-semibold">Jell Freight Forwarder Inc.</p>
        </div>
        <div className="flex flex-col items-center justify-center relative w-9"></div>
      </div>
      <div className="flex flex-row justify-center pl-8">
        <p className="text-lg">Group Members / Participants (3)</p>
      </div>
      <div className="flex flex-col flex-grow px-4 gap-4">
        <MemberInfo />
        <MemberInfo />
        <MemberInfo />
      </div>
    </div>
  );
};

export default MainChatMembers;
