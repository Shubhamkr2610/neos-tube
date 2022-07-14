import React from 'react'
import { Link } from 'react-router-dom';
import { LikedVideoCard } from '../../components/likedvideocard/LikedVideoCard';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { useWatchLaterVideo } from '../../context/watchLaterContext';

export const WatchLater = () => {
    const {getWatchVideo} = useWatchLaterVideo();

  return (
    <>
    {getWatchVideo.length===0? 
        <div className="empty-like-page-container">
          <div className="empty-like-page-wrapper">
          <p className="empty-like-page-heading">There is no video in Watch Later 😢 </p>
          <Link to="/" className="empty-like-page-button"> Explore video </Link>
          </div>
        </div>
        :
        <div className="like-card-container-wrapper">
          <Sidebar/>
          <div className="like-card-container">
          {getWatchVideo.map((video) => {
            return (
              <LikedVideoCard
                key={video._id}
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
  )
}
