import axios from "axios"
import { v4 as uuidv4 } from "uuid";

export const getToken = async ({ userType }) => {
    if (userType !== "sender" && userType !== "receiver") {
      throw new Error("Invalid userType. Use 'sender' or 'receiver'.");
    }

    // generate a unique uuid
    const identity = uuidv4();
  
    // Append userType as a query parameter to the URL
    const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/token?userType=${userType}&userName=${identity}`;
  
    // Send a GET request with the userType parameter
    return await axios.get(url);
};
