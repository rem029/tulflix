import React from "react";

import Spinner from "../ui/spinner";

import "../../styles/featured.css";

import ContextApp from "../../context/context.app";

const Featured = () => {
  return (
    <div className="container__featured">
      <div className="container__featured__image">
        <ContextApp.Consumer>
          {({ channel }) => {
            return channel.length > 0 ? (
              <img
                src={channel[0].snippet.thumbnails.high.url}
                alt={channel[0].snippet.customUrl}
              />
            ) : (
              <Spinner className="spinner-lg" />
            );
          }}
        </ContextApp.Consumer>
      </div>
    </div>
  );
};

export default Featured;
