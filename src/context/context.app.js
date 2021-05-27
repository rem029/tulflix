import { createContext } from "react";

import { responseSchema } from "../hooks/useYoutubeAPI";

export const DEFAULT_CONTEXT_APP = {
  selectedVideo: null,
  navBar: false,
  activePlaylist: "",
  manualIds: {
    recentUploads: {
      id: "recentUploads01",
      title: "RECENT UPLOADS",
    },
    allVideos: {
      id: "allVideos02",
      title: "ALL VIDEOS",
    },
  },
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
