import '../styles/navbar.link.css';

import ContextApp from '../context/context.app';

const NavBarLink = ({ playlistId, src, text, isActive }) => {
  const navbarLinkStyle = isActive ? 'navbar-link navbar-link-active' : 'navbar-link';
  const scrollToView = (e) => {
    e.preventDefault();
    document.getElementById(`#${playlistId}`).scrollIntoView();
  };
  return (
    <ContextApp.Consumer>
      {({ toggleNavBar, setSelectedVideoId }) => {
        return (
          <li className={navbarLinkStyle}>
            <a
              href={src}
              onClick={(e) => {
                scrollToView(e);
                setSelectedVideoId(null);
                toggleNavBar();
              }}
            >
              {text}
            </a>
          </li>
        );
      }}
    </ContextApp.Consumer>
  );
};

export default NavBarLink;
