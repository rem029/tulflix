import React, { useState, useRef, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import PlaylistItem from './playlist.items';

import ytApi from '../helpers/ytAPI.js';

import ContextApp from '../context/context.app';

import '../styles/playlist.css';

const Playlist = ({ title, playlistId, items = [] }) => {
  const playListItemsRef = useRef(null);
  const contextApp = useContext(ContextApp);
  const [scrolled, setScrolled] = useState(false);
  const [playlistItems, setPlaylistItems] = useState(items);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [navButtons, setNavButtons] = useState([]);
  const [numOfNavButtons, setNumOfNavButtons] = useState(0);
  const getPlaylistItems = loadPlaylistItems(playlistId, items);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playListItemsRef]);

  useEffect(() => {
    if (componentLoaded) {
      onWindowResize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentLoaded]);

  useEffect(() => {
    updateNavButtons(numOfNavButtons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numOfNavButtons]);

  useEffect(() => {}, [navButtons]);

  useEffect(() => {
    if (!getPlaylistItems.loading && playlistItems.length === 0) {
      setPlaylistItems(getPlaylistItems.results);
      // contextApp.addToPlaylistItems([...getPlaylistItems.results]);
    }
  }, [playlistItems, contextApp, items, getPlaylistItems]);

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

  const goToPage = (e, index) => {
    e.preventDefault();
    playListItemsRef.current.scrollTo({
      behavior: 'smooth',
      left: window.innerWidth * index,
    });
    // console.log('@GoTo Page SCROLL TO', window.innerWidth * index);
    // console.log('@GoTo Page SCROLL LEFT', playListItemsRef.current.scrollLeft);
    // console.log('@Goto Page SCROLL WIDTH', playListItemsRef.current.scrollWidth);
  };

  const onScrollPage = (e) => setScrolled(e.target.scrollLeft > 0);

  const onLoad = () => setComponentLoaded(true);

  const onWindowResize = () => {
    if (componentLoaded) {
      setNumOfNavButtons(Math.round(playListItemsRef.current.scrollWidth / window.innerWidth));
    }
  };

  const updateNavButtons = (arrayLength = 0) => {
    if (arrayLength === 1) {
      arrayLength = 0;
    }
    // console.log(title, '@UPDATE NAV BUTTONS', arrayLength);
    let index;
    let newArray = [arrayLength];
    if (arrayLength > 0) {
      for (index = 0; index <= arrayLength; index++) {
        const id = index;
        newArray[index] = <button key={'navButton' + id} onClick={(e) => goToPage(e, id)}></button>;
      }
      setNavButtons(newArray);
    }
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

      {<div className="container__playlist-nav-buttons">{navButtons.length > 0 && navButtons.map((nav) => nav)}</div>}

      <div className="container_playlist-title">
        <h2>{title}</h2>
        <div className="container_playlist-title__sub-text">Explore all</div>
        <div className="container_playlist-title__sub-icon">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div
        className={'container_playlist-items ' + (!componentLoaded && ' playlist-loading')}
        id={`#${playlistId}`}
        ref={playListItemsRef}
        onScroll={(e) => {
          onScrollPage(e);
        }}
        onLoad={() => {
          onLoad();
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
