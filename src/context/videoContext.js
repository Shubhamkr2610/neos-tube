import React, { createContext, useEffect, useState} from "react";
import { useContext } from "react";

const videoListContext= createContext();

const VideoProvider = ({children}) =>{
    const [ videoList, setVideoList ] = useState([]);
    
    useEffect(()=> {
        fetch("api/videos")
        .then(response => response.json())
        .then(data=> setVideoList(data.videos))
        .catch((err)=>console.log(err))
    },[])

    return (
        <videoListContext.Provider value={{videoList}}>
            {children}
        </videoListContext.Provider>
    )
}
 
const useVideoList = () => useContext(videoListContext)
export {VideoProvider, useVideoList}