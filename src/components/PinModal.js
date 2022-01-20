import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import "./PinModal.css";

export default class PinModal extends PureComponent {
  static propTypes = {
    closeModal: PropTypes.func,
    details: PropTypes.object,
  }

  render() {
    const { closeModal, details } = this.props;
    const {
      formatted_address,
      icon,
      name,
      opening_hours,
      rating,
    } = details;

    return (
      <div className="pin_modal">
        <Button variant="link" onClick={closeModal}>&#x2718;</Button>
        <img src={icon} alt="place-icon" />
        <div className="place_name">{name}</div>
        <div className="place_address">{formatted_address}</div>
        <div className="place_rating">
          Rating: {"❤️".repeat(rating)} ({rating})
        </div>
        <div className="place_hours">
          {opening_hours.open_now ?
            <span className="open_now">✅ Open now</span>
            : <span className="closed_now">❌ Closed now</span>
          }
        </div>
      </div>
    );
  }
}
