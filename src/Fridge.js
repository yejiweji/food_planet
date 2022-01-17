import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Fridge.css";

export default class Fridge extends PureComponent {
  render() {
    return (
      <div className="fridge_container">
        <div className="container_description">
          Do you ever run out of ideas on what to cook? Tired of the same old routine?
          Instead of searching based on the dish, let's search based on what you have in the fridge.
          Type the ingredients you wish to use below, <b>separated by comma</b>s:
        </div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type your ingredients"
            aria-label="Type your ingredients"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="info"
            id="button-addon2"
            // onClick={!isLoading ? handleClick : null}
          >
            {/* {isLoading ? 'Loading…' : 'Go find'} */}
            Go find
          </Button>
        </InputGroup>
      </div>
    );
  }
}
