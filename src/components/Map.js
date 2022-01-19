import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapSearchBar from "./MapSearchBar";
import PinModal from "./PinModal";
import "./Map.css";

export default class Map extends PureComponent {
  static propTypes = {
    zoom: PropTypes.number,
    currentCoords: PropTypes.object,
    resultLocations: PropTypes.array,
    showPinDetails: PropTypes.bool,
    pinDetails: PropTypes.object,
    updateParentState: PropTypes.func,
  };

  componentDidMount() {
    const { updateParentState } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          updateParentState(prevState => ({
            currentCoords: {
              ...prevState.currentCoords,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }))
        }
      );
    }
  }

  updateLatLng = e => {
    const { updateParentState } = this.props;

    if (e.length > 0) {
      updateParentState({
        resultLocations: e,
        currentCoords: {
          lat: e[0].geometry.location.lat(),
          lng: e[0].geometry.location.lng(),
        },
        zoom: 12,
      });
    }
  }

  closePinModal = () => {
    const { updateParentState } = this.props;
    updateParentState({ showPinDetails: false });
  }

  render() {
    const { zoom, currentCoords, resultLocations, showPinDetails, pinDetails, updateParentState } = this.props;

    const pins = resultLocations.map(loc => {
      return(
        <button
          key={loc.place_id}
          lat={loc.geometry.location.lat()}
          lng={loc.geometry.location.lng()}
          onClick={() => updateParentState({
            pinDetails: loc,
            showPinDetails: true,
          })}
        >
          &#128204;
        </button>
      )
    });

    return (
      <div className="grocery_map" style={{ height: "calc(100vh - 10vh - 30vh - 40px)", width: "50%" }}>
        <MapSearchBar
          placeholder={"Search keywords like 'supermarket' or 'korean grocery store'"}
          onPlacesChanged={this.updateLatLng}
        />
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            language: "en",
            region: "CA",
            libraries: "places",
          }}
          center={currentCoords}
          zoom={zoom}
        >
          {resultLocations && pins}
        </GoogleMapReact>
        {showPinDetails && <PinModal details={pinDetails} closeModal={this.closePinModal} />}
      </div>
    );
  }
}
