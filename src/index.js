import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./context/videoContext";
import { AuthProvider } from "./context/authContext";
import { LikeProvider } from "./context/likeContext";
import { BrowserRouter } from "react-router-dom";
import { WatchProvider } from "./context/watchLaterContext";
import { HistoryProvider } from "./context/historyContext";
import { LibraryProvider } from "./context/libraryContext";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <LikeProvider>
            <WatchProvider>
              <HistoryProvider>
                <LibraryProvider>
                  <App /> 
                </LibraryProvider>
              </HistoryProvider>
            </WatchProvider>
          </LikeProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
