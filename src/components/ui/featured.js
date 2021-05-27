import React, { useContext } from "react";

import Spinner from "../ui/spinner";

import "../../styles/featured.css";

import VideoPlayer from "../video.player";

import { channelContext } from "../../context/channelProvider";
import { channelActivitiesContext } from "../../context/channelActivitiesProvider";

const Featured = () => {
  const { channel } = useContext(channelContext);
  const { channelActivities } = useContext(channelActivitiesContext);

  const showVideo =
    !channelActivities.loading && channelActivities.results.length > 0;

  return (
    <div className="container__featured">
      <React.Fragment>
        {!channel.loading ? (
          showVideo ? (
            <div className="container__featured__video">
              <VideoPlayer
                videoID={
                  channelActivities.results[0].contentDetails.upload.videoId
                }
                title={channelActivities.results[0].snippet.title}
              />
            </div>
          ) : (
            <div className="container__featured__image">
              <img
                src={channel.results[0].snippet.thumbnails.high.url}
                alt={channel.results[0].snippet.customUrl}
              />
            </div>
          )
        ) : (
          <div className="container__featured__loading">
            <Spinner className="spinner-lg" />
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default Featured;
