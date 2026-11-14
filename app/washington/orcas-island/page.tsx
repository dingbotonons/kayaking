import type { Metadata } from "next";
import { LocationPage, locationMetadata } from "@/components/locations/LocationPage";
import { ORCAS_ISLAND_PAGE } from "@/src/data/location-pages";

export const metadata: Metadata = locationMetadata(ORCAS_ISLAND_PAGE);

export default function OrcasIslandPage() {
  return <LocationPage page={ORCAS_ISLAND_PAGE} />;
}
