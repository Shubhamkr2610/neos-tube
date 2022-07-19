import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
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
    <LibraryContext.Provider value={{getPlayList}}>{children}</LibraryContext.Provider>
  );
};

const useLibrary = () => useContext(LibraryContext);
export default { useLibraryProvider, LibraryProvider };
