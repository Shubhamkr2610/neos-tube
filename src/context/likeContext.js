import { createContext, useContext, useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
import { useVideoList } from "./videoContext";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

const likeContext = createContext();

const LikeProvider = ({ children }) => {
  const { user } = useAuth();
  const { videoList } = useVideoList();
  const { videoListId } = useParams();
  const [getlike, setGetLike] = useState([]);
  const fetchLike = async () => {
    try {
      const res = await axios.get("/api/user/likes", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      setGetLike(res.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const likeVideo = async (_id, token) => {
    try {
      const isVideoCardExist = videoList.find((item) => item._id === _id);

      const res = await axios.post(
        "/api/user/likes",
        { video: isVideoCardExist },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setGetLike(res.data.likes);
      toast.success("Video Liked successfully")
    } catch (error) {
      console.log(error);
    }
  };

  const removelike = async ( videoId) => {
    try {
      const res = await axios.delete(
        `/api/user/likes/${videoId}`,
        {
          headers: {
            authorization:user.encodedToken,
          },
        }
      );
      setGetLike(res.data.likes);
      toast.error("Video Removed From Liked Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <likeContext.Provider value={{ fetchLike, likeVideo, getlike , removelike}}>
      {children}
    </likeContext.Provider>
  );
};

const useLike = () => useContext(likeContext);
export { useLike, LikeProvider };
