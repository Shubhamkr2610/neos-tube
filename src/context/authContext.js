import { createContext, useContext, useState } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({children}) =>{
    // {id: "" , enocdedToken: "", firstName: "", lastName: "" , email: ""}
    const [user , setUser] = useState(null);

    const login = async (e,email,password)=> {
        e.preventDefault()
        let userData = JSON.stringify({email,password})
        // console.log(userData)

        try{
            const {data} = await axios.post("/api/auth/login", userData)

            console.log(data)

            


            setUser({id:data.foundUser._id , enocdedToken:data.encodedToken, firstName: data.foundUser.firstName, lastName:data.foundUser.lastName, email:data.foundUser.email})
            alert("userloggedin successfully")
        }
        catch(error){
            console.log(error)
        }
        
    }
    // setUser("shu")
    // console.log(user)
    return(
        <authContext.Provider value={{login, user}} >
            {children}
        </authContext.Provider>


    )


}
const useAuth = () => useContext(authContext)
export {useAuth, AuthProvider }