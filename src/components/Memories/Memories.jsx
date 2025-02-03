import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import sreya from "../../assets/images/sreya.jpeg";
import memory2 from "../../assets/images/subi.png";
import "./Memories.css";

const Memories = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const images = [sreya, memory2];

  return (
    <div className="memories" ref={sectionRef}>
      <h2>Our Beautiful Memories</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Memory"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Memories;
