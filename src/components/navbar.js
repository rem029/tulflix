import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import NavBarLink from "../components/navbar.link";
import ContextApp from "../context/context.app.js";

import { navBarContext } from "../context/navBarProvider";
import { playlistsContext } from "../context/playlistsProvider";
import { selectVideoContext } from "../context/selectedVideoProvider";

import "../styles/navbar.css";
import Spinner from "./ui/spinner";

const NavBar = () => {
  const { navBar, toggleNavBar, activePlaylist } = useContext(navBarContext);
  const { playlists, manualPlaylists } = useContext(playlistsContext);
  const { setSelectedVideo } = useContext(selectVideoContext);

  const navBarStyle = navBar ? "navbar navbar-open" : "navbar";
  const navBarArrow = navBar
    ? "container__navbar__arrow arrow-up"
    : "container__navbar__arrow";

  /* LOAD PLAYLIST */
  /* MANUAL PLAYLIST */
  const manualList = [
    <NavBarLink
      key={manualPlaylists.recentUploads.id + "navbar"}
      playlistId={manualPlaylists.recentUploads.id}
      href="src"
      text={manualPlaylists.recentUploads.title}
      isActive={manualPlaylists.recentUploads.id === activePlaylist}
    />,
  ];

  /* LOAD PLAYLIST */
  /* YOUTUBE PLAYLIST */
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
          setSelectedVideo();
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
            {manualList}
            {list}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
