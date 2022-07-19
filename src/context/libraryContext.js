import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { useState } from "react";

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
    const [displayModal , setDisplayModal] = useState("none");
    const {user} = useAuth();

    const getPlayList = async () =>{
        try {
            const res = await axios.get("/api/user/playlists", {
                headers:{
                    authorization: user.encodedToken,
                }
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <LibraryContext.Provider value={{displayModal,setDisplayModal,getPlayList}}>{children}</LibraryContext.Provider>
  );
};

const useLibrary = () => useContext(LibraryContext);
export { useLibrary, LibraryProvider };
