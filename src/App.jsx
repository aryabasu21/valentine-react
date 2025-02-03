import { useRef } from "react";
import HugButton from "./components/HugButton/HugButton";
import ParticlesComponent from "./components/Particles/Particles";
import useAnimation from "./hooks/useAnimation";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import LetterPopup from "./components/LetterPopup";
// import loveSong from "./assets/audio/my-love-song.mp3";
import "./App.css";

const App = () => {
  const appRef = useRef(null);
  // const audioRef = useRef(null); // Reference to the audio element
  useAnimation(appRef);

  // useEffect(() => {
  //   const audio = audioRef.current;

  //   // Try to play the audio when the component mounts
  //   audio.play().catch(() => {
  //     // If autoplay fails, listen for a click to play the audio
  //     document.addEventListener(
  //       "click",
  //       () => {
  //         audio.play();
  //       },
  //       { once: true } // This ensures the event listener is removed after the first click
  //     );
  //   });

  //   // Optionally, set initial volume (50% volume)
  //   if (audio) {
  //     audio.volume = 0.2;
  //   }
  // }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <>
      <ParticlesComponent />
      <div className="app" ref={appRef}>
        <h1>Happy Valentine&apos;s Day, Katha ❤️</h1>
        <VideoPlayer />
        <LetterPopup />
        <HugButton />

        {/* Audio element with ref to control the audio */}
        {/* <audio ref={audioRef} id="backgroundMusic" loop>
          <source src={loveSong} type="audio/mp3" />
        </audio> */}
      </div>
    </>
  );
};

export default App;
