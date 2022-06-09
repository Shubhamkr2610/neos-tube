import { Login } from "./pages/loginpage/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { VideoPlayer } from "./components/videoplayer/VideoPlayer";
import { HomePage } from "./pages/homepage/HomePage";
import { PlayVideo } from "./pages/playvideopage/PlayVideo";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<PlayVideo />}>
            <Route path=":videoListId" element={<VideoPlayer />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
