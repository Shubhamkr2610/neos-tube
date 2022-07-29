import React from "react";
import "./librarypage.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useLibrary } from "../../context/libraryContext";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { LikedVideoCard } from "../../components/likedvideocard/LikedVideoCard";
export const Library = () => {
  const { libraryName, getPlayListVideo, deleteLibraryName, playListVideo,removeVideoFromPlayList ,currentPlayListId } =
    useLibrary();

    console.log(libraryName);
  return (
    <>
      {libraryName.length === 0 ? (
        <div className="empty-like-page-container">
          <div className="empty-like-page-wrapper">
            <p className="empty-like-page-heading">There is no video 😢</p>
            <Link to="/" className="empty-like-page-button">
              Explore video
            </Link>
          </div>
        </div>
      ) : (
        <div className="library-page-container">
          <Sidebar />
          <div className="library-playlist-wrapper">
          <div className="library-playlist-name-container">
            {libraryName?.map((item) => (
              <div
                onClick={() => {
                  getPlayListVideo(item._id);
                }}
                key={item._id}
                className="library-playlist-name"
              >
                {item.title}
                <div
                  onClick={() => {
                    deleteLibraryName(item._id);
                  }}
                  className="library-playlist-delete-button"
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </div>

          <div>
            {playListVideo?.map((video) => (
              <LikedVideoCard
                key={video._id}
                _id={video._id}
                removeVideoCard={removeVideoFromPlayList}
                currentPlayListId={currentPlayListId}
                thumbnail={video.thumbnail}
                title={video.title}
                channel_pic={video.channel_pic}
                views={video.views}
              />
            ))}
          </div>
          </div>
         
        </div>
      )}
    </>
  );
};
