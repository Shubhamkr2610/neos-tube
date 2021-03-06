import React from 'react'
import './sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
   <>
    <div className='sidebar-icon-container'>
       
       <div className='sidebar-button-container'>
            <Link to='/' className='flex-wrapper' >
                <HomeOutlinedIcon className='sidebar-icon'  sx={{ fontSize: 35 }} />
                <p className='sidebar-link-name'> Home</p>
            </Link>
       </div>

        <div className='sidebar-button-container'>
            <Link to='/library' className='flex-wrapper'>
                <VideoLibraryIcon className='sidebar-icon' sx={{ fontSize: 35 }}/> 
                <p className='sidebar-link-name'>Library</p>
            </Link>
        </div>

        <div className='sidebar-button-container'>
            <Link to='/history' className='flex-wrapper'>
       
                <HistoryIcon className='sidebar-icon' sx={{ fontSize: 35 }}/>
                <p className='sidebar-link-name'>History</p>
            </Link>
        </div>


        <div className='sidebar-button-container'>
            <Link to='/like' className='flex-wrapper'>
                <ThumbUpAltOutlinedIcon className='sidebar-icon' sx={{ fontSize: 35 }}/>
                <p className='sidebar-link-name'>Liked Videos</p>
            </Link>
        </div>


        <div className='sidebar-button-container'>
            <Link to='/watchlater'  className='flex-wrapper'>
                <WatchLaterOutlinedIcon className='sidebar-icon' sx={{ fontSize: 35 }}/>
                <p className='sidebar-link-name'>Watch Later</p>
            </Link>
        </div>
       
   </div>
   



   </>
  )
}
