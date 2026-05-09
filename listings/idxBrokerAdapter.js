import { normalizeListing } from "./normalizers.js";

export async function fetchIDXBrokerListings({ endpoint, apiKey, query = {} }) {
  if (!endpoint || !apiKey) return [];

  const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      accesskey: apiKey,
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`IDX Broker request failed: ${response.status}`);
  }

  const payload = await response.json();
  const records = Array.isArray(payload) ? payload : payload.results || [];
  return records.map((record) => normalizeListing(record, { source: "idx-broker", query }));
}
