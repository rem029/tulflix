import React, { useContext } from "react";
import ReactDOM from "react-dom";

import Featured from "../components/ui/featured";
import Playlists from "../components/ui/playlists";

import VideoModal from "../components/video.modal";

import { selectVideoContext } from "../context/selectedVideoProvider";

import Header from "../components/ui/header";

const BrowsePage = (props) => {
  const { selectedVideoId } = useContext(selectVideoContext);

  const videoInfo =
    selectedVideoId !== null &&
    ReactDOM.createPortal(<VideoModal videoId={selectedVideoId} />, document.getElementById("root-video-info"));
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
