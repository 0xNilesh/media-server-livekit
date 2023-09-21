import axios from "axios"

export const getToken = async ({ userType }) => {
    if (userType !== "sender" && userType !== "receiver") {
      throw new Error("Invalid userType. Use 'sender' or 'receiver'.");
    }
  
    // Append userType as a query parameter to the URL
    const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}token?userType=${userType}`;
  
    // Send a GET request with the userType parameter
    return await axios.get(url);
};
