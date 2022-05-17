import React from 'react'
import './sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export const Sidebar = () => {
  return (
   <>
    <div className='sidebar-icon-container'>
       
       <div className='sidebar-button-container'>
       <HomeOutlinedIcon  sx={{ fontSize: 35 }} />
       <p> Home</p>
       </div>

        <div className='sidebar-button-container'>
        <ExploreOutlinedIcon sx={{ fontSize: 35 }}/> 
            <p>Explore</p>
        </div>
        <div className='sidebar-button-container'>
        <HistoryIcon sx={{ fontSize: 35 }}/>
            <p>History</p>
        </div>
        <div className='sidebar-button-container'>
        <WatchLaterOutlinedIcon sx={{ fontSize: 35 }}/>
            <p>Watch Later</p>
        </div>
        <div className='sidebar-button-container'>
        <ThumbUpAltOutlinedIcon sx={{ fontSize: 35 }}/>
            <p>Liked Videos</p>
        </div>
        
   </div>
   



   </>
  )
}
