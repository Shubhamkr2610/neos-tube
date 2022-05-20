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
            <div className='wrapper'>
               
                    <p>{title}</p>
                    <img className='suggestion-channel-image' src={channel_pic} alt="" />
                <div>
                    <p>{creator}</p>
                    <p>{views}</p>
                </div>
               
            </div>
            
        </div>
    </Link> 
    </>
  )
}
