import { useState, useEffect } from 'react';

import DATA_CHANNEL from '../misc/test_data_channel';
import DATA_CHANNELS_ACTIVITY from '../misc/test_data_channels_activity';
import DATA_PLAYLISTS from '../misc/test_data_playlists';
import DATA_PLAYLIST_ITEMS from '../misc/test_data_playlistitems';
import DATA_SEARCH from '../misc/test_data_search';
import DATA_VIDEO from '../misc/test_data.video';

import { type } from './useYoutubeAPI';

const useTestData = (method, url, dataType) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const config = { method: method, url: url };

  const fetchData = () => {
    switch (dataType) {
      case type.channel:
        setResponse(DATA_CHANNEL);
        break;
      case type.channelActivity:
        setResponse(DATA_CHANNELS_ACTIVITY);
        break;
      default:
        setError({ error: 'Error' });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, response, error };
};

export default useTestData;
