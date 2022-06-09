import React, { useEffect, useState } from 'react'
import './login.css'
import { useAuth } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword  ] = useState("")
    const navigate = useNavigate();
    const {login,user} = useAuth();
    useEffect(()=>{
        if (user){
            navigate(-1)
        }
    })
  return (
    <>
    <div className='login-wrapper'>
      <div className='login-container' >

        <p className='login-title'>Login</p>

        <input value= {email} onInput={(e)=>setEmail(e.target.value)} type={"email"} placeholder="enter your mail " className='login-input login-email-input' />

        <input  value= {password}  onInput={(e)=>setPassword(e.target.value)} type={"password"} placeholder='enter your password ' className='login-input'/>

        <button onClick={(e)=>login(e,"guest@gmail.com","guestlogin123") } className='login-input button-login' >Login as guest</button>

        <button onClick={(e)=>login(e,email,password)} className='login-input button-login'>Login</button>
        <p>Donot have account ? 👇🏾</p>
        <Link to={"/signup"} className='login-input'>
        <button className='signup-button button-login'>Signup</button>
        </Link>
      </div>
    </div>
    </>

    // setEmail("guest@gmail.com"); setPassword("guestlogin123");
  )
}
