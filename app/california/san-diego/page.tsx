import type { Metadata } from "next";
import { LocationPage, locationMetadata } from "@/components/locations/LocationPage";
import { SAN_DIEGO_PAGE } from "@/src/data/location-pages";

export const metadata: Metadata = locationMetadata(SAN_DIEGO_PAGE);

export default function SanDiegoPage() {
  return <LocationPage page={SAN_DIEGO_PAGE} />;
}
