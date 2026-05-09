"use client";

import { motion } from "framer-motion";
import { reveal } from "../../animations/motionPresets.js";

export function MotionReveal({ as = "div", children, className = "", delay = 0 }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
