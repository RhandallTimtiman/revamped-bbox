import axios from "axios";

export const getListOfTopics = ({ memberId, topic }) => {
  return axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/v1/topic/collection`,
    {
      memberId,
      topic,
    }
  );
};

export const getListOfChannels = ({ memberId, topic }) => {
  return axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/v1/channel/collection`,
    {
      memberId,
      topic,
    }
  );
};

export const sendChat = (payload) => {
  return axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/v1/send/message`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
