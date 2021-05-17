import { createContext } from 'react';

export const DEFAULT_CONTEXT_APP = {
  selectedVideo: null,
  navBar: false,
  activePlaylist: 'PLBnNHPwIxlDUyuQscTzWQgV2FYgmj1O7O',
  toggleNavBar: () => {},
  setSelectedVideo: () => {},
  setActivePage: () => {},
};

export default createContext(DEFAULT_CONTEXT_APP);
