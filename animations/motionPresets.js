export const luxuryEase = [0.16, 1, 0.3, 1];
export const editorialEase = [0.77, 0, 0.175, 1];

export const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.86, ease: luxuryEase },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.72, ease: luxuryEase } },
};

export const hoverLift = {
  y: -4,
  transition: { duration: 0.48, ease: luxuryEase },
};

export const pageTransition = {
  initial: { opacity: 0, filter: "blur(12px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: luxuryEase } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.4, ease: editorialEase } },
};
