import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

import LogoFull from '../../assets/logo/tulflix_logo-full.png';

import '../../styles/notFound.page.css';

const NotFoundPage = () => {
  return (
    <div className="container__notfound">
      <img className="container__notfound-img" src={LogoFull} alt={LogoFull} />
      <p className="container__notfound-sub-text">Page Not Found</p>
      <Link className="container__notfound-btn" to="/browse/">
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
