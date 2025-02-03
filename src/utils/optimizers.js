export const optimizeImage = (src, quality = 80) => {
  if (!src) return "";

  // Check if the image is already in `src/assets/`
  if (src.startsWith("/assets")) {
    return `/assets/images/optimized/${src}?q=${quality}`;
  }

  return new URL(`../assets/images/optimized/${src}`, import.meta.url).href;
};

export const optimizeVideo = (src) => {
  if (!src) return "";

  if (src.startsWith("/assets")) {
    return `/assets/videos/${src}`;
  }

  return new URL(`../assets/videos/${src}`, import.meta.url).href;
};
