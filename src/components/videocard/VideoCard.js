import React from 'react'
import { Link } from 'react-router-dom'
import './videoCard.css'

export const VideoCard = ({ _id,thumbnail, title,creator,channel_pic,categoryName  }) => {
  return (
    <>
    <Link to={`/play/${_id}`}>
    <div className='video-card'> 
      <img src= { thumbnail } className='video-card-img' alt='video image'/>
      <div className='video-card-title-container'>
      <img src={channel_pic} className='channel-logo' alt='channel logo'/>
      <div className='video-card-title'> {title}</div>
    </div>
    </div>
    </Link>
    </>
  )
}
