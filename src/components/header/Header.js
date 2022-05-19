import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import { brandlogo } from '../../asset';


export const Header = () => {
  return (
    <>

    <div className='header'> 
    <Link to="/" className="brand-title">
      <img  src={brandlogo} className='brand-logo'/>
      <div className="">NeosTube</div>
    </Link>
    <div className='searchbar-container' >
    <input placeholder='search videos '/>

    </div>
 
    <Link to="/login" className='login-button'>
    <PersonIcon/>
    </Link>    

    </div>
    
    </>
  )
}
