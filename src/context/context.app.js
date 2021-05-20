import { createContext } from "react";

export const DEFAULT_CONTEXT_APP = {
  selectedVideo: null,
  navBar: false,
  activePlaylist: "PLBnNHPwIxlDUyuQscTzWQgV2FYgmj1O7O",
  toggleNavBar: () => {},
  setSelectedVideo: () => {},
  setActivePage: () => {},
  channel: [],
  playlists: [],
  playlistItems: [],
  addToPlaylistItems: () => {},
};

export default createContext(DEFAULT_CONTEXT_APP);
