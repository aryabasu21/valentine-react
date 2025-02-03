import { useEffect } from "react";
import "./Particles.css";

const ParticlesComponent = () => {
  useEffect(() => {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
      const randomTop = Math.random();
      const randomLeft = Math.random();
      heart.style.setProperty("--random-top", randomTop);
      heart.style.setProperty("--random-left", randomLeft);
    });
  }, []);

  return (
    <div className="heart-background">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="heart"></div>
      ))}
    </div>
  );
};

export default ParticlesComponent;
