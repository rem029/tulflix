import React from 'react';
import ContextApi from '../../context/context.api';

import '../../styles/featured.css';

const Featured = () => {
  return (
    <div className="container__featured">
      <ContextApi.Consumer>
        {(context) => {
          return (
            <div className="container__featured__image">
              <img
                src={context.channelInfo.items[0].snippet.thumbnails.high.url}
                alt={context.channelInfo.items[0].snippet.customUrl}
              />
            </div>
          );
        }}
      </ContextApi.Consumer>
    </div>
  );
};

export default Featured;
