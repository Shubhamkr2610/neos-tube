import React from "react";
import { Link } from "react-router-dom";
import { LikedVideoCard } from "../../components/likedvideocard/LikedVideoCard";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useLike } from "../../context/likeContext";
import "./like.css";

export const Like = () => {
  const { getlike , removelike} = useLike();
  return (
    <>
      {getlike.length===0? 
        <div className="empty-like-page-container">
          <div className="empty-like-page-wrapper">
          <p className="empty-like-page-heading">There is no liked video 😢 </p>
          <Link to="/" className="empty-like-page-button"> Explore video </Link>
          </div>
        </div>
        :
        <div className="like-card-container-wrapper">
          <Sidebar/>
          <div className="like-card-container">
          {getlike.map((video) => {
            return (
              <LikedVideoCard
                key={video._id}
                removeVideoCard={removelike}
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
      }
    </>
  );
};
