
import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Calendar.css";

export default class Calendar extends PureComponent {
  render() {
    return (
      <div className="calendar_container">
        <div className="container_description">
          Do you wish you had a better plan for the day, the week, the month and even for this year?
          Are you tired of trying to meal plan all in your brain?
          Instead of worrying about what to cook every meal, let's plan what to eat in advance.
          Use the calendar below to add what you'll be eating at each meal:
        </div>
      </div>
    );
  }
}
