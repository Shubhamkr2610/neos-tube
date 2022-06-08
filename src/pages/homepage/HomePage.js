import { Chip } from '@mui/material';
import React from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './homepage.css';
import { VideoCard } from '../../components/videocard/VideoCard';
import { useVideoList } from "../../context/videoContext";

export const HomePage = () => {
const {videoList , chipFilter ,allFilterhandler,neogFilterHandler, trendingFilterhandler, evergreenFilterhandler, latestFilterhandler , loveFilterhandler} = useVideoList();

 
  return (
      <>
      <div className='homepage-container'>
        <Sidebar/>
        <div className='video-card-container'>
          <Chip label="All" onClick={allFilterhandler} />
          <Chip label="NeoG-anthem Special" onClick={neogFilterHandler} />
          <Chip label="Trending" onClick={trendingFilterhandler} />
          <Chip label="Evergreen" onClick={evergreenFilterhandler} />
          <Chip label="Latest" onClick={latestFilterhandler} />
          <Chip label="Love" onClick={loveFilterhandler} /> 
          <div className='wrapper'>
          {chipFilter.map((video)=>{
           return <VideoCard key={video._id} _id={video._id} thumbnail={video.thumbnail} title={video.title} channel_pic={video.channel_pic} views={video.views}/>
          })}     
          </div>
    
      </div>
        </div>
     
</>
  )
}
