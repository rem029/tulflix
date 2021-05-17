import ReactDOM from 'react-dom';

import '../../styles/backdrop.css';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="container__backdrop">{props.children}</div>,
    document.getElementById('root-video-info')
  );
};

export default Backdrop;
