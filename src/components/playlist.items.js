import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/playlistitem.css';

const PlaylistItem = ({ videoID, imgUrl }) => {
  if (!videoID || !imgUrl) {
    return null;
  }

  return (
    <div className="container__playlistitem">
      <Link to={`/browse/${videoID}`}>
        <img src={imgUrl} alt={videoID} />
      </Link>
    </div>
  );
};

export default PlaylistItem;
