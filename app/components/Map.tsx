"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountries } from "../lib/getCountries";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeRae1C8xbgDLRCYgcyI9sic1gOWRgYeBEHl5PgxI-Q&s",
  iconSize: [50, 70],
});

export default function Map({ locationValue }: { locationValue: string }) {
  const { getCountrybyValue } = useCountries();
  const latLang = getCountrybyValue(locationValue)?.latLang;
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={latLang ?? [52.505, -0.09]}
      zoom={7}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={latLang ?? [52.505, -0.09]} icon={ICON}></Marker>
    </MapContainer>
  );
}
