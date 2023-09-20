import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <h1>Media Server POC</h1>
        <div className="card">
            {/* Use Link components to navigate to /sender and /receiver */}
            <Link to="/sender">
            <button>Sender</button>
            </Link>
            <Link to="/receiver">
            <button>Receiver</button>
            </Link>
        </div>
    </div>    
  );
}
