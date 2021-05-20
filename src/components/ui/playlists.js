import React from "react";

import Playlist from "../playlist";
import Spinner from "../ui/spinner";
import ContextApp from "../../context/context.app";

import "../../styles/playlists.css";

const Playlists = () => {
  return (
    <div className="container__playlists">
      <ContextApp.Consumer>
        {({ playlists }) => {
          return playlists.length > 0 ? (
            <React.Fragment>
              {playlists.map((item) => {
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
            <Spinner className="spinner-lg" />
          );
        }}
      </ContextApp.Consumer>
    </div>
  );
};

export default Playlists;
