import React, { Component } from "react";
import Die from './Die';
import "./RollDice.css";

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRolling: false,
            number1: 'one',
            number2: 'one',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ isRolling: true })
        let num1 = this.roll();
        let word1 = this.translate(num1);
        let num2 = this.roll();
        let word2 = this.translate(num2);
        this.setState({ number1: word1, number2: word2 })
        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1000);
    }
    roll() {
        let num = Math.floor(Math.random() * 6) + 1;
        return num;
    }
    translate(num) {
        let numToWords = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six'
        }
        return numToWords[num];
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die num={this.state.number1} rolling={this.state.isRolling} />
                    <Die num={this.state.number2} rolling={this.state.isRolling} />
                </div>
                <button
                    onClick={this.handleClick}
                    disabled={this.state.isRolling}>
                    {this.state.isRolling
                        ? 'Rolling...'
                        : 'Roll Dice'
                    }
                </button>

            </div>
        )
    }
}

export default RollDice;