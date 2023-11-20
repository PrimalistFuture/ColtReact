import React, { Component } from "react";

// Initializing State

class Game extends Component {
    constructor(props) {
        // Below is making sure we call the Component class constructor with any props our Game might have been given
        super(props);
        this.state = {
            // state goes here:
            player: 'Whiskey',
            score: 0,
            num: 0,
            clicked: false,
        }
        this.makeTimer();
        //  *************Need to set the context of handleClick to 'this'.
        this.handleClick = this.handleClick.bind(this);
    };
    makeTimer() {
        setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum);
            // Setting State
            this.setState({ num: rand })
        }, 1000);
    }
    handleClick(e) {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>Battleship</h1>
                <p>Current Player: {this.state.player}</p>
                <p>Score: {this.state.score}</p>
                <p>Random Number: {this.state.num}</p>
                {/* onClick event defined in-line */}
                <button onClick={function () { alert('Clicked!') }}>Click me!</button>
                {/* More normal handleClick pattern */}
                <h3>{this.state.clicked ? 'Clicked!' : 'Not Clicked'}</h3>
                <button onClick={this.handleClick}>Click Me to see state change!</button>
            </div>
        )
    }
}

export default Game;



