import { createContext } from 'react';

import { responseSchema } from '../services/useYoutubeAPI';

export const DEFAULT_CONTEXT_APP = {
  selectedVideo: null,
  navBar: false,
  activePlaylist: '',
  toggleNavBar: () => {},
  setSelectedVideo: () => {},
  setActivePage: () => {},
  channel: { loaded: false, ...responseSchema },
  channelActivities: { loaded: false, ...responseSchema },
  playlists: { loaded: false, ...responseSchema },
  playlistItems: [],
  addToPlaylistItems: () => {},
};

export default createContext(DEFAULT_CONTEXT_APP);
