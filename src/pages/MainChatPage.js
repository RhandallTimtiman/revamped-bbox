import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ChatBubble,
  ChatHead,
  ChatMenuButton,
  SearchInput,
  OriginDestinationDropDown,
  EmailForm,
  SmsForm,
  UploadFile,
} from "../components/Components";
import firebase from "../firebase/client-app";
import { onSnapshot } from "firebase/firestore";
import { sendChat } from "../service/blackbox-service";
import sendbbx from "../assets/sound/sendbbx.mp3";

let unsubscribe = null;

const MainChatPage = () => {
  let history = useHistory();

  const db = firebase.firestore();

  const [activeChat, setActiveChat] = useState("");

  useEffect(() => {
    const channels = history.location.state.channels;

    setActiveChat(channels[0].header);
  }, [history.location.state]);

  useEffect(() => {
    if (unsubscribe) {
      console.log("Listener Unsubscribed!");
      unsubscribe();
    }

    if (activeChat.length !== 0) {
      unsubscribe = listener();
    }

    return () => {
      if (activeChat.length !== 0) {
        console.log("Use Effect Disposed!");
        unsubscribe();
      }
    };
  }, [activeChat]);

  const listener = () => {
    console.log(`Active Chat ${activeChat}`);
    let sfRef = db
      .collection("BLACKBOX102")
      .doc("conversation")
      .collection("channels")
      .doc(activeChat)
      .collection("message")
      .orderBy("timeStamp", "desc");

    return onSnapshot(sfRef, (snapShot) => {
      let tempArr = [];
      snapShot.docs.forEach((doc) => {
        tempArr.push(doc.data());
      });

      setChatList([...tempArr]);
    });
  };

  const [showMenu, setShowMenu] = useState(false);

  const [bubbleHeadList, setBubbleHeadList] = useState([
    ...history.location.state.channels,
  ]);

  const [buttonList, setButtonList] = useState([
    {
      type: "email",
      icon: (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 24"
        >
          <path
            id="Icon_material-email"
            data-name="Icon material-email"
            d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z"
            transform="translate(-3 -6)"
          />
        </svg>
      ),
      isActive: false,
      form: <EmailForm />,
    },
    {
      type: "sms",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.929"
          height="31.908"
          viewBox="0 0 20.929 31.908"
        >
          <g
            id="Group_8418"
            data-name="Group 8418"
            transform="translate(5556 13469.996)"
          >
            <path
              id="Subtraction_20"
              data-name="Subtraction 20"
              d="M17.91,31.909H3.094a3.525,3.525,0,0,1-2.189-.723A2.188,2.188,0,0,1,0,29.479V2.344C0,1.051,1.388,0,3.094,0H17.919a3.362,3.362,0,0,1,2.39.9,2.01,2.01,0,0,1,.619,1.448V29.479A2.776,2.776,0,0,1,17.91,31.909Zm-7.15-3.446A1.041,1.041,0,1,0,11.8,29.5,1.042,1.042,0,0,0,10.76,28.462ZM1.682,3.632a.169.169,0,0,0-.186.142V27.208a.169.169,0,0,0,.186.142H19.256a.17.17,0,0,0,.187-.142V3.775a.17.17,0,0,0-.187-.142ZM9.067,1.638a.339.339,0,0,0-.373.285.339.339,0,0,0,.373.284h2.8a.339.339,0,0,0,.374-.284.339.339,0,0,0-.374-.285Z"
              transform="translate(-5556 -13469.997)"
              fill="currentColor"
            />
          </g>
        </svg>
      ),
      isActive: false,
      form: <SmsForm />,
    },
    {
      type: "attachments",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g
            id="Icon_feather-upload"
            data-name="Icon feather-upload"
            transform="translate(-3 -3)"
          >
            <path
              id="Path_4407"
              data-name="Path 4407"
              d="M31.5,22.5v6a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3v-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              id="Path_4408"
              data-name="Path 4408"
              d="M25.5,12,18,4.5,10.5,12"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              id="Path_4409"
              data-name="Path 4409"
              d="M18,4.5v18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      ),
      isActive: false,
      form: <UploadFile />,
    },
  ]);

  const [showDropDown, setshowDropDown] = useState(false);

  const [currentActiveMenu, setCurrentActiveMenu] = useState(null);

  const [chatList, setChatList] = useState([]);

  const [message, setMessage] = useState("");

  function goToPreviousPage() {
    history.goBack();
  }

  function selectActiveBubbleHead(index) {
    let currentActiveIndex = bubbleHeadList.findIndex((e) => e.isActive);

    let temp = bubbleHeadList.slice();

    temp[currentActiveIndex].isActive = false;

    temp[index].isActive = true;

    console.log(temp[index]);

    setBubbleHeadList(temp);
    setActiveChat(temp[index].header);
  }

  function selectActiveMenuButton(index) {
    let temp = buttonList.slice();

    let currentStatus = temp[index].isActive;

    temp.forEach((e) => (e.isActive = false));

    temp[index].isActive = !currentStatus;

    setCurrentActiveMenu(index);

    setButtonList(temp);
  }

  function clear() {
    let temp = buttonList.slice();

    temp.forEach((e) => (e.isActive = false));

    setButtonList(temp);
  }

  function gotoMembersPage() {
    history.push(`chat/${1}`);
  }

  const sendMessage = async () => {
    if (message.trim().length === 0) {
      return;
    }

    let payload = {
      topic: history.location.state.topic,
      channel: activeChat,
      senderInfo: {
        memberId: history.location.state.currentUser,
        name: "Rhandall Bakal Bato",
      },
      conversation: {
        message,
      },
      type: "CHAT",
    };

    let result = await sendChat(payload);

    if (result.status === 200) {
      playAudio();
      scrollToBottom();
      console.log("Message Sent!");
      console.log(result.data);
      setMessage("");
    }
  };

  function playAudio() {
    document.getElementById("myAudio").play();
  }

  function scrollToBottom() {
    const bubblehouse = document.getElementById("bubblehouse");
    bubblehouse.scrollTop = bubblehouse.scrollHeight;
  }

  return (
    <div className="min-h-screen min-w-full flex flex-col pt-8">
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
          <p className="text-md">
            Reservation ID{" "}
            {bubbleHeadList.find((bHead) => bHead.isActive).serviceHeader}
          </p>
          <p className="text-xl font-semibold text-secondary cursor-pointer hover:underline">
            LESOL12321312{" "}
            {bubbleHeadList.find((bHead) => bHead.isActive).chatHeader}
          </p>
          <p className="text-xl font-semibold">Jell Freight Forwarder Inc.</p>
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <svg
            onClick={() => setshowDropDown((showDropDown) => !showDropDown)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-secondary cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          {showDropDown && <OriginDestinationDropDown />}
        </div>
      </div>
      <div className="flex flex-row h-36 justify-start w-full bg-gray-100 py-4 gap-2 overflow-x-scroll my-2">
        {bubbleHeadList.map((bHead, index) => {
          return (
            <ChatHead
              key={index}
              header={bHead.header}
              notification={bHead.notification}
              isActive={bHead.isActive}
              index={index}
              onClick={selectActiveBubbleHead}
            />
          );
        })}
      </div>
      <div className="w-full py-2 px-4 mb-2 flex flex-row justify-between items-center gap-4">
        <SearchInput />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => gotoMembersPage()}
          className="h-9 w-9 text-secondary cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      </div>
      <div className="flex-grow h-full w-full overflow-hidden relative">
        <audio id="myAudio">
          <source src={sendbbx} type="audio/mp3" />
        </audio>
        <div
          id="bubblehouse"
          className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto flex flex-col-reverse gap-4 pb-2"
        >
          {/* {chatList.length !== 0 && (
            <>
              {chatList.map((chat) => {
                <ChatBubble isSelf={false} />;
              })}
            </>
          )} */}
          {chatList.length !== 0 &&
            chatList.map((chat) => (
              <ChatBubble
                isSelf={chat.memberId === history.location.state.currentUser}
                {...chat}
                key={chat.timeStamp}
              />
            ))}
          {/* <ChatBubble isSelf={true} />
          <ChatBubble isSelf={false} />
          <ChatBubble isSelf={true} />
          <ChatBubble isSelf={false} />
          <ChatBubble isSelf={false} />
          <ChatBubble isSelf={false} />
          <ChatBubble isSelf={true} />
          <ChatBubble isSelf={false} />
          <FileChatBubble isSelf={false} fileName="meoemwoe.jpeg" />
          <ChatBubble isSelf={true} />
          <FileChatBubble isSelf={true} fileName="meoemwoe.jpeg" />
          <NotificationBubble isAlert={true} hasAttachment={false} />
          <NotificationBubble isAlert={false} hasAttachment={true} /> */}
        </div>
      </div>
      <div className="flex flex-col">
        {buttonList &&
          buttonList.some((e) => e.isActive) &&
          buttonList[currentActiveMenu].form}
        <div
          className={`${
            showMenu ? "max-h-40" : "max-h-0 "
          } bg-gray-100 overflow-hidden transition-all duration-400 ease-in-out relative w-full`}
        >
          <div className="px-4 py-2 border-t w-full flex flex-row gap-4">
            {buttonList &&
              buttonList.map((btn, index) => (
                <ChatMenuButton
                  key={index}
                  icon={btn.icon}
                  index={index}
                  isActive={btn.isActive}
                  onClick={selectActiveMenuButton}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-row p-4 gap-4 align-middle items-center shadow-sm">
          <svg
            onClick={() => {
              if (showMenu) {
                clear();
              }
              setShowMenu((showMenu) => !showMenu);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-secondary cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <textarea
            className="bg-gray-100 rounded-md w-full py-2 pr-4 pl-2 text-gray-700 leading-tight focus:outline-none resize-none"
            type="text"
            value={message}
            placeholder="Type Here"
            onChange={(e) => setMessage(e.target.value)}
          />
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="33.939"
            height="28.386"
            viewBox="0 0 33.939 28.386"
            onClick={() => sendMessage()}
          >
            <path
              id="Icon_material-send"
              data-name="Icon material-send"
              d="M3.016,32.886,36.939,18.693,3.016,4.5,3,15.539l24.242,3.154L3,21.847Z"
              transform="translate(-3 -4.5)"
              fill="#04527f"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainChatPage;
