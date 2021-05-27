import React, { useContext } from "react";

import Playlist from "../playlist";
import Spinner from "../ui/spinner";

import { playlistsContext } from "../../context/playlistsProvider";
import { channelActivitiesContext } from "../../context/channelActivitiesProvider";

import "../../styles/playlists.css";

const Playlists = () => {
  const { playlists, manualPlaylists } = useContext(playlistsContext);
  const { channelActivities } = useContext(channelActivitiesContext);

  return (
    <div className="container__playlists">
      {!channelActivities.loading && channelActivities.results.length > 0 ? (
        <React.Fragment>
          <Playlist
            title={manualPlaylists.recentUploads.title}
            playlistId={manualPlaylists.recentUploads.id}
            items={channelActivities.results}
          />
        </React.Fragment>
      ) : (
        <div className="container__playlists_loading">
          <Spinner className="spinner-lg" />
        </div>
      )}

      {!playlists.loading && playlists.results.length > 0 ? (
        <React.Fragment>
          {playlists.results.map((item) => {
            return (
              <Playlist
                key={item.id}
                title={item.snippet.localized.title}
                playlistId={item.id}
              />
            );
          })}
        </React.Fragment>
      ) : (
        <div className="container__playlists_loading">
          <Spinner className="spinner-lg" />
        </div>
      )}
    </div>
  );
};

export default Playlists;
