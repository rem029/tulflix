import '../styles/navbar.link.css';

import ContextApp from '../context/context.app';

const NavBarLink = ({ playlistId, href, text, isActive }) => {
  const navbarLinkStyle = isActive ? 'navbar-link navbar-link-active' : 'navbar-link';
  const scrollToView = (e) => {
    e.preventDefault();
    document.getElementById(`#${playlistId}`).scrollIntoView();
  };
  return (
    <ContextApp.Consumer>
      {({ toggleNavBar, setSelectedVideo }) => {
        return (
          <li className={navbarLinkStyle}>
            <a
              href={href}
              onClick={(e) => {
                scrollToView(e);
                setSelectedVideo(null);
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
