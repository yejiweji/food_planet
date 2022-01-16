
import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Grocery.css";

export default class Grocery extends PureComponent {
  render() {
    return (
      <div className="grocery_container">
        <div className="container_description">
          What's missing in your fridge? Which items are you running low? Anything need replenishing?
          Instead of keeping a list in your 🧠, let's plan what to eat in advance.
          Use the calendar below to add what you'll be eating at each meal:
        </div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type your ingredients"
            aria-label="Type your ingredients"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-info"
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
