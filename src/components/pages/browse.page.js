import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import Featured from '../ui/featured';
import Playlists from '../ui/playlists';

import VideoModal from '../video.modal';

import { selectVideoContext } from '../../context/selectedVideoProvider';

import Header from '../ui/header';

const BrowsePage = (props) => {
  const { selectedVideoId } = useContext(selectVideoContext);

  const videoInfo =
    selectedVideoId !== null &&
    ReactDOM.createPortal(<VideoModal videoId={selectedVideoId} />, document.getElementById('root-video-info'));
  return (
    <React.Fragment>
      <Header />
      <Featured />
      <Playlists />
      {videoInfo}
    </React.Fragment>
  );
};

export default BrowsePage;
