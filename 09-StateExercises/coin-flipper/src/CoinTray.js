import React, { Component } from "react";
import Coin from './Coin.js';

let HEADS = 'https://tinyurl.com/react-coin-heads-jpg';
let TAILS = 'https://www.usmint.gov/wordpress/wp-content/uploads/2023/03/2023-kennedy-half-dollar-proof-reverse-768x768.jpg';


class CoinTray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            imgSrc: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    incrementHeads(curState) {
        return { heads: curState.heads + 1 }
    }

    incrementTails(curState) {
        return { tails: curState.tails + 1 }
    }

    flip() {
        let zeroOrOne = Math.round(Math.random())
        if (zeroOrOne) {
            this.setState({ imgSrc: HEADS });
            this.setState(this.incrementHeads);
        } else {
            this.setState({ imgSrc: TAILS });
            this.setState(this.incrementTails);
        }
    }

    handleClick(e) {
        this.flip();
    }

    render() {
        return (
            <div className="CoinTray">
                <h1>Let's flip a coin!</h1>
                <button onClick={this.handleClick}>Flip Me!</button>
                <Coin image={this.state.imgSrc || HEADS} />
                <p>Out of {this.state.heads + this.state.tails} flips, {this.state.heads} have been heads, and {this.state.tails} have been tails.</p>
            </div>
        )
    }
}

export default CoinTray;