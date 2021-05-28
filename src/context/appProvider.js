import { createContext } from 'react';

import NavBarProvider from './navBarProvider';
import SelectedVideoProvider from './selectedVideoProvider';
import ChannelProvider from './channelProvider';
import ChannelActivitiesProvider from './channelActivitiesProvider';
import PlaylistsProvider from './playlistsProvider';

const appContext = createContext();

const AppProvider = (props) => {
  return (
    <appContext.Provider value={props}>
      <NavBarProvider>
        <SelectedVideoProvider>
          <ChannelProvider>
            <ChannelActivitiesProvider>
              <PlaylistsProvider>{props.children}</PlaylistsProvider>
            </ChannelActivitiesProvider>
          </ChannelProvider>
        </SelectedVideoProvider>
      </NavBarProvider>
    </appContext.Provider>
  );
};

export default AppProvider;
