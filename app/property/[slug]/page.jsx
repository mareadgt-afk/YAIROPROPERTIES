import { PropertyDetailPage } from "../../../src/YairoHero.jsx";
import { getListingBySlug, getListingSlugs } from "../../../lib/listings.js";

export async function generateStaticParams() {
  return getListingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const listing = getListingBySlug(params.slug);

  return {
    title: listing ? `${listing.title} | Yairo Rincon Properties` : "Private Residence | Yairo Rincon Properties",
    description: listing?.description || "Luxury Miami waterfront property presentation.",
  };
}

export default function PropertyRoute() {
  return <PropertyDetailPage />;
}
