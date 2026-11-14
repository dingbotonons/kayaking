import type { Metadata } from "next";
import { LocationPage, locationMetadata } from "@/components/locations/LocationPage";
import { SAN_JUAN_ISLAND_PAGE } from "@/src/data/location-pages";

export const metadata: Metadata = locationMetadata(SAN_JUAN_ISLAND_PAGE);

export default function SanJuanIslandPage() {
  return <LocationPage page={SAN_JUAN_ISLAND_PAGE} />;
}
