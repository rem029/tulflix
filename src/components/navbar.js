import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import NavBarLink from '../components/navbar.link';

import ContextApp from '../context/context.app.js';
import ContextApi from '../context/context.api';

import '../styles/navbar.css';

const NavBar = () => {
  return (
    <ContextApp.Consumer>
      {({ navBar, toggleNavBar, activePlaylist, setSelectedVideoId }) => {
        const navBarStyle = navBar ? 'navbar navbar-open' : 'navbar';
        const navBarArrow = navBar ? 'container__navbar__arrow arrow-up' : 'container__navbar__arrow';
        return (
          <div className="container__navbar">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleNavBar();
                setSelectedVideoId(null);
              }}
            >
              Browse
              <div className={navBarArrow}>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </button>

            <div className={navBarStyle}>
              <em>
                <FontAwesomeIcon icon={faCaretUp} />
              </em>
              <nav>
                <ul>
                  <ContextApi.Consumer>
                    {({ playlists }) => {
                      const list = playlists.items.map((item) => {
                        return (
                          <NavBarLink
                            key={item.id}
                            playlistId={item.id}
                            src="src"
                            text={item.snippet.title}
                            isActive={item.id === activePlaylist}
                          />
                        );
                      });
                      return <React.Fragment>{list}</React.Fragment>;
                    }}
                  </ContextApi.Consumer>
                </ul>
              </nav>
            </div>
          </div>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default NavBar;
