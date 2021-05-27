import { useEffect } from "react";

import { responseSchema } from "./useYoutubeAPI";

const useDataFromYtAPI = (data, state, setState) => {
  // console.log("state", state);
  // console.log("data", data);
  useEffect(() => {
    if ((!data.loading && data.results.length > 0) || data.error) {
      if (state.results.length === 0 && !state.error) {
        console.log("useDataFromYtAPI all params passed");
        let response = responseSchema;
        response = { ...data };
        console.log("useDataFromYtAPI  response", response);
        setState(response);
      }
    }
  }, [data, state, setState]);
};

export default useDataFromYtAPI;
