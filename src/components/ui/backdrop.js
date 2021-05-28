import ReactDOM from 'react-dom';

import '../../styles/backdrop.css';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
      className="container__backdrop"
    >
      {props.children}
    </div>,
    document.getElementById('root-video-info')
  );
};

export default Backdrop;
