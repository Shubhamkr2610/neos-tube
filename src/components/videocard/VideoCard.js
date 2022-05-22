import React from 'react'
import { Link } from 'react-router-dom'
import './videocard.css'

export const VideoCard = ({ _id,thumbnail, title,description,creator,views,channel_pic,categoryName  }) => {
  return (
    <>
    <Link to={`/play/${_id}`}>
    <div className='video-card'> 
      <img src= { thumbnail } className='video-card-img' />
      <div className='video-card-title-container'>
      <img src={channel_pic} className='channel-logo'/>
      <div> {title}</div>
    </div>
    </div>
    </Link>
    </>
  )
}
