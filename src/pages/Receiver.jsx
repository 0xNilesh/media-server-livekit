import React, { useState } from 'react';
import { LiveKitRoom, ConnectionState, RoomName, RoomAudioRenderer, StartAudio } from '@livekit/components-react';
import { getToken } from '../services';

const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

export const Receiver = ({ room }) => {
  const [token, setToken] = useState(null);  

  const fetchToken = async () => {
    const token = await getToken({ userType: "receiver" });
    setToken(token);
  }

  return (
    <div>
      <h2>Receiver Page</h2>
      {!token && 
        <button onClick={fetchToken}>Connect</button>
      }
      {/* Add your Receiver-specific content here */}
      {token && 
        <LiveKitRoom
            serverUrl={serverUrl}
            token={token}
            room={room}
        >
            <ConnectionState />
            <RoomName />
            <RoomAudioRenderer />
            <StartAudio label="Click to allow audio playback" />
        </LiveKitRoom>
      }  
    </div>
  );
}
