import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    // static defaultProps = {
    //     height: '150px',
    //     width: '100px',
    //     backgroundColor: 'red'
    // }

    render() {
        const BoxStyle = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.backgroundColor
        }
        return (
            <div className='Box' style={BoxStyle}></div>
        )
    }
}

export default Box;