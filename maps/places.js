export const luxuryPlaceTypes = ["marina", "golf", "fine-dining", "shopping", "private-school", "airport"];

export function normalizePlace(place) {
  return {
    id: place.id || `${place.type}-${place.name}`,
    name: place.name,
    type: place.type,
    coordinates: place.coordinates,
    minutes: place.minutes || null,
  };
}
