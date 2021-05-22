import React, { useState, useRef, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import PlaylistItem from './playlist.items';

import ytApi from '../helpers/ytAPI.js';

import '../styles/playlist.css';
import ContextApp from '../context/context.app';

const Playlist = ({ title, playlistId, items = [] }) => {
  const playListItemsRef = useRef(null);
  const contextApp = useContext(ContextApp);
  const [scrolled, setScrolled] = useState(false);
  const [playlistItems, setPlaylistItems] = useState(items);

  const getPlaylistItems = loadPlaylistItems(playlistId, items);

  useEffect(() => {
    if (!getPlaylistItems.loading && playlistItems.length === 0) {
      setPlaylistItems(getPlaylistItems.results);
      // contextApp.addToPlaylistItems([...getPlaylistItems.results]);
    }
  }, [playlistItems, contextApp, items, getPlaylistItems]);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playListItemsRef]);

  const nextPage = (e) => {
    e.preventDefault();
    playListItemsRef.current.scrollTo({
      behavior: 'smooth',
      left: window.innerWidth + playListItemsRef.current.scrollLeft,
    });
  };

  const prevPage = (e) => {
    e.preventDefault();
    playListItemsRef.current.scrollTo({
      behavior: 'smooth',
      left: playListItemsRef.current.scrollLeft - window.innerWidth,
    });
  };

  const onScrollPage = (e) => {
    setScrolled(e.target.scrollLeft > 0);
  };

  const onWindowResize = (e) => {
    //
    //
    //
    //
  };

  let showScrollNext = true;

  try {
    showScrollNext = playListItemsRef.current.scrollWidth > window.innerWidth;
  } catch {
    showScrollNext = true;
  }

  return (
    <div className="container_playlist">
      {scrolled && (
        <button onClick={(e) => prevPage(e)} className="container__playlist__control control-left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      {showScrollNext && (
        <button onClick={(e) => nextPage(e)} className="container__playlist__control control-right">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

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
        ref={playListItemsRef}
        onScroll={(e) => {
          onScrollPage(e);
        }}
      >
        <React.Fragment>
          {playlistItems.map((item, index) => {
            let currentItem;

            /* DONT RENDER PRIVATE AND DELETED VIDEO */
            try {
              currentItem =
                items.length > 0 ? (
                  <PlaylistItem
                    key={item.contentDetails.upload.videoId + index}
                    videoID={item.contentDetails.upload.videoId}
                    imgUrl={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                  />
                ) : (
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

const loadPlaylistItems = (playlistId, items) => {
  if (items.length > 0) {
    return { loading: false, results: items, error: null };
  } else {
    return ytApi.GetPlaylistItems(playlistId);
  }
};

export default Playlist;
