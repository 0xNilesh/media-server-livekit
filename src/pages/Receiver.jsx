import React, { useState } from 'react';
import { LiveKitRoom, ConnectionState, RoomName, RoomAudioRenderer, StartAudio } from '@livekit/components-react';
import { getToken } from '../services';

const serverUrl = 'wss://spacev2-demo-17wvllxz.livekit.cloud';

export const Receiver = ({ room }) => {
  const [token, setToken] = useState(null);  

  const fetchToken = async () => {
    const token = await getToken({ userType: "receiver" });
    setToken(token.data);
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
