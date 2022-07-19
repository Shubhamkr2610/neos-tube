import React, {useEffect} from 'react'
import './videoplayer.css'
import { useParams } from 'react-router-dom'
import { useVideoList } from '../../context/videoContext'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { useLike } from '../../context/likeContext';
import { useAuth } from '../../context/authContext';
import { useWatchLaterVideo } from '../../context/watchLaterContext';
import { useHistory } from '../../context/historyContext';


export const VideoPlayer = () => {
    const {videoList} = useVideoList()
    const {videoListId} = useParams()
    const {likeVideo} = useLike() 
    const {user} = useAuth();
    const {postWatchLater} = useWatchLaterVideo()
    const {postHistoryVideo} = useHistory()
    const isVideoCardExist = videoList.find((item)=>item._id===videoListId)

    
  useEffect(()=>{
    postHistoryVideo(isVideoCardExist, user.encodedToken)
   },[isVideoCardExist])

  return (
      <>
  
        <iframe
                    src={`https://www.youtube.com/embed/${isVideoCardExist.video}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className='youtube-iframe'
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
                  <button className='button-container' onClick={()=>likeVideo(videoListId, user.encodedToken)}>
                    <ThumbUpOutlinedIcon />
                    <p  className='function-button-title'>Like</p>
                  </button>

                  <button className='button-container'>
                    <PlaylistAddOutlinedIcon/>
                    <p className='function-button-title'>Save to play list</p>
                  </button>

                  <button className='button-container'  onClick={()=>postWatchLater(videoListId, user.encodedToken)}>
                    <WatchLaterOutlinedIcon/>
                    <p className='function-button-title'>Watch Later</p>
                  </button>
                </div>

                <p className='video-description'>{isVideoCardExist.description}</p>
      </>
  )
}
