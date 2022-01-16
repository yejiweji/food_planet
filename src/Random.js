
import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Random.css";

export default class Random extends PureComponent {
  render() {
    return (
      <div className="random_container">
        <div className="container_description">
          Do you ever run out of ideas on what to cook? Tired of the same old routine?
          Instead of searching based on the dish, let's search based on what you have in the fridge.
          Type the ingredients you wish to use below, separated by commas:
        </div>
        <Button
          variant="info"
          id="button-addon2"
          size="lg"
          // onClick={!isLoading ? handleClick : null}
        >
          {/* {isLoading ? 'Loading…' : 'Get inspired'} */}
          ✨ Get inspired ✨
        </Button>
      </div>
    );
  }
}
