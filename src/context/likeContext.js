import { createContext, useContext } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
import { useVideoList } from "./videoContext";
import { useParams } from "react-router-dom";

const likeContext = createContext();

const LikeProvider = ({ children }) => {
  const { user } = useAuth();
  const { videoList } = useVideoList();
  const { videoListId } = useParams();
 
  const fetchLike = async () => {
    try {
      const res = await axios.get("/api/user/likes", {
        headers: {
          authorizaton: user.encodedToken,
        },
      });
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
            authorizaton: token,
          },
        }
      );
      console.log(res)
    } catch (error) {
      console.log(error);
      
    }

  };

  return (
    <likeContext.Provider value={{ fetchLike, likeVideo }}>
      {children}
    </likeContext.Provider>
  );
};

const useLike = () => useContext(likeContext);
export { useLike, LikeProvider };
