import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

import LogoFull from '../../assets/logo/tulflix_logo-full.png';

import NavBar from '../navbar';

import ContextAPI from '../../context/context.api';

import abbreviateNumber from '../../utils/abbreviateNum';

import '../../styles/header.css';
import '../../styles/logo.css';

const Header = () => {
  return (
    <header>
      <div className="header__item_left">
        <img className="logo-full" src={LogoFull} alt="tulflix_logo-full.png" />
        <NavBar />
      </div>
      <ContextAPI.Consumer>
        {({ channelInfo }) => (
          <div className="header__item_right">
            <a href="https://www.youtube.com/channel/UCxhygwqQ1ZMoBGQM2yEcNug" target="_blank" rel="noreferrer">
              <em>
                <FontAwesomeIcon icon={faUserFriends} />
              </em>
              <p>{abbreviateNumber(channelInfo.items[0].statistics.subscriberCount)}</p>
            </a>
            <p>Subscribers</p>
          </div>
        )}
      </ContextAPI.Consumer>
    </header>
  );
};

export default Header;
