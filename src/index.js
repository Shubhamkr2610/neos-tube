import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./context/videoContext";
import { AuthProvider } from "./context/authContext";
import { LikeProvider } from "./context/likeContext";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideoProvider>
      <AuthProvider>
        <LikeProvider>
          <App />
        </LikeProvider>
      </AuthProvider>
    </VideoProvider>
  </React.StrictMode>
);
