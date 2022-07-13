import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const authContext = createContext();

const AuthProvider = ({children}) =>{
    const [user , setUser] = useState(null);

    const login = async (e,email,password)=> {
        e.preventDefault()

        try{
            const {data} = await axios.post("/api/auth/login", {email,password})
            localStorage.setItem(" user ", JSON.stringify({enocdedToken:data.encodedToken, firstName: data.foundUser.firstName, lastName:data.foundUser.lastName, email:data.foundUser.email})
            );
            setUser({id:data.foundUser._id , enocdedToken:data.encodedToken, firstName: data.foundUser.firstName, lastName:data.foundUser.lastName, email:data.foundUser.email})
            toast.success("User Loggedin Successfully")
        }
        catch(error){
            console.log(error)
        }
        
    }

    const logout = () =>{
        setUser(null)
        toast.error("User Loggedout Successfully")

    }

    const signup = async (e, userData) =>{
        e.preventDefault()
      
        try{
           const {data} =await axios.post("/api/auth/signup", userData)

           
           setUser({id:data.createdUser._id , enocdedToken:data.encodedToken, firstName: data.createdUser.firstName, lastName:data.createdUser.lastName, email:data.createdUser.email})
           toast.success("User Signedup Successfully")
        }
        catch(error){
            console.log(error)
        }
        
    }   

    return(
        <authContext.Provider value={{login, user ,logout , signup}} >
            {children}
        </authContext.Provider>
    )
}
const useAuth = () => useContext(authContext)
export {useAuth, AuthProvider }