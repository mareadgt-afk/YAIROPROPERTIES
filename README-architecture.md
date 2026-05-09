# Yairo Rincon Platform Architecture

This project is structured as a Next.js App Router luxury real estate platform.

## Runtime

- `app/` contains route entrypoints for home, listings, and property detail pages.
- `components/` contains reusable UI, listing, property, gallery, map, editorial, and concierge building blocks.
- `data/` is the local content seed layer used before CMS/IDX/MLS integrations are connected.
- `listings/` contains IDX Broker and Bridge API adapters plus normalized listing contracts.
- `maps/` prepares Mapbox styling and luxury place normalization.
- `cms/` defines CMS-ready collections for listings, neighborhoods, and editorial content.
- `animations/` centralizes motion choreography for consistent luxury transitions.
- `hooks/` contains client interaction primitives such as parallax and cursor support.
- `lib/` contains shared listing, media, and search utilities.
- `styles/` is the global design system entrypoint.

## Integration Readiness

- IDX Broker: `listings/idxBrokerAdapter.js`
- Bridge API: `listings/bridgeAdapter.js`
- CMS: `cms/client.js` and `cms/schema.js`
- Mapbox: `maps/mapboxConfig.js`

Production secrets should be exposed through server-side environment variables, with only public Mapbox tokens using `NEXT_PUBLIC_`.
