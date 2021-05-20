import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.css";

import Header from "./components/ui/header";

import Homepage from "./components/pages/home.page";

import VideoModal from "./components/video.modal";

import ContextAPI, { DEFAULT_CONTEXT_API } from "./context/context.api";
import ContextApp, { DEFAULT_CONTEXT_APP } from "./context/context.app";

import ytAPI from "./helpers/ytAPI";

function App() {
  const [navBar, setNavBar] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [channel, setChannel] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [playlistItems, setPlaylistItems] = useState([]);

  const getChannel = ytAPI.GetChannelInfo();
  const getPlaylists = ytAPI.GetPlaylists();

  // Load channel
  useEffect(() => {
    if (
      (!getChannel.loading && getChannel.result && channel.length === 0) ||
      getChannel.error
    ) {
      setChannel(getChannel.result);
      console.log("getChannel", getChannel.result);
    }
  }, [getChannel, channel]);

  // Load playlists
  useEffect(() => {
    if (
      (!getPlaylists.loading &&
        getPlaylists.result &&
        playlists.length === 0) ||
      getPlaylists.error
    ) {
      setPlaylists(getPlaylists.result);
      console.log("getPlaylists", getPlaylists.result);
    }
  }, [getPlaylists, playlists]);

  const toggleNavBar = () => {
    setNavBar((state) => !state);
  };

  const onSelectVideo = (vidId) => {
    if (vidId === null) {
      setSelectedVideoId(null);
    } else {
      setSelectedVideoId(vidId);
    }
  };

  const videoInfo =
    selectedVideoId !== null &&
    ReactDOM.createPortal(
      <VideoModal videoId={selectedVideoId} />,
      document.getElementById("root-video-info")
    );

  return (
    <ContextAPI.Provider value={DEFAULT_CONTEXT_API}>
      <ContextApp.Provider
        value={{
          ...DEFAULT_CONTEXT_APP,
          selectedVideoId: selectedVideoId,
          setSelectedVideo: onSelectVideo,
          navBar: navBar,
          toggleNavBar: toggleNavBar,
          channel: channel,
          playlists: playlists,
        }}
      >
        <div className="app">
          <Router basename={"/"}>
            <Header />

            <Switch>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </Router>
        </div>

        {videoInfo}
      </ContextApp.Provider>
    </ContextAPI.Provider>
  );
}

export default App;
