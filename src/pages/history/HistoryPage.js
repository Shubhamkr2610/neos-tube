import React, { useEffect } from "react";
import "./history.css";
import { LikedVideoCard } from "../../components/likedvideocard/LikedVideoCard";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useHistory } from "../../context/historyContext";
import { Link } from "react-router-dom";

export const History = () => {
  const { getHistory , getVideoHistory,deleteHistoryvideo , deleteAllHistoryVideo} = useHistory();
    useEffect(()=>{
      getVideoHistory()
    },[])

  return (
    <>
      {getHistory.length === 0 ? (
        <div className="empty-like-page-container">
          <div className="empty-like-page-wrapper">
            <p className="empty-like-page-heading">
              There is no video 😢
            </p>
            <Link to="/" className="empty-like-page-button">
              Explore video
            </Link>
          </div>
        </div>
      ) : (
        <div className="history-card-container-wrapper">
          <Sidebar />
          <div className="history-card-removeall-container">
            <button className="remove-all-button" onClick={deleteAllHistoryVideo}>Remove all</button>
            <div className="history-card-container">
              {getHistory.map((video) => {
                return (
                  <LikedVideoCard
                    key={video._id}
                    removeVideoCard={deleteHistoryvideo}
                    _id={video._id}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    channel_pic={video.channel_pic}
                    views={video.views}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
