import React, { PureComponent } from "react";
import GoogleMapReact from 'google-map-react';

const MarkerLabel = ({ text }) => <div>{text}</div>;

export default class Map extends PureComponent {
  render() {
    const defaultSettings = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
    const { center, zoom } = defaultSettings;

    return (
      <div className="map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <MarkerLabel
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
