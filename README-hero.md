# Yairo Rincon Luxury Hero

This is a React + Framer Motion fullscreen hero section for the Yairo Rincon luxury realtor brand.

## Files

- `src/YairoHero.jsx`: synchronized four-video hero, transparent navbar, loading animation, CTA, scroll indicator, Framer Motion choreography.
- `src/styles.css`: ultra-luxury black/white/petroleum visual system and responsive behavior.
- `public/videos/`: local copies of the four supplied MP4 assets.
- `package.json`: Vite, React, and Framer Motion dependencies.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Notes

- The four videos are mounted together and started from `currentTime = 0` after metadata is ready, keeping playback synchronized.
- Fade transitions are handled by opacity changes while every video continues looping silently in the background.
- The first video is eager-loaded; the rest use metadata preloading to reduce initial pressure while still preparing the synchronized start.
- The component honors `prefers-reduced-motion`.
