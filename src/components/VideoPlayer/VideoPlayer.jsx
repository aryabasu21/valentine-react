import { useRef, useEffect, useState } from "react";
import videoSrc from "../../assets/videos/my-love.mp4";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.setAttribute("preload", "metadata");
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} src={videoSrc} controls />
      <button className="video-btn" onClick={togglePlayPause}>
        {isPlaying ? "Pause ⏸️" : "Play ▶️"}
      </button>
    </div>
  );
};

export default VideoPlayer;
