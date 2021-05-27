import { useContext } from "react";
import "../styles/navbar.link.css";

import { navBarContext } from "../context/navBarProvider";
import { selectVideoContext } from "../context/selectedVideoProvider";

const NavBarLink = ({ playlistId, href, text, isActive }) => {
  const { toggleNavBar } = useContext(navBarContext);
  const { setSelectedVideoId } = useContext(selectVideoContext);

  const navbarLinkStyle = isActive
    ? "navbar-link navbar-link-active"
    : "navbar-link";
  const scrollToView = (e) => {
    e.preventDefault();
    document.getElementById(`#${playlistId}`).scrollIntoView();
  };
  return (
    <li className={navbarLinkStyle}>
      <a
        href={href}
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
};

export default NavBarLink;
