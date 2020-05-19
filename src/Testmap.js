import React, { useRef, useEffect } from 'react';
import {
  Map as LeafletMap, Marker, Popup, Tooltip
} from 'react-leaflet';
import { CRS } from "leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import icon from './marker-icon-custom-2x.png';
import iconShadow from './marker-shadow-none.png';

export default () => {
  const mapRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [brainLocations] = userState([
    [-55, 50, "Fullstack Developer"],
    [-46, 35, "IT Specialist"],
    [-39, 60, "Data/Base Engineer"],
    [-26, 52, "Other Interests"],
    [-50, 70, "Contact Me"]
  ])

  useEffect(() => {
    const w = 225
    const h = 225
    const url = "./brain.jpg"

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    var map = mapRef.current.leafletElement;

    var sw = map.unproject([0, h], 1);
    var ne = map.unproject([w, 0], 1);

    var bounds = [sw, ne]

    const image = L.imageOverlay(
      url,
      bounds
    ).addTo(map);

    map.fitBounds(image.getBounds());
  }, []);

  return (
    <LeafletMap
      ref={mapRef}
      minZoom={3}
      maxZoom={10}
      zoom={6}
      crs={CRS.Simple}
      maxBoundsViscosity={1.0}
      boundsOptions={{ padding: [50, 50] }}
    // style={{ height: "80vh" }}
    >
      <Marker position={[-55, 50]}>
        <Popup>
          Fullstack Developer
        </Popup>
        <Tooltip>Fullstack Develper</Tooltip>
      </Marker>
      <Marker position={[-46, 35]}>
        <Popup>
          IT Support Specialist
          </Popup>
        <Tooltip>IT Support Specialist</Tooltip>

      </Marker>
      <Marker position={[-39, 60]}>
        <Popup>
          Data/base Engineer
          </Popup>
        <Tooltip>Data/base Engineer</Tooltip>
      </Marker>
      <Marker position={[-26, 52]}>
        <Popup>
          Other Interests
          </Popup>
        <Tooltip>Other Interests</Tooltip>
      </Marker>
      <Marker position={[-50, 70]}>
        <Popup>
          Contact Me
          </Popup>
        <Tooltip>Contact Me</Tooltip>
      </Marker>
    </LeafletMap>
  );
};

