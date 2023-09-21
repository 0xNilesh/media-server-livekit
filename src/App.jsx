import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Receiver, Sender } from './pages';
import { Room } from 'livekit-client';

function App() {
  const room = new Room({
    name: "spacev2-demo"
  });

  console.log(room);

  return (
    <Router>
        <Routes>
          {/* Define routes for pages */}
          <Route path="/" element={<Home />} />
          <Route path="/sender" element={<Sender />} />
          <Route path="/receiver" element={<Receiver room={room} />} />
        </Routes>
    </Router>
  );
}

export default App;
