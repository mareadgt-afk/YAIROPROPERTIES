"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";

export function useParallax(distance = 80, offset = ["start end", "end start"]) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-distance, distance]);

  return { ref, y, scrollYProgress };
}
