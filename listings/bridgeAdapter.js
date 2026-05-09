import { normalizeListing } from "./normalizers.js";

export async function fetchBridgeListings({ endpoint, token, query = {} }) {
  if (!endpoint || !token) return [];

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    next: { revalidate: 180 },
  });

  if (!response.ok) {
    throw new Error(`Bridge API request failed: ${response.status}`);
  }

  const payload = await response.json();
  const records = payload.value || payload.results || [];
  return records.map((record) => normalizeListing(record, { source: "bridge-api", query }));
}
