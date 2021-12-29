import { Link } from "react-router-dom";
import { useState } from "react";

import LogoFull from "../assets/logo/tulflix_logo-full.png";

import "../styles/home.page.css";

const HomePage = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const onImgLoad = () => setImgLoaded(true);

  const imgClass = imgLoaded ? "container__homepage-img img-show" : "container__homepage-img";
  return (
    <div className='container__homepage'>
      <img
        className={imgClass}
        src={LogoFull}
        alt={LogoFull}
        onLoad={() => {
          onImgLoad();
        }}
      />
      <p className='container__homepage-sub-text'>Watch Tulfo and chill</p>
      <Link className='container__homepage-btn' to='/browse/'>
        Start Watching
      </Link>
    </div>
  );
};

export default HomePage;
