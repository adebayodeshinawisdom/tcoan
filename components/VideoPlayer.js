import React from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


const VideoPlayer = ({ c }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const player = videojs(videoRef.current);
    return () => {
     if(!player || player.isDisposed())
     return player.dispose()
    
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-js vjs-default-skin"
      controls
      preload="auto"
      width="320"
      height="264"
    >
      
      <source src={`images/${c.video}`} type="video/mp4" />
    </video>
  );
};





export default VideoPlayer;