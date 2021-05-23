import '../styles/playlistitem.css';

import ContextApp from '../context/context.app';

const PlaylistItem = ({ videoID, imgUrl }) => {
  // const [componentLoaded, setComponentLoaded] = useState(false);

  if (!videoID || !imgUrl) {
    return null;
  }

  const onComponentLoad = () => {
    // setComponentLoaded(false);
  };

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
              onLoad={() => {
                onComponentLoad();
              }}
            />
          </div>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default PlaylistItem;
