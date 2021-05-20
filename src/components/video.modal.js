import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPlay,
  faThumbsUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import TulflixIcon from "../assets/logo/tulflix_logo-icon.png";

import ContextApp from "../context/context.app";
import abbreviateNum from "../utils/abbreviateNum";

import Backdrop from "./ui/backdrop";
import Spinner from "./ui/spinner";
import VideoPlayer from "./video.player";

import "../styles/video.modal.css";
import ytAPI from "../helpers/ytAPI";
import { useEffect, useState } from "react";

const VideoModal = ({ videoId }) => {
  const [data, setData] = useState({
    id: "",
    title: "",
    imgUrl: "",
    datePublished: new Date(),
    likeCount: "",
    viewCount: "",
    description: "",
  });

  const video = ytAPI.GetVideoInfo(videoId);

  useEffect(() => {
    if (
      !video.loading &&
      video.result !== null &&
      video.error === null &&
      data.id === ""
    ) {
      setData({
        id: video.result[0].id,
        title: video.result[0].snippet.title,
        imgUrl: video.result[0].snippet.thumbnails.maxres.url,
        datePublished: new Date(video.result[0].snippet.publishedAt),
        likeCount: abbreviateNum(video.result[0].statistics.likeCount),
        viewCount: abbreviateNum(video.result[0].statistics.viewCount),
        description: video.result[0].snippet.description,
      });

      console.log("ytAPI", video.result[0]);
    }
    console.log("video useEffect");
  }, [video, data]);

  console.log("video modal");

  return (
    <ContextApp.Consumer>
      {({ setSelectedVideo }) => {
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
                    <VideoPlayer videoID={data.id} title={data.title} />
                  </div>
                  <img src={data.imgUrl} alt={data.title} />

                  <div className="info-img-controls">
                    <button>
                      <p>PLAY</p>
                      <FontAwesomeIcon icon={faPlay} />
                    </button>
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
                </div>

                {video.loading ? (
                  <Spinner className={"spinner-lg"} />
                ) : (
                  <div className="info-text">
                    <div className="info-text-date">
                      <p>{data.datePublished.toString()}</p>
                    </div>
                    <div className="info-text-t-series">
                      <img src={TulflixIcon} alt={TulflixIcon} />
                      <h2>SERIES</h2>
                    </div>
                    <h2>{data.title}</h2>

                    <pre className="info-desc">{data.description}</pre>
                  </div>
                )}
              </div>
            </div>
          </Backdrop>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default VideoModal;
