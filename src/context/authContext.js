import { createContext, useContext, useState } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({children}) =>{
    // {id: "" , enocdedToken: "", firstName: "", lastName: "" , email: ""}
    const [user , setUser] = useState(null);

    const login = async (e,email,password)=> {
        e.preventDefault()
        // let userData ={email,password}  
        // console.log(userData)

        try{
            const {data} = await axios.post("/api/auth/login", {email,password})

            console.log(data)

            


            setUser({id:data.foundUser._id , enocdedToken:data.encodedToken, firstName: data.foundUser.firstName, lastName:data.foundUser.lastName, email:data.foundUser.email})
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

           
           setUser({id:data.createdUser._id , enocdedToken:data.encodedToken, firstName: data.createdUser.firstName, lastName:data.createdUser.lastName, email:data.createdUser.email})
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