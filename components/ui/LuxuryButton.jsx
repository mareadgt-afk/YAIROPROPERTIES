"use client";

import { motion } from "framer-motion";
import { hoverLift } from "../../animations/motionPresets.js";

export function LuxuryButton({ as: Component = "a", className = "", children, ...props }) {
  return (
    <motion.div whileHover={hoverLift} whileTap={{ scale: 0.985 }}>
      <Component className={`luxury-button ${className}`.trim()} {...props}>
        {children}
      </Component>
    </motion.div>
  );
}
