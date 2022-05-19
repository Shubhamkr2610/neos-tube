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
       <HomeOutlinedIcon className='sidebar-icon'  sx={{ fontSize: 35 }} />
       <p className='sidebar-link-name'> Home</p>
       </div>

        <div className='sidebar-button-container'>
        <ExploreOutlinedIcon className='sidebar-icon' sx={{ fontSize: 35 }}/> 
            <p className='sidebar-link-name'>Explore</p>
        </div>
        <div className='sidebar-button-container'>
        <HistoryIcon className='sidebar-icon' sx={{ fontSize: 35 }}/>
            <p className='sidebar-link-name'>History</p>
        </div>
        <div className='sidebar-button-container'>
        <ThumbUpAltOutlinedIcon className='sidebar-icon' sx={{ fontSize: 35 }}/>
            <p className='sidebar-link-name'>Liked Videos</p>
        </div>
        <div className='sidebar-button-container'>
        <WatchLaterOutlinedIcon className='sidebar-icon' sx={{ fontSize: 35 }}/>
            <p className='sidebar-link-name'>Watch Later</p>
        </div>
       
        
   </div>
   



   </>
  )
}
