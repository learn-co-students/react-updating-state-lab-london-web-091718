// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  };

  clickHandler = () => {
    const timesClicked = this.state.timesClicked + 1;
    this.setState({ timesClicked })
  };

  render() {
    return <button onClick={this.clickHandler}>{this.state.timesClicked}</button>;
  }
}
