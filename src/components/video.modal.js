import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlay, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

import TulflixIcon from '../assets/logo/tulflix_logo-icon.png';

import ContextApp from '../context/context.app';
import { DEFAULT_CONTEXT_API } from '../context/context.api';
import abbreviateNum from '../utils/abbreviateNum';

import Backdrop from './ui/backdrop';

import VideoPlayer from './video.player';

import '../styles/video.modal.css';

const VideoModal = ({ video }) => {
  const data = DEFAULT_CONTEXT_API.videoInfo;
  console.log('video info', data);
  console.log('passedtovideo', video);
  return (
    <ContextApp.Consumer>
      {({ setSelectedVideo, testVideoID }) => {
        return (
          <Backdrop>
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
                <div className="info-img">
                  <div className="info-img-overlay">
                    <VideoPlayer videoID={testVideoID} title={data.items[0].snippet.title} />
                  </div>
                  <img src={data.items[0].snippet.thumbnails.maxres.url} alt={data.items[0].snippet.title} />

                  <div className="info-img-controls">
                    <button>
                      <p>PLAY</p>
                      <FontAwesomeIcon icon={faPlay} />
                    </button>
                    <div className="info-text-statistics statistics-likes">
                      <p>
                        <FontAwesomeIcon icon={faThumbsUp} />
                      </p>
                      <p>{abbreviateNum(data.items[0].statistics.likeCount)}</p>
                    </div>
                    <div className="info-text-statistics statistics-views">
                      <p>
                        <FontAwesomeIcon icon={faEye} />
                      </p>
                      <p>{abbreviateNum(data.items[0].statistics.viewCount)}</p>
                    </div>
                  </div>
                </div>

                <div className="info-text">
                  <div className="info-text-date">
                    <p>{new Date(data.items[0].snippet.publishedAt).toDateString()}</p>
                  </div>
                  <div className="info-text-t-series">
                    <img src={TulflixIcon} alt={TulflixIcon} />
                    <h2>SERIES</h2>
                  </div>
                  <h2>{data.items[0].snippet.title}</h2>
                </div>
              </div>
              <div className="info-desc">{data.items[0].snippet.description}</div>
            </div>
          </Backdrop>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default VideoModal;
