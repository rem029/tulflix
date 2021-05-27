import { createContext, useState } from "react";

import ytAPI from "../helpers/ytAPI";
import useDataFromYtAPI from "../hooks/useDataFromYtAPI";
import { responseSchema } from "../hooks/useYoutubeAPI";

export const channelActivitiesContext = createContext({
  channelActivities: responseSchema,
  setChannelActivities: () => {},
});

const ChannelActivitiesProvider = (props) => {
  const [channelActivities, setChannelActivities] = useState(responseSchema);
  console.log("@Provider Channel Act");

  const getChannelActivities = ytAPI.GetChannelActivity();
  const updateChannelActivities = (state) => setChannelActivities(state);
  useDataFromYtAPI(
    getChannelActivities,
    channelActivities,
    updateChannelActivities
  );
  return (
    <channelActivitiesContext.Provider
      value={{
        channelActivities: channelActivities,
        setChannelActivities: setChannelActivities,
      }}
    >
      {props.children}
    </channelActivitiesContext.Provider>
  );
};

export default ChannelActivitiesProvider;
