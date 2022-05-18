import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { VideoProvider } from './context/videoContext';

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoProvider>
    <App />
    </VideoProvider>
  </React.StrictMode>
);

