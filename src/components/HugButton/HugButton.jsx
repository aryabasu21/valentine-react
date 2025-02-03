import React, { useState } from "react";
import { motion } from "framer-motion";
import "./HugButton.css";

const HugButton = () => {
  const [hearts, setHearts] = useState([]);

  const createHeart = () => {
    const id = Date.now();
    const newHeart = {
      id,
      left: `${Math.random() * 80 + 10}%`, // Random position
    };

    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 3000); // Remove heart after animation ends
  };

  return (
    <div className="hug-container">
      <motion.button
        className="hug-button"
        whileTap={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 100 }}
        onClick={createHeart}
      >
        Give Me a Hug 🤗
      </motion.button>

      {/* Animated Hearts */}
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="floating-heart"
          style={{ left: heart.left }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
};

export default HugButton;
