import React from 'react';
import './librarypage.css';
import { PlayListModal } from '../../components/playlist-modal/PlaylistModal';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const Library = () => {
  return (
    <>
    <div className='library-page-container'>
    <Sidebar/>
    <PlayListModal/>
    </div>
    
    </>
    
  )
}
