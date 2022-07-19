import { Login } from "./pages/loginpage/Login.js";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { VideoPlayer } from "./components/videoplayer/VideoPlayer";
import { HomePage } from "./pages/homepage/HomePage";
import { PlayVideo } from "./pages/playvideopage/PlayVideo";
import { Profile } from "./pages/profile/Profile.js";
import { Signup } from "./pages/signup/Signup.js";
import { Like } from "./pages/likepage/Like.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { WatchLater } from "./pages/watchlaterpage/WatchLater.js";
import { History } from "./pages/history/HistoryPage.js";

function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<PlayVideo />}>
            <Route path=":videoListId" element={<VideoPlayer />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route element={<PrivateRoute/>}>

            <Route path="/profile" element={<Profile/>}/>
            <Route path="/like" element={<Like/>}/>
            <Route path= "watchlater" element={<WatchLater/>} />
            <Route path="/history" element={<History/>}></Route>

          </Route>
        </Routes>
      </div>
    
    </>
  );
}

export default App;
