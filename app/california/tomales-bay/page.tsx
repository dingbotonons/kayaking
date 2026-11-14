import type { Metadata } from "next";
import { LocationPage, locationMetadata } from "@/components/locations/LocationPage";
import { TOMALES_BAY_PAGE } from "@/src/data/location-pages";

export const metadata: Metadata = locationMetadata(TOMALES_BAY_PAGE);

export default function TomalesBayPage() {
  return <LocationPage page={TOMALES_BAY_PAGE} />;
}
