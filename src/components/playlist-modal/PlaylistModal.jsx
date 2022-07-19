import React from "react";
import "./playlistmodal.css";
import CloseIcon from "@mui/icons-material/Close";
import {useLibrary} from '../../context/libraryContext';

export const PlayListModal = (video) => {
  const {displayModal , setDisplayModal} = useLibrary();
  const modelCloseHandler = () => {
    setDisplayModal("none");
  };
  return (
    <>
      <div className="modal-section" style={{display:displayModal}}>

        <div className="playlist-modal-wrapper">

       
        <div className="playlist-modal-container">
          <div className="playlist-modal-header-container">
            <p className="modal-text">Save TO : </p>
            <CloseIcon  className="modal-close-button" onClick={modelCloseHandler}/>
          </div>

          <div className="playlist-modal-name-container">
            <p className="modal-text">PlayList Name: </p>
            <input type="text" className="modal-text-input" placeholder="enter playlist name here"/>
          </div>
          <button className="playlist-create-button">Create Playlist</button>
        </div>
      </div>
      </div>
    </>
  );
};
