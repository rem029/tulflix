import React from 'react';

import Playlist from '../playlist';
import Spinner from '../ui/spinner';
import ContextApp from '../../context/context.app';

import '../../styles/playlists.css';

const Playlists = () => {
  return (
    <ContextApp.Consumer>
      {({ playlists, channelActivities, manualIds }) => {
        return (
          <div className="container__playlists">
            {!channelActivities.loading ? (
              <React.Fragment>
                <Playlist
                  title={manualIds.recentUploads.title}
                  playlistId={manualIds.recentUploads.id}
                  items={channelActivities.results}
                />
              </React.Fragment>
            ) : (
              <div className="container__playlists_loading">
                <Spinner className="spinner-lg" />
              </div>
            )}

            {!playlists.loading ? (
              <React.Fragment>
                {playlists.results.map((item) => {
                  return <Playlist key={item.id} title={item.snippet.localized.title} playlistId={item.id} />;
                })}
              </React.Fragment>
            ) : (
              <div className="container__playlists_loading">
                <Spinner className="spinner-lg" />
              </div>
            )}
          </div>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default Playlists;
