import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Checklist.css";

export default class Checklist extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    items: PropTypes.array,
    completeItem: PropTypes.func,
    removeItem: PropTypes.func,
    handleSubmit: PropTypes.func,
    updateValue: PropTypes.func,
  };

  render() {
    const {
      value,
      items,
      completeItem,
      removeItem,
      handleSubmit,
      updateValue,
    } = this.props;

    const listItems = items.map((item, index) => (
      <div
        key={index}
        className="checklist_item"
        style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
      >
        {item.text}
        <div className="checklist_actions">
          <Button variant="info" size="sm" onClick={() => completeItem(index)}>&#10004;</Button>
          <Button variant="danger" size="sm" onClick={() => removeItem(index)}>x</Button>
        </div>
      </div>
    ));

    return (
      <div className="grocery_checklist">
        <div className="checklist_title">Grocery List</div>
        <div className="checklist_items">{listItems}</div>
        <Form.Control
          placeholder="Type an item"
          aria-label="Type an item"
          aria-describedby="grocery-list-input-box"
          type="text"
          className="input"
          value={value}
          onChange={e => updateValue(e)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        />
      </div>
    );
  }
}
