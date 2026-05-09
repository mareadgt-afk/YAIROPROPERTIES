export function normalizeListing(record, context = {}) {
  const price = Number(record.ListPrice || record.price || record.listPrice || 0);
  const media = record.Media || record.media || record.images || [];

  return {
    id: String(record.ListingId || record.id || record.mlsId),
    slug: slugify(record.UnparsedAddress || record.address || record.title || record.ListingId),
    mlsId: record.ListingId || record.mlsId || null,
    source: context.source || "unknown",
    status: record.StandardStatus || record.status || "Active",
    title: record.PropertyName || record.title || record.UnparsedAddress || "Private Residence",
    address: record.UnparsedAddress || record.address || "",
    city: record.City || record.city || "",
    neighborhood: record.SubdivisionName || record.neighborhood || "",
    price,
    displayPrice: price ? formatDisplayPrice(price) : "Upon Request",
    beds: Number(record.BedroomsTotal || record.beds || 0),
    baths: Number(record.BathroomsTotalInteger || record.baths || 0),
    sqft: Number(record.LivingArea || record.sqft || 0),
    waterfront: Boolean(record.WaterfrontYN || record.waterfront),
    media: media.map((item) => item.MediaURL || item.url || item).filter(Boolean),
    raw: record,
  };
}

export function slugify(value) {
  return String(value || "listing")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDisplayPrice(value) {
  if (value >= 1000000) return `$${Number((value / 1000000).toFixed(value >= 10000000 ? 0 : 1))}M`;
  return `$${Math.round(value / 1000)}K`;
}
