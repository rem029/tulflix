import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.css";

import Header from "./components/ui/header";
import Homepage from "./components/pages/home.page";
import VideoModal from "./components/video.modal";

import { selectVideoContext } from "./context/selectedVideoProvider";

function App() {
  const { selectedVideoId } = useContext(selectVideoContext);

  useEffect(() => {
    console.log("@App Re-render");
  });

  useEffect(() => {
    console.log("@App selectedVideoId", selectedVideoId);
  }, [selectedVideoId]);

  const videoInfo =
    selectedVideoId !== null &&
    ReactDOM.createPortal(
      <VideoModal videoId={selectedVideoId} />,
      document.getElementById("root-video-info")
    );

  return (
    <div className="app">
      <Router basename={"/"}>
        <Header />

        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      {videoInfo}
    </div>
  );
}

export default App;
