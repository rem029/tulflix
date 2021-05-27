import { createContext, useState } from "react";

export const selectVideoContext = createContext({
  selectedVideoId: null,
  setSelectedVideoId: () => {},
});

const SelectedVideoProvider = (props) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  return (
    <selectVideoContext.Provider
      value={{
        selectedVideoId: selectedVideoId,
        setSelectedVideoId: setSelectedVideoId,
      }}
    >
      {props.children}
    </selectVideoContext.Provider>
  );
};

export default SelectedVideoProvider;
