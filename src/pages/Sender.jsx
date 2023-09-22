import { useState } from 'react';
import { Room } from 'livekit-client';
import { AudioConference, LiveKitRoom, ConnectionState, RoomName, RoomAudioRenderer } from '@livekit/components-react';

import { getToken } from '../services';

const serverUrl = 'wss://spacev2-demo-17wvllxz.livekit.cloud';

export const Sender = () => {
  const [token, setToken] = useState(null);
  const [roomKey, setRoomKey] = useState('');

  const fetchToken = async (roomId) => {
    const token = await getToken({ userType: "sender", roomId: roomId });
    setToken(token.data);
  }

  const handleRoomKeyChange = (event) => {
    console.log(event.target.value)
    setRoomKey(event.target.value);
  };

  const handleJoinRoomWithRoomKey = () => {
    fetchToken(roomKey);
  };

  const roomNew = new Room({
    name: roomKey
  });

  return (
    <div>
      <h2>Sender Page</h2>
      <label>Enter Room Key:</label>

      <input
        type="text"
        value={roomKey}
        onChange={handleRoomKeyChange}
      />

      <button onClick={handleJoinRoomWithRoomKey}>Connect</button>

      {token &&
        <LiveKitRoom
          serverUrl={serverUrl}
          token={token}
          room={roomNew}
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
