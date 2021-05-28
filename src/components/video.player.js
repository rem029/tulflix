import { useState } from 'react';
import '../styles/video.player.css';

import Spinner from './ui/spinner';

const VideoPlayer = ({ videoID, title, allowAutoPlay = false }) => {
  const [frameLoaded, setFrameLoaded] = useState(false);

  const onFrameLoad = (e) => {
    setFrameLoaded(true);
  };

  const AutoPlay = allowAutoPlay ? '?autoplay=1&mute=1' : '';

  return (
    <div className="container__videoplayer">
      <iframe
        onLoad={(e) => {
          // console.log(e);
          onFrameLoad(e);
        }}
        className="iframe-responsive"
        src={`https://www.youtube.com/embed/${videoID}${AutoPlay}`}
        allowFullScreen
        title={title}
        allow="autoplay"
      />
      <div className="container__loading">{!frameLoaded && <Spinner className="spinner-lg" />}</div>
    </div>
  );
};

export default VideoPlayer;
