import React from 'react'
import { Link } from 'react-router-dom'
import './videoCard.css'

export const VideoCard = ({thumbnail, title,chanel_pic  }) => {
  return (
    <>
    <Link to={{}}>
    <div className='video-card'> 
      <img src= { thumbnail } className='video-card-img' />
      <div className='video-card-title-container'>
      <img src={chanel_pic} className='channel-logo'/>
      <div> {title}</div>
    </div>
    </div>
    </Link>
    </>
  )
}
