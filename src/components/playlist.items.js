import { useContext, useState } from "react";
import "../styles/playlistitem.css";

import { selectVideoContext } from "../context/selectedVideoProvider";
import Spinner from "./ui/spinner";

const PlaylistItem = ({ videoID, imgUrl }) => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const { setSelectedVideoId } = useContext(selectVideoContext);

  if (!videoID || !imgUrl) {
    return null;
  }

  const onComponentLoad = (e) => {
    setComponentLoaded(true);
  };

  /* {!componentLoaded && <Spinner className="spinner-md" />} */
  return (
    <div className="container__playlistitem">
      <img
        src={imgUrl}
        alt={videoID}
        onClick={(e) => {
          e.preventDefault();
          setSelectedVideoId(videoID);
        }}
        onLoad={(e) => {
          onComponentLoad(e);
        }}
      />
    </div>
  );
};

export default PlaylistItem;
