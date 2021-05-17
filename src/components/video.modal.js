import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlay, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

import ContextApp from '../context/context.app';
import { DEFAULT_CONTEXT_API } from '../context/context.api';

import '../styles/video.modal.css';

const VideoModal = ({ video }) => {
  const data = DEFAULT_CONTEXT_API.videoInfo;
  console.log('video info', data);
  return (
    <ContextApp.Consumer>
      {({ setSelectedVideo }) => {
        return (
          <div className="container__video-modal">
            <div className="container__video-modal__close-btn">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedVideo(null);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="container__video-modal__info">
              <img
                className="info-img"
                src={data.items[0].snippet.thumbnails.medium.url}
                alt={data.items[0].snippet.title}
              />
              <div className="info-text">
                <h2>{data.items[0].snippet.title}</h2>
                <div className="info-text-statistics">
                  <p>{new Date(data.items[0].snippet.publishedAt).toDateString()}</p>

                  <div>
                    <p>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </p>
                    <p>{data.items[0].statistics.likeCount}</p>
                  </div>
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faEye} />
                    </p>
                    <p>{data.items[0].statistics.viewCount}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-desc">{data.items[0].snippet.description}</div>
            <button>
              PLAY <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default VideoModal;
