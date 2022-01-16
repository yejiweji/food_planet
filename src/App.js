import React, { PureComponent } from "react";
import Container from "./Container";
import Header from "./Header";
import NavBar from "./NavBar";
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "What's in your fridge?",
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
