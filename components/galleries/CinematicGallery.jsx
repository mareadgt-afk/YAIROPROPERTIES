"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CinematicGallery({ images, title }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="cinematic-gallery">
        {images.map((image) => (
          <button key={image} type="button" onClick={() => setActive(image)}>
            <img src={image} alt={title} loading="lazy" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.button className="gallery-lightbox" type="button" onClick={() => setActive(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <img src={active} alt="" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
