import { useEffect } from "react";
import gsap from "gsap";

const useAnimation = (target, options) => {
  useEffect(() => {
    gsap.fromTo(
      target,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", ...options }
    );
  }, [target, options]);
};

export default useAnimation;
