import React from "react";
import "./playlistmodal.css";
import CloseIcon from "@mui/icons-material/Close";

export const PlayListModal = () => {
  return (
    <>
      <div className="playlist-modal-wrapper">
        <div className="playlist-modal-container">
          <div className="playlist-modal-header-container">
            <p className="modal-text">Save TO : </p>
            <CloseIcon  className="modal-close-button" />
          </div>

          <div className="playlist-modal-name-container">
            <p className="modal-text">PlayList Name: </p>
            <input type="text" className="modal-text-input" placeholder="enter playlist name here"/>
          </div>
          <button className="playlist-create-button">Create Playlist</button>
        </div>
      </div>
    </>
  );
};
