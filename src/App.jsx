import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Receiver, Sender } from './pages';

function App() {
  return (
    <Router>
        <Routes>
          {/* Define routes for pages */}
          <Route path="/" element={<Home />} />
          <Route path="/sender" element={<Sender />} />
          <Route path="/receiver" element={<Receiver />} />
        </Routes>
    </Router>
  );
}

export default App;
