import { useState, useRef } from "react";
import { motion } from "framer-motion";
import loveSong from "../assets/audio/my-love-song.mp3"; // Adjust the path if needed
import "./LetterPopup.css";

const LetterPopup = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [volume, setVolume] = useState(0.1); // State to manage volume
  const audioRef = useRef(null); // Reference to the audio element

  // Function to play the audio and show the letter
  const handlePopup = () => {
    setShowLetter(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 20;
      audioRef.current
        .play()
        .then(() => {
          // Set volume only after the audio is ready to play
          audioRef.current.volume = volume; // Set volume to 20% (0.0 to 1.0)
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  // Function to stop the audio when the letter is closed
  const handleClosePopup = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop audio
      audioRef.current.currentTime = 20; // Keep the current time
    }
    setShowLetter(false);
  };

  // Function to handle volume change
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="letter-popup-container">
      <button className="show-letter-btn" onClick={handlePopup}>
        Open My Letter 💌
      </button>

      {showLetter && (
        <motion.div
          className="popup"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="letter-content">
            <h2>To My Beloved</h2>
            <p>
              <span className="highlight">My Dearest Katha,</span> ❤️
            </p>
            <p>
              Before you came into my life, my days felt predictable—just a
              routine, moving from one moment to the next without much meaning.
              I wasn’t unhappy, but something was missing, something I
              couldn&apos;t quite name. Then I met you, and suddenly, everything
              changed. The world became brighter, moments felt deeper, and even
              the smallest things turned into something magical. You brought a
              warmth into my life that I never knew I needed, filling my heart
              in ways I never imagined. ✨
            </p>
            <p>
              I never planned for you. I wasn&apos;t searching for love, yet you
              found me in the most beautiful and unexpected way. And now, I
              can&apos;t imagine a world without you. You are not just another
              part of my story—you are the chapter that redefined it, the one
              that made my life more beautiful than I ever thought possible. 💖
            </p>
            <p>
              I crave you in ways I never knew were possible. I long for your
              presence, your touch, your voice. When you&apos;re not near, it
              feels like something essential is missing, like a part of me is
              incomplete. You are in my thoughts constantly, and no matter where
              I am or what I&apos;m doing, I find myself counting down the
              moments until I can see you again. I am completely and utterly
              yours. 💞
            </p>
            <p>
              You are the light in my darkest days, the love that gives my life
              meaning. With you, everything feels right, and I never want to
              know a world where you are not by my side. I hope you truly
              understand how much you mean to me—because, my love, you are
              everything.
            </p>
            <p>I love you, Katha. ❤️</p>
            <div id="dhanda">
              <p>Dhanda Kharap</p>
              {"😛"}
            </div>
            <p>
              With all my love,{" "}
              <span className="highlight1">Arya(Baje Chele)</span> 💕
            </p>
            <button className="close-btn" onClick={handleClosePopup}>
              Close
            </button>
            <div className="volume-slider">
              <label htmlFor="volume">Volume: </label>
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} id="backgroundMusic" loop>
        <source src={loveSong} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default LetterPopup;
