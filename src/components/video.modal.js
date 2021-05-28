import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import TulflixIcon from '../assets/logo/tulflix_logo-icon.png';

import abbreviateNum from '../utils/abbreviateNum';

import Backdrop from './ui/backdrop';
import Spinner from './ui/spinner';
import VideoPlayer from './video.player';

import '../styles/video.modal.css';
import ytAPI from '../helpers/ytAPI';

import { selectVideoContext } from '../context/selectedVideoProvider';

const VideoModal = ({ videoId }) => {
  const [data, setData] = useState({
    id: '',
    title: '',
    imgUrl: '',
    datePublished: new Date(),
    likeCount: '',
    viewCount: '',
    description: '',
  });

  const { setSelectedVideoId } = useContext(selectVideoContext);

  const video = ytAPI.GetVideoInfo(videoId);

  useEffect(() => {
    setSelectedVideoId(videoId);
    return () => {
      setSelectedVideoId(null);
    };
  }, []);

  useEffect(() => {
    if (!video.loading && video.result !== null && video.error === null && data.id === '') {
      setData({
        id: video.results[0].id,
        title: video.results[0].snippet.title,
        imgUrl: video.results[0].snippet.thumbnails.maxres.url,
        datePublished: new Date(video.results[0].snippet.publishedAt),
        likeCount: abbreviateNum(video.results[0].statistics.likeCount),
        viewCount: abbreviateNum(video.results[0].statistics.viewCount),
        description: video.results[0].snippet.description,
      });
    }
  }, [video, data]);

  return (
    <Backdrop onClick={() => {}}>
      <div className="container__video-modal">
        <div className="container__video-modal__close-btn">
          <Link to="/browse">
            <FontAwesomeIcon icon={faTimes} />
          </Link>
        </div>
        <div className="container__video-modal__info">
          <div className="info-img">
            <div className="info-img-overlay">
              <VideoPlayer videoID={data.id} title={data.title} />
            </div>
            <img src={data.imgUrl} alt={data.title} />
          </div>

          {video.loading ? (
            <Spinner className={'spinner-lg'} />
          ) : (
            <div className="info-text">
              <div className="info-text-date">
                <p>{data.datePublished.toDateString()}</p>

                <div className="info-text-statistics statistics-likes">
                  <p>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </p>
                  <p>{data.likeCount}</p>
                </div>

                <div className="info-text-statistics statistics-views">
                  <p>
                    <FontAwesomeIcon icon={faEye} />
                  </p>
                  <p>{data.viewCount}</p>
                </div>
              </div>

              <div className="info-text-t-series">
                <img src={TulflixIcon} alt={TulflixIcon} />
                <h2>SERIES</h2>
              </div>
              <h2>{data.title}</h2>

              <hr className="line__grey" />
              <hr className="line__red" />

              <pre className="info-desc">{data.description}</pre>
            </div>
          )}
        </div>
      </div>
    </Backdrop>
  );
};

export default VideoModal;
