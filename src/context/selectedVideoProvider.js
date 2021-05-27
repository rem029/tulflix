import { createContext, useState } from "react";

export const selectVideoContext = createContext({
  selectedVideo: "",
  setSelectedVideo: () => {},
});

const SelectedVideoProvider = (props) => {
  const [selectedVideo, setSelectedVideo] = useState();

  return (
    <selectVideoContext.Provider
      value={{
        selectedVideo: selectedVideo,
        setSelectedVideo: setSelectedVideo,
      }}
    >
      {props.children}
    </selectVideoContext.Provider>
  );
};

export default SelectedVideoProvider;
