import { listings } from "../data/listings.js";
import { neighborhoods } from "../data/neighborhoods.js";
import { editorials } from "../data/editorial.js";

export async function fetchCMSCollection(collection) {
  if (collection === "listings") return listings;
  if (collection === "neighborhoods") return neighborhoods;
  if (collection === "editorials") return editorials;
  return [];
}

export async function fetchCMSDocument(collection, slug) {
  const records = await fetchCMSCollection(collection);
  return records.find((record) => record.slug === slug) || null;
}
