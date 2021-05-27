import { createContext, useState } from "react";

import ytAPI from "../helpers/ytAPI";
import useDataFromYtAPI from "../hooks/useDataFromYtAPI";
import { responseSchema } from "../hooks/useYoutubeAPI";

export const channelContext = createContext({
  channel: responseSchema,
  setChannel: () => {},
});

const ChannelProvider = (props) => {
  const [channel, setChannel] = useState(responseSchema);
  console.log("@Provider Channel");

  const getChannel = ytAPI.GetChannelInfo();
  const updateChannel = (state) => setChannel(state);
  useDataFromYtAPI(getChannel, channel, updateChannel);

  return (
    <channelContext.Provider
      value={{
        channel: channel,
        setChannel: setChannel,
      }}
    >
      {props.children}
    </channelContext.Provider>
  );
};

export default ChannelProvider;
