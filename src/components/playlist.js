import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import PlaylistItem from "./playlist.items";

import ContextAPI from "../context/context.api";
import ytApi from "../helpers/ytAPI.js";

import "../styles/playlist.css";

const Playlist = ({ title, playlistId }) => {
  const playListItemRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [playlistitems, setPlaylistItems] = useState([]);

  const getPlaylistItems = ytApi.GetPlaylistItems(playlistId);

  useEffect(() => {
    if (!getPlaylistItems.loading && playlistitems.length === 0) {
      setPlaylistItems(getPlaylistItems.result);
    }
  }, [playlistitems, getPlaylistItems]);

  const nextPage = (e) => {
    e.preventDefault();
    playListItemRef.current.scrollTo({
      behavior: "smooth",
      left: window.innerWidth + playListItemRef.current.scrollLeft,
    });
    console.log(playListItemRef.current.scrollLeft);
  };

  const prevPage = (e) => {
    e.preventDefault();
    playListItemRef.current.scrollTo({
      behavior: "smooth",
      left: playListItemRef.current.scrollLeft - window.innerWidth,
    });
  };

  const onScrollPage = (e) => {
    console.log(e.target.scrollLeft);
    setScrolled(e.target.scrollLeft > 0);
  };

  return (
    <div className="container_playlist">
      {scrolled && (
        <button
          onClick={(e) => prevPage(e)}
          className="container__playlist__control control-left"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      <button
        onClick={(e) => nextPage(e)}
        className="container__playlist__control control-right"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="container_playlist-title">
        <h2>{title}</h2>
        <div className="container_playlist-title__sub-text">Explore all</div>
        <div className="container_playlist-title__sub-icon">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div
        className="container_playlist-items"
        id={`#${playlistId}`}
        ref={playListItemRef}
        onScroll={(e) => {
          onScrollPage(e);
        }}
      >
        <React.Fragment>
          {playlistitems.map((item, index) => {
            let currentItem;

            /* DONT RENDER PRIVATE AND DELETED VIDEO */
            try {
              currentItem = (
                <PlaylistItem
                  key={item.snippet.resourceId.videoId + index}
                  videoID={item.snippet.resourceId.videoId}
                  imgUrl={item.snippet.thumbnails.medium.url}
                  title={item.snippet.title}
                />
              );
            } catch {
              currentItem = null;
            }

            return currentItem;
          })}
        </React.Fragment>

        <PlaylistItem />
      </div>
    </div>
  );
};

export default Playlist;
