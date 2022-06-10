import React from 'react'
import { Link } from 'react-router-dom'
import './suggestioncard.css'

export const SuggestionCard = ({ _id,thumbnail, title,description,creator,views,channel_pic,categoryName  }) => {
  return (
    <>
    <Link to={`/play/${_id}`}>
        <div className='suggestion-card-container' >
            <div className='suggestion-image-container'>
                <img src={thumbnail} alt="video-suggestion" />
            </div>
            <div className='suggestion-card-wrapper'>
                    <p className='suggestion-card-title'>{title}</p>
                    <img className='suggestion-channel-image' src={channel_pic} alt="" />
                <div className='suggestion-card-creator-container'>
                    <p className='suggestion-card-creator'>{creator}</p>
                    <p className='suggestion-card-view'>{views}</p>
                </div>
               
            </div>
            
        </div>
    </Link> 
    </>
  )
}
