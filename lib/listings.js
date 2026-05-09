import { listingIndex, listings } from "../data/listings.js";

export function getListings() {
  return listings;
}

export function getListingSlugs() {
  return listings.map((listing) => listing.slug);
}

export function getListingBySlug(slug) {
  return listingIndex.get(slug) || listings[0];
}

export function formatPrice(value) {
  if (typeof value === "string") return value;
  if (value >= 1000000) return `$${Number((value / 1000000).toFixed(value >= 10000000 ? 0 : 1))}M`;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
