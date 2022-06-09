import React, { useEffect, useState } from 'react'
import './login.css'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

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
    <div className='login-container'>
        <input value= {email} onInput={(e)=>setEmail(e.target.value)} type={"email"} placeholder="enter your mail " />
        <input  value= {password}  onInput={(e)=>setPassword(e.target.value)} type={"password"} placeholder='enter your password '/>
        <button onClick={()=>{setEmail("guest@gmail.com"); setPassword("guestlogin123") }} >login as guest</button>
        <button onClick={(e)=>login(e,email,password)}>login</button>
    </div>
    </>
  )
}
