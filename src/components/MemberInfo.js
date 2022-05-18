import React from "react";

const MemberInfo = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <img
        className={`rounded-full shadow-sm border-2 border-gray-300 h-14 w-14`}
        src="https://randomuser.me/api/portraits/women/81.jpg"
        alt="A design"
      />
      <p className="text-sm font-semibold">Rhandall Corp and Friends</p>
    </div>
  );
};

export default MemberInfo;
