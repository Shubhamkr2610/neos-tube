import React from 'react'
import './videoplayer.css'
import { useParams } from 'react-router-dom'
import { useVideoList } from '../../context/videoContext'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';


export const VideoPlayer = () => {


    const {videoList} = useVideoList()
    const {videoListId} = useParams()

    const isVideoCardExist = videoList.find((item)=>item._id===videoListId)
  return (
      <>
  
        <iframe
                  // width="942" height="530"
                  width="1050px" height="530"
                    src={`https://www.youtube.com/embed/${isVideoCardExist.video}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <p className='video-title' >{isVideoCardExist.title}</p>
                <div className='channel-logo-container'>
                  <img className='channel-logo' src={isVideoCardExist.channel_pic} alt="channel logo" />
                  <div className='channel-name-container'>
                    <p>{isVideoCardExist.creator}</p>
                    <p>{isVideoCardExist.views}</p>
                  </div> 
                </div>
                
                <div className='function-button-container'>
                  <div className='button-container'>
                    <ThumbUpOutlinedIcon />
                    <p>Like</p>
                  </div>

                  <div className='button-container'>
                    <PlaylistAddOutlinedIcon/>
                    <p>Save to play list</p>
                  </div>

                  <div className='button-container'>
                    <WatchLaterOutlinedIcon/>
                    <p>Watch Later</p>
                  </div>
                </div>

                <p>{isVideoCardExist.description}</p>
      </>
  )
}
