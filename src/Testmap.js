import React, { useRef, useEffect } from 'react';
import {
  Map
} from 'react-leaflet';
import { CRS } from "leaflet";
import L from 'leaflet'

export default () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const w = 225
    const h = 225
    const url = "./brain.jpg"

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
    <>
      <Map
        ref={mapRef}
        minZoom={3}
        maxZoom={10}
        zoom={6}
        crs={CRS.Simple}
        maxBoundsViscosity={1.0}
        boundsOptions={{ padding: [50, 50] }}
        style={{ height: "100vh" }}
      />
    </>
  );
};

