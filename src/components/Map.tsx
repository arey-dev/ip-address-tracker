import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { ZoomControl } from "react-leaflet/ZoomControl";

export function Map({ position }) {
  return (
    <MapContainer
      className="absolute top-[18.75rem] sm:top-[17.5rem] z-40 bottom-0 left-0 right-0 outline-none"
      center={position}
      zoom={14}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
