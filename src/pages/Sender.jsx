import React, { useState } from 'react';
import { AudioConference, LiveKitRoom, ConnectionState, RoomName, RoomAudioRenderer } from '@livekit/components-react';
import { getToken } from '../services';

const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

export const Sender = ({ room }) => {
  const [token, setToken] = useState(null);  

  const fetchToken = async () => {
    const token = await getToken({ userType: "publisher" });
    setToken(token);
  }

  return (
    <div>
      <h2>Sender Page</h2>
      {!token && 
        <button onClick={fetchToken}>Connect</button>
      }
      {/* Add your Sender-specific content here */}
      {token &&
        <LiveKitRoom
            serverUrl={serverUrl}
            token={token}
            room={room}
        >
            <ConnectionState />
            <RoomName />
            {/* <ParticipantName /> */}
            <AudioConference />
            <RoomAudioRenderer />
        </LiveKitRoom>
      }
    </div>
  );
}
