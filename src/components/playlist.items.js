import '../styles/playlistitem.css';

import ContextApp from '../context/context.app';

const PlaylistItem = ({ videoID, imgUrl }) => {
  if (!videoID || !imgUrl) {
    return null;
  }
  return (
    <ContextApp.Consumer>
      {({ setSelectedVideo }) => {
        return (
          <div className="container__playlistitem">
            <img
              src={imgUrl}
              alt={videoID}
              onClick={(e) => {
                e.preventDefault();
                setSelectedVideo(videoID);
              }}
            />
          </div>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default PlaylistItem;
