import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { useState } from "react";
import { toast } from "react-toastify";

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const { user } = useAuth();
  const [displayModal, setDisplayModal] = useState("none");
  const [createPlayListName, setCreatePlayListName] = useState("");
  const [currentPlayListId , setCurrentPlayListId] = useState("");

  //the below state is for managing library
  const [getVideosLibraryName, setGetVideosLibraryName] = useState([]);
  const [libraryName, setLibraryName] = useState([]);

  //the below state is for managing video in playlist
  const [playListVideo, setPlayListVideo] = useState([]);

  const getLibraryName = async () => {
    try {
      const res = await axios.get("/api/user/playlists", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      setGetVideosLibraryName(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const createLibraryName = async (title) => {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        { playlist: { title: title } },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
      );
      setLibraryName(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLibraryName = async (playlistId) => {
    try {
      const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: user.encodedToken,
        },
      });
      setLibraryName(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayListVideo = async (id) => {
    try {
      const res = await axios.get(`/api/user/playlists/${id}`, {
        headers: {
          authorization: user.encodedToken,
        },
      });
      setPlayListVideo(res.data.playlist.videos);
      setCurrentPlayListId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideoToPlayList = async (id, video) => {
    try {
      const res = await axios.post(
        `/api/user/playlists/${id}`,
        { video },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
      );
      toast.success("Video Added in Playlist");
    } catch (error) {
      console.log(error);
    }
  };

  const removeVideoFromPlayList = async (videoId , playlistId) => {
    console.log( videoId)
    console.log( playlistId)
    try {
      const res = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,{
        headers: {
          authorization: user.encodedToken,
        },
      });
      setLibraryName(res.data.playlists);
      const playlist = res.data.playlists.find((list) => list._id===playlistId)
      setPlayListVideo(playlist.videos);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LibraryContext.Provider
      value={{
        displayModal,
        setDisplayModal,
        createPlayListName,
        setCreatePlayListName,
        getVideosLibraryName,
        libraryName,
        playListVideo,
        getLibraryName,
        createLibraryName,
        deleteLibraryName,
        getPlayListVideo,
        addVideoToPlayList,
        removeVideoFromPlayList,
        currentPlayListId ,
         setCurrentPlayListId,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

const useLibrary = () => useContext(LibraryContext);
export { useLibrary, LibraryProvider };
