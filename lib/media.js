export const videoLoading = {
  hero: {
    preload: "metadata",
    posterStrategy: "eager-poster-lazy-video",
    maxInitialVideos: 1,
  },
  gallery: {
    loading: "lazy",
    decoding: "async",
    sizes: "(max-width: 820px) 100vw, 50vw",
  },
};

export function getResponsiveImageProps({ src, alt, priority = false }) {
  return {
    src,
    alt,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    sizes: priority ? "100vw" : "(max-width: 820px) 92vw, 42vw",
  };
}
