export const listingMedia = {
  northBay: [
    "/videos/optimized/miami-hero-02-poster.jpg",
    "/videos/optimized/miami-hero-04-poster.jpg",
    "/videos/optimized/miami-hero-03-poster.jpg",
    "/videos/optimized/miami-hero-01-poster.jpg",
  ],
};

export const listings = [
  {
    id: "north-bay-estate",
    slug: "north-bay-estate",
    mlsId: "YR-NBR-001",
    source: "curated",
    status: "For Sale",
    title: "North Bay Road Estate",
    address: "5940 North Bay Road",
    city: "Miami Beach",
    neighborhood: "North Bay Road",
    location: "Miami Beach / North Bay Road",
    price: 18900000,
    displayPrice: "$18.9M",
    beds: 7,
    baths: 9,
    sqft: 9420,
    displaySqft: "9,420 SF",
    waterfront: true,
    yearBuilt: 2021,
    parking: "6 Cars",
    hoa: "None",
    architecturalStyle: "Tropical Modern",
    media: listingMedia.northBay,
    heroImage: listingMedia.northBay[0],
    map: { lat: 25.834, lng: -80.135, x: 38, y: 28 },
    description:
      "Waterfront architecture with long bay views, private arrival, and an evening-light composition.",
    narrative:
      "Positioned along one of Miami Beach's most discreet waterfront corridors, this North Bay Road residence is composed around privacy, horizon, and a quiet sequence of indoor-outdoor rooms.",
    amenities: ["Waterfront", "Private Dock", "Gallery Scale", "Motor Court", "Outdoor Kitchen"],
    marketPosition: "Waterfront estate / Private Miami Beach advisory",
  },
];

export const listingIndex = new Map(listings.map((listing) => [listing.slug, listing]));
