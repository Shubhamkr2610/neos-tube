import React from 'react'
import { Outlet } from 'react-router-dom'
import { SuggestionCard } from '../../components/suggestioncard/SuggestionCard'
import { useVideoList } from '../../context/videoContext'
import './playvideo.css'

export const PlayVideo = () => {
  const {videoList} = useVideoList();
  return (
      <>
      <div className='watch-video-container'>

        <div className='watch-iframe'>
          <Outlet/>
        </div>

        <div className='suggestion-card-wrapper'>
          {videoList.map((video)=>{
            return  <SuggestionCard key={video._id} _id={video._id} title={video.title} thumbnail={video.thumbnail} views={video.views} creator ={video.creator} channel_pic={video.channel_pic}/>
          })}
        </div>
      </div>
      </>
  )
}
