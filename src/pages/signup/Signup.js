import React, { useEffect, useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const Signup = () => {
    const {signup , user} = useAuth()
    const [userdetails, setUserDeatils]= useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        if (user){
            navigate("/profile")
        }
    })

    const firstNameHandler =(e) =>{
        setUserDeatils(prev => ({...prev, firstName: e.target.value}))
    } 
    const lastNameHandler =(e) =>{
        setUserDeatils(prev => ({...prev, lastName: e.target.value}))
    } 
    const emailHandler =(e) =>{
        setUserDeatils(prev => ({...prev, email: e.target.value}))
    } 
    const passwordHandler =(e) =>{
        setUserDeatils(prev => ({...prev, password: e.target.value}))
    } 
    

    return (
    <>
        <div className='signup-wrapper'>
            <div className='signup-container' >
                <p className='signup-title'>Signup</p>
                <input type="text" placeholder='First name' onInput={firstNameHandler} className='signup-input' />

                <input type="text" placeholder='Last name'onInput={lastNameHandler}className='signup-input' />
            
                <input type="email " placeholder="email" onInput={emailHandler} className='signup-input'/>

                <input type="password" placeholder='Password' onInput={passwordHandler}className='signup-input' />

                <button onClick={(e)=>signup(e , userdetails)}className='signup-input button-signup'>signup</button>
                <p>Already have an account ? 👇🏾</p>
                <Link to={"/login"} className='signup-input'>
                    <button className='signup-button button-signup'>Login</button>
                </Link>
            </div>
        </div>
        
    </>
  )
}
