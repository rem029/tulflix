import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

import LogoFull from "../../assets/logo/tulflix_logo-full.png";

import NavBar from "../navbar";
import Spinner from "../ui/spinner";
import abbreviateNumber from "../../utils/abbreviateNum";

import { channelContext } from "../../context/channelProvider";

import "../../styles/header.css";
import "../../styles/logo.css";

const Header = () => {
  const { channel } = useContext(channelContext);

  const statistics = !channel.loading ? (
    <p>{abbreviateNumber(channel.results[0].statistics.subscriberCount)}</p>
  ) : (
    <Spinner className="spinner-sm" />
  );

  return (
    <header>
      <div className="header__item_left">
        <img className="logo-full" src={LogoFull} alt="tulflix_logo-full.png" />
        <NavBar />
      </div>
      <div className="header__item_right">
        <a
          href="https://www.youtube.com/channel/UCxhygwqQ1ZMoBGQM2yEcNug"
          target="_blank"
          rel="noreferrer"
        >
          <em>
            <FontAwesomeIcon icon={faUserFriends} />
          </em>
          {statistics}
        </a>
        <p>Subscribers</p>
      </div>
    </header>
  );
};

export default Header;
