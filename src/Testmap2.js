import React, { useRef, useState, useEffect } from 'react';
import {
  Map as LeafletMap, Marker
} from 'react-leaflet';
import { CRS } from "leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import icon from './marker-icon-custom-2x.png';
import iconShadow from './marker-shadow-none.png';
// import MarkerPopup from "./MarkerPopup.js"
// import skilltexts from "./skilltexts.json";

const MapLeaflet = () => {
  const mapRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [brainLocations] = useState([
    [-55, 50],
    [-46, 30],
    [-64, 71],
    [-39, 60],
    [-50, 80]
  ])

  let customMarker = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });


  useEffect(() => {

    const w = 225
    const h = 225
    const url = "./brain.jpg"

    L.Marker.prototype.options.icon = customMarker;

    var map = mapRef.current.leafletElement;

    var sw = map.unproject([0, h], 1);
    var ne = map.unproject([w, 0], 1);

    var bounds = [sw, ne]

    const image = L.imageOverlay(
      url,
      bounds
    ).addTo(map);

    map.fitBounds(image.getBounds());

  })

  function centerMapView(e) {
    const { leafletElement } = mapRef.current;

    if (e) {
      console.log(e.latlng)
      leafletElement.setView(e.latlng, 4);
      // const point = leafletElement.project(e.target._latlng);
      // leafletElement.setView(leafletElement.unproject(point), { animate: true });
    }
  }

  return (
    <LeafletMap
      ref={mapRef}
      minZoom={4}
      maxZoom={4}
      // onPopupopen={centerMapView.bind(this)}
      zoom={4}
      crs={CRS.Simple}
      bounceAtZoomLimits={true}
      maxBoundsViscosity={0.5}
      animate="true"
      boundsOptions={{ padding: [50, 50] }}
    // style={{ height: "80vh" }}
    >
      {brainLocations.map((position, i) => (
        <Marker
          position={position}
          key={i}
          className={i}
          icon={customMarker}
          onClick={centerMapView}
        >
          {/* <MarkerPopup key={i} position={position} skill={skilltexts[i].skill} notes={skilltexts[i].notes}
          /> */}
        </Marker>
      ))}
    </LeafletMap>
  );
};

export default MapLeaflet;
