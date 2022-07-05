import { createContext, useContext, useState } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({children}) =>{
    const [user , setUser] = useState(null);

    const login = async (e,email,password)=> {
        e.preventDefault()

        try{
            const {data} = await axios.post("/api/auth/login", {email,password})

            setUser({id:data.foundUser._id , encodedToken:data.encodedToken, firstName: data.foundUser.firstName, lastName:data.foundUser.lastName, email:data.foundUser.email})
            alert("userloggedin successfully")
        }
        catch(error){
            console.log(error)
        }
        
    }

    const logout = () =>{
        setUser(null)

    }

    const signup = async (e, userData) =>{
        e.preventDefault()
      
        try{
           const {data} =await axios.post("/api/auth/signup", userData)

           
           setUser({id:data.createdUser._id , encodedToken:data.encodedToken, firstName: data.createdUser.firstName, lastName:data.createdUser.lastName, email:data.createdUser.email})
           alert("user signup successfully")
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