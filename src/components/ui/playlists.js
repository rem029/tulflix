import React from 'react';

import Playlist from '../playlist';
import ContextAPI from '../../context/context.api';

import '../../styles/playlists.css';

const Playlists = () => {
  return (
    <div className="container__playlists">
      <ContextAPI.Consumer>
        {({ playlists }) => {
          return (
            <React.Fragment>
              {playlists.items.map((item) => {
                return <Playlist key={item.id} title={item.snippet.localized.title} playlistId={item.id} />;
              })}
            </React.Fragment>
          );
        }}
      </ContextAPI.Consumer>
    </div>
  );
};

export default Playlists;
