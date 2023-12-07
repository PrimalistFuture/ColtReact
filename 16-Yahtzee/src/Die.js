import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.translate = this.translate.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  translate(num) {
    let numToWord = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six' }

    return numToWord[num];
  }

  render() {
    let iSrc = `fas fa-dice-${this.translate(this.props.val)} fa-5x`
    if (this.props.locked) iSrc += ' Die-locked'
    return (
      <i
        onClick={this.handleClick}
        className={iSrc}
      >
      </i>

    );
  }
}

export default Die;
