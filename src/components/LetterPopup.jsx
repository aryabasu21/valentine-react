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
      // Keep the current time
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
              <span className="highlight">My Dearest Katha,</span> I wasn&apos;t
              searching for you. I wasn&apos;t preparing for you. When you
              entered my life, I didn&apos;t realize it was you because I never
              imagined someone like you existed. You weren&apos;t a plan, a
              hope, or a picture I had in my mind. You were unexpected,
              extraordinary, and everything I didn&apos;t know I needed. You
              became the chapter I didn&apos;t see coming, the one that changed
              my story forever. 💫
            </p>
            <p>
              <span className="highlight">Baby,</span> I honestly don&apos;t
              know what I did to deserve someone as incredible as you. You are
              the highlight of every single day for me—no one has ever made me
              feel this way. ❤️ The connection we have is just so deep, so
              real—I feel like I&apos;ve known you forever, and I can&apos;t get
              enough. You&apos;re on my mind constantly, and no matter what
              I&apos;m doing, I&apos;m counting down until the next time I get
              to talk to you or see you. 🕰️
            </p>
            <p>
              I crave you in every way. I long for your presence, your touch,
              your voice. When you&apos;re not near, the emptiness is
              unbearable. 😔 I&apos;m consumed by thoughts of you, enchanted by
              your essence, addicted to the way you make me feel. 💖 You are my
              desire, my longing, my obsession.
            </p>
            <p>I hope you realize you mean the world to me. 🌎</p>
            <p>
              With all my love,{" "}
              <span className="highlight">Arya (Baje Chele)</span> 💕
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
