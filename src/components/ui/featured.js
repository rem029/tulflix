import React from 'react';

import Spinner from '../ui/spinner';

import '../../styles/featured.css';

import ContextApp from '../../context/context.app';
import VideoPlayer from '../video.player';

const Featured = () => {
  return (
    <div className="container__featured">
      <ContextApp.Consumer>
        {({ channel, channelActivities }) => {
          const showVideo = !channelActivities.loading && channelActivities.results.length > 0;
          return (
            <React.Fragment>
              {!channel.loading ? (
                showVideo ? (
                  <div className="container__featured__video">
                    <VideoPlayer
                      videoID={channelActivities.results[0].contentDetails.upload.videoId}
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
          );
        }}
      </ContextApp.Consumer>
    </div>
  );
};

export default Featured;
