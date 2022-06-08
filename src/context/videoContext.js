import React, { createContext, useEffect, useState} from "react";
import { useContext } from "react";

const videoListContext= createContext();

const VideoProvider = ({children}) =>{
    const [ videoList, setVideoList ] = useState([]);
    const [ chipFilter , setChipFilter] = useState(videoList);
    
    useEffect(()=> {
        fetch("api/videos")
        .then(response => response.json())
        .then(data=> setVideoList(data.videos))
        .catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        setChipFilter(videoList)
    }, [videoList])

    const allFilterhandler = ()=>{
        setChipFilter(videoList)
    }
    const neogFilterHandler = ()=>{
        setChipFilter(videoList.filter((item)=>item.categoryName === "neog"))
    }
    const trendingFilterhandler = () =>{
        setChipFilter(videoList.filter((item)=>item.categoryName === "trending"))
    }
    const evergreenFilterhandler = () =>{
        setChipFilter(videoList.filter((item)=>item.categoryName === "evergreen"))
    }
    const latestFilterhandler = () =>{
        setChipFilter(videoList.filter((item)=>item.categoryName === "latest"))
    }
    const loveFilterhandler = () =>{
        setChipFilter(videoList.filter((item)=>item.categoryName === "love"))
    }
    return (
        <videoListContext.Provider value={{videoList , chipFilter , allFilterhandler, neogFilterHandler, trendingFilterhandler, evergreenFilterhandler, latestFilterhandler, loveFilterhandler}}>
            {children}
        </videoListContext.Provider>
    )
}
 
const useVideoList = () => useContext(videoListContext)
export {VideoProvider, useVideoList}