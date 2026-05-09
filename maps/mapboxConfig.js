export const mapboxConfig = {
  style: "mapbox://styles/mapbox/light-v11",
  luxuryLight: {
    water: "#dfe9e4",
    land: "#f8f6f0",
    road: "#d9d5ca",
    accent: "#123832",
  },
  luxuryDark: {
    water: "#10231f",
    land: "#050505",
    road: "#315850",
    accent: "#c8b98d",
  },
};

export function getMapboxToken() {
  return process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
}
