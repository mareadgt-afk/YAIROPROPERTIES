"use client";

import { getMapboxToken, mapboxConfig } from "../../maps/mapboxConfig.js";

export function LuxuryMapShell({ children, mode = "light" }) {
  return (
    <div className="luxury-map-shell" data-map-mode={mode} data-mapbox-ready={Boolean(getMapboxToken())}>
      <div className="luxury-map-style" style={{ "--map-accent": mapboxConfig[mode === "dark" ? "luxuryDark" : "luxuryLight"].accent }} />
      {children}
    </div>
  );
}
