import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import NavBarLink from '../components/navbar.link';

import ContextApp from '../context/context.app.js';

import '../styles/navbar.css';
import Spinner from './ui/spinner';

const NavBar = () => {
  return (
    <ContextApp.Consumer>
      {({ navBar, toggleNavBar, activePlaylist, setSelectedVideo, playlists }) => {
        const navBarStyle = navBar ? 'navbar navbar-open' : 'navbar';
        const navBarArrow = navBar ? 'container__navbar__arrow arrow-up' : 'container__navbar__arrow';

        /* LOAD PLAYLIST */

        const list = !playlists.loading ? (
          playlists.results.map((item) => {
            return (
              <NavBarLink
                key={item.id}
                playlistId={item.id}
                href="src"
                text={item.snippet.title}
                isActive={item.id === activePlaylist}
              />
            );
          })
        ) : (
          <Spinner className="spinner-sm" />
        );

        return (
          <div className="container__navbar">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleNavBar();
                setSelectedVideo(null);
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
                <ul>{list}</ul>
              </nav>
            </div>
          </div>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default NavBar;
