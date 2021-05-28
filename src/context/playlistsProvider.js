import { createContext, useState } from 'react';

import ytAPI from '../helpers/ytAPI';
import useDataFromYtAPI from '../hooks/useDataFromYtAPI';
import { responseSchema } from '../hooks/useYoutubeAPI';

export const playlistsContext = createContext({
  playlists: responseSchema,
  setPlaylists: () => {},
  manualPlaylists: {},
});

const PlaylistsProvider = (props) => {
  const [playlists, setPlaylists] = useState(responseSchema);

  const getPlaylists = ytAPI.GetPlaylists();
  const updatePlaylists = (state) => setPlaylists(state);
  useDataFromYtAPI(getPlaylists, playlists, updatePlaylists);

  return (
    <playlistsContext.Provider
      value={{
        playlists: playlists,
        setPlaylists: setPlaylists,
        manualPlaylists: {
          recentUploads: {
            id: 'recentUploads01',
            title: 'RECENT UPLOADS',
          },
          allVideos: {
            id: 'allVideos02',
            title: 'ALL VIDEOS',
          },
        },
      }}
    >
      {props.children}
    </playlistsContext.Provider>
  );
};

export default PlaylistsProvider;
