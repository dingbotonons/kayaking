import type { Metadata } from "next";
import { LocationPage, locationMetadata } from "@/components/locations/LocationPage";
import { HOOD_CANAL_PAGE } from "@/src/data/location-pages";

export const metadata: Metadata = locationMetadata(HOOD_CANAL_PAGE);

export default function HoodCanalPage() {
  return <LocationPage page={HOOD_CANAL_PAGE} />;
}
