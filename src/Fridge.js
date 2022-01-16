import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Fridge.css";

export default class Fridge extends PureComponent {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="info" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    );
  }
}
