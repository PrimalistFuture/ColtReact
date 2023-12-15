import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let alt = this.props.image.slice(-6, -4)
        return (
            <div>
                <img src={this.props.image} alt={alt} />
            </div>
        )
    }
}

export default Card;