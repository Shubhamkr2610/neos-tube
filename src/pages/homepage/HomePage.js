import { Chip } from '@mui/material'
import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './homepage.css'
import { VideoCard } from '../../components/videocard/VideoCard'
export const HomePage = () => {

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
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
          </div>
       
          
      </div>
        </div>
     
</>
  )
}
