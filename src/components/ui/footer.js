import '../../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="container__footer">
      <p>
        Designed and develop by{' '}
        <a href="https://github.com/rem029" target="_blank" rel="noreferrer">
          rem029
        </a>
      </p>

      <div className="container__footer__icons">
        <a href="https://www.facebook.com/rem029vector/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/rem029vector/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/rem029" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
