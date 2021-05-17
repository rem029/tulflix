import ReactDOM from 'react-dom';
import { useContext, useEffect, useState } from 'react';

import './styles/app.css';

import Header from './components/ui/header';

import Homepage from './components/pages/home.page';

import VideoModal from './components/video.modal';

import ContextAPI, { DEFAULT_CONTEXT_API } from './context/context.api';
import ContextApp, { DEFAULT_CONTEXT_APP } from './context/context.app';

function App() {
  const contextApi = useContext(ContextAPI);
  const [navBar, setNavBar] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [testVideoID, setTestVideoID] = useState(null);

  useEffect(() => {
    console.log(DEFAULT_CONTEXT_API);
  }, []);

  const toggleNavBar = () => {
    setNavBar((state) => !state);
  };

  const setSelectedVideobyId = (vidId) => {
    if (vidId === null) {
      setSelectedVideo(null);
    } else {
      setSelectedVideo(contextApi.getVideoInfo(vidId));
      setTestVideoID(vidId);
    }
  };

  const videoInfo =
    selectedVideo !== null &&
    ReactDOM.createPortal(<VideoModal video={selectedVideo} />, document.getElementById('root-video-info'));

  return (
    <ContextAPI.Provider value={DEFAULT_CONTEXT_API}>
      <ContextApp.Provider
        value={{
          ...DEFAULT_CONTEXT_APP,
          selectedVideo: selectedVideo,
          setSelectedVideo: setSelectedVideobyId,
          navBar: navBar,
          toggleNavBar: toggleNavBar,
          testVideoID: testVideoID,
        }}
      >
        <div className="app">
          <Header />
          <Homepage />
        </div>
        {videoInfo}
      </ContextApp.Provider>
    </ContextAPI.Provider>
  );
}

export default App;
