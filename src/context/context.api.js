import { createContext } from 'react';

// DEFAULT DATA
import { DATA_PLAYLIST_ITEMS } from '../misc/test_data_playlistitems';
import { DATA_PLAYLISTS } from '../misc/test_data_playlists.js';
import { DATA_CHANNELS } from '../misc/test_data_channels.js';
import { DATA_VIDEO } from '../misc/test_data.video.js';

export const DEFAULT_CONTEXT_API = {
  channelInfo: DATA_CHANNELS,
  playlists: DATA_PLAYLISTS,
  playlistsItem: DATA_PLAYLIST_ITEMS,
  videoInfo: DATA_VIDEO,
  loading: false,
  channelInfoUpdate: () => {},
  getPlaylists: () => {},
  getPlaylistItems: (playlistId) => {},
  getVideoInfo: (videoId) => DATA_VIDEO,
  setLoading: (isLoading) => {},
};

export default createContext(DEFAULT_CONTEXT_API);
