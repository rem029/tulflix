import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.css";

import HomePage from "./pages/home.page";
import NotFoundPage from "./pages/notfound.page";
import BrowsePage from "./pages/browse.page";

import Footer from "./components/ui/footer";
import VideoModal from "./components/video.modal";

function App() {
  return (
    <div className='app'>
      <Router basename={"/"}>
        <Switch>
          <Route
            path={["/browse/:videoId", "/browse"]}
            component={(props) => (
              <React.Fragment>
                {props.match.params.videoId && <VideoModal {...props} videoId={props.match.params.videoId} />}
                <BrowsePage />
              </React.Fragment>
            )}
          />

          <Route path='/browse'>
            <BrowsePage />
          </Route>

          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route component={NotFoundPage} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
