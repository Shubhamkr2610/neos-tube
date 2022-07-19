import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const { user } = useAuth();
  const [getHistory, setGetHistory] = useState([]);

  const getVideoHistory = async () => {
    try {
      const res = await axios.get("/api/user/history", {
        headers: {
          authorization: user.encodedToken,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const postHistoryVideo = async (video, token) => {
    try {
      const res = await axios.post(
        "/api/user/history",
        { video: video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setGetHistory(res.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHistoryvideo = async (videoId,token) => {
    try {
      const res = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization:user.encodedToken,
        },
      });
      console.log(res)
      setGetHistory(res.data.history)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllHistoryVideo = async () =>{
    try {
        const res = await axios.delete(`/api/user/history/all` , {
            headers:{
                authorization: user.encodedToken
            }
        })
        setGetHistory(res.data.history)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <HistoryContext.Provider
      value={{ getVideoHistory, postHistoryVideo, deleteHistoryvideo,deleteAllHistoryVideo, getHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);
export { useHistory, HistoryProvider };
