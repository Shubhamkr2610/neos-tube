import { Chip } from '@mui/material';
import React from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './homepage.css';
import { VideoCard } from '../../components/videocard/VideoCard';
import { useVideoList } from "../../context/videoContext";

export const HomePage = () => {
const {videoList} = useVideoList();

  const handleClick = () =>{

  }
  return (
      <>
      <div className='homepage-container'>
        <Sidebar/>
        <div className='video-card-container'>
          <Chip label="NeoG-anthem Special" onClick={handleClick} />
          <Chip label="Trending" onClick={handleClick} />
          <Chip label="Latest" onClick={handleClick} />
          <Chip label="valentine" onClick={handleClick} />
          <Chip label="Lofi" onClick={handleClick} />
          <div className='wrapper'>
          {videoList.map((video)=>{
           return <VideoCard key={video._id} _id={video._id} thumbnail={video.thumbnail} title={video.title} chanel_pic={video.channel_pic} views={video.views}/>
             })}
               
          </div>
    
      </div>
        </div>
     
</>
  )
}
