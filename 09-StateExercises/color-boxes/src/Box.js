import React, { Component } from 'react';
import './Box.css';
import { choice } from './helpers'
class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor;
        // wake up hunny, new loop just dropped. Well, new for me. This ensures we don't randomly pick the same color.
        do {
            newColor = choice(this.props.allColors);
        } while (newColor === this.state.color)
        this.setState({ color: newColor });
    }
    handleClick() {
        this.pickColor()
    }
    render() {
        return (
            <div
                className='Box'
                style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>

            </div>
        )
    }
}

export default Box;