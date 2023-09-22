import { useState } from 'react';
import { LiveKitRoom, ConnectionState, RoomName, RoomAudioRenderer, StartAudio, AudioConference } from '@livekit/components-react';
import { Room } from 'livekit-client';
import { getToken } from '../services';

const serverUrl = 'wss://spacev2-demo-17wvllxz.livekit.cloud';

export const Receiver = () => {
  const [token, setToken] = useState(null);
  const [roomKey, setRoomKey] = useState('');

  const fetchToken = async (roomId) => {
    const token = await getToken({ userType: "receiver", roomId: roomId });
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
      <h2>Receiver Page</h2>
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
          <AudioConference />
          <RoomAudioRenderer />
          <StartAudio label="Click to allow audio playback" />
        </LiveKitRoom>
      }
    </div>
  );
}
