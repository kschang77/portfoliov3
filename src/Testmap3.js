import React, { Component, createRef, useState } from 'react';
import {
  Map, Marker
} from 'react-leaflet';
import L, { CRS } from "leaflet";
import 'leaflet/dist/leaflet.css';
import icon from './marker-icon-custom-2x.png';
import iconShadow from './marker-shadow-none.png';
// import { render } from '@testing-library/react';
// import MarkerPopup from "./MarkerPopup.js"
// import skilltexts from "./skilltexts.json";


let customMarker = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});


let brainLocations = ([
  [-55, 50, 1],
  [-46, 30, 2],
  [-64, 71, 3],
  [-39, 60, 4],
  [-50, 80, 5]
])




class MapLeaflet extends Component {
  constructor(props) {
    super(props);

    this.mapRef = createRef()

    // const [curPos, setcurPos] = useState(0)
    this.centerMapView = this.centerMapView.bind(this)
    this.centerMapView2 = this.centerMapView2.bind(this)

  }



  componentDidMount() {

    // console.log("curPos=", this.state.curPos)
    var map = this.mapRef.current.leafletElement;
    console.log(this.mapRef)

    const w = 225
    const h = 225
    const url = "./brain.jpg"

    L.Marker.prototype.options.icon = customMarker;
    var sw = map.unproject([0, h], 1);
    var ne = map.unproject([w, 0], 1);

    var bounds = [sw, ne]

    const image = L.imageOverlay(
      url,
      bounds
    ).addTo(map);

    map.fitBounds(image.getBounds());

  }

  centerMapView(e) {
    // console.log(this)
    let { leafletElement } = this.mapRef.current;
    if (e) {
      // console.log(e.latlng.alt)
      leafletElement.setView(e.latlng, 4);
      this.props.handleClick2(e.latlng.alt)
    }
  }

  centerMapView2(id) {
    let { leafletElement } = this.mapRef.current;
    var curPos = brainLocations[id]
    // console.log(curPos)
    leafletElement.setView(curPos, 4);
  }

  render() {
    return (
      <Map
        ref={this.mapRef}
        minZoom={4}
        maxZoom={4}
        // onPopupopen={centerMapView.bind(this)}
        zoom={4}
        crs={CRS.Simple}
        zoomControl={false}
        bounceAtZoomLimits={true}
        maxBoundsViscosity={0.5}
        animate={true}
        boundsOptions={{ padding: [50, 50] }}
        style={{ height: "80vh" }}
      >
        {brainLocations.map((position, i) => (
          <Marker
            // ref={this.mapRef}
            position={position}
            key={i}
            className={i}
            icon={customMarker}
            onClick={this.centerMapView}
          >
          </Marker>
        ))}
      </Map>
    );
  }
}
export default MapLeaflet;
