import React from "react";
import { Link } from "react-router-dom";
import "./likedvideocard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom'
import { useVideoList } from '../../context/videoContext'
import { useLike } from '../../context/likeContext';
import { useAuth } from '../../context/authContext';

export const LikedVideoCard = ({
  _id,
  thumbnail,
  title,
  creator,
  channel_pic,
  categoryName,
}) => {

  const {videoList} = useVideoList()
  const {videoListId} = useParams()
  const {removelike} = useLike()
  const {user} = useAuth();
  // const isVideoCardExist = videoList.find((item)=>item._id===videoListId)
  return (
    <>
        <div className="liked-video-card">
        <Link to={`/play/${_id}`}>
          <img
            src={thumbnail}
            className="liked-video-card-img"
            alt="video image"
          />
           </Link>
          <div className="liked-video-card-title-container">
            <img
              src={channel_pic}
              className="liked-channel-logo"
              alt="channel logo"
            />
            <div className="liked-video-card-title"> {title}</div>
          </div>
          <button className="delete-card-button" onClick={()=>removelike(_id)}>
            <DeleteIcon/>
          </button>
        </div>
    </>
  );
};
