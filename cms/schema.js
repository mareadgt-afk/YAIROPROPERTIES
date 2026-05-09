export const cmsCollections = {
  listings: {
    source: "cms.listings",
    previewPath: "/property/:slug",
    fields: [
      "title",
      "slug",
      "status",
      "price",
      "address",
      "city",
      "neighborhood",
      "beds",
      "baths",
      "sqft",
      "waterfront",
      "architecturalStyle",
      "media",
      "narrative",
      "amenities",
    ],
  },
  neighborhoods: {
    source: "cms.neighborhoods",
    previewPath: "/neighborhoods/:slug",
    fields: ["name", "city", "positioning", "coordinates", "insights", "destinations"],
  },
  editorials: {
    source: "cms.editorials",
    previewPath: "/editorial/:slug",
    fields: ["title", "slug", "category", "excerpt", "body", "heroImage"],
  },
};
