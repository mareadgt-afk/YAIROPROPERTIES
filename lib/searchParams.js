export function parseListingSearchParams(searchParams = {}) {
  return {
    mode: searchParams.mode || "buy",
    neighborhood: searchParams.neighborhood || null,
    minPrice: Number(searchParams.minPrice || 0),
    maxPrice: Number(searchParams.maxPrice || 0),
    waterfront: searchParams.waterfront === "true",
    privateListings: searchParams.private === "true",
  };
}

export function filterListings(listings, params) {
  return listings.filter((listing) => {
    if (params.neighborhood && listing.neighborhood !== params.neighborhood) return false;
    if (params.waterfront && !listing.waterfront) return false;
    if (params.minPrice && listing.price < params.minPrice) return false;
    if (params.maxPrice && listing.price > params.maxPrice) return false;
    return true;
  });
}
