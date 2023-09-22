import axios from "axios"
import { v4 as uuidv4 } from "uuid";

export const getToken = async ({ userType, roomId }) => {
  console.log("🚀 ~ file: getToken.js:5 ~ getToken ~ roomId:", roomId)
  if (userType !== "sender" && userType !== "receiver") {
    throw new Error("Invalid userType. Use 'sender' or 'receiver'.");
  }

  // generate a unique uuid
  const identity = uuidv4();

  const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/token?userType=${userType}&userName=${identity}&roomId=${roomId}`;

  // Append userType as a query parameter to the URL
  // const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/token?userType=${userType}&userName=${identity}`;
  // const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/token?userType=${userType}&userName=${identity}&roomId=${roomId}`;  // Send a GET request with the userType parameter
  return await axios.get(url);
};