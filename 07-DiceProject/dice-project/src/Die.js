import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
    render() {
        // const dieImage = `Die fas fa-dice-${this.props.num}`;
        return (
            <i
                className={`Die fas fa-dice-${this.props.num} 
            ${this.props.rolling && 'shaking'}`
                }>

            </i>
        )
    }
}

export default Die;