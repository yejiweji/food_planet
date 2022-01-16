import React, { PureComponent } from "react";
import './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Container from "./Container";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "What's in your fridge? ¯\_(ツ)_/¯",
    };
  }

  handleNavChange = event => {
    this.setState({ title: event });
  };


  render() {
    const { title } = this.state;
  
    return (
      <div className="app">
        <Header />
        <div className="wrapper">
          <NavBar navChange={this.handleNavChange} />
          <Container title={title} />
        </div>
      </div>
    );
  }
}
