import React, { Component } from "react";

class Coin extends Component {
    static defaultProps = {
        image: 'https://tinyurl.com/react-coin-heads-jpg',
    }
    render() {
        return (
            <div>
                <img src={this.props.image} alt='coin face' />
            </div>
        )
    }
}

export default Coin;