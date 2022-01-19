import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import "./MapSearchBar.css";

const google = window.google;

export default class MapSearchBar extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.MapSearchBar.getPlaces());
    }
  }

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.MapSearchBar = new google.maps.places.SearchBox(input);
    this.MapSearchBar.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.MapSearchBar);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className="map_search_bar">
        <Form.Control ref="input" placeholder={placeholder} type="text" />
      </div>
    );
  }
}
