import React from 'react'
import { songimg1 } from '../../asset'
import './videocard.css'

export const VideoCard = ({thumbnail, title,chanel_pic, views  }) => {
  return (
    <>
    <div className='video-card'> 
      <img src= { thumbnail } className='video-card-img' />
      <div className='video-card-title-container'>
      <img src={chanel_pic} className='channel-logo'/>
      <div> {title}</div>
    </div>
    </div>
    
    </>
  )
}
