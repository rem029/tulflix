import { useEffect } from "react";

import { responseSchema } from "./useYoutubeAPI";

const useDataFromYtAPI = (data, state, setState) => {
  useEffect(() => {
    const loaded = state.results.length === 0 && state.loading;
    if (loaded) {
      if ((!data.loading && data.results.length > 0) || data.error) {
        let response = responseSchema;
        response = { ...data };
        setState(response);
      }
    }
  }, [data, state, setState]);
};

export default useDataFromYtAPI;
