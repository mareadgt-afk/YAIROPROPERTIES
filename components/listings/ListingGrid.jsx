import { PropertyCard } from "../properties/PropertyCard.jsx";

export function ListingGrid({ listings }) {
  return (
    <section className="listing-grid-shell" aria-label="Luxury listings grid">
      {listings.map((listing, index) => (
        <PropertyCard key={listing.id} listing={listing} priority={index === 0} />
      ))}
    </section>
  );
}
