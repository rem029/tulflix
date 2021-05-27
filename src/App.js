import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.css";

import Header from "./components/ui/header";
import Homepage from "./components/pages/home.page";
import VideoModal from "./components/video.modal";
import ytAPI from "./helpers/ytAPI";

import ContextApp, { DEFAULT_CONTEXT_APP } from "./context/context.app";

function App() {
  const [navBar, setNavBar] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const [channel, setChannel] = useState({
    loaded: false,
    ...DEFAULT_CONTEXT_APP.channel,
  });
  const [channelActivities, setChannelActivities] = useState({
    loaded: false,
    ...DEFAULT_CONTEXT_APP.channelActivities,
  });
  const [playlists, setPlaylists] = useState({
    loaded: false,
    ...DEFAULT_CONTEXT_APP.playlists,
  });
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {}, [channel, channelActivities, playlists]);

  useEffect(() => {}, [playlistItems]);

  const onAddPlaylistItem = (items) =>
    setPlaylistItems((prevState) => [...prevState, ...items]);

  const onToggleNavBar = () => setNavBar((state) => !state);

  const onSelectVideo = (vidId) => setSelectedVideoId(vidId);

  const updateChannel = (state) => setChannel(state);
  const updateChannelActivities = (state) => setChannelActivities(state);
  const updatePlaylists = (state) => setPlaylists(state);

  const getChannel = ytAPI.GetChannelInfo();
  const getPlaylists = ytAPI.GetPlaylists();
  const getChannelActivities = ytAPI.GetChannelActivity();

  useDataFromYtAPI(getChannel, channel, updateChannel);
  useDataFromYtAPI(
    getChannelActivities,
    channelActivities,
    updateChannelActivities
  );
  useDataFromYtAPI(getPlaylists, playlists, updatePlaylists);

  const videoInfo =
    selectedVideoId !== null &&
    ReactDOM.createPortal(
      <VideoModal videoId={selectedVideoId} />,
      document.getElementById("root-video-info")
    );

  return (
    <ContextApp.Provider
      value={{
        ...DEFAULT_CONTEXT_APP,
        selectedVideoId: selectedVideoId,
        setSelectedVideo: onSelectVideo,
        navBar: navBar,
        toggleNavBar: onToggleNavBar,
        channel: channel,
        channelActivities: channelActivities,
        playlists: playlists,
        playlistItems: playlistItems,
        addToPlaylistItems: onAddPlaylistItem,
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
  );
}

const useDataFromYtAPI = (data, state, setState) => {
  useEffect(() => {
    if (!state.loaded) {
      if ((!data.loading && data.results.length > 0) || data.error) {
        setState({
          loaded: true,
          loading: data.loading,
          results: data.results,
          error: data.error,
        });
      }
    }
  }, [data, state, setState]);
};

export default App;
