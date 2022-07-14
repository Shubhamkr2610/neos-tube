import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";
import { useAuth } from "./authContext";
import { useVideoList } from "./videoContext";
import { toast } from 'react-toastify';

const watchLaterContext = createContext();

const WatchProvider= ({children})=>{
    

    const { user } = useAuth();
    const { videoList } = useVideoList();
    // const { videoListId } = useParams();
    const [ getWatchVideo, setGetWatchVideo] = useState([]);
    const fetchWatchLater = async () => {
      try {
        const res = await axios.get("/api/user/watchlater", {
          headers: {
            authorization: user.encodedToken,
          },
        });
        console.log(res.data);
        setGetWatchVideo(res.data.watchlater);
      } catch (error) {
        console.log(error);
      }
    };
  
    const postWatchLater = async (_id, token) => {
      try {
        const isVideoCardExist = videoList.find((item) => item._id === _id);
  
        const res = await axios.post(
          "/api/user/watchlater",
          { video: isVideoCardExist },
          {
            headers: {
              authorization: token,
            },
          }
        );
        // console.log(res.data);
        setGetWatchVideo(res.data.watchlater);
        toast.success("Video Liked successfully")
      } catch (error) {
        console.log(error);
      }
    };




return(
    <watchLaterContext.Provider value={{fetchWatchLater,postWatchLater, getWatchVideo}}>{children}</watchLaterContext.Provider>
)

}
const useWatchLaterVideo = () => useContext(watchLaterContext);
export {useWatchLaterVideo, WatchProvider}

