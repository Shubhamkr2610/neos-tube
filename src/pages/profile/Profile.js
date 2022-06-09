import React from 'react'
import './profile.css'
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'
import { avatar } from '../../asset';

export const Profile = () => {
    const {user , logout} = useAuth();
    const navigate = useNavigate();

    const logoutHandler = () =>{
        logout()
        navigate("/")
    }
  return (
    <>
      <div className='profile-wrapper'>
        <div className='profile-container'>
          <div className='profile-title-container'>
            <Avatar src={avatar} sx={{ width: 60, height: 60 }}/>
            <p className='profile-title'>User  Profile</p>
          </div>
          
            <div className='profile-name-container'>FirstName - {user.firstName}</div>
            <div className='profile-name-container' >LastName - {user.lastName}</div>
            <div className='profile-name-container' >Email: {user.email}</div>
            <button onClick={logoutHandler} className='profile-name-container logout-button' >Logout</button>
        </div>
      </div>
    </>
  )
}
