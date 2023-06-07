// components/CourseVideo.js

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const CourseVideo = ({ courseId, videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let player;

    const fetchVideoUrl = async () => {
      try {
        // Fetch the video URL for the course from the API route
        const response = await fetch(`/api/courses/${courseId}`);
        const data = await response.json();

        if (response.ok) {
          // Initialize Video.js player with the video URL
          player = videojs(videoRef.current, {}, function () {
            this.src({ src: data.url, type: 'video/mp4' });
          });
        } else {
          console.log('Error fetching video URL:', data.error);
        }
      } catch (error) {
        console.log('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();

    return () => {
      // Cleanup the Video.js player on component unmount
      if (player) {
        player.dispose();
      }
    };
  }, [courseId]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" controls />
    </div>
  );

};

export default CourseVideo;

CourseVideo.auth = true;