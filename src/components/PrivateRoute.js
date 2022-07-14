import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const PrivateRoute = () => {

    const {user} = useAuth()
  // return (
    // <>
        if(!user)
            return <Navigate to='/login' replace />
        return <Outlet/>
    // </>
  // )
}
