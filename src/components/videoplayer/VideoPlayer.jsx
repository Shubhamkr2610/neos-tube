import React, { useEffect } from "react";
import "./videoplayer.css";
import { useParams } from "react-router-dom";
import { useVideoList } from "../../context/videoContext";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { PlayListModal } from "../../components/playlist-modal/PlaylistModal";
import { useLike } from "../../context/likeContext";
import { useAuth } from "../../context/authContext";
import { useWatchLaterVideo } from "../../context/watchLaterContext";
import { useHistory } from "../../context/historyContext";
import { useLibrary } from "../../context/libraryContext";
import { toast } from "react-toastify";

export const VideoPlayer = () => {
  const { videoList } = useVideoList();
  const { videoListId } = useParams();
  const { likeVideo } = useLike();
  const { user } = useAuth();
  const { postWatchLater } = useWatchLaterVideo();
  const { postHistoryVideo } = useHistory();
  const { setDisplayModal } = useLibrary();

  const isVideoCardExist = videoList.find((item) => item._id === videoListId);
  const openModalHandler = () => {
    if (user) {
      setDisplayModal("flex");
    } else {
      toast.warning("You need to login to add to likes.");
    }
  };
  const likeVideoHandler = () => {
    if (user) {
      likeVideo(videoListId, user.encodedToken);
    } else {
      toast.warning("You need to login to add to likes.");
    }
  };
  const watchLaterHandler = () => {
    if (user) {
      postWatchLater(videoListId, user.encodedToken);
    } else {
      toast.warning("You need to login to add to likes.");
    }
  };
  useEffect(() => {
    postHistoryVideo(isVideoCardExist, user?.encodedToken);
  }, [isVideoCardExist]);

  return (
    <>
      <iframe
        src={`https://www.youtube.com/embed/${isVideoCardExist.video}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="youtube-iframe"
      />

      <PlayListModal video={isVideoCardExist} />
      <p className="video-title">{isVideoCardExist.title}</p>
      <div className="channel-logo-container">
        <img
          className="channel-logo"
          src={isVideoCardExist.channel_pic}
          alt="channel logo"
        />
        <div className="channel-name-container">
          <p>{isVideoCardExist.creator}</p>
          <p>{isVideoCardExist.views}</p>
        </div>
      </div>

      <div className="function-button-container">
        <button className="button-container" onClick={likeVideoHandler}>
          <ThumbUpOutlinedIcon />
          <p className="function-button-title">Like</p>
        </button>

        <button className="button-container" onClick={openModalHandler}>
          <PlaylistAddOutlinedIcon />
          <p className="function-button-title">Save to play list</p>
        </button>

        <button className="button-container" onClick={watchLaterHandler}>
          <WatchLaterOutlinedIcon />
          <p className="function-button-title">Watch Later</p>
        </button>
      </div>

      <p className="video-description">{isVideoCardExist.description}</p>
    </>
  );
};
