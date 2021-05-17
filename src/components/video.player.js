import '../styles/video.player.css';

const VideoPlayer = ({ videoID, title }) => (
  <div className="container">
    <iframe
      className="iframe-responsive"
      src={`https://www.youtube.com/embed/${videoID}`}
      allowFullScreen
      title={title}
    />
  </div>
);

export default VideoPlayer;
